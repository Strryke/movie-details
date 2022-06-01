const SHITTY_API = "https://www.reddit.com/r/moviedetails/random.json";
const DETAIL_API = "https://www.reddit.com/r/shittymoviedetails/random.json";
// const SHITTY_API =
//   "https://www.reddit.com/r/shittymoviedetails/top.json?limit=50";
// const DETAIL_API = "https://www.reddit.com/r/MovieDetails/top.json?limit=50";

function randomChoice() {
  const arr = ["shitty", "detail"];
  return arr[Math.floor(arr.length * Math.random())];
}

async function getData(url: string) {
  const res = await fetch(url);
  let data = await res.json();
  //   console.log(data);
  data = data[0].data.children[0].data;
  if (
    data.is_gallery ||
    data.is_self ||
    data.is_video ||
    Object.keys(data.media_embed).length !== 0
  ) {
    return false;
  } else return data;
}

export default async function getQuestion(
  setter: Function,
  loading: Function
): Promise<Function | undefined> {
  loading(true);
  const type = randomChoice();
  if (type == "shitty") {
    const res = await getData(SHITTY_API);
    if (res === false) {
      return getQuestion(setter, loading);
    } else {
      setter(res);
      loading(false);
    }
  } else if (type == "detail") {
    const res = await getData(DETAIL_API);
    if (res === false) {
      return getQuestion(setter, loading);
    } else {
      setter(res);
      loading(false);
    }
  }
  return;
}
