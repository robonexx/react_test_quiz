import React, { useState } from 'react';
import QuizHeader from './QuizHeader';
import QuizQuestion from './QuizQuestion';
import { quizData } from '../../assets/quizData';

import './quiz.scss';

const Quiz = () => {
  const [quizState, setQuizState] = useState({
    currentQuiz: 0,
    score: 0,
    selectedAnswers: Array(quizData.length).fill(null),
    quizCompleted: false,
  });

  const handleAnswerSubmit = (selectedAnswer) => {
    setQuizState((prevState) => {
      const updatedAnswers = [...prevState.selectedAnswers];
      updatedAnswers[prevState.currentQuiz] = selectedAnswer;

      return {
        ...prevState,
        selectedAnswers: updatedAnswers,
        score:
          selectedAnswer === quizData[prevState.currentQuiz].correct
            ? prevState.score + 1
            : prevState.score,
        currentQuiz:
          prevState.currentQuiz + 1 < quizData.length
            ? prevState.currentQuiz + 1
            : prevState.currentQuiz,
        quizCompleted: prevState.currentQuiz + 1 === quizData.length,
      };
    });
  };

  const handleReload = () => {
    setQuizState({
      currentQuiz: 0,
      score: 0,
      selectedAnswers: Array(quizData.length).fill(null),
      quizCompleted: false,
    });
  };

  const currentQuizData = quizData[quizState.currentQuiz];

  return (
    <div className='quiz-container' id='quiz' data-testid='quiz'>
      {quizState.quizCompleted ? (
        <div className='quiz-result'>
          <h3>You answered correctly on:</h3>
          <h4>
            {quizState.score} out of {quizData.length} questions{' '}
          </h4>
          <h3 className='special'>Details:</h3>
          <ul>
            {quizData.map((question, index) => (
              <li key={index}>
                Question {index + 1}:{' '}
                <span
                  className={`${
                    quizState.selectedAnswers[index] === question.correct
                      ? 'right'
                      : 'wrong'
                  }`}
                >
                  {quizState.selectedAnswers[index] === question.correct
                    ? 'Correct'
                    : 'Wrong'}
                </span>
              </li>
            ))}
          </ul>
          <button onClick={handleReload}>Reload</button>
        </div>
      ) : (
        <>
          <QuizHeader question={currentQuizData.question} />
          <QuizQuestion
            questionData={currentQuizData}
            selectedAnswer={quizState.selectedAnswers[quizState.currentQuiz]}
            onAnswerSubmit={handleAnswerSubmit}
          />
        </>
      )}
    </div>
  );
};

export default Quiz;
