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











class  notifications(models.Model):
    name = models.CharField(max_length = 30)
    email = models.EmailField()
    
    
    

    
    