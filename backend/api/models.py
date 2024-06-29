from django.db import models
from django.contrib.auth.models import User

# Created models here.

class CallendarEvent(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100)
    description = models.TextField()
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    location = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE,related_name='events')
    

    def __str__(self):
        return self.title
    
    


class Experience(models.Model):
    event=models.ForeignKey(CallendarEvent, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    points = models.IntegerField()
    description = models.TextField()
    status = models.BooleanField(default=False)
    end_time = models.DateTimeField()
    owner = models.ForeignKey(User, on_delete=models.CASCADE,related_name='affiliations')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


