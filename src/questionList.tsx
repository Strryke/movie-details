import axios from "axios";

const SHITTY_API = "https://www.reddit.com/r/moviedetails/random.json";
const DETAIL_API = "https://www.reddit.com/r/shittymoviedetails/random.json";

function randomChoice(arr: string[]) {
  return arr[Math.floor(arr.length * Math.random())];
}

const getQuestionList = async (setState: Function) => {
  const questionType = [];
  const questionList: string[] = [];
  const endpoints = [];

  for (let i = 0; i < 5; i++) {
    questionType.push(randomChoice(["shitty", "detail"]));
  }

  for (const type of questionType) {
    if (type === "shitty") {
      endpoints.push(SHITTY_API);
    } else {
      endpoints.push(DETAIL_API);
    }
  }

  axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((data) => {
    data.forEach((data) =>
      questionList.push(data.data[0].data.children[0].data)
    );

    setState(questionList);
  });
};

export { getQuestionList };
