// Function to fetch a quote and send it as a POST request

// Uses public api at api.quotable.io
// See https://github.com/lukePeavey/quotable

const fetchQuote = async () => {
  try {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    const quote = `Quote: ${data.content}\nAuthor: ${data.author}`;
    console.log(quote);

    // Send the quote as a POST request
    const postResponse = await fetch('http://127.0.0.1:49999/plugin?name=texts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ quote: quote })
    });
    console.log('POST request sent successfully');
  } catch (error) {
    console.error(error);
  }
};

// Fetch a new quote every 10 seconds
setInterval(fetchQuote, 10000);
