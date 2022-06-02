import { useState, useEffect } from "react";
import "./App.css";
import QuizCard from "./components/QuizCard";
import { getBoth, getQuestion } from "./getQuestion";
import Nav from "./components/Navbar";
import { Box, Center, Spinner, useDisclosure } from "@chakra-ui/react";
import IntroModal from "./components/Intro";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);
  const [questionList, setQuestionList] = useState();
  const [question, setQuestion] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    getBoth(setQuestionList);
    const tutorial = localStorage.getItem("tutorial");
    if (tutorial !== "true") {
      onOpen();
      localStorage.setItem("tutorial", "true");
    }
  }, []);

  if (questionList && Object.keys(question).length === 0) {
    getQuestion(questionList, setQuestion, setLoading);
  }
  const nextQuestion = () => {
    getQuestion(questionList, setQuestion, setLoading);
  };

  return (
    <>
      <Box minH="100vh" display={"flex"} flexDirection="column">
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
        <Footer />
      </Box>
    </>
  );
}

export default App;
