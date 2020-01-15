from django.db import models
from django.contrib.auth.models import User
from django.db import models

class Role(models.Model):
    '''Model for Staff Role in System'''
    role_choices = [
        ('super_admin', 'Super Admin'),
        ('admin', 'Admin'),
        ('user', 'System User'),
    ]
    role = models.CharField(max_length=20,choices=role_choices)
    def __str__(self):
        return self.role
class JobGrade(models.Model):
    '''Model for Job Grades'''
    moringa_job_grade_choices = [
        ('12','12'), #champion
        ('11','11'), #experts
        ('10','10'),
        ('9','9'), #practitioner
        ('8','8'),
        ('7','7'),
        ('6','6'),
        ('5','5'),#beginner
        ('4','4'),
        ('1','1'),
    ]
    grade = models.CharField(max_length=10, choices=moringa_job_grade_choices,)
    def __str__(self):
        return self.grade
    
class Department(models.Model):
    '''Model for Moringa Departments'''
    department_names_choices = [
        ('system_admin','System Admin'), #ONLY FOR SYSTEM ADMIN
        # ('director', 'Director'),
        ('finance','Finance'),
        ('hr', 'Human Resource'),
        ('people','People'),
        ('classroom','Classroom'),
    ]
    name = models.CharField(max_length=30,choices=department_names_choices)
    manager = models.OneToOneField(User, on_delete=models.CASCADE,related_name='department_manager')
    line_manager = models.OneToOneField(User, on_delete=models.CASCADE)
    def __str__(self):
        return self.name
    
class MoringaStaff(models.Model):
    ''' Model for All Moringa Staff Members '''
    user = models.OneToOneField(User, on_delete=models.CASCADE,primary_key=True)
    job_grade = models.ForeignKey(JobGrade, on_delete=models.CASCADE)
    department = models.ForeignKey(Department,on_delete=models.CASCADE)
    system_role = models.ForeignKey(Role,on_delete=models.CASCADE)

