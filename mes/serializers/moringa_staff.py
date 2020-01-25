from rest_framework import serializers
from ..models import *
from django.contrib.auth.models import User
from rest_framework_jwt.settings import api_settings
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('username','email')

class UserSerializerWithToken(serializers.ModelSerializer):

    token = serializers.SerializerMethodField()
    password = serializers.CharField(write_only=True)

    def get_token(self, obj):
        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

        payload = jwt_payload_handler(obj)
        token = jwt_encode_handler(payload)
        return token


    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

    class Meta:
        model = User
        fields = ('token', 'username','email', 'first_name','last_name','password')

class MoringaStaffSerializer(serializers.ModelSerializer):
    '''API serializer for Moringa Staff Member'''
    user = serializers.SerializerMethodField()
    job_grade = serializers.SerializerMethodField()
    department = serializers.SerializerMethodField()
    system_role = serializers.SerializerMethodField()

    def get_user(self, moringa_staff):
        user = {

            'first_name':moringa_staff.user.first_name,
            'last_name':moringa_staff.user.last_name,
            'email':moringa_staff.user.email,
            'username':moringa_staff.user.username,
        }
        return user

    def get_job_grade(self, moringa_staff):
        return moringa_staff.job_grade.grade

    def get_department(self,moringa_staff):
        dpt = {
            'name':moringa_staff.department.name,
            'manager':moringa_staff.department.manager.username,
            'line_manager':moringa_staff.department.line_manager.username,
        }
        return dpt

    def get_system_role(self,moringa_staff):
        return moringa_staff.system_role.role

    class Meta:
        model = MoringaStaff
        fields = ['pk','user','job_grade','department','system_role']

class JobGradeSerializer(serializers.ModelSerializer):
    '''API serializer for POSTING job grades for users on registration '''

    class Meta:
        model = JobGrade
        fields = ['grade']

class RoleSerializer(serializers.ModelSerializer):
    '''API serializer for POSTING user roles on registration '''

    class Meta:
        model = Role
        fields = ['role']
