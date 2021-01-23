from django.contrib import admin
from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .back.views.item import ItemViewSet


#router = DefaultRouter()
#router.register(r'item',ItemViewSet)
#router.register(r'item/(?P<library_id>[0-9]+)', BookViewSet, base_name='books')
urlpatterns = [
    #path('',include(router.urls)),
    #path('item/',ItemViewSet)
    path('item/<str:category>/',ItemViewSet.get),
    path('admin/', admin.site.urls),
]
