const scoreBoard = document.getElementById('scoreboard');
const myAPI = "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/1uV0I3Da74nTfdPATfRO/scores/";

const render = async () => {
  try {
    const response = await fetch(myAPI);
    if (response.ok) {
      const data = await response.json();
      const result = data.result; // Get the array from the 'result' property
      const sortedScores = result.sort((a, b) => b.score - a.score); // Sort scores in descending order
      scoreBoard.innerHTML = ''; // Clear the scoreboard before rendering new elements

      sortedScores.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.user}: ${item.score}`;
        scoreBoard.appendChild(li);
      });
    } else {
      console.log('Failed to fetch scores.');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

export default render;
