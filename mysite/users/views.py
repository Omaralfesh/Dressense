from django.shortcuts import render
from rest_framework import status, viewsets, mixins
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken

from .serializers import *

class UserCreateView(viewsets.ModelViewSet):
	queryset = User.objects.all()
	serializer_class = UserRegisterSerializer
	http_method_names = ['post']

class LogoutView(APIView):
	def post(self, request):
		try:
			refresh_token = request.data['refresh_token']
			token = RefreshToken(refresh_token)
			token.blacklist()

			return Response(status=status.HTTP_205_RESET_CONTENT)
		except Exception as e:
			return Response(status=status.HTTP_400_BAD_REQUEST)

# class UserCreateView(APIView):
# 	def post(self, request):
# 		reg_serializer = UserRegisterSerializer(data=request.data)
# 		if reg_serializer.is_valid():
# 			newuser = reg_serializer.save()
# 			if newuser:
# 				return Response(status=status.HTTP_201_CREATED)
# 		return Response(reg_serializer.errors, status=status.HTTP_400_BAD_REQUEST)