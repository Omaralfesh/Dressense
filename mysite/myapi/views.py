from django import views
from django.shortcuts import render
from django.db.models import Q, Prefetch
from django.conf import settings
from rest_framework import viewsets, status, mixins
from rest_framework.response import Response
from rest_framework.permissions import *
from .weekly_plan import create_weekly_plan, update_calendar, generate_outfits

from .serializers import *
from .models import *
from .permissions import *

# class RandomOutfitViewSet(viewsets.ViewSet):
#     def list(self, request, *args, **kw):
#         return Response(randomise())

class TagViewSet(viewsets.ModelViewSet):
    # can only modify objects if you are authenticated and the owner
    permission_classes = [IsOwnerOrReadOnly, IsAuthenticatedOrReadOnly]
    serializer_class = TagDetailSerializer
    # reduce the available endpoints
    http_method_names = ['get', 'post', 'head', 'patch', 'delete']

    # perform_create is called when a new object is created (usually from a POST request)
    # override this method to fill the user field based on the user from the auth token
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    # use different serializers depending on the request made
    # use this to show less information when listing all tags than a specific tag
    def get_serializer_class(self):
        if self.action in ["list"]:
            return TagListSerializer
        return super().get_serializer_class()

    # queryset is filtered to include only global tags if un-authenticated
    # or global tags and the user's tags if authenticated
    def get_queryset(self):
        user = self.request.user

        if user.is_authenticated:
            # filter subtags when we prefetch them
            # then filter the tags when we return them
            # subtags_filtered = Tag.objects.prefetch_related(
            #     Prefetch('subtags', 
            #     queryset=Subtag.objects.filter(Q(is_global=True) | Q(user=user)),
            #     to_attr='filtered_subtags')
            # )
            # return subtags_filtered.filter(Q(is_global=True) | Q(user=user))

            return Tag.objects.filter(Q(is_global=True) | Q(user=user))
        else:
            # subtags_filtered = Tag.objects.prefetch_related(
            #     Prefetch('subtags', 
            #     queryset=Subtag.objects.filter(is_global=True),
            #     to_attr='filtered_subtags')
            # )
            # return subtags_filtered.filter(is_global=True)
            return Tag.objects.filter(is_global=True)
        

class SubtagViewSet(viewsets.ModelViewSet):
    permission_classes = [IsOwnerOrReadOnly, IsAuthenticatedOrReadOnly]
    serializer_class = SubtagDetailSerializer
    http_method_names = ['post', 'patch', 'delete', 'head']

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    # override the create method (which is called from a POST request)
    def create(self, request, *args, **kwargs):
        # check to see if the tag supplied belongs to the user or is global
        tag = Tag.objects.get(tag_id=request.data['tag'])
        if not tag.is_global:
            user = self.request.user
            if (tag.user != user):
                return Response(status=status.HTTP_401_UNAUTHORIZED)
        
        return super().create(request, *args, **kwargs)

    def get_serializer_class(self):
        if self.action in ["patch"]:
            return SubtagListSerializer
        return super().get_serializer_class()

    def get_queryset(self):
        return Item.objects.filter(user=self.request.user)

class ItemViewSet(viewsets.ModelViewSet):
    permission_classes = [IsOwnerOrReadOnly, IsAuthenticated]
    serializer_class = ItemSerializer
    http_method_names = ['get', 'post', 'head', 'patch', 'delete']

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    # when getting data, we want all fields from the subtags table
    # but when writing, we want to reference them only by their primary keys
    def get_serializer_class(self):
        if self.action in ["list", "retrieve"]:
            return ItemListSerializer
        return super().get_serializer_class()

    def get_queryset(self):
        return Item.objects.filter(user=self.request.user)

class OutfitViewSet(viewsets.ModelViewSet):
    permission_classes = [IsOwnerOrReadOnly, IsAuthenticated]
    serializer_class = OutfitSerializer
    http_method_names = ['get', 'post', 'head', 'patch', 'delete']

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
    
    def get_serializer_class(self):
        if self.action in ["list", "retrieve"]:
            return OutfitListSerializer
        return super().get_serializer_class()
    
    def get_queryset(self):
        return Outfit.objects.filter(user=self.request.user, is_weekly_plan=False)

class WeeklyPlanViewSet(viewsets.GenericViewSet, mixins.ListModelMixin, mixins.UpdateModelMixin):
    permission_classes = [IsOwnerOrReadOnly, IsAuthenticated]
    queryset = WeeklyPlan.objects.all()
    serializer_class = WeeklyPlanSerializer
    http_method_names = ['get', 'head', 'patch']

    # override list (which is called from a GET request) to manage weekly plan
    def list(self, request, *args, **kwargs):
        weekly_plan_count = WeeklyPlan.objects.filter(user=self.request.user).count()

        if (weekly_plan_count == 0):
            create_weekly_plan(self.request.user)
        else:
            update_calendar(self.request.user)

        return super().list(request, *args, **kwargs)

    # override partial_update (which is called from a PATCH request) to manage weekly plan
    def partial_update(self, request, *args, **kwargs):
        weekly_plan_count = WeeklyPlan.objects.filter(user=self.request.user).count()

        # cannot regenerate outfit if user does not have a weekly plan
        if (weekly_plan_count == 0):
            return Response({"error": "no weekly plan associated with this user"},
                            status=status.HTTP_400_BAD_REQUEST)

        # there are only 7 days worth of outfits stored, so only days 1..7 can be changed
        elif (int(kwargs['pk']) >= 8 or int(kwargs['pk']) <= 0):
            return Response({"error": "only days 1..7 are allowed"},
                            status=status.HTTP_400_BAD_REQUEST)

        # regenerate the outfit specified, save it, and return it to the user
        else:
            weekly_plan = WeeklyPlan.objects.get(user=self.request.user)
            day = kwargs['pk']
            subtags = []
            
            if "subtags" in request.data:
                subtags = request.data['subtags']

            outfit = WeeklyPlanOutfit.objects.get(weekly_plan=weekly_plan, day=day).outfit
            generate_outfits(user=self.request.user, outfits=[outfit], subtags=subtags)
        
            serializer = OutfitListSerializer(outfit, context={'request': request})
            return Response(serializer.data)