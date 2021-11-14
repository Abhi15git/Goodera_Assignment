let express = require('express');
let app = express();
let router = express.Router();
let Jobs = require('./jobs.model')

app.use(express.json());

router.post('/',async function(req,res){

    let Job = await Jobs.create(req.body);

res.status(201).send('success');    

})

router.get('/',async function(req,res){
   
    let jobs = await Jobs.find().lean().exec();
    res.status(200).send({jobs});
})

router.get('/:id',async function(req,res){
    let jobs = await Jobs.find({id:req.params.id}).lean().exec();
    res.status(200).send({jobs});
})



module.exports=router;