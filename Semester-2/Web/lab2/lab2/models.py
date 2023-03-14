from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models
import random, string


class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        """
        Creates and saves a User with the given email and password.
        """
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        # generate random api_key
        user.api_key = ''.join(random.choices(string.ascii_uppercase + string.digits, k=64))
        user.save(using=self._db)
        return user


class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=30, default='')
    last_name = models.CharField(max_length=30, default='')
    password = models.CharField(max_length=128)
    api_key = models.CharField(max_length=64)
    last_login = models.DateTimeField(null=True, blank=True)
    is_staff = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'

    class Meta:
        db_table = 'auth_user'


class Link(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    original_link = models.URLField()
    short_link = models.CharField(max_length=15, unique=True)
    expired_at = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'links'
