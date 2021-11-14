let express = require('express');
let connect = require('../backend/db');
let app = express();
let jobController = require('./jobs.controllers');
let data = require('./data.json');
app.use(express.json());

app.use('/jobs',jobController);



app.listen(process.env.PORT || '8080',async function(){
    await connect;
    console.log('listening to port 8080')
})


