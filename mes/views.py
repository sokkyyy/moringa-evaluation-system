from rest_framework.response import Response
from rest_framework.decorators import api_view,permission_classes
from rest_framework import status,permissions
from .models import *
from django.contrib.auth.models import User

from .serializers.departments import DepartmentSerializer
from django.http import HttpResponseRedirect
from rest_framework.views import APIView
from .serializers.competencies import *
from .serializers.moringa_staff import *
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
        serializer = UserSerializerWithToken(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def departments(request):
    '''API endpoint for Moringa Departments'''

    departments = Department.objects.all()
    serializers = DepartmentSerializer(departments, many=True)
    return Response(serializers.data)

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




class CompetencyResultsPost(APIView):
    ''' API endpoint for Posting Competency Results  '''
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
