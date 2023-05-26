const nameInput = document.getElementById('name-input');
const scoreInput = document.getElementById('score-input');
const myAPI = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/1uV0I3Da74nTfdPATfRO/scores/';

const addScore = async () => {
  const name = nameInput.value;
  const score = Number(scoreInput.value);

  // Check if the score is a valid number
  if (Number.isNaN(score)) {
    throw new Error('Invalid score value. Please enter a number.');
  }

  // Create the data object
  const data = { user: name, score };

  try {
    // Send the data to the API
    const response = await fetch(myAPI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      // Reset input fields
      nameInput.value = '';
      scoreInput.value = '';
      return 'Score added successfully.';
    }
    throw new Error('Failed to add score.');
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
};

export default addScore;
