import React from "react";
import Slider from "react-slick";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/hero-slider.css";

// Данные для слайдов
const slides = [
  {
    id: 1,
    title: "Аренда от $70 в сутки",
    subtitle: "Забронируйте сейчас и получите скидку 50%",
    imageClass: "slider__item-01",
    link: "/cars"
  },
  {
    id: 2,
    title: "Аренда от $70 в сутки",
    subtitle: "Премиум автомобили по доступным ценам",
    imageClass: "slider__item-02",
    link: "/cars"
  },
  {
    id: 3,
    title: "Аренда от $70 в сутки",
    subtitle: "Лучшие предложения этого сезона",
    imageClass: "slider__item-03",
    link: "/cars"
  }
];

const HeroSlider = () => {
  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 5000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    arrows: false,
    dots: true
  };

  return (
    <Slider {...settings} className="hero__slider">
      {slides.map((slide) => (
        <div key={slide.id} className={`slider__item ${slide.imageClass} mt-0`}>
          <Container>
            <div className="slider__content">
              <h4 className="slider__price text-light mb-3">{slide.title}</h4>
              <h1 className="slider__title text-light mb-4">{slide.subtitle}</h1>
              
              <Link 
                to={slide.link} 
                className="btn btn-primary reserve__btn mt-4"
              >
                Забронировать сейчас
              </Link>
            </div>
          </Container>
        </div>
      ))}
    </Slider>
  );
};

export default HeroSlider;