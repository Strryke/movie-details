const SHITTY_API = "https://www.reddit.com/r/moviedetails/random.json";
const DETAIL_API = "https://www.reddit.com/r/shittymoviedetails/random.json";

function randomChoice() {
  const arr = ["shitty", "detail"];
  return arr[Math.floor(arr.length * Math.random())];
}

async function getData(url: string) {
  const res = await fetch(url);
  let data = await res.json();
  data = data[0].data.children[0].data;
  if (data.is_gallery || data.is_self || data.is_video) {
    return false;
  } else return data;
}

export default async function getQuestion(setter: Function) {
  const type = randomChoice();
  if (type == "shitty") {
    const res = await getData(SHITTY_API);
    if (res === false) {
      return getQuestion;
    } else {
      setter(res);
    }
  } else if (type == "detail") {
    const res = await getData(DETAIL_API);
    if (res === false) {
      return getQuestion;
    } else {
      setter(res);
    }
  }
}
