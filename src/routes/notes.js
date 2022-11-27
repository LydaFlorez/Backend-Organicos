const express = require('express');
const router = express.Router();
const _ = require('underscore');

const notes = require('../ejemplo.json');
//console.log(notes);

router.get('/', (req, res) => {
    res.json(notes);
});

router.post('/', (req, res) => {
    const { palabra, tipo, significado } = req.body;
    if(palabra && tipo && significado) {
        const id = notes.length + 1
        const newPalabra = {...req.body, id};
        notes.push(newPalabra);
        res.json(notes);
    } else {
        res.status(500).json({"error": "Ha ocurrido un error."});
    }
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    _.each(notes, (note, i) => {
        if(note.id == id) {
            notes.splice(i, 1);
        }
    });
    res.send(notes);
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { palabra, tipo, significado } = req.body;
    if(palabra && tipo && significado) {
        _.each(notes, (note, i) => {
            if(note.id == id) {
                note.palabra = palabra;
                note.tipo = tipo;
                note.significado = significado;
            }
        });
        res.json(notes);
    } else {
        res.status(500).json({error: "Ha ocurrido un error."});
    }
});

module.exports = router;