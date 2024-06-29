from django.contrib.auth.models import User
from rest_framework import serializers
from .models import CallendarEvent, Experience

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "email","password"]
        extra_kwargs = {"password": {"write_only": True, "required": True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
    
class CallendarEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = CallendarEvent
        fields = "title", "description", "start_time", "end_time", "location", "owner", "created_at", "updated_at"
        extra_kwargs = {"owner": {"read_only": True}, "created_at": {"read_only": True}, "updated_at": {"read_only": True}}
    
    def create(self, validated_data):
        event = CallendarEvent.objects.create(**validated_data)
        return event

class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = "event", "name", "description", "status", "end_time", "owner", "created_at", "updated_at"
        extra_kwargs = {"owner": {"read_only": True}, "created_at": {"read_only": True}, "updated_at": {"read_only": True}}
    
    def create(self, validated_data):
        experience = Experience.objects.create(**validated_data)
        return experience

                        