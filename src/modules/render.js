const scoreBoard = document.getElementById('scoreboard');
const myAPI = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/1uV0I3Da74nTfdPATfRO/scores/';

const render = async () => {
  try {
    const response = await fetch(myAPI);
    if (response.ok) {
      const data = await response.json();
      const { result } = data;
      const sortedScores = result.sort((a, b) => b.score - a.score);
      scoreBoard.innerHTML = '';

      sortedScores.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = `${item.user}: ${item.score}`;
        scoreBoard.appendChild(li);
      });
    } else {
      throw new Error('Failed to fetch scores.');
    }
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
};

export default render;
