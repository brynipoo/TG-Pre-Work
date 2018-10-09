// Information to reach API
const apiKey = '<327c0b09a20c4921857e643bff744b17>';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});
  fetch(url, {
    method:'POST',
    headers: {
      'Content-type': 'application/json',
      'apikey': apiKey },
    body: data,
  }).then(response => {
    if (response.ok){
      return response.json();
    } throw new Error('Request failed!');
  }, networkError => {
    console.log(networkError.message);
  });
}

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild)
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);



// In the previous exercise we prepared to make the POST request by providing the endpoint and the object
// containing all the necessary information. All of this new code will handle the response. The request
// returns a Promise which will either be resolved or rejected. If the promise resolves, you can use
// that information and the ok status.
