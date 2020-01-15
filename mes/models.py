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

    