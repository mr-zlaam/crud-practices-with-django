from django.db import models


# Create your models here.
class Todo_App_Model(models.Model):
    title = models.CharField(max_length=150)
    description = models.CharField(max_length=1000)
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
