import React from "react";
import { useState } from "react";
import cl from "./Counter.module.css";

const Counter = function () {
  const [count, setCount] = useState(0);

  const onClickPlus = () => {
    setCount(count + 1);
  };

  const onClickMinus = () => {
    setCount(count - 1);
  };

  return (
    <div className={cl.whole}>
      <div className={cl.counter}>
        <div>
          <h2 className={cl.h2_1}>Counter: </h2>
          <h1 className={cl.h1_1}>{count}</h1>
          <button onClick={onClickPlus} className={cl.plus}>
            + Plus
          </button>
          <button onClick={onClickMinus} className={cl.minus}>
            - Minus
          </button>
        </div>
      </div>
    </div>
  );
};
export default Counter;
