import React, { useEffect } from "react";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import { useParams, Link } from "react-router-dom";
import blogData from "../assets/data/blogData.js";
import Helmet from "../components/Helmet/Helmet";
import commentImg from "../assets/all-images/ava-1.jpg";
import "../styles/blog-details.css";

const BlogDetails = () => {
  const { slug } = useParams();
  const blog = blogData.find((blog) => blog.title === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blog]);

  if (!blog) {
    return <div>Статья не найдена</div>;
  }

  return (
    <Helmet title={blog.title}>
      <section className="blog-details">
        <Container>
          <Row>
            {/* Основное содержание статьи */}
            <Col lg="8" md="8">
              <article className="blog__details">
                <img 
                  src={blog.imgUrl} 
                  alt={blog.title} 
                  className="w-100 rounded-3 shadow mb-4"
                />
                
                <h1 className="blog__title mb-4">{blog.title}</h1>

                <div className="blog__meta d-flex flex-wrap align-items-center gap-4 mb-4">
                  <span className="blog__author">
                    <i className="ri-user-line"></i> {blog.author}
                  </span>
                  <span className="blog__date">
                    <i className="ri-calendar-line"></i> {blog.date}
                  </span>
                  <span className="blog__time">
                    <i className="ri-time-line"></i> {blog.time}
                  </span>
                </div>

                <div className="blog__content">
                  <p className="lead">{blog.description}</p>
                  
                  <blockquote className="blog__quote my-5 py-3 px-4">
                    <i className="ri-double-quotes-l"></i>
                    <p className="mb-0">{blog.quote}</p>
                  </blockquote>
                  
                  <p>{blog.description}</p>
                </div>

                {/* Комментарии */}
                <section className="comments mt-5 pt-4">
                  <h3 className="mb-4">3 комментария</h3>

                  <div className="comment card p-3 mb-3">
                    <div className="d-flex gap-3">
                      <img 
                        src={commentImg} 
                        alt="Аватар пользователя" 
                        className="comment__avatar rounded-circle"
                      />
                      <div className="comment__body">
                        <h5 className="comment__author mb-1">Давид Иванов</h5>
                        <time className="comment__date small text-muted d-block mb-2">
                          14 июля 2022
                        </time>
                        <p className="comment__text mb-2">
                          Отличная статья! Очень полезная информация для тех, 
                          кто планирует арендовать автомобиль. Спасибо автору!
                        </p>
                        <button className="comment__reply btn btn-link p-0">
                          <i className="ri-reply-line"></i> Ответить
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Форма комментария */}
                  <div className="comment__form card p-4 mt-5">
                    <h4 className="mb-3">Оставить комментарий</h4>
                    <p className="text-muted mb-4">
                      Чтобы оставить комментарий, необходимо авторизоваться
                    </p>

                    <Form>
                      <Row>
                        <Col md="6">
                          <FormGroup className="mb-3">
                            <Input 
                              type="text" 
                              placeholder="Ваше имя" 
                              required 
                            />
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup className="mb-3">
                            <Input 
                              type="email" 
                              placeholder="Ваш email" 
                              required 
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      
                      <FormGroup className="mb-3">
                        <textarea
                          rows="5"
                          className="form-control"
                          placeholder="Ваш комментарий..."
                          required
                        ></textarea>
                      </FormGroup>

                      <button 
                        type="submit" 
                        className="btn btn-primary"
                      >
                        Отправить комментарий
                      </button>
                    </Form>
                  </div>
                </section>
              </article>
            </Col>

            {/* Боковая панель */}
            <Col lg="4" md="4">
              <aside className="blog__sidebar">
                <div className="recent-posts card p-3 mb-4">
                  <h5 className="mb-3">Последние статьи</h5>
                  {blogData
                    .filter(item => item.id !== blog.id)
                    .slice(0, 4)
                    .map((item) => (
                      <div className="recent-post mb-3" key={item.id}>
                        <Link 
                          to={`/blogs/${item.title}`} 
                          className="d-flex gap-3 text-decoration-none"
                        >
                          <img 
                            src={item.imgUrl} 
                            alt={item.title}
                            className="recent-post__img rounded-2"
                          />
                          <h6 className="recent-post__title">{item.title}</h6>
                        </Link>
                      </div>
                    ))
                  }
                </div>
              </aside>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default BlogDetails;