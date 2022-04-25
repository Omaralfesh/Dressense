from django.urls import path, include
from rest_framework import routers
from rest_framework_simplejwt import views as jwt_views
from .views import UserCreateView, LogoutView

app_name = 'users'

router = routers.DefaultRouter()
router.register(r'register', UserCreateView)
# router.register(r'logout', LogoutView, basename='logout')

urlpatterns = [
	path('', include(router.urls)),
	path('logout/', LogoutView.as_view(), name='logout'),
	path('login/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('login/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
]