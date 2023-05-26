const nameInput = document.getElementById('name-input');
const scoreInput = document.getElementById('score-input');
const myAPI = "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Y5OAVzTqhjyg1NbzMAou/scores/";

const addScore = async () => {
  const name = nameInput.value;
  const score = scoreInput.value;

  // Create the data object
  const data = { user: name, score };

  try {
    // Send the data to the API
    const response = await fetch(myAPI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      // Reset input fields
      nameInput.value = '';
      scoreInput.value = '';
      console.log('Score added successfully.');
    } else {
      console.log('Failed to add score.');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

export default addScore;