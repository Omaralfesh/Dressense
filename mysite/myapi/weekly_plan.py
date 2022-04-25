from .models import *
import random
import datetime

# regenerate outfits for the specified days and save them
def generate_outfits(user, outfits, subtags=[]):
	# get all items belonging to the user with all of the required subtags
	items = Item.objects.filter(user=user)
	for subtag in subtags:
		items = items.filter(subtags=subtag)

	for outfit in outfits:
		outfit.items.set(items)
		outfit.subtags.set(subtags)
	


# update the days depending on the date
def update_calendar(user):
	weekly_plan = WeeklyPlan.objects.get(user=user)
	days_since_last_view = (datetime.date.today() - weekly_plan.last_updated).days

	# if weekly plan was last viewed today, do nothing
	if (days_since_last_view == 0):
		return None

	# if weekly plan was last viewed more than a week ago, change all outfits
	elif (days_since_last_view >= 7):
		outfits = weekly_plan.outfits.all()

		# update the last time the weeklyplan was viewed to today
		weekly_plan.last_updated = datetime.date.today()
		weekly_plan.save()

		# regenerate all outfits
		generate_outfits(user, outfits)

	# if it has only been a few days since the weekly plan was last viewed,
	# shuffle the outfits forward then move the old outfits to the end and regenerate
	elif (days_since_last_view >= 1):
		outfit_references = []
		outfits = []

		# add all 7 WeeklyPlanOutfit objects to a list
		for i in range(1, 8):
			outfit_references.append(WeeklyPlanOutfit.objects.get(weekly_plan=weekly_plan, day=i))
		
		# move each outfit n days forward
		for i in range(7):
			outfit_references[i].day = (i - days_since_last_view) % 7 + 1
			outfit_references[i].save()

			# add each WeeklyPlanOutfit's corresponding outfit to a list
			outfits.append(outfit_references[i].outfit)
		
		# update the last time the weeklyplan was viewed to today
		weekly_plan.last_updated = datetime.date.today()
		weekly_plan.save()

		# generate a new outfit for all of the days that have since gone by
		generate_outfits(user, outfits[:days_since_last_view])



# create a weekly plan object for the user and populate it with 7 outfits
def create_weekly_plan(user):
	weekly_plan = WeeklyPlan.objects.create(user=user, last_updated=datetime.date.today())

	for i in range(1, 8):
		weekly_plan.outfits.create(user=user, is_weekly_plan=True, through_defaults={'day': i})

	generate_outfits(user, weekly_plan.outfits.all())
