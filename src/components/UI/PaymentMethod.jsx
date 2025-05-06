import React from "react";
import masterCard from "../../assets/all-images/master-card.jpg";
import paypal from "../../assets/all-images/paypal.jpg";
import "../../styles/payment-method.css";

const PaymentMethod = () => {
  return (
    <div className="payment-methods">
      {/* Банковский перевод */}
      <div className="payment">
        <label className="payment-label d-flex align-items-center gap-2">
          <input 
            type="radio" 
            name="paymentMethod" 
            value="bankTransfer" 
          />
          Прямой банковский перевод
        </label>
      </div>

      {/* Чековая оплата */}
      <div className="payment mt-3">
        <label className="payment-label d-flex align-items-center gap-2">
          <input 
            type="radio" 
            name="paymentMethod" 
            value="cheque" 
          />
          Оплата чеком
        </label>
      </div>

      {/* MasterCard */}
      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label className="payment-label d-flex align-items-center gap-2">
          <input 
            type="radio" 
            name="paymentMethod" 
            value="mastercard" 
          />
          MasterCard
        </label>
        <img src={masterCard} alt="Логотип MasterCard" className="payment-logo" />
      </div>

      {/* PayPal */}
      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label className="payment-label d-flex align-items-center gap-2">
          <input 
            type="radio" 
            name="paymentMethod" 
            value="paypal" 
          />
          PayPal
        </label>
        <img src={paypal} alt="Логотип PayPal" className="payment-logo" />
      </div>

      {/* Кнопка подтверждения */}
      <div className="payment-submit text-end mt-5">
        <button className="payment-button">
          Подтвердить бронирование
        </button>
      </div>
    </div>
  );
};

export default PaymentMethod;