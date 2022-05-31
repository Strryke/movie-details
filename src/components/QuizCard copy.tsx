import React, { useState, useEffect } from "react";

function QuizCard() {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    fetch("https://www.reddit.com/r/moviedetails/random.json")
      .then((response) => response.json())
      .then((data) => {
        setPost(data[0].data.children[0].data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(post.title);

  return <div>QuizCard</div>;
}

export default QuizCard;
