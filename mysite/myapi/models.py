from statistics import mode
from django.db import models
from django.conf import settings

class Tag(models.Model):
    tag_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    tag_name = models.CharField(max_length=20)
    is_global = models.BooleanField(default=False)

    def __str__(self):
        return '{tag_name}:{user}'.format(tag_name=self.tag_name, user=self.user)

class Subtag(models.Model):
    subtag_id = models.AutoField(primary_key=True)
    tag = models.ForeignKey(Tag, related_name='subtags', on_delete=models.CASCADE)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    subtag_name = models.CharField(max_length=20)
    is_global = models.BooleanField(default=False)

    def __str__(self):
        return '{subtag_name}:{user}'.format(subtag_name=self.subtag_name, user=self.user)

class Item(models.Model):
    item_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='images')
    subtags = models.ManyToManyField(Subtag)

    def __str__(self):
        return '{item_id}:{user}'.format(item_id=self.item_id, user=self.user)

class Outfit(models.Model):
    outfit_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    is_weekly_plan = models.BooleanField(default=False)
    items = models.ManyToManyField(Item, blank=True)
    subtags = models.ManyToManyField(Subtag, blank=True)

    def __str__(self):
        return '{outfit_id}:{user}'.format(outfit_id=self.outfit_id, user=self.user)

class WeeklyPlan(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    outfits = models.ManyToManyField(Outfit, through='WeeklyPlanOutfit')
    last_updated = models.DateField()

    def __str__(self):
        return '{user}'.format(user=self.user)

# custom table used to represent the many to many relationship of weekly plan and outfits
# so that the day the outfit corresponds to can be stored here instead of in the outfit table
class WeeklyPlanOutfit(models.Model):
    outfit = models.ForeignKey(Outfit, null=True, on_delete=models.SET_NULL)
    weekly_plan = models.ForeignKey(WeeklyPlan, on_delete=models.CASCADE)
    day = models.PositiveSmallIntegerField()

    class Meta:
        ordering = ['day']