const express = require('express');
const app = express();
const morgan = require('morgan');

//settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//middleware (funcion que procesa datos antes de que los reciba el servidor)
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


//routes

app.use(require('./routes/index.js'));
app.use('/api/usuarios/',require('./routes/usuarios.js'));

//starting the server
app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
});