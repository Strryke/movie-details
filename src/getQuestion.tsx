const SHITTY_API = "https://www.reddit.com/r/moviedetails/random.json";
const DETAIL_API = "https://www.reddit.com/r/shittymoviedetails/random.json";
const TOP_SHITTY =
  "https://www.reddit.com/r/shittymoviedetails/top.json?limit=50&t=all";
const TOP_DETAIL =
  "https://www.reddit.com/r/moviedetails/top.json?limit=50&t=all";

function randomChoice(arr: any) {
  return arr[Math.floor(arr.length * Math.random())];
}

async function getData(url: string) {
  const res = await fetch(url);
  let data = await res.json();
  data = data[0].data.children[0].data;
  if (
    data.is_gallery ||
    data.is_self ||
    data.is_video ||
    Object.keys(data.media_embed).length !== 0 ||
    data.ups <= 500
  ) {
    return false;
  } else return data;
}

export async function getBoth(setter: Function) {
  const fetchDetail = fetch(TOP_DETAIL).then((res) => res.json());
  const fetchShitty = fetch(TOP_SHITTY).then((res) => res.json());
  const allData = Promise.all([fetchDetail, fetchShitty]);
  allData.then((res) => {
    setter(res);
  });
}

// export default async function getQuestion(
//   setter: Function,
//   loading: Function
// ): Promise<Function | undefined> {
//   getBoth();
//     loading(true);
//     const type = randomChoice();
//     if (type == "shitty") {
//       const res = await getData(SHITTY_API);
//       if (res === false) {
//         return getQuestion(setter, loading);
//       } else {
//         setter(res);
//         loading(false);
//       }
//     } else if (type == "detail") {
//       const res = await getData(DETAIL_API);
//       if (res === false) {
//         return getQuestion(setter, loading);
//       } else {
//         setter(res);
//         loading(false);
//       }
//     }
//     return;
// }

const checkQuestion = (question: any) => {
  //   console.log(question);
  if (
    question.is_gallery ||
    question.is_self ||
    question.is_video ||
    Object.keys(question.media_embed).length !== 0
  )
    return false;
  else return true;
};

export function getQuestion(
  questionList: any,
  setter: Function,
  loader: Function
): any {
  let choice = randomChoice([0, 1]); //detail [0] or shitty [1]
  let chosenQns = randomChoice(questionList[choice].data.children).data;
  while (checkQuestion(chosenQns) === false) {
    chosenQns = randomChoice(questionList[choice].data.children).data;
  }
  setter(chosenQns);
  loader(false);
}
