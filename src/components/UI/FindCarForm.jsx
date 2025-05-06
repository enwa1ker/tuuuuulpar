import React from "react";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";

const FindCarForm = () => {
  return (
    <Form className="find-car-form">
      <div className="form-container d-flex align-items-center justify-content-between flex-wrap">
        {/* Пункт отправления */}
        <FormGroup className="form__group">
          <input 
            type="text" 
            placeholder="Откуда (адрес или место)" 
            className="form-control"
            required 
          />
        </FormGroup>

        {/* Пункт назначения */}
        <FormGroup className="form__group">
          <input 
            type="text" 
            placeholder="Куда (адрес или место)" 
            className="form-control"
            required 
          />
        </FormGroup>

        {/* Дата поездки */}
        <FormGroup className="form__group">
          <input 
            type="date" 
            placeholder="Дата поездки" 
            className="form-control date-picker"
            required 
          />
        </FormGroup>

        {/* Время поездки */}
        <FormGroup className="form__group">
          <input
            type="time"
            placeholder="Время поездки"
            className="form-control time-picker"
            required
          />
        </FormGroup>

        {/* Тип автомобиля */}
        <FormGroup className="form__group select-group">
          <select className="form-select">
            <option value="">Тип автомобиля</option>
            <option value="ac">С кондиционером</option>
            <option value="non-ac">Без кондиционера</option>
          </select>
        </FormGroup>

        {/* Кнопка поиска */}
        <FormGroup className="form__group submit-group">
          <button 
            type="submit" 
            className="btn find__car-btn primary-btn"
          >
            Найти автомобиль
          </button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;