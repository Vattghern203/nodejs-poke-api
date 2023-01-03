const express = require('express');
const routes = require('./routes/index.js');

const app = express()
const port = 9090

routes(app)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
