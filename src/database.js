const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/notes-db-app', {
    //useCreateIndex: true,
    //useNewUrlParser: true,
    //useFindAndModify: false
})
.then(db => console.log('La Base de datos esta conectada.'))
.catch(err => console.error(err));