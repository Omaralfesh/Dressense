import math
from django.test import TestCase
from myapi.randomise import randomise


class randomiseTest(TestCase):
    def contains_four_items(self):
        self.assertEqual(len(randomise()), 4, "Should be 4")


    def contains_all_tags(self):
        finalOutfit = randomise()
        tags_present = True
        for item in finalOutfit:
            if 'colour' and 'fit' and 'occasion' and 'pattern' and 'brand' not in item:
                tags_present = False
        
        self.assertTrue(tags_present)