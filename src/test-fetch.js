const fetch = require('node-fetch');

fetch('https://swapi.dev/api/people/2')
.then(res => res.json())
.then(res => console.log(res));