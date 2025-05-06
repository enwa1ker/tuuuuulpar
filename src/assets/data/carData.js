// Импорт изображений из директории assets/images
import img01 from "../all-images/cars-img/nissan-offer.png";
import img02 from "../all-images/cars-img/offer-toyota.png";
import img03 from "../all-images/cars-img/bmw-offer.png";
import img04 from "../all-images/cars-img/nissan-offer.png";
import img05 from "../all-images/cars-img/offer-toyota.png";
import img06 from "../all-images/cars-img/mercedes-offer.png";
import img07 from "../all-images/cars-img/toyota-offer-2.png";
import img08 from "../all-images/cars-img/mercedes-offer.png";

const carData = [
  {
    id: 1,
    brand: "Tesla",
    rating: 112,
    carName: "Tesla Malibu",
    imgUrl: img01,
    model: "Model 3",
    price: 50,
    speed: "20км/ч",
    gps: "GPS навигация",
    seatType: "Подогрев сидений",
    automatic: "Автомат",
    description:
      "Электромобиль Tesla Model 3 сочетает в себе инновационные технологии и стильный дизайн. Идеальный выбор для комфортных поездок по городу и за его пределами.",
  },

  {
    id: 2,
    brand: "Toyota",
    rating: 102,
    carName: "Toyota Aventador",
    imgUrl: img02,
    model: "Модель-2022",
    price: 50,
    speed: "20км/ч",
    gps: "GPS навигация",
    seatType: "Подогрев сидений",
    automatic: "Автомат",
    description:
      "Надежный и практичный Toyota Aventador с современным оснащением и экономичным двигателем.",
  },

  {
    id: 3,
    brand: "BMW",
    rating: 132,
    carName: "BMW X3",
    imgUrl: img03,
    model: "Модель-2022",
    price: 65,
    speed: "20км/ч",
    gps: "GPS навигация",
    seatType: "Подогрев сидений",
    automatic: "Автомат",
    description:
      "Премиальный кроссовер BMW X3 с динамичным характером и роскошным интерьером.",
  },

  {
    id: 4,
    brand: "Nissan",
    rating: 102,
    carName: "Nissan Mercielago",
    imgUrl: img04,
    model: "Модель-2022",
    price: 70,
    speed: "20км/ч",
    gps: "GPS навигация",
    seatType: "Подогрев сидений",
    automatic: "Автомат",
    description:
      "Стильный и вместительный Nissan Mercielago с передовыми системами безопасности.",
  },

  {
    id: 5,
    brand: "Ferrari",
    rating: 94,
    carName: "Ferrari Camry",
    imgUrl: img05,
    model: "Модель-2022",
    price: 45,
    speed: "20км/ч",
    gps: "GPS навигация",
    seatType: "Подогрев сидений",
    automatic: "Автомат",
    description:
      "Элегантный Ferrari Camry с спортивным характером и узнаваемым дизайном.",
  },

  {
    id: 6,
    brand: "Mercedes",
    rating: 119,
    carName: "Mercedes Benz XC90",
    imgUrl: img06,
    model: "Модель-2022",
    price: 85,
    speed: "20км/ч",
    gps: "GPS навигация",
    seatType: "Подогрев сидений",
    automatic: "Автомат",
    description:
      "Роскошный Mercedes Benz XC90 с просторным салоном и передовыми технологиями.",
  },

  {
    id: 7,
    brand: "Audi",
    rating: 82,
    carName: "Audi Fiesta",
    imgUrl: img07,
    model: "Model 3",
    price: 50,
    speed: "20км/ч",
    gps: "GPS навигация",
    seatType: "Подогрев сидений",
    automatic: "Автомат",
    description:
      "Компактный и маневренный Audi Fiesta - отличный выбор для городских условий.",
  },

  {
    id: 8,
    brand: "Colorado",
    rating: 52,
    carName: "Rolls Royce Colorado",
    imgUrl: img08,
    model: "Model 3",
    price: 50,
    speed: "20км/ч",
    gps: "GPS навигация",
    seatType: "Подогрев сидений",
    automatic: "Автомат",
    description:
      "Эксклюзивный Rolls Royce Colorado - воплощение роскоши и престижа.",
  },
];

export default carData;