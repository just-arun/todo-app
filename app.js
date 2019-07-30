const express = require("express");
const { json, urlencoded } = require("express");
const path = require('path');
const todo = require('./routes');
const app = express();

app.use(json());
app.use(urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// when the router goes for /api then it will be redirected to todo route file
app.use('/api',todo);


let PORT = process.env.PORT || 3000;
app.listen(PORT,()=>console.log(`app started at http://localhost:${PORT}`));

