const express = require('express');
const router = express.Router();

const fetch = require('node-fetch');

router.get('/', async (req, res) => {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await respuesta.json();
    res.json(users);
})
    
router.get('/users/signin', (req, res) => {
    res.send('Ingresando a la app');
});

router.get('/users/signup', (req, res) => {
    res.send('Formulario de autenticación');
});

module.exports = router;