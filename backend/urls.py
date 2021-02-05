from django.contrib import admin
from django.urls import path,include,re_path
from rest_framework.routers import DefaultRouter
from .back.views.item import ItemViewSet

from .views import index

#router = DefaultRouter()
#router.register(r'item',ItemViewSet)
#router.register(r'item/(?P<library_id>[0-9]+)', BookViewSet, base_name='books')
react_views_regex = r'\/|\b'.join([

    # List all your react routes here
    'Select',
    'skills',
    'projects',
    'experience'

]) + r'\/'

urlpatterns = [
    #path('',include(router.urls)),
    #path('item/',ItemViewSet)
    path('item/<str:category>/',ItemViewSet.get),
    re_path('admin/', admin.site.urls),
    re_path('',index),    
    re_path(react_views_regex,index),
    
]
