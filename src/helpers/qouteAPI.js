export async function getQuote(url = 'http://quotes.rest/qod.json?category=inspire', data = {}) {
    const response = await fetch(url, {
      method: 'GET', 
      mode: 'cors', 
            headers: {
        'Content-Type': 'application/json'
      },
    });
    return response.json();
  }