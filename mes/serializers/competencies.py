from rest_framework import serializers
from ..models import *


class CompetencyResultsSerializer(serializers.ModelSerializer):
    '''API serializers for Competency Ratings'''

    results = serializers.SerializerMethodField()

    def get_results(self,result):
        staff_results = {
            'organization':result.organization.score,
            'innovation':result.innovation.score,
            'interpersonal_communication':result.interpersonal_communication.score,
            'critical_thinking':result.critical_thinking.score,
            'relationships':result.relationships.score,
        }
        return staff_results


    class Meta:
        model = CompetencyResults
        fields = ['pk','type','staff_id','last_modified','date_created','results']


class OrganizationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Organization
        fields = ['planning','execution','prioritization','score']

class InnovationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Innovation
        fields = ['vision_setting','thinking','adaptability','score']

class InterpersonalCommunicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = InterpersonalCommunication
        fields = ['investment_building','effective_communication','delivery','score']

class CriticalThinkingSerializer(serializers.ModelSerializer):
    class Meta:
        model = CriticalThinking
        fields = ['data_compilation','data_analysis','problem_solving','continual_improvement','score']

class RelationshipsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Relationships
        fields = ['team_work','stakeholder_management','conflict_management','score']

class PostResultsSerializer(serializers.ModelSerializer):
    ''' API serializer for posting Competency Ratings '''
    class Meta:
        model = CompetencyResults
        fields = ['type','staff','organization','innovation','interpersonal_communication','critical_thinking','relationships']
