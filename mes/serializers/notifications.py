from rest_framework import serializers
from ..models import *
from django.core.exceptions import ObjectDoesNotExist

class NotificationsSerializer(serializers.ModelSerializer):
    sender = serializers.SerializerMethodField()

    def get_sender(self,notification):
        sender_details = {
            'full_name':notification.sender.user.first_name + ' ' + notification.sender.user.first_name,
        }
        return sender_details

    class Meta:
        model = Notification
        fields = ['pk','sender','deadline','status','date_created']
