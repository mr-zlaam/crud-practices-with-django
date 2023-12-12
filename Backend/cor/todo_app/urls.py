from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from .views import *

router = routers.DefaultRouter()
router.register("todo", Todo_ViewSet, basename="todo")

urlpatterns = []
urlpatterns += router.urls
