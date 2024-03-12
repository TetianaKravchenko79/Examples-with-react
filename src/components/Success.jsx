import React from "react";
import cl from "./Users/List.module.css";

export const Success = ({ count }) => {
  return (
    <div class={cl.success_block}>
      <img
        src="https://img.icons8.com/ios-filled/50/40C057/ok--v1.png"
        alt="Success"
      />
      <h3>Успешно!</h3>
      <p>Всем {count} пользователям отправлено приглашение.</p>
      <button
        onClick={() => window.location.reload()}
        className={cl.send_invite_btn}
      >
        Назад
      </button>
    </div>
  );
};
