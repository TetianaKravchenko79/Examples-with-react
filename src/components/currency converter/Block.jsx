import React from "react";
import cl from "./Currency.module.css";

const defaultCurrencies = ["UAH", "USD", "EUR", "GBP", "PLN"];

export const Block = ({ value, currency, onChangeValue, onChangeCurrency }) => (
  <div className={cl.block}>
    <ul className={cl.currencies}>
      {defaultCurrencies.map((cur) => (
        <li
          onClick={() => onChangeCurrency(cur)}
          className={currency === cur ? cl.active : ""}
          key={cur}
        >
          {cur}
        </li>
      ))}
      <li>
        <svg height="50px" viewBox="0 0 50 50" width="50px">
          <rect fill="none" height="50" width="50" />
          <polygon points="47.25,15 45.164,12.914 25,33.078 4.836,12.914 2.75,15 25,37.25 " />
        </svg>
      </li>
    </ul>
    <input
      className={cl.input1}
      onChange={(e) => onChangeValue(e.target.value)}
      value={value}
      type="number"
      placeholder={0}
    />
  </div>
);
