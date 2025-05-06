import React, { useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";

const navLinks = [
  {
    path: "/home",
    display: "Главная",
  },
  {
    path: "/about",
    display: "О нас",
  },
  {
    path: "/cars",
    display: "Автомобили",
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

const Header = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className="header">
      {/* ============ верхняя часть шапки ============ */}
      <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
                <span>Нужна помощь?</span>
                <span className="header__top__help">
                  <i class="ri-phone-fill"></i> +(312) 123-45-67
                </span>
              </div>
            </Col>

            <Col lg="6" md="6" sm="6">
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                <Link to="#" className="d-flex align-items-center gap-1">
                  <i class="ri-login-circle-line"></i> Войти
                </Link>

                <Link to="#" className="d-flex align-items-center gap-1">
                  <i class="ri-user-line"></i> Регистрация
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* =============== центральная часть шапки =========== */}
      <div className="header__middle">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/home" className="d-flex align-items-center gap-2">
                    <i class="ri-car-line"></i>
                    <span>
                      Tulpar Cars <br /> Сервис
                    </span>
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i class="ri-earth-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Кыргызстан</h4>
                  <h6>ул. Байтик Баатыра, Бишкек</h6>
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i class="ri-time-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Понедельник - Пятница</h4>
                  <h6>10:00 - 19:00</h6>
                </div>
              </div>
            </Col>

            <Col
              lg="2"
              md="3"
              sm="0"
              className="d-flex align-items-center justify-content-end"
            >
              <button className="header__btn btn">
                <Link to="/contact">
                  <i class="ri-phone-line"></i> Заказать звонок
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ========== основная навигация =========== */}

      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="nav__right">
              <div className="search__box">
                <input type="text" placeholder="Поиск" />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;