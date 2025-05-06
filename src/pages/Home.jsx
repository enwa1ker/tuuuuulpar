import React from "react";

import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col } from "reactstrap";
import FindCarForm from "../components/UI/FindCarForm";
import AboutSection from "../components/UI/AboutSection";
import ServicesList from "../components/UI/ServicesList";
import carData from "../assets/data/carData";
import CarItem from "../components/UI/CarItem";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";
import Testimonial from "../components/UI/Testimonial";

import BlogList from "../components/UI/BlogList";

const Home = () => {
  return (
    <Helmet title="Главная">
      {/* ============= Геро-секция =========== */}
      <section className="p-0 hero__slider-section">
        <HeroSlider />

        <div className="hero__form">
          <Container>
            <Row className="form__row">
              <Col lg="4" md="4">
                <div className="find__cars-left">
                  <h2>Найдите лучший автомобиль для себя</h2>
                </div>
              </Col>

              <Col lg="8" md="8" sm="12">
                <FindCarForm />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/* =========== Секция "О нас" ================ */}
      <AboutSection />
      {/* ========== Секция услуг ============ */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Посмотрите наши</h6>
              <h2 className="section__title">Популярные услуги</h2>
            </Col>

            <ServicesList />
          </Row>
        </Container>
      </section>
      {/* =========== Секция предложений по автомобилям ============= */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">Приходите с</h6>
              <h2 className="section__title">Горячими предложениями</h2>
            </Col>

            {carData.slice(0, 6).map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
      {/* =========== Секция "Стань водителем" ============ */}
      <BecomeDriverSection />

      {/* =========== Секция отзывов =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__subtitle">Что говорят наши клиенты</h6>
              <h2 className="section__title">Отзывы</h2>
            </Col>

            <Testimonial />
          </Row>
        </Container>
      </section>

      {/* =============== Блог секция =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Исследуйте наши блоги</h6>
              <h2 className="section__title">Последние статьи</h2>
            </Col>

            <BlogList />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;