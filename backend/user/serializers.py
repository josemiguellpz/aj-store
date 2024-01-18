from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ['id_user', 'name', 'lastname', 'email', 'password', 'phone', 'genre', 'birthday']
    # fields = '__all__'  # Si quieres incluir todos los campos del modelo

    extra_kwargs = {
      'password': {'write_only': True}  # Indicar que el campo password es de solo escritura
    }
