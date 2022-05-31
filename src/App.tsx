import { useState } from "react";
import "./App.css";
import QuizCard from "./components/QuizCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      hello world
      <QuizCard />
    </div>
  );
}

export default App;
