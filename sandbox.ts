// fetch api
// look at deno permissions page: https://deno.land/manual@v1.27.2/basics/permissions#permissions
const res = await fetch('https://swapi.dev/api/films/');
const data = await res.json();
// use allow-net to run files from network
console.log(data);
