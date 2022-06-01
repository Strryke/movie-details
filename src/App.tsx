import { useState, useEffect } from "react";
import "./App.css";
import QuizCard from "./components/QuizCard";
import { getQuestionList } from "./questionList";

function App() {
  const [questionList, setQuestionList] = useState([]);

  useEffect(() => {
    getQuestionList(setQuestionList);
  }, []);

  console.log(questionList);

  return (
    <>
      {questionList &&
        questionList.map((question: any) => (
          <QuizCard
            title={question.title}
            image={question.url}
            subreddit={question.subreddit}
            link={question.permalink}
            selftext={question.selftext}
          />
        ))}
    </>
  );
}

export default App;
