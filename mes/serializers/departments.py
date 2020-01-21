from rest_framework import serializers
from ..models import *


class DepartmentSerializer(serializers.ModelSerializer):

    manager = serializers.SerializerMethodField()
    line_manager = serializers.SerializerMethodField()
    staff = serializers.SerializerMethodField()

    def get_manager(self, department):
        staff_details = MoringaStaff.objects.get(user=department.manager)
        manager_details = {
            'id':department.manager.pk,
            'username':department.manager.username,
            'email':department.manager.email,
            'job_grade':staff_details.job_grade.grade,
            'role': staff_details.system_role.role,
        }
        return manager_details

    def get_line_manager(self,department):
        staff_details = MoringaStaff.objects.get(user=department.line_manager)
        line_manager_details = {
            'id':department.line_manager.pk,
            'username':department.line_manager.username,
            'email':department.line_manager.email,
            'job_grade':staff_details.job_grade.grade,
            'role':staff_details.system_role.role,
        }
        return line_manager_details

    def get_staff(self,department):
        all_staff = MoringaStaff.objects.filter(department=department)
        department_staff = []
        for staff in all_staff:
            if staff.user.pk is not department.manager.pk and staff.user.pk is not department.line_manager.pk:
                # REFACTOR TO REMOVE MANAGER AND LINE MANAGER FROM ALL STAFF
                staff_details = {
                    'id': staff.user.pk,
                    'username': staff.user.username,
                    'email':staff.user.email,
                    'job_grade': staff.job_grade.grade,
                    'role': staff.system_role.role,
                }

                department_staff.append(staff_details)

        return department_staff



    class Meta:
        model = Department
        fields = ['pk','name','manager','line_manager','staff']
