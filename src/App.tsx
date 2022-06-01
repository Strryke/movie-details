import { useState, useEffect } from "react";
import "./App.css";
import QuizCard from "./components/QuizCard";
import getQuestion from "./getQuestion";
import Nav from "./components/Navbar";
import { Center, Spinner, useDisclosure } from "@chakra-ui/react";
import IntroModal from "./components/Intro";

function App() {
  const [loading, setLoading] = useState(true);
  const [question, setQuestion] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const tutorial = localStorage.getItem("tutorial");
    if (tutorial !== "true") {
      onOpen();
      localStorage.setItem("tutorial", "true");
    }
    getQuestion(setQuestion, setLoading);
  }, []);

  const nextQuestion = () => {
    getQuestion(setQuestion, setLoading);
  };

  return (
    <>
      <IntroModal isOpen={isOpen} onClose={onClose} />
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
