const button = document.getElementById('jokebtn');
const jokeP = document.querySelector('.container p');
document.addEventListener('DOMContentLoaded', getJoke)

button.addEventListener('click', getJoke);

async function getJoke(){
  const data = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      'Accept': 'application/json'
    }
  });
  const jokeObj = await data.json();
  jokeP.innerHTML = jokeObj.joke;
}

