import React from "react";
import "../../styles/our-member.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";

const OUR__MEMBERS = [
  {
    name: "Айбек Сагынбаев",
    position: "Автопарк менеджери",
    experience: "5 жылдык тажрыйба",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava01,
  },
  {
    name: "Айгул Токтогулова",
    position: "Кардарлар менеджери",
    experience: "4 жылдык тажрыйба",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava02,
  },
  {
    name: "Нурлан Жумабаев",
    position: "Техникалык кызматкер",
    experience: "6 жылдык тажрыйба",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava03,
  },
  {
    name: "Гүлзада Асанова",
    position: "Финанс менеджери",
    experience: "5 жылдык тажрыйба",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava01,
  },
];

const OurMembers = () => {
  return (
    <>
      {OUR__MEMBERS.map((item, index) => (
        <Col lg="3" md="3" sm="4" xs="6" key={index} className="mb-4">
          <div className="single__member">
            <div className="single__member-img">
              <img 
                src={item.imgUrl} 
                alt={`${item.name} - ${item.position}`} 
                className="w-100" 
              />

              <div className="single__member-social">
                <Link to={item.fbUrl} aria-label="Facebook">
                  <i className="ri-facebook-line"></i>
                </Link>
                <Link to={item.twitUrl} aria-label="Twitter">
                  <i className="ri-twitter-line"></i>
                </Link>
                <Link to={item.linkedinUrl} aria-label="LinkedIn">
                  <i className="ri-linkedin-line"></i>
                </Link>
                <Link to={item.instUrl} aria-label="Instagram">
                  <i className="ri-instagram-line"></i>
                </Link>
              </div>
            </div>

            <div className="member-info text-center">
              <h6 className="mb-0 mt-3 member-name">{item.name}</h6>
              <p className="member-position">{item.position}</p>
              <p className="section__description member-experience">
                {item.experience}
              </p>
            </div>
          </div>
        </Col>
      ))}
    </>
  );
};

export default OurMembers;