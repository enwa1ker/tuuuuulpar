import React from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";

const BookingForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };
  
  return (
    <Form onSubmit={submitHandler}>
      {/* Блок с именем и фамилией */}
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="Имя" required />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="Фамилия" required />
      </FormGroup>

      {/* Блок с контактными данными */}
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="email" placeholder="Электронная почта" required />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="tel" placeholder="Номер телефона" required />
      </FormGroup>

      {/* Блок с адресами */}
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="Откуда" required />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="Куда" required />
      </FormGroup>

      {/* Блок с выбором количества пассажиров и багажа */}
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <select name="passengers" id="passengers" required>
          <option value="">Количество пассажиров</option>
          <option value="1">1 пассажир</option>
          <option value="2">2 пассажира</option>
          <option value="3">3 пассажира</option>
          <option value="4">4 пассажира</option>
          <option value="5+">5+ пассажиров</option>
        </select>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <select name="luggage" id="luggage" required>
          <option value="">Количество багажа</option>
          <option value="1">1 место</option>
          <option value="2">2 места</option>
          <option value="3">3 места</option>
          <option value="4">4 места</option>
          <option value="5+">5+ мест</option>
        </select>
      </FormGroup>

      {/* Блок с датой и временем */}
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input 
          type="date" 
          placeholder="Дата поездки" 
          required 
        />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="time"
          placeholder="Время поездки"
          className="time__picker"
          required
        />
      </FormGroup>

      {/* Блок с дополнительной информацией */}
      <FormGroup>
        <textarea
          rows={5}
          className="textarea"
          placeholder="Дополнительная информация"
        ></textarea>
      </FormGroup>

      {/* Кнопка отправки формы */}
      <FormGroup className="text-center mt-4">
        <button type="submit" className="btn primary__btn">
          Забронировать
        </button>
      </FormGroup>
    </Form>
  );
};

export default BookingForm;