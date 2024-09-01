import CarImage from "@/public/assets/images/car.png";

export type CarList = {
  title: string;
  acceleration: string;
  fuelType: string;
  power: string;
  price: number;
  rating: number;
  path: string;
  image: string;
}

export const allCarsList: CarList[] = [
  {
    title: "Ford Mustang Cabrio",
    acceleration: "220km/h",
    fuelType: "Diesel",
    power: "105km/77kw",
    price: 1450,
    rating: 5,
    path: "/",
    image: '/assets/models/ford-mustang-cabrio.png',
  },
  {
    title: "Porsche 911 Turbo",
    acceleration: "330km/h",
    fuelType: "Petrol",
    power: "580hp/427kw",
    price: 1299,
    rating: 5,
    path: "/",
    image: '/assets/models/porche-turbo-911.jpeg',
  },
  {
    title: "Lamborghini Urus",
    acceleration: "325km/h",
    fuelType: "Petrol",
    power: "610hp/449kw",
    price: 3499,
    rating: 5,
    path: "/",
    image: '/assets/models/lamborghini-urus.png',
  },
  {
    title: "Range Rover Sport",
    acceleration: "225km/h",
    fuelType: "Diesel",
    power: "300hp/221kw",
    price: 2259,
    rating: 4,
    path: "/",
    image: '/assets/models/range-rover-sport.png',
  },
  {
    title: "Ferrari F8 Tributo",
    acceleration: "340km/h",
    fuelType: "Petrol",
    power: "720hp/530kw",
    price: 1599,
    rating: 5,
    path: "/",
    image: '/assets/models/ferrari-f8-tributo.png',
  },
  {
    title: "Audi Q7",
    acceleration: "245km/h",
    fuelType: "Diesel",
    power: "286hp/210kw",
    price: 2199,
    rating: 4,
    path: "/",
    image: '/assets/models/audi-q7.png',
  },
  {
    title: "Bentley Bentayga",
    acceleration: "301km/h",
    fuelType: "Petrol",
    power: "542hp/404kw",
    price: 2399,
    rating: 5,
    path: "/",
    image: '/assets/models/bentley-bentayga.png',
  },
  {
    title: "Bugatti Chiron",
    acceleration: "300km/h",
    fuelType: "Petrol",
    power: "1000hp/800kw",
    price: 4899,
    rating: 5,
    path: "/",
    image: '/assets/models/bugati-chiron.png',
  }
];

export const sportCars = [
  {
    title: "Ferrari 488 Spyder",
    acceleration: "3.0 sec (0-100 km/h)",
    fuelType: "Petrol",
    power: "661 hp",
    price: 3000,
    rating: 4.8,
    path: "/cars/ferrari-488-spyder",
    image: "/assets/models/ferrari-488-spyder.jpg"
  },
  {
    title: "McLaren 720s Spider",
    acceleration: "2.9 sec (0-100 km/h)",
    fuelType: "Petrol",
    power: "710 hp",
    price: 3800,
    rating: 4.9,
    path: "/assets/models/mclaren-720-spider.png",
    image: "/assets/models/mclaren-720-spider.png"
  },
  {
    title: "Lamborghini Huracan Spyder",
    acceleration: "3.4 sec (0-100 km/h)",
    fuelType: "Petrol",
    power: "610 hp",
    price: 3100,
    rating: 4.7,
    path: "/cars/lamborghini-huracan-spyder",
    image: "/assets/images/car.png"
  },
  {
    title: "Ferrari 488",
    acceleration: "3.0 sec (0-100 km/h)",
    fuelType: "Petrol",
    power: "661 hp",
    price: 2500,
    rating: 4.8,
    path: "/cars/ferrari-488",
    image: "/assets/models/ferrari-488.png"
  }
]

export const luxuryCars = [
  {
    title: "Rolls Royce Ghost",
    acceleration: "4.8 sec (0-100 km/h)",
    fuelType: "Petrol",
    power: "563 hp",
    price: 3800,
    rating: 4.9,
    path: "/cars/rolls-royce-ghost",
    image: "/assets/models/rolls-royce-ghost.png"
  },
  {
    title: "Rolls Royce Dawn",
    acceleration: "4.9 sec (0-100 km/h)",
    fuelType: "Petrol",
    power: "563 hp",
    price: 3200,
    rating: 4.8,
    path: "/cars/rolls-royce-dawn",
    image: "/assets/models/rolls-royce-dawn.png"
  },
  {
    title: "Rolls Royce Cullinan",
    acceleration: "5.0 sec (0-100 km/h)",
    fuelType: "Petrol",
    power: "563 hp",
    price: 4000,
    rating: 4.9,
    path: "/cars/rolls-royce-cullinan",
    image: "/assets/models/rolls-royce-cullinan.png"
  },
  {
    title: "Rolls Royce Wraith",
    acceleration: "4.5 sec (0-100 km/h)",
    fuelType: "Petrol",
    power: "624 hp",
    price: 1250,
    rating: 4.7,
    path: "/cars/rolls-royce-wraith",
    image: "/assets/models/rolls-royce-wraith.png"
  }
]

export const suvCarList = [
  {
    title: "Lamborghini Urus",
    acceleration: "0-100 km/h in 3.6 sec",
    fuelType: "Petrol",
    power: "650 HP",
    price: 2900,
    rating: 4.9,
    path: "/suv/lamborghini-urus",
    image: "/assets/models/lamborghini-urus.png"
  },
  {
    title: "Mercedes G 63",
    acceleration: "0-100 km/h in 4.5 sec",
    fuelType: "Petrol",
    power: "577 HP",
    price: 2000,
    rating: 4.8,
    path: "/suv/mercedes-g63",
    image: "/assets/models/mercedes-g-63.png"
  },
  {
    title: "Cadillac Escalade",
    acceleration: "0-100 km/h in 6.6 sec",
    fuelType: "Petrol",
    power: "420 HP",
    price: 1400,
    rating: 4.7,
    path: "/suv/cadillac-escalade",
    image: "/assets/models/cadillac-escalade.png"
  },
  {
    title: "Hyundai Creta",
    acceleration: "0-100 km/h in 10.2 sec",
    fuelType: "Petrol",
    power: "115 HP",
    price: 1500,
    rating: 4.6,
    path: "/suv/hyundai-creta",
    image: "/assets/models/hyundai-creta.png"
  }
]
