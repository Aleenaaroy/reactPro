import React from "react";
import Search from "./Search";
import RestoCard from "./RestoCard";
import "./Body.css";

const Restaurants = () => {
  const resList=[
    {
      "info": {
        "id": "53438",
        "name": "KFC",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/1b92e544-fce7-45ac-941a-50092e3037a5_53438.JPG",
        "locality": "Kakkanad",
        "areaName": "Kakkanad",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Burgers",
          "Fast Food",
          "Rolls & Wraps"
        ],
        "avgRating": 4.4,
        "parentId": "547",
        "avgRatingString": "4.4",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 34,
          "lastMileTravel": 7,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "7.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-06-10 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/kfc-kakkanad-kochi-53438",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "57239",
        "name": "McDonald's",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/a87f58ea-72b1-4f3d-9ffe-ae74effb1073_57239.jpg",
        "locality": "Info Park",
        "areaName": "Kakkanad",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Burgers",
          "Beverages",
          "Cafe",
          "Desserts"
        ],
        "avgRating": 4.5,
        "parentId": "630",
        "avgRatingString": "4.5",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 15,
          "lastMileTravel": 2.3,
          "serviceability": "SERVICEABLE",
          "slaString": "15-20 mins",
          "lastMileTravelString": "2.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-06-10 23:45:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Burger.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/mcdonalds-info-park-kakkanad-kochi-57239",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "527040",
        "name": "Domino's Pizza",
        "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
        "locality": "Infopark Road",
        "areaName": "Kakkanad",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Pizzas",
          "Italian",
          "Pastas",
          "Desserts"
        ],
        "avgRating": 4.5,
        "parentId": "2456",
        "avgRatingString": "4.5",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 25,
          "lastMileTravel": 2.6,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "2.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-06-11 02:59:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Pizza.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Pizza.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹100 OFF",
          "subHeader": "ABOVE ₹999",
          "discountTag": "FLAT DEAL"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/dominos-pizza-infopark-road-kakkanad-kochi-527040",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "546758",
        "name": "Baskin Robbins - Ice Cream Desserts",
        "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
        "locality": "Thrikkakara Circle",
        "areaName": "Kakkanad",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Desserts",
          "Ice Cream"
        ],
        "avgRating": 4.7,
        "veg": true,
        "parentId": "5588",
        "avgRatingString": "4.7",
        "totalRatingsString": "500+",
        "sla": {
          "deliveryTime": 29,
          "lastMileTravel": 5.8,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "5.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-06-11 00:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Ice-creams.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-thrikkakara-circle-kakkanad-kochi-546758",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "232590",
        "name": "The Good Bowl",
        "cloudinaryImageId": "6e04be27387483a7c00444f8e8241108",
        "locality": "Kakkanad",
        "areaName": "Chittethukara",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Biryani",
          "Pastas",
          "Punjabi",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.2,
        "parentId": "7918",
        "avgRatingString": "4.2",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 36,
          "lastMileTravel": 6.5,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "6.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-06-10 23:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹499",
          "discountTag": "FLAT DEAL"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/the-good-bowl-kakkanad-chittethukara-kochi-232590",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "57030",
        "name": "Subway",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/4/b81f167b-ccfc-4cc5-98af-571c34e401e6_57030.JPG",
        "locality": "Smart City",
        "areaName": "Kakkanad",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Healthy Food",
          "Salads",
          "Snacks",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.2,
        "parentId": "2",
        "avgRatingString": "4.2",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 25,
          "lastMileTravel": 2.1,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "2.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-06-11 02:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Sandwiches.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Sandwiches.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹100 OFF",
          "subHeader": "ABOVE ₹599",
          "discountTag": "FLAT DEAL"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/subway-smart-city-kakkanad-kochi-57030",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "359257",
        "name": "NIC Ice Creams",
        "cloudinaryImageId": "85825a6d74b1059a63a9b688de9f67ce",
        "locality": "Veegaland road",
        "areaName": "Kakkanad",
        "costForTwo": "₹120 for two",
        "cuisines": [
          "Ice Cream",
          "Desserts"
        ],
        "avgRating": 4.7,
        "veg": true,
        "parentId": "6249",
        "avgRatingString": "4.7",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 28,
          "lastMileTravel": 4.1,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "4.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-06-11 00:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ],
          "textExtendedBadges": [
            {
              "iconId": "Ratnesh_Badges/test2.png",
              "shortDescription": "Perfect ice cream delivery",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "Ratnesh_Badges/test2.png",
                    "shortDescription": "Perfect ice cream delivery"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/nic-ice-creams-veegaland-road-kakkanad-kochi-359257",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "544887",
        "name": "Pizza Hut",
        "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
        "locality": "Edichara",
        "areaName": "Kakkanad",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Pizzas"
        ],
        "avgRating": 4.2,
        "parentId": "721",
        "avgRatingString": "4.2",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 27,
          "lastMileTravel": 2.4,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "2.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-06-11 03:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Pizza.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Pizza.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "30% OFF",
          "subHeader": "UPTO ₹75"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/pizza-hut-edichara-kakkanad-kochi-544887",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "377310",
        "name": "The Belgian Waffle Co.",
        "cloudinaryImageId": "5116a385bac0548e06c33c08350fbf11",
        "locality": "Edachira Infopark Road",
        "areaName": "Kakkanad",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Waffle",
          "Desserts",
          "Ice Cream",
          "Beverages"
        ],
        "avgRating": 4.5,
        "veg": true,
        "parentId": "2233",
        "avgRatingString": "4.5",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 37,
          "lastMileTravel": 2.4,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "2.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-06-11 02:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/the-belgian-waffle-co-edachira-infopark-road-kakkanad-kochi-377310",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "763911",
        "name": "Big Bowl",
        "cloudinaryImageId": "c99751d54e4e1847186c62b3309c1327",
        "locality": "Edappally",
        "areaName": "Vazakala",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "North Indian",
          "Chinese",
          "Tibetan",
          "Desserts"
        ],
        "avgRating": 4.3,
        "parentId": "434792",
        "avgRatingString": "4.3",
        "totalRatingsString": "500+",
        "sla": {
          "deliveryTime": 39,
          "lastMileTravel": 7.3,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "7.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-06-11 01:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹169"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/big-bowl-edappally-vazakala-kochi-763911",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "60008",
        "name": "Alakapuri",
        "cloudinaryImageId": "k2why61tsxk9sh0sl68d",
        "locality": "Kakkanad",
        "areaName": "Kakkanad",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "South Indian",
          "Kerala"
        ],
        "avgRating": 4.6,
        "parentId": "20242",
        "avgRatingString": "4.6",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 29,
          "lastMileTravel": 4.6,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "4.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-06-10 23:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Coastal.png",
              "description": "Delivery!"
            },
            {
              "imageId": "Rxawards/_CATEGORY-Kerala%20Food.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Coastal.png"
                  }
                },
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Kerala%20Food.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/alakapuri-kakkanad-kochi-60008",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "63723",
        "name": "Galaxy Family Restaurant",
        "cloudinaryImageId": "jys7zsopl1sjy2wwxadd",
        "locality": "Kakkanad",
        "areaName": "Kakkanad",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Kerala",
          "Chinese",
          "South Indian",
          "Biryani",
          "Beverages"
        ],
        "avgRating": 4.6,
        "parentId": "20241",
        "avgRatingString": "4.6",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 36,
          "lastMileTravel": 6.6,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "6.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-06-10 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
              "description": "OnlyOnSwiggy"
            }
          ],
          "textExtendedBadges": [
            {
              "iconId": "Ratnesh_Badges/test2.png",
              "shortDescription": "Perfect ice cream delivery",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "OnlyOnSwiggy",
                    "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "Ratnesh_Badges/test2.png",
                    "shortDescription": "Perfect ice cream delivery"
                  }
                }
              ]
            }
          }
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/galaxy-family-restaurant-kakkanad-kochi-63723",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "826646",
        "name": "Pastas By Pizza Hut",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/09e6e7e2-9e09-4d04-a0c2-2f13e32734b7_826646.JPG",
        "locality": "Edichara",
        "areaName": "Kakkanad",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Pastas"
        ],
        "avgRating": 4.2,
        "parentId": "306806",
        "avgRatingString": "4.2",
        "totalRatingsString": "50+",
        "sla": {
          "deliveryTime": 29,
          "lastMileTravel": 2.4,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "2.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-06-11 03:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "isNewlyOnboarded": true,
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/pastas-by-pizza-hut-edichara-kakkanad-kochi-826646",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "395338",
        "name": "McDonald's Gourmet Burger Collection",
        "cloudinaryImageId": "whisfgned8xpxhde02ts",
        "locality": "Info Park",
        "areaName": "Kakkanad",
        "costForTwo": "₹600 for two",
        "cuisines": [
          "Burgers",
          "Beverages",
          "Cafe",
          "Desserts"
        ],
        "avgRating": 4.5,
        "parentId": "10761",
        "avgRatingString": "4.5",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 16,
          "lastMileTravel": 2.3,
          "serviceability": "SERVICEABLE",
          "slaString": "15-20 mins",
          "lastMileTravelString": "2.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-06-10 23:45:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/mcdonalds-gourmet-burger-collection-info-park-kakkanad-kochi-395338",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "52083",
        "name": "Palaaram",
        "cloudinaryImageId": "zchpuqit7k4pdndgse4t",
        "locality": "Kakkanad",
        "areaName": "Kakkanad",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Kerala",
          "Biryani",
          "Arabian",
          "Chinese"
        ],
        "avgRating": 4.5,
        "parentId": "18945",
        "avgRatingString": "4.5",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 37,
          "lastMileTravel": 7.1,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "7.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-06-10 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "ABOVE ₹1200",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/palaaram-kakkanad-kochi-52083",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "52395",
        "name": "Thaal Kitchen",
        "cloudinaryImageId": "xxi1rb25fxm3le88weuo",
        "locality": "Kakkanad",
        "areaName": "Kakkanad",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Kerala",
          "Arabian",
          "Ice Cream"
        ],
        "avgRating": 4.2,
        "parentId": "20290",
        "avgRatingString": "4.2",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 36,
          "lastMileTravel": 5,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "5.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-06-10 23:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/thaal-kitchen-kakkanad-kochi-52395",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "232589",
        "name": "Sweet Truth - Cake and Desserts",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/27/57dd6a8c-1f5c-4551-9a77-4fa5a3b2aec7_232589.JPG",
        "locality": "Kakkanad",
        "areaName": "Chittethukara",
        "costForTwo": "₹450 for two",
        "cuisines": [
          "Snacks",
          "Bakery",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.2,
        "parentId": "4444",
        "avgRatingString": "4.2",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 34,
          "lastMileTravel": 6.4,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "6.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-06-10 23:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/sweet-truth-cake-and-desserts-kakkanad-chittethukara-kochi-232589",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "232591",
        "name": "The Biryani Life",
        "cloudinaryImageId": "slnshuwoxfxyuagtqwij",
        "locality": "Kakkanad",
        "areaName": "Chittethukara",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Biryani",
          "Mughlai",
          "Lucknowi",
          "Hyderabadi",
          "Kebabs",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4,
        "parentId": "8496",
        "avgRatingString": "4.0",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 38,
          "lastMileTravel": 5.9,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "5.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-06-10 23:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/the-biryani-life-kakkanad-chittethukara-kochi-232591",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "52870",
        "name": "Al Sheba KuzhiMandhi",
        "cloudinaryImageId": "56b7222d3239a954d09b42c05347debf",
        "locality": "Thrikkakara",
        "areaName": "Kakkanad",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Arabian",
          "Beverages"
        ],
        "avgRating": 4.3,
        "parentId": "29485",
        "avgRatingString": "4.3",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 34,
          "lastMileTravel": 6.4,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "6.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-06-10 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/al-sheba-kuzhimandhi-thrikkakara-kakkanad-kochi-52870",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "51795",
        "name": "Aryaas",
        "cloudinaryImageId": "xejp6fugbtzu08vpfqmu",
        "locality": "Kakkanad",
        "areaName": "Kakkanad",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "South Indian",
          "North Indian",
          "Chinese",
          "Ice Cream"
        ],
        "avgRating": 4.6,
        "parentId": "18925",
        "avgRatingString": "4.6",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 29,
          "lastMileTravel": 5,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "5.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-06-10 22:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/aryaas-kakkanad-kochi-51795",
        "type": "WEBLINK"
      }
    }
  ];
  return (
    <div className="body-container">
      <Search />
      <div className="restocards-container">
 {resList.map((rest)=>
  <RestoCard key={rest.info.id} resInfo={rest}/>
 )}
        
        
      </div>
    </div>
  );
};

export default Restaurants;
