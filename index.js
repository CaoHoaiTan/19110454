const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

//require routes/index.js
const routes = require('./routes');
//Route init
routes(app);

app.listen(PORT);