document.addEventListener('DOMContentLoaded', async function () {
  const redText = document.getElementById('red-txt');
  const redTextScore = document.getElementById('red-txt-score');
  const redImage = document.getElementById('red-image');

  const yellowText = document.getElementById('yellow-txt');
  const yellowTextScore = document.getElementById('yellow-txt-score');
  const yellowImage = document.getElementById('yellow-image');

  const greenText = document.getElementById('green-txt');
  const greenTextScore = document.getElementById('green-txt-score');
  const greentImage = document.getElementById('green-image');

  const blueText = document.getElementById('blue-txt');
  const blueTextScore = document.getElementById('blue-txt-score');
  const blueImage = document.getElementById('blue-image');

  const getData = async () => {
    try {
      const response = await fetch('./data.json');

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      // Parse the JSON and return it
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Something went wrong: ${error.message}`);
      return null; // Return null or handle the error as needed
    }
  };

  // Use the returned data
  const data = await getData();
  // if (data) {
  //   console.log('Data fetched:', data);
  //   // Perform operations with the data
  // }

  redText.innerHTML = data[0].category;
  redTextScore.innerHTML = data[0].score;
  redImage.src = data[0].icon;

  yellowText.innerHTML = data[1].category;
  yellowTextScore.innerHTML = data[1].score;
  yellowImage.src = data[1].icon;

  greenText.innerHTML = data[2].category;
  greenTextScore.innerHTML = data[2].score;
  greentImage.src = data[2].icon;

  blueText.innerHTML = data[3].category;
  blueTextScore.innerHTML = data[3].score;
  blueImage.src = data[3].icon;
});
