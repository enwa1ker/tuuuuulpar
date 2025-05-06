import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "О нас",
  },
  {
    path: "#",
    display: "Политика конфиденциальности",
  },
  {
    path: "/cars",
    display: "Каталог авто",
  },
  {
    path: "/blogs",
    display: "Блог",
  },
  {
    path: "/contact",
    display: "Контакты",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className="d-flex align-items-center gap-2">
                  <i class="ri-car-line"></i>
                  <span>
                    Аренда авто <br /> Сервис
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
              Мы предлагаем качественные услуги по аренде автомобилей. Широкий выбор транспортных средств для любых целей. Профессиональный подход и индивидуальные условия для каждого клиента.
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Быстрые ссылки</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Главный офис</h5>
              <p className="office__info">ул. Байтик Баатыра, Бишкек, Кыргызстан</p>
              <p className="office__info">Телефон: +(312) 123-45-67</p>
              <p className="office__info">Email: tulparcars@gmail.com</p>
              <p className="office__info">Часы работы: 10:00 - 19:00</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">Рассылка</h5>
              <p className="section__description">Подпишитесь на нашу рассылку</p>
              <div className="newsletter">
                <input type="email" placeholder="Ваш email" />
                <span>
                  <i class="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i> {year} Все права защищены.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;