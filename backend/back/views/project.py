from ..models import project
from rest_framework.viewsets import ReadOnlyModelViewSet, ModelViewSet
from rest_framework import generics
from ..models import Project,ProjectSerializer

class ProjectViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

