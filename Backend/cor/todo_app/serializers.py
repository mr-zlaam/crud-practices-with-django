from rest_framework import serializers
from .models import *


class Todo_serializers(serializers.ModelSerializer):
    class Meta:
        model = Todo_App_Model
        fields = "__all__"
