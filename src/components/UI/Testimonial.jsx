import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/testimonial.css";

import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import ava04 from "../../assets/all-images/ava-4.jpg";

const testimonials = [
  {
    id: 1,
    text: "Отличный сервис! Арендовал машину на неделю, все прошло без проблем. Автомобиль был в идеальном состоянии, цены адекватные. Обязательно буду пользоваться этим сервисом снова.",
    name: "Алексей Петров",
    position: "Постоянный клиент",
    avatar: ava01
  },
  {
    id: 2,
    text: "Очень доволен обслуживанием. Помогли подобрать подходящий вариант, оформили все быстро. Машина соответствовала описанию, никаких скрытых платежей. Рекомендую!",
    name: "Елена Смирнова",
    position: "Клиент",
    avatar: ava02
  },
  {
    id: 3,
    text: "Лучший сервис аренды в городе! Брал внедорожник для поездки на Иссык-Куль - машина не подвела. Отдельное спасибо за гибкие условия и понимание.",
    name: "Нурлан Жумабаев",
    position: "Клиент",
    avatar: ava03
  },
  {
    id: 4,
    text: "Пользуюсь услугами уже третий раз. Всегда вежливые менеджеры, чистые автомобили и прозрачные условия аренды. Удобное расположение офиса.",
    name: "Айгуль Токтосунова",
    position: "Постоянный клиент",
    avatar: ava04
  }
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings} className="testimonial-slider">
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="testimonial-card py-4 px-3">
          <p className="testimonial-text">
            {testimonial.text}
          </p>

          <div className="testimonial-author mt-3 d-flex align-items-center gap-3">
            <img 
              src={testimonial.avatar} 
              alt={testimonial.name}
              className="author-avatar rounded-circle"
            />
            <div>
              <h6 className="author-name mb-0">{testimonial.name}</h6>
              <p className="author-position">{testimonial.position}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Testimonial;