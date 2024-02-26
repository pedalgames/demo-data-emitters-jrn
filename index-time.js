// function getTimeString() to get the current time and format it as a string in the format "HH:MM:SS", then send it as a POST request to the plugin server at http://127.0.0.1:49999/plugin?name=texts. The server will then display the time string in the plugin UI.

// Function to get the current time and format it as a string
const getTimeString = async () => {
  try {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour12: false });
    console.log(timeString);

    // Send the time string as a POST request
      const postResponse = await fetch('http://127.0.0.1:49999/plugin?name=texts', {  
          method: 'POST',
            headers: {
                'Content-Type': 'application/json'
          },
          body: JSON.stringify({ time: timeString })
            
      });
      console.log('POST request sent successfully');
  }
  catch (error) {
    console.error(error);
  }
};


// Fetch a new quote every 2 seconds
setInterval(getTimeString, 2000);