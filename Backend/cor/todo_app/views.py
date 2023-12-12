from django.shortcuts import render

from rest_framework import viewsets
from .models import *
from .serializers import Todo_serializers


class Todo_ViewSet(viewsets.ModelViewSet):
    queryset = Todo_App_Model.objects.all()
    serializer_class = Todo_serializers
