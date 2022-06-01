import { useState, useEffect } from "react";
import "./App.css";
import QuizCard from "./components/QuizCard";
import { getQuestionList } from "./questionList";

function App() {
  const [questionList, setQuestionList] = useState([]);

  useEffect(() => {
    getQuestionList(setQuestionList);
  }, []);

  return (
    <>
      {questionList &&
        questionList.map((question: any) => (
          <QuizCard title={question.title} image={question.url} shitty={true} />
        ))}
    </>
  );
}

export default App;
