from django.db import models

"""
  Class: 
    Model representing a user in the system.

  Attributes:
    id_user (AutoField): Unique ID of the user.
    name (CharField): First name of the user.
    lastname (CharField): Last name of the user.
    email (EmailField): Unique email address of the user.
    password (CharField): User's password (recommended to store as a hash).
    phone (CharField): User's phone number.
    genre (CharField): User's gender.
    birthday (DateField): User's date of birth.
"""

class User(models.Model):
  id_user=models.AutoField(primary_key=True)
  name=models.CharField(max_length=30)
  lastname=models.CharField(max_length=30)
  email=models.EmailField(max_length=254, unique=True)
  password=models.CharField(max_length=128)
  phone=models.CharField(max_length=10)
  genre=models.CharField(max_length=6)
  birthday=models.DateField()
