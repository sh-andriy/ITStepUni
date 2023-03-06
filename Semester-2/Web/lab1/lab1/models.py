from django.db import models


class Session(models.Model):
    title = models.CharField(max_length=255)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    theater = models.ForeignKey('Theater', on_delete=models.CASCADE)


class Theater(models.Model):
    name = models.CharField(max_length=255)
    address = models.CharField(max_length=255)


class User(models.Model):
    username = models.CharField(max_length=255)
    email = models.EmailField(max_length=255)
    password = models.CharField(max_length=255)
    sessions_booked = models.ManyToManyField(Session)

    