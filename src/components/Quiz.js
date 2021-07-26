import React, { useState } from "react";
import "../styling/Quiz.css";
import { questions } from "../assets/quiz";

export default function Quiz() {
  const [currentque, setCurrentque] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextque = currentque + 1;
    if (nextque < questions.length) {
      setCurrentque(nextque);
    } else {
      setShowScore(true);
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="header">
          <h1>Quiz</h1>
        </div>
        {showScore ? (
          <div className="score-section">
            <h1>
              you scored {score} out of {questions.length}
            </h1>
          </div>
        ) : (
          <div className="container">
            <div className="row Main-box" style={{ display: "flex" }}>
              <div className="col-lg-7 col-md-12 col-12 que-section">
                <span>Question {currentque + 1} </span>/{questions.length}.
                <br />
                <span className="que-text">
                  {questions[currentque].questionText}
                </span>
              </div>
              <div className="col-lg-5 col-md-12 col-12 ans-section">
                <div className="row">
                  {questions[currentque].answerOptions.map((ansOptions) => (
                    <button
                      className="col-lg-12"
                      onClick={() => handleAnswer(ansOptions.isCorrect)}
                    >
                      {ansOptions.answerText}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
