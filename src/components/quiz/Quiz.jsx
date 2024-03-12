import React from "react";
import cl from "./Quiz.module.css";
import { useState } from "react";

const questions = [
  {
    title: "React - это ... ?",
    variants: ["библиотека", "фреймворк", "приложение"],
    correct: 0,
  },
  {
    title: "Компонент - это ... ",
    variants: [
      "приложение",
      "часть приложения или страницы",
      "то, что я не знаю что такое",
    ],
    correct: 1,
  },
  {
    title: "Что такое JSX?",
    variants: [
      "Это простой HTML",
      "Это функция",
      "Это тот же HTML, но с возможностью выполнять JS-код",
    ],
    correct: 2,
  },
];

function Result({ correct }) {
  return (
    <div className={cl.result}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
        alt=""
      />
      <h2>
        Вы отгадали {correct} ответа из {questions.length}
      </h2>
      {/* <a href="/"> */}
      <button
        onClick={() => window.location.reload()}
        className={cl.QuizButton}
      >
        Попробовать снова
      </button>
      {/* </a> */}
    </div>
  );
}

function Game({ step, question, onClickVariant }) {
  const percentage = Math.round((step / questions.length) * 100);
  console.log(percentage);

  return (
    <>
      <div className={cl.progress}>
        <div
          style={{ width: `${percentage}%` }}
          className={cl.progress__inner}
        ></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (
          <li onClick={() => onClickVariant(index)} key={text}>
            {text}
          </li>
        ))}
      </ul>
    </>
  );
}

function Quiz() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    console.log(step, index);
    setStep(step + 1);
    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  return (
    <div id="id" className={cl.main}>
      <div className={cl.Quiz}>
        {step !== questions.length ? (
          <Game
            step={step}
            question={question}
            onClickVariant={onClickVariant}
          />
        ) : (
          <Result correct={correct} />
        )}
      </div>
    </div>
  );
}

export default Quiz;
