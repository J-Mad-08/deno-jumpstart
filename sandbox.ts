// fetch api
const res = await fetch('https://swapi.dev/api/films/');
const data = await res.json();
// use allow-net to run files from network
console.log(data);
