const bodyParser = require('body-parser');
const users = require('./userRoute.js');

module.exports = app =>{
    app.use(bodyParser.json())
    app.use(users)
}