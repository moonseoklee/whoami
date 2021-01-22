from django.conf import settings
from django.db import models
from django.utils import timezone


class Project(models.Model): 
    id = models.IntegerField(primary_key=True)
    title = models.CharField(max_length=30)
    stack = models.CharField(max_length=200)
    markdown_content = models.TextField()
    created_date = models.DateTimeField(default=timezone.now)
    
    def set_stack(self, x):
        self.stack = json.dumps(x)

    def get_stack(self):
        return json.loads(self.stack)
    
    def __str__(self):
        return self.title


from rest_framework import serializers 


class ProjectSerializer(serializers.ModelSerializer): 
    class Meta:
         model = Project
         fields = ('id','title','stack','markdown_content','created_date')

