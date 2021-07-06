import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, deleteClick, onNewChange }) {
  const questionsList = questions.map((q) => (
    <QuestionItem
      key={q.id}
      question={q}
      deleter={deleteClick}
      onNewChange={onNewChange}
    />
  ));
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionsList}</ul>
    </section>
  );
}

export default QuestionList;
