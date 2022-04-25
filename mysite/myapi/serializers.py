from rest_framework import serializers
from .models import *

# filters the subtags to return only global and user (if authenticated) subtags
class SubtagFilterSerializer(serializers.ListSerializer):
    def to_representation(self, data):
        user = self.context['request'].user

        if user.is_authenticated:
            global_subtags = data.filter(is_global=True)
            user_subtags = data.filter(user=user)
            data = global_subtags.union(user_subtags)
        else:
            data = data.filter(is_global=True)

        return super(SubtagFilterSerializer, self).to_representation(data)

# serializer used for POST requests
class SubtagDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subtag
        fields = ['subtag_id', 'user', 'tag', 'subtag_name']
        read_only_fields = ['user']

# serializer used for PATCH requests
class SubtagListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subtag
        # used to filter the returned subtags
        list_serializer_class = SubtagFilterSerializer
        fields = ['subtag_id', 'subtag_name']

# serializer used for most requests
class TagDetailSerializer(serializers.ModelSerializer):
    # nested serializer used for foreign key/manytomany fields
    subtags = SubtagListSerializer(many=True, read_only=True)
    # subtags = SubtagListSerializer(source='filtered_subtags', many=True, read_only=True)

    class Meta:
        model = Tag
        fields = ['tag_id', 'user', 'tag_name', 'subtags']
        read_only_fields = ['user', 'subtags']

# serializer used for list (general GET) requests
class TagListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['tag_id', 'tag_name']

# filters the wardrobe to return only items belonging to the user
class ItemFilterSerializer(serializers.ListSerializer):
    def to_representation(self, data):
        user = self.context['request'].user
        data = data.filter(user=user)

        return super(ItemFilterSerializer, self).to_representation(data)

# serializer used for POST, PATCH, DELETE requests
class ItemSerializer(serializers.ModelSerializer):
    # PrimaryKeyRelatedField only uses the primary key of the subtags table
    subtags = serializers.PrimaryKeyRelatedField(
        many=True, queryset=Subtag.objects.all())

    class Meta:
        model = Item
        fields = ['item_id', 'image', 'subtags']

# serializer used for list, retrieve (general and specific GET) requests
class ItemListSerializer(serializers.ModelSerializer):
    # regular nested serializer uses all fields from subtags table
    subtags = SubtagListSerializer(many=True)

    class Meta:
        model = Item
        # used to filter the items to only the ones belonging to the user
        list_serializer_class = ItemFilterSerializer
        fields = ['item_id', 'image', 'subtags']

# serializer used for POST, PATCH, DELETE requests
class OutfitSerializer(serializers.ModelSerializer):
    items = serializers.PrimaryKeyRelatedField(
        many=True, queryset=Item.objects.all())
    subtags = serializers.PrimaryKeyRelatedField(
        many=True, queryset=Subtag.objects.all())

    class Meta:
        model = Outfit
        fields = ['outfit_id', 'items', 'subtags']

# serializer used for list, retrieve (general and specific GET) requests
class OutfitListSerializer(serializers.ModelSerializer):
    items = ItemListSerializer(many=True)
    subtags = SubtagListSerializer(many=True)

    class Meta:
        model = Outfit
        fields = ['outfit_id', 'items', 'subtags']

# serializer used for each day of the weekly plan
class WeeklyPlanOutfitSerializer(serializers.ModelSerializer):
    outfit = OutfitListSerializer()

    class Meta:
        model = WeeklyPlanOutfit
        fields = ['day', 'outfit']

# serializer used to show the whole weekly plan
class WeeklyPlanSerializer(serializers.ModelSerializer):
    outfits = WeeklyPlanOutfitSerializer(source='weeklyplanoutfit_set', many=True)

    class Meta:
        model = WeeklyPlan
        fields = ['outfits']