const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');
const morgan = require('morgan');

//Inicializaciones
const app = express();
//require('./database');

//Settings
app.set('port', process.env.PORT || 8081);
app.set('views', path.join(__dirname, 'views'));
app.set('.hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
}));
app.set('view engine', '.hbs');
app.set('json spaces', 2);

//Middlewares
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true
}));
app.use(morgan('dev'));
app.use(express.json());

//Global Variables

//Routes
app.use(require('./routes/index'));
app.use('/api/notes', require('./routes/notes'));
app.use('/api/users', require('./routes/users'));

//Static Files
app.use(express.static(path.join(__dirname, 'public')));

//Server on listening
app.listen(app.get('port'), () => {
    console.log(`Servidor escuchando en el puerto ${app.get('port')}`);
});

