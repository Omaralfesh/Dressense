from django.contrib import admin
from .models import *

class WeeklyPlanOutfitInLine(admin.TabularInline):
	model = WeeklyPlanOutfit

class WeeklyPlanAdmin(admin.ModelAdmin):
	inlines = [WeeklyPlanOutfitInLine]
	model = WeeklyPlan
	list_display = ['user']

admin.site.register(Tag)
admin.site.register(Subtag)
admin.site.register(Item)
admin.site.register(Outfit)
admin.site.register(WeeklyPlan, WeeklyPlanAdmin)