import porcheImg from '@/public/assets/models/porche-turbo-911.jpeg'
import mclarenImg from '@/public/assets/models/mclaren-720-spider.png'
import rangeRoverImg from '@/public/assets/models/range-rover-sport.png'

export const popularCars = [
  {
    id: 1,
    title: "Porche Turbo 911",
    image: porcheImg,
    power: "580hp",
    transmission: "automatic",
    seats: 4,
    fuelType: 'petrol',
    price: 3800,
  },
  {
    id: 2,
    title: "McLaren 720s Spider",
    image: mclarenImg,
    power: "420hp",
    transmission: "automatic",
    seats: 5,
    fuelType: 'petrol',
    price: 2999,
  },
  {
    id: 3,
    title: "Range Rover Sport",
    image: rangeRoverImg,
    power: "380hp",
    transmission: "automatic",
    seats: 5,
    fuelType: 'petrol',
    price: 3599
  },
];
