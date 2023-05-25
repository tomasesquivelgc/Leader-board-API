const scoreBoard = document.getElementById('scoreboard')
const myAPI = "https://us-central1-js-capstone-backend.cloudfunctions.net/api/";

const render = async() => {
  fetch(myAPI)
  .then(res => res.json())
  .then(data => console.log(data));
}

export default render;