import React, { useState } from "react";
import "./QuestionFormCard.scss";
import AnswerInput from "./AnswerInput/AnswerInput";
import QuestionInput from "./QuestionInput/QuestionInput";
import PropTypes from 'prop-types'

const QuestionFormCard = ({lessonTitleText, setLessonTitleText, questions, setQuestions}) => {
  const [questionText, setQuestionText] = useState("");
  const [correctAnswerText, setCorrectAnswerText] = useState("");
  const [incorrectAnswerText1, setIncorrectAnswerText1] = useState("")
  const [incorrectAnswerText2, setIncorrectAnswerText2] = useState("")
  const [incorrectAnswerText3, setIncorrectAnswerText3] = useState("")
  const [readingText, setReadingText] = useState("")

  const isEnabled = 
    questionText.trim() === '' ||
    correctAnswerText.trim() === '' ||
    incorrectAnswerText1.trim() === '' 

  const addQuestion = (e) => {
    e.preventDefault();
    createQuestion()
    clearInputs()
  };

  const createQuestion = () => {
    setQuestions([...questions, {
      id: Date.now(),
      question: questionText,
      reading: readingText,
      answers: [
        {answer: correctAnswerText, correct: 'true'},
        {answer: incorrectAnswerText1, correct: 'false'},
        {answer: incorrectAnswerText2, correct: 'false'},
        {answer: incorrectAnswerText3, correct: 'false'}
      ]
    }])
  }

  const clearInputs = () => {
    setQuestionText('')
    setCorrectAnswerText('')
    setIncorrectAnswerText1('')
    setIncorrectAnswerText2('')
    setIncorrectAnswerText3('')
    setReadingText('')
    document.getElementById('assigned-reading').value = ''
  }

  return (
    <form className="question-form-card">
      <section className='question-form-input'>
        <label htmlFor='lesson-title'>Assessment Title:</label>
        <input
          id='lesson-title'
          type="text"
          placeholder="Enter Assessment Title..."
          value={lessonTitleText}
          aria-label="Lesson Title Input"
          onChange={(e) => setLessonTitleText(e.target.value)}
        />
      </section>
      <section className='assigned-reading-input'>
        <label htmlFor='assigned-reading'>Reading:</label>
        <textarea id='assigned-reading' onChange={(e) => setReadingText(e.target.value)} placeholder='Enter text...'></textarea>
      </section>
      <section className='question-form-input'>
        <label htmlFor='question-input'>Question:</label>
        <QuestionInput 
          setQuestionText={(e) => setQuestionText(e.target.value)} 
          questionText={questionText}
        />
      </section>
      <section className='question-form-input'>
        <label htmlFor='answer-input'>Correct Answer:</label>
        <AnswerInput 
          testId='correct'
          correct={true} 
          answerText={correctAnswerText} 
          setAnswerText={setCorrectAnswerText}
        />
      </section>
      <section className='question-form-input'>
        <label htmlFor='answer-input'>Incorrect Answer 1:</label>
        <AnswerInput 
          testId='incorrect1'
          correct={false} 
          answerText={incorrectAnswerText1} 
          setAnswerText={setIncorrectAnswerText1}
        />
      </section>
      <section className='question-form-input'>
        <label htmlFor='answer-input'>Incorrect Answer 2:</label>
        <AnswerInput 
          testId='incorrect2'
          correct={false} 
          answerText={incorrectAnswerText2} 
          setAnswerText={setIncorrectAnswerText2}
        />
      </section>
      <section className='question-form-input'>
        <label htmlFor='answer-input'>Incorrect Answer 3:</label>
        <AnswerInput 
          testId='incorrect3'
          correct={false} 
          answerText={incorrectAnswerText3} 
          setAnswerText={setIncorrectAnswerText3}
        />
      </section>
      <button className='add-question-btn' disabled={isEnabled} onClick={addQuestion}>Add Question</button>
    </form>
  );
};

export default QuestionFormCard;

QuestionFormCard.propTypes = {
  lessonTitleText: PropTypes.string, 
  setLessonTitleText: PropTypes.func.isRequired, 
  questions: PropTypes.array.isRequired, 
  setQuestions: PropTypes.func.isRequired
}