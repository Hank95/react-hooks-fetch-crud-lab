import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questionsData, setQuestionsData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((res) => res.json())
      .then((json) => {
        setQuestionsData(json);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const addNewData = (newData) => {
    const updatedData = [...questionsData, newData];
    setQuestionsData(updatedData);
  };

  const handleDelete = (id) => {
    console.log(id);
    const updatedData = questionsData.filter((item) => item.id !== id);
    setQuestionsData(updatedData);
  };
  const handleNewChange = (id) => {
    const updatedData = questionsData.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          correctIndex: id,
        };
      } else {
        return item;
      }
    });
    setQuestionsData(updatedData);
  };

  console.log(questionsData);

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? (
        <QuestionForm sendNewData={addNewData} />
      ) : (
        <QuestionList
          questions={questionsData}
          deleteClick={handleDelete}
          onNewChange={handleNewChange}
        />
      )}
    </main>
  );
}

export default App;
