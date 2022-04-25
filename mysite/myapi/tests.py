from django.test import TestCase
from myapi.models import *

class databaseTest(TestCase):
    def setUp(self):
        Jumper.objects.create(image="example.png", colour="green", fit="loose", occasion="formal", pattern="plain", brand="primark")
        Jumper.objects.create(image="example5.png", colour="yellow", fit="loose", occasion="casual", pattern="spotty", brand="primark")
        Shirt.objects.create(image="example2.png", colour="blue", fit="tight", occasion="formal", pattern="striped", brand="H&M")
        Shoes.objects.create(image="example3.png", colour="black", fit="tight", occasion="casual", pattern="plain", brand="Nike")
        Trousers.objects.create(image="example4.png", colour="blue", fit="skinny", occasion="formal", pattern="plain", brand="Levis")

    def test_items_added_to_database(self):
        noElements = len(Jumper.objects.all())
        self.assertEqual(noElements, 2)
        
    def test_removing_from_database(self):
        spotty = Jumper.objects.get(pattern="spotty")
        spotty.delete()
        noElements = len(Jumper.objects.all())
        self.assertEqual(noElements, 1)

    def test_modifying_database_entry(self):
        shirt = Shirt.objects.get(colour="blue")
        shirt.colour = "orange"
        shirt.save(update_fields=['colour'])

        getShirt = Shirt.objects.get()
        self.assertEqual(getShirt.colour, "orange")

    def test_image_not_null(self):
        shoe = Shoes.objects.get(colour="black")
        self.assertNotEqual(shoe.image, "")