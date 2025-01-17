// Function to generate random string and send it as a POST request

const sendText = async () => {
  try {
    const randomString = Math.random().toString(36).substring(2, 52);
    console.log(randomString);

    // Send the quote as a POST request
    const postResponse = await fetch('http://127.0.0.1:49999/plugin?name=texts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ quote: randomString })
    });
    console.log('POST request sent successfully');
  } catch (error) {
    console.error(error);
  }
};

// Fetch a new quote every 10 seconds
setInterval(sendText, 10000);
