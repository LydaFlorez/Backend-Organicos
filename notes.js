const express= require("express");
const router= express.Router();
const notes=require("../ejemplo.json")
const _ = require('underscore');
const { route } = require(".");
console.log(notes);
router.get('/', (req, res) => {
    res.json(notes);

});
router.post("/", (req,res)=>{
    const{palabra, tipo, significado}  = req.body;
    if(palabra && tipo && significado){
        const id= notes.length + 1
        const newpalabra= {id, ...req.body};
        console.log(newpalabra);
        notes.push(newpalabra);
     res.json(notes);
    }else{
        res.status(500).json({"erro":"peticion erronea"});
    }
    
});
router.delete('/:id', (req,res) =>{
    const{id}=req.params;
    _.each(notes, (note, i)=>{
        if(note.id==id){
            notes.splice(i, 1);
        }
    });
    res.send(notes);
})

router.put('/:id', (req, res)=>{
    const{id}=req.params;
    const{palabra, tipo, significado}  = req.body;
    if(palabra && tipo && significado){
        _.each(notes, (note, i)=>{
            if(note.id==id){
                note.palabra=palabra;
                note.tipo=tipo;
                note.significado=significado;
            }
            });
        res.json(notes);
    }else{
        res.status(500).json({error:"ha ocurrido un error"})
    }
});
module.exports=router;
