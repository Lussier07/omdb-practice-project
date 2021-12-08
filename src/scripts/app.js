// http://www.omdbapi.com/?apikey=[yourkey]&

const getMovies = () => {
  return fetch('http://www.omdbapi.com/?apikey=3cb6f4da&t=Star+wars&r').then(response => {
    if (response.ok) {
      return response.json();
    }
  }).catch("failed")
}

getMovies().then(response => {
  console.log(response);
})