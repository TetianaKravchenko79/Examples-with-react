import React from "react";
import { useState } from "react";
import Quiz from "../quiz/Quiz";
import cl from "./MyModal2.module.css";

function MyModal2() {
  const [open, setOpen] = useState(false);
  return (
    <div className={cl.MyModal2}>
      <button onClick={() => setOpen(true)} className={cl.openModalBtn2}>
        ✾ Открыть окно Quiz ✾
      </button>

      {open && (
        <div className={cl.overlay2}>
          <Quiz />
          <button onClick={() => setOpen(false)} className={cl.closeBtn2}>
            ❁ X ❁
          </button>
        </div>
      )}
    </div>
  );
}

export default MyModal2;
