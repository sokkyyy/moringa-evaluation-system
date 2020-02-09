from rest_framework import serializers
from ..models import *
from django.core.exceptions import ObjectDoesNotExist

class DepartmentSerializer(serializers.ModelSerializer):

    manager = serializers.SerializerMethodField()
    line_manager = serializers.SerializerMethodField()
    staff = serializers.SerializerMethodField()

    def get_manager(self, department):
        try:
            staff_details = MoringaStaff.objects.get(user=department.manager)
            manager_details = {
                'id':department.manager.pk,
                'username':department.manager.username,
                'full_name':department.manager.first_name +' '+ department.manager.last_name,
                'email':department.manager.email,
                'job_grade':staff_details.job_grade.grade,
                'role': staff_details.system_role.role,
            }
        except ObjectDoesNotExist:
            manager_details = {
                'id':'',
                'username':'',
                'full_name':'',
                'email':'',
                'job_grade':'',
                'role':'',
            }
        return manager_details

    def get_line_manager(self,department):
        try:
            staff_details = MoringaStaff.objects.get(user=department.line_manager)
            line_manager_details = {
                'id':department.line_manager.pk,
                'username':department.line_manager.username,
                'full_name':department.line_manager.first_name +' '+ department.line_manager.last_name,
                'email':department.line_manager.email,
                'job_grade':staff_details.job_grade.grade,
                'role':staff_details.system_role.role,
            }
        except ObjectDoesNotExist:
            line_manager_details = {
                'id':'',
                'username':'',
                'full_name':'',
                'email':'',
                'job_grade':'',
                'role':'',
            }
        return line_manager_details


    def get_staff(self,department):
        department_staff = []
        try:
            all_staff = MoringaStaff.objects.filter(department=department)
            for staff in all_staff:
                if department.manager is not None and department.line_manager is not None:
                    if staff.user.pk is not department.manager.pk and staff.user.pk is not department.line_manager.pk:
                        # REFACTOR TO REMOVE MANAGER AND LINE MANAGER FROM ALL STAFF
                        staff_details = {
                            'id': staff.user.pk,
                            'username': staff.user.username,
                            'full_name':staff.user.first_name + ' ' + staff.user.last_name,
                            'email':staff.user.email,
                            'job_grade': staff.job_grade.grade,
                            'role': staff.system_role.role,
                        }
                        department_staff.append(staff_details)
                else:
                    staff_details = {
                        'id': staff.user.pk,
                        'username': staff.user.username,
                        'full_name':staff.user.first_name + '' + staff.user.last_name,
                        'email':staff.user.email,
                        'job_grade': staff.job_grade.grade,
                        'role': staff.system_role.role,
                    }
                    department_staff.append(staff_details)
        except ObjectDoesNotExist:
            return department_staff

        return department_staff



    class Meta:
        model = Department
        fields = ['pk','name','manager','line_manager','staff']

class DepartmentNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = ['pk','name']
