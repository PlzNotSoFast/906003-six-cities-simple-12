import { Offer } from '../types/types';
import { OfferHousingtypes, OfferGoods, Cities } from '../const';

export const offers: Offer[] = [
  {
    id: 1,
    type: OfferHousingtypes.Apartment,
    rating: 4.8,
    price: 120,
    title: 'Beautiful &amp; luxurious studio at great location',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg'],
    bedrooms: 3,
    maxAdults: 4,
    goods: [
      OfferGoods.WiFi,
      OfferGoods.WashingMachine,
      OfferGoods.Towels,
      OfferGoods.Heating,
      OfferGoods.CoffeeMachine,
      OfferGoods.BabySeat,
      OfferGoods.Kitchen,
      OfferGoods.DishWasher,
      OfferGoods.CabelTV,
      OfferGoods.Fridge
    ],
    isPremium: true,
    host: {
      id: 5,
      name: 'Vitaliy',
      avatarUrl: '',
      isPro: true,
    },
    location : {
      city: Cities.Amsterdam,
      coordinates: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
      },
      zoom: 10,
    },
  },
  {
    id: 2,
    type: OfferHousingtypes.Apartment,
    rating: 4.3,
    price: 200,
    title: 'Lorem ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg'],
    bedrooms: 2,
    maxAdults: 4,
    goods: ['Wi-Fi', 'Cabel TV', 'kitchen'],
    isPremium: false,
    host: {
      id: 1,
      name: 'Jacob',
      avatarUrl: '',
      isPro: true,
    },
    location : {
      city: Cities.Amsterdam,
      coordinates: {
        latitude: 52.3609553943508,
        longitude: 4.85309666406198,
      },
      zoom: 10,
    },
  },
  {
    id: 3,
    type: OfferHousingtypes.Apartment,
    rating: 4.3,
    price: 250,
    title: 'Lorem ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg'],
    bedrooms: 2,
    maxAdults: 4,
    goods: ['Wi-Fi', 'Cabel TV', 'kitchen'],
    isPremium: true,
    host: {
      id: 7,
      name: 'Henry',
      avatarUrl: '',
      isPro: true,
    },
    location : {
      city: Cities.Amsterdam,
      coordinates: {
        latitude: 52.3909553943508,
        longitude:  4.929309666406198,
      },
      zoom: 10,
    },
  },
  {
    id: 4,
    type: OfferHousingtypes.Apartment,
    rating: 4.3,
    price: 400,
    title: 'Lorem ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg'],
    bedrooms: 2,
    maxAdults: 4,
    goods: ['Wi-Fi', 'Cabel TV', 'kitchen'],
    isPremium: true,
    host: {
      id: 4,
      name: 'Tracy',
      avatarUrl: '',
      isPro: false,
    },
    location : {
      city: Cities.Amsterdam,
      coordinates: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
      },
      zoom: 10,
    },
  },
  {
    id: 5,
    type: OfferHousingtypes.Apartment,
    rating: 4.3,
    price: 180,
    title: 'Lorem ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg'],
    bedrooms: 2,
    maxAdults: 4,
    goods: ['Wi-Fi', 'Cabel TV', 'kitchen'],
    isPremium: true,
    host: {
      id: 3,
      name: 'Ashley',
      avatarUrl: '',
      isPro: true,
    },
    location : {
      city: Cities.Paris,
      coordinates: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
      },
      zoom: 10,
    },
  },
  {
    id: 6,
    type: OfferHousingtypes.Apartment,
    rating: 4.3,
    price: 300,
    title: 'Lorem ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg'],
    bedrooms: 2,
    maxAdults: 4,
    goods: ['Wi-Fi', 'Cabel TV', 'kitchen'],
    isPremium: true,
    host: {
      id: 9,
      name: 'Kelly',
      avatarUrl: '',
      isPro: true,
    },
    location : {
      city: Cities.Paris,
      coordinates: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
      },
      zoom: 10,
    },
  }
];
