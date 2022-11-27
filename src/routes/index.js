const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => {
    const dato = {
        "palabra": "want",
        "tipo": "verbo",
        "significado": "querer"
    };
    res.json(dato);
})

router.get('/about', (req, res) => {
    res.send('Sobre nosotros ...');
});


module.exports = router