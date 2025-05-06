import React from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";
import driveImg from "../assets/all-images/drive.jpg";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="О компании">
      <CommonSection title="О нашей компании" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row className="align-items-center">
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img 
                  src={driveImg} 
                  alt="Наш автопарк" 
                  className="w-100 rounded-3 shadow"
                />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title mb-4">
                  Мы обеспечиваем безопасные и комфортные поездки
                </h2>

                <p className="section__description">
                  Tulpar Cars - ведущий сервис аренды автомобилей в Бишкеке. 
                  С 2015 года мы предоставляем клиентам качественные автомобили 
                  по доступным ценам с полным страховым покрытием.
                </p>

                <p className="section__description">
                  Наш автопарк включает более 50 автомобилей различных классов - 
                  от экономичных вариантов до премиальных моделей. Все автомобили 
                  регулярно проходят техническое обслуживание.
                </p>

                <div className="contact-info d-flex align-items-center gap-3 mt-4 p-3 bg-light rounded">
                  <span className="icon fs-4 text-primary">
                    <i className="ri-phone-line"></i>
                  </span>
                  <div>
                    <h6 className="section__subtitle mb-1">Нужна помощь?</h6>
                    <h4 className="mb-0">+(996) 312 123 4567</h4>
                    <p className="small text-muted mt-1">Круглосуточная поддержка</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <BecomeDriverSection />

      <section className="team-section py-5">
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Наши специалисты</h6>
              <h2 className="section__title">Команда профессионалов</h2>
              <p className="section__description mx-auto" style={{maxWidth: "600px"}}>
                Наша команда - это опытные специалисты, которые помогут вам 
                подобрать идеальный автомобиль для любых целей.
              </p>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;