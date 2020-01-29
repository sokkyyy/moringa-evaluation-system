from rest_framework.response import Response
from rest_framework.decorators import api_view,permission_classes
from rest_framework import status,permissions
from .models import *
from django.contrib.auth.models import User
from django.contrib.auth.hashers import check_password,make_password
from .serializers.departments import DepartmentSerializer, DepartmentNameSerializer
from django.http import HttpResponseRedirect
from rest_framework.views import APIView
from .serializers.competencies import *
from .serializers.moringa_staff import *
from .serializers.notifications import *

from rest_framework_jwt.serializers import JSONWebTokenSerializer
from rest_framework_jwt.views import ObtainJSONWebToken
from rest_framework_jwt.settings import api_settings
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer



class CustomJWTSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        credentials = {
            'username': '',
            'password': attrs.get("password")
        }

        # This is answering the original question, but do whatever you need here.
        # For example in my case I had to check a different model that stores more user info
        # But in the end, you should obtain the username to continue.
        user_obj = User.objects.filter(email=attrs.get("username")).first() or User.objects.filter(username=attrs.get("username")).first()
        if user_obj:
            credentials['username'] = user_obj.username

        return super().validate(credentials)


# Create your views here.
@api_view(['GET'])
def current_user(request):
    """
    Determine the current user by their token, and return their data.
    """
    staff_data = MoringaStaff.objects.get(user=request.user.pk)
    serializer = MoringaStaffSerializer(staff_data)
    return Response(serializer.data)

class UserList(APIView):
    """
    Create a new user. It's called 'UserList' because normally we'd have a get
    method here too, for retrieving a list of all User objects.
    """

    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        user = {
            'first_name':request.data.get('first_name'),
            'last_name':request.data.get('last_name'),
            'username':request.data.get('username'),
            'email':request.data.get('email'),
            'password': 'moringastaff', #DEFAULT PASSWORD
        }
        jg = {
            'grade':request.data.get('grade'),
        }
        rol = {
            'role':request.data.get('role'),

        }
        job_grade_seializer = JobGradeSerializer(data=jg)
        role_serializer =  RoleSerializer(data=rol)
        user_serializer = UserSerializerWithToken(data=user)

        if user_serializer.is_valid() and job_grade_seializer.is_valid() and role_serializer.is_valid():
            user_staff = user_serializer.save()
            user_job_grade = job_grade_seializer.save()
            user_role = role_serializer.save()
            user_department = None
            if request.data.get('department') is not None:
                user_department = Department.objects.get(pk=request.data.get('department'))



            staff_reg = MoringaStaff(user = user_staff, job_grade = user_job_grade, system_role=user_role,department= user_department)
            staff_reg.save()
            return Response(user_serializer.data, status=status.HTTP_201_CREATED)
        return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        '''Delete User'''
        # REFACTOR TO DELETE ALL USER COMPETENCY TESTS LATER!!
        user = User.objects.get(pk=pk)
        staff = MoringaStaff.objects.get(user=user)
        staff.delete()
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET'])
def departments(request):
    '''API endpoint for Moringa Departments'''
    logged_in_staff = MoringaStaff.objects.get(user=request.user)
    department = Department.objects.get(name=logged_in_staff.department.name)
    serializers = DepartmentSerializer(department)
    return Response(serializers.data)

@api_view(['GET'])
def all_departments(request):
    '''API endpoint for Moringa Departments'''
    departments = Department.objects.all()
    serializers = DepartmentSerializer(departments, many=True)
    return Response(serializers.data)

@api_view(['POST'])
def add_departments(request):
    '''API endpoint for POSTING Moringa Departments'''
    manager = User.objects.get(pk=request.data.get('manager'))
    man_staff = MoringaStaff.objects.get(user=manager)

    line_manager = User.objects.get(pk=request.data.get('line_manager'))
    line_staff = MoringaStaff.objects.get(user=line_manager)

    name = request.data.get('department')
    new_department = Department(name=name, manager=manager, line_manager=line_manager)
    line_staff.department = new_department #NOT WORKING!!
    man_staff.department = new_department #NOT WORKING!!
    new_department.save()
    line_staff.save()
    man_staff.save()
    return Response(status=status.HTTP_201_CREATED)


@api_view(['GET'])
def competency_results(request):
    '''API endpoint for staff competency results'''

    results = CompetencyResults.objects.all()
    serializers = CompetencyResultsSerializer(results, many=True)
    return Response(serializers.data)

@api_view(['GET'])
def moringa_staff(request):
    ''' API endpoint for staff information '''

    all_staff = MoringaStaff.objects.all()
    serializers = MoringaStaffSerializer(all_staff, many=True)
    return Response(serializers.data)

@api_view(['PUT'])
def profile_pic(request):
    ''' API endpoint for staff information '''
    staff = MoringaStaff.objects.get(user=request.user)
    staff.profile_pic = request.data.get('image')
    staff.save()
    return Response(status=status.HTTP_201_CREATED)

@api_view(['PUT'])
def change_password(request):
    ''' API endpoint for changing password '''

    confirm = request.data.get('confirm_password')
    previous = request.user.password

    if check_password(confirm, previous):
        user = request.user
        new_password = make_password(request.data.get('new_password'))
        user.password = new_password
        user.save()
        return Response(status=status.HTTP_201_CREATED)
    return Response(status=status.HTTP_400_BAD_REQUEST)

class CompetencyResultsPost(APIView): #FOR SELF ASSESSMENT
    ''' API endpoint for Posting SELF Competency Results  '''
    permission_classes = (permissions.AllowAny,)

    def post(self,request, format=None):
        serializers_organization = OrganizationSerializer(data=request.data.get('organization')) #Organization
        serializers_innovation = InnovationSerializer(data=request.data.get('innovation'))
        serializers_critical_thinking = CriticalThinkingSerializer(data=request.data.get('critical_thinking'))
        serializers_interpersonal_communication = InterpersonalCommunicationSerializer(data=request.data.get('interpersonal_communication'))
        serializers_relationships = RelationshipsSerializer(data=request.data.get('relationships'))



        if serializers_organization.is_valid() and serializers_innovation.is_valid() and serializers_critical_thinking.is_valid() and serializers_interpersonal_communication.is_valid() and serializers_relationships.is_valid():
            org = serializers_organization.save() #Organization Instance
            inn = serializers_innovation.save()# InterpersonalCommunication Instance
            ct = serializers_critical_thinking.save() #CriticalThinking Instance
            ic = serializers_interpersonal_communication.save() #InterpersonalCommunication Instance
            rel = serializers_relationships.save() # Relationships Instance


            staff = MoringaStaff.objects.get(user=request.user)

            # CHANGE THE 'type' to receive from request :'self','man','final'
            competency_results = CompetencyResults(type='self',staff=staff,organization=org,innovation=inn,interpersonal_communication=ic, critical_thinking=ct,relationships=rel)
            competency_results.save()

            return Response(serializers_innovation.data, status=status.HTTP_201_CREATED)
        return Response(serializers_innovation.errors, status=status.HTTP_400_BAD_REQUEST)


class ManagerCompetencyResultsPost(APIView): #FOR MANAGER ASSESSMENT
    ''' API endpoint for Posting MANAGER Competency Results  '''

    permission_classes = (permissions.AllowAny,)

    def post(self,request, format=None):
        serializers_organization = OrganizationSerializer(data=request.data.get('organization')) #Organization
        serializers_innovation = InnovationSerializer(data=request.data.get('innovation'))
        serializers_critical_thinking = CriticalThinkingSerializer(data=request.data.get('critical_thinking'))
        serializers_interpersonal_communication = InterpersonalCommunicationSerializer(data=request.data.get('interpersonal_communication'))
        serializers_relationships = RelationshipsSerializer(data=request.data.get('relationships'))



        if serializers_organization.is_valid() and serializers_innovation.is_valid() and serializers_critical_thinking.is_valid() and serializers_interpersonal_communication.is_valid() and serializers_relationships.is_valid():
            org = serializers_organization.save() #Organization Instance
            inn = serializers_innovation.save()# InterpersonalCommunication Instance
            ct = serializers_critical_thinking.save() #CriticalThinking Instance
            ic = serializers_interpersonal_communication.save() #InterpersonalCommunication Instance
            rel = serializers_relationships.save() # Relationships Instance

            user_assessed = User.objects.get(pk=request.data.get('assessed_user'))
            staff = MoringaStaff.objects.get(user=user_assessed)

            # CHANGE THE 'type' to receive from request :'self','man','final'
            competency_results = CompetencyResults(type='final',staff=staff,organization=org,innovation=inn,interpersonal_communication=ic, critical_thinking=ct,relationships=rel)
            competency_results.save()

            return Response(serializers_innovation.data, status=status.HTTP_201_CREATED)
        return Response(serializers_innovation.errors, status=status.HTTP_400_BAD_REQUEST)



@api_view(['GET'])
def finalResults(request):
    ''' API endpoint for Staff final competency'''

    staff = MoringaStaff.objects.get(user=request.user)
    final_results = CompetencyResults.objects.filter(type='final',staff=staff)
    serializers = CompetencyResultsSerializer(final_results, many=True)
    return Response(serializers.data)


@api_view(['GET'])
def dept_names(request):
    ''' API endpoint for Department Names '''

    dpts = Department.objects.all()
    serializers = DepartmentNameSerializer(dpts, many=True)
    return Response(serializers.data)

@api_view(['POST'])
def schedule_assessment(request):
    '''API endpoint for scheduling assessments'''
    print(request.data)
    receiver = request.data.get('receiver')
    receiver_staff = MoringaStaff.objects.get(pk=receiver)
    sender = MoringaStaff.objects.get(user=request.user)
    deadline = request.data.get('deadline')
    new_notification = Notification(sender=sender, receiver=receiver_staff,deadline=deadline)
    new_notification.save()
    return Response(status=status.HTTP_201_CREATED)

@api_view(['GET'])
def user_notifications(request):
    user = MoringaStaff.objects.get(user=request.user)
    user_notifications = Notification.objects.filter(receiver=user).order_by('-date_created')
    serializers = NotificationsSerializer(user_notifications, many=True)
    return Response(serializers.data)

@api_view(['POST'])
def read_notification(request):
    notification = Notification.objects.get(pk=request.data.get('id'))
    notification.status = 'read'
    notification.save()
    return Response(status=status.HTTP_201_CREATED)
