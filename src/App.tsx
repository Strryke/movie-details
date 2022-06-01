import { useState, useEffect } from "react";
import "./App.css";
import QuizCard from "./components/QuizCard";
import getQuestion from "./getQuestion";
import Nav from "./components/Navbar";
import { Center, Spinner } from "@chakra-ui/react";

function App() {
  const [loading, setLoading] = useState(true);
  const [question, setQuestion] = useState({});
  useEffect(() => {
    getQuestion(setQuestion, setLoading);
  }, []);

  const nextQuestion = () => {
    getQuestion(setQuestion, setLoading);
  };

  return (
    <>
      <Nav />
      {loading ? (
        <Center h="100vh" w="100vw">
          <Spinner />
        </Center>
      ) : (
        <>
          <QuizCard {...question} nextQuestion={nextQuestion} />
        </>
      )}
    </>
  );
}

export default App;
