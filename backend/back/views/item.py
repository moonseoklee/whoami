from rest_framework import generics
from rest_framework.views import APIView
from ..models import Item,ItemSerializer
from django.forms.models import model_to_dict
import json
from django.http import HttpResponse

class ItemViewSet(APIView):    

    def get(request,**kwargs):
        qs = Item.objects.all()
        sc = ItemSerializer

        category = kwargs.get('category')

        qs = qs.filter(category=category)
        sc = sc(qs,many=True)
        sc = (json.dumps(sc.data))
        print(sc)
        return HttpResponse(sc)
