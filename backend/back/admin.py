from django.contrib import admin
from .models import item

admin.site.register(item.Item) # 기본 ModelAdmin으로 등록