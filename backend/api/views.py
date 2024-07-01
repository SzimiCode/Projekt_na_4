from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import CallendarEvent, Experience
from .serializers import CallendarEventSerializer, ExperienceSerializer

# Create your views here.
class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()   
    serializer_class = UserSerializer
    permission_classes = [AllowAny]



class CallendarEventViewCreate(generics.ListCreateAPIView):
    queryset = CallendarEvent.objects.all()
    serializer_class = CallendarEventSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    def get_queryset(self):
        return self.queryset.filter(owner=self.request.user)
        


class CallendarEventViewDelate(generics.DestroyAPIView):
    serializer_class = CallendarEventSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return self.queryset.filter(owner=self.request.user)
    

class ExperienceViewCreate(generics.ListCreateAPIView):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
    
    def get_queryset(self):
        return self.queryset.filter(owner=self.request.user)
    


    



