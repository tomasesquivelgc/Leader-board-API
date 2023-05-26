const nameInput = document.getElementById('name-input');
const scoreInput = document.getElementById('score-input');
const myAPI = "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/1uV0I3Da74nTfdPATfRO/scores/";

const addScore = async () => {
  const name = nameInput.value;
  const score = Number(scoreInput.value); // Convert the score value to a number using the Number() function

  // Check if the score is a valid number
  if (Number.isNaN(score)) {
    console.log('Invalid score value. Please enter a number.');
    return;
  }

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