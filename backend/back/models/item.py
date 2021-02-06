from django.conf import settings
from django.db import models
from django.utils import timezone


class Item(models.Model): 
    id = models.IntegerField(primary_key=True)
    category = models.CharField(max_length=30)
    title = models.CharField(max_length=30)
    stack = models.CharField(max_length=200)
    markdown_content = models.TextField()
    created_date = models.DateTimeField(default=timezone.now)
    completed = models.BooleanField(default=False)
    git = models.CharField(max_length=200,default=None,null=True,blank=True)
    image =models.ImageField(default=None,upload_to="",null=True)
    
    def set_stack(self, x):
        self.stack = json.dumps(x)

    def get_stack(self):
        return json.loads(self.stack)
    
    def __str__(self):
        return self.title

    class Meta:
        db_table = "item"

from rest_framework import serializers 


class ItemSerializer(serializers.ModelSerializer): 
    class Meta:
         model = Item
         fields = ('id','category','title','stack','markdown_content','created_date','git','image')

