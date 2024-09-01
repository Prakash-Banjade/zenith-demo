import CarImage from "@/public/assets/images/car.png";

export type CarList = {
  title: string;
  acceleration: string;
  fuelType: string;
  power: string;
  price: string;
  rating: number;
  path: string;
  image: string;
}

export const allCarsList: CarList[] = [
  {
    title: "Mazda 3 III",
    acceleration: "220km/h",
    fuelType: "Diesel",
    power: "105km/77kw",
    price: "159",
    rating: 5,
    path: "/",
    image: '/assets/images/car.png',
  },
  {
    title: "Porsche 911 Turbo",
    acceleration: "330km/h",
    fuelType: "Petrol",
    power: "580hp/427kw",
    price: "299",
    rating: 5,
    path: "/",
    image: '/assets/images/car.png',
  },
  {
    title: "Lamborghini Urus",
    acceleration: "325km/h",
    fuelType: "Petrol",
    power: "610hp/449kw",
    price: "499",
    rating: 5,
    path: "/",
    image: '/assets/models/lamborghini-urus.png',
  },
  {
    title: "Range Rover Sport",
    acceleration: "225km/h",
    fuelType: "Diesel",
    power: "300hp/221kw",
    price: "259",
    rating: 4,
    path: "/",
    image: '/assets/images/car.png',
  },
  {
    title: "Ferrari F8 Tributo",
    acceleration: "340km/h",
    fuelType: "Petrol",
    power: "720hp/530kw",
    price: "599",
    rating: 5,
    path: "/",
    image: '/assets/images/car.png',
  },
  {
    title: "Audi Q7",
    acceleration: "245km/h",
    fuelType: "Diesel",
    power: "286hp/210kw",
    price: "199",
    rating: 4,
    path: "/",
    image: '/assets/images/car.png',
  },
  {
    title: "Bentley Bentayga",
    acceleration: "301km/h",
    fuelType: "Petrol",
    power: "542hp/404kw",
    price: "399",
    rating: 5,
    path: "/",
    image: '/assets/images/car.png',
  },
];

export const sportCars = [
  {
    title: "Ferrari 488 Spyder",
    acceleration: "3.0 sec (0-100 km/h)",
    fuelType: "Petrol",
    power: "661 hp",
    price: "3,000 AED",
    rating: 4.8,
    path: "/cars/ferrari-488-spyder",
    image: "/assets/models/ferrari-488-spyder.jpg"
  },
  {
    title: "McLaren 720s Spider",
    acceleration: "2.9 sec (0-100 km/h)",
    fuelType: "Petrol",
    power: "710 hp",
    price: "3,800 AED",
    rating: 4.9,
    path: "/cars/mclaren-720s-spider",
    image: "/assets/images/car.png"
  },
  {
    title: "Lamborghini Huracan Spyder",
    acceleration: "3.4 sec (0-100 km/h)",
    fuelType: "Petrol",
    power: "610 hp",
    price: "3,100 AED",
    rating: 4.7,
    path: "/cars/lamborghini-huracan-spyder",
    image: "/assets/images/car.png"
  },
  {
    title: "Ferrari 488",
    acceleration: "3.0 sec (0-100 km/h)",
    fuelType: "Petrol",
    power: "661 hp",
    price: "2,500 AED",
    rating: 4.8,
    path: "/cars/ferrari-488",
    image: "/assets/images/car.png"
  }
]

export const luxuryCars = [
  {
    title: "Rolls Royce Ghost",
    acceleration: "4.8 sec (0-100 km/h)",
    fuelType: "Petrol",
    power: "563 hp",
    price: "3,800 AED",
    rating: 4.9,
    path: "/cars/rolls-royce-ghost",
    image: "/assets/images/car.png"
  },
  {
    title: "Rolls Royce Dawn",
    acceleration: "4.9 sec (0-100 km/h)",
    fuelType: "Petrol",
    power: "563 hp",
    price: "3,200 AED",
    rating: 4.8,
    path: "/cars/rolls-royce-dawn",
    image: "/assets/images/car.png"
  },
  {
    title: "Rolls Royce Cullinan",
    acceleration: "5.0 sec (0-100 km/h)",
    fuelType: "Petrol",
    power: "563 hp",
    price: "4,000 AED",
    rating: 4.9,
    path: "/cars/rolls-royce-cullinan",
    image: "/assets/images/car.png"
  },
  {
    title: "Rolls Royce Wraith",
    acceleration: "4.5 sec (0-100 km/h)",
    fuelType: "Petrol",
    power: "624 hp",
    price: "1,250 AED",
    rating: 4.7,
    path: "/cars/rolls-royce-wraith",
    image: "/assets/images/car.png"
  }
]

export const suvCarList = [
  {
    title: "Lamborghini Urus",
    acceleration: "0-100 km/h in 3.6 sec",
    fuelType: "Petrol",
    power: "650 HP",
    price: "2,900 AED",
    rating: 4.9,
    path: "/suv/lamborghini-urus",
    image: "/assets/models/lamborghini-urus.jpg"
  },
  {
    title: "Mercedes G 63",
    acceleration: "0-100 km/h in 4.5 sec",
    fuelType: "Petrol",
    power: "577 HP",
    price: "2,000 AED",
    rating: 4.8,
    path: "/suv/mercedes-g63",
    image: "/assets/images/car.png"
  },
  {
    title: "Cadillac Escalade",
    acceleration: "0-100 km/h in 6.6 sec",
    fuelType: "Petrol",
    power: "420 HP",
    price: "1,400 AED",
    rating: 4.7,
    path: "/suv/cadillac-escalade",
    image: "/assets/images/car.png"
  },
  {
    title: "Hyundai Creta",
    acceleration: "0-100 km/h in 10.2 sec",
    fuelType: "Petrol",
    power: "115 HP",
    price: "150 AED",
    rating: 4.6,
    path: "/suv/hyundai-creta",
    image: "/assets/images/car.png"
  }
]
