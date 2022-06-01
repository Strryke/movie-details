import { useState, useEffect } from "react";
import "./App.css";
import QuizCard from "./components/QuizCard";
import getQuestion from "./getQuestion";
import Nav from "./components/Navbar";

function App() {
  const [question, setQuestion] = useState({});
  useEffect(() => {
    getQuestion(setQuestion);
  }, []);

  const nextQuestion = () => {
    getQuestion(setQuestion);
  };

  return (
    <>
      <Nav />
      <QuizCard {...question} nextQuestion={nextQuestion} />
    </>
  );
}

export default App;
