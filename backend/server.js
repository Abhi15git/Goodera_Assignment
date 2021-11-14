let express = require('express');
let connect = require('../backend/db');
let app = express();
let jobController = require('./jobs.controllers');
app.use(express.json());

app.use('/jobs',jobController);



app.listen('8080',async function(){
    await connect;
    console.log('listening to port 8080')
})


