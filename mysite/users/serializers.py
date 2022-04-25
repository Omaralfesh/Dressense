from rest_framework import serializers
from users.models import User

class UserRegisterSerializer(serializers.ModelSerializer):
	password = serializers.CharField(write_only=True)

	class Meta:
		model = User
		fields = ['user_name', 'email', 'password']

	def create(self, validated_data):
		user = User.objects.create_user(
			user_name=validated_data['user_name'],
			email=validated_data['email'],
			password=validated_data['password'],
		)
		return user

# class UserRegisterSerializer(serializers.ModelSerializer):
# 	class Meta:
# 		model = User
# 		fields = ['user_name', 'email', 'password']
# 		extra_kwargs = {'password': {'write_only: true'}}
	
# 	def create(self, validated_data):
# 		password = validated_data.pop('password', None)
# 		instance = self.Meta.model(**validated_data)
# 		if password is not None:
# 			instance.set_password(password)
# 		instance.save()
# 		return instance