import math
import requests
import random

# def randomise():
#     """docstring for randomise."""
#
#     receive = requests.get('https://api.dressense.me/clothes/')
#     print(receive.json())
#
#     # all_Clothes = receive.json()
#     # print(all_Clothes['form'])
#
#
#
# def __init__(self, arg):
#         super(randomise, self.__init__())
#         self.arg = arg

finalOutfit = []
tags = ['colour', 'fit', 'occasion', 'pattern', 'brand']
itemTypes = {'shirt': [],
            'jacket': [],
            'trousers': [],
            'shoes': []}

def randomise():
    # get all clothing items from database
    receive = requests.get('https://api.dressense.me/clothes/')
    allClothes = receive.json()

    # replace type hyperlinks with plaintext
    # then add to corresponding list in dictionary 'itemTypes'
    for item in allClothes:
        itemTypes[item['type']].append(item)

        # type = requests.get(item['type'])
        # typeJSON = type.json()
        # item['type'] = typeJSON['type']
        # itemTypes[typeJSON['type']].append(item)

    # picks one of each type randomly and adds to list
    for type in itemTypes:
        listSize = len(itemTypes[type])
        if (listSize == 0):
            continue
        index = random.randint(0, listSize-1)
        finalOutfit.append(itemTypes[type][index])

    # replace all hyperlink tags with plaintext
    # for item in finalOutfit:
    #     for tag in tags:
    #         if (item[tag] != None):
    #             tagDB = requests.get(item[tag])
    #             tagDBJSON = tagDB.json()
    #             item[tag] = tagDBJSON[tag]

    return finalOutfit