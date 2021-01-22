from django.contrib import admin
from .models import project

admin.site.register(project.Project) # 기본 ModelAdmin으로 등록