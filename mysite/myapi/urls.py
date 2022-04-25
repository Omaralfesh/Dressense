from email.mime import base
from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'tags', views.TagViewSet, basename='tag-list')
router.register(r'subtags', views.SubtagViewSet, basename='subtag')
router.register(r'items', views.ItemViewSet, basename='item')
router.register(r'outfits', views.OutfitViewSet, basename='outfit')
router.register(r'weeklyPlan', views.WeeklyPlanViewSet)

urlpatterns = [
    path('', include(router.urls)),
]