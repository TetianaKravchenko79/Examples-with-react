import React from "react";
import { useState } from "react";
import cl from "./MyModal.module.css";

function MyModal() {
  const [open, setOpen] = useState(false);

  return (
    <div className={cl.MyModal}>
      <button onClick={() => setOpen(true)} className={cl.openModalBtn}>
        ✨ Открыть окно
      </button>

      {open && (
        <div className={cl.overlay}>
          <div className={cl.modal}>
            <img
              className={cl.ModalImg}
              src="https://64.media.tumblr.com/tumblr_mc3i3qY2971qzicj3o1_500.gifv"
              alt="cats"
            />
          </div>
          <button onClick={() => setOpen(false)} className={cl.closeBtn}>
            ✨X
          </button>
        </div>
      )}
    </div>
  );
}

export default MyModal;
