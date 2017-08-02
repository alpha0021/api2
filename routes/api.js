const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

//get a list of ninjas  from  the database
router.get("/ninjas",function(req,res,next){
res.send({type:"GET"});
});


//add a new ninja
router.post("/ninjas",function(req,res,next){

	Ninja.create(req.body).then(function(ninja){

		res.send(ninja);

	}).catch(next);

});


//update ninja
router.put("/ninjas/:id",function(req,res,next){
res.send({type:"PUT"});
});


//delete ninja from database
router.delete("/ninjas/:id",function(req,res,next){
	//console.log(req.params.id);
	Ninja.findByIdAndRemove({_id:req.params.id}).then(function(ninja){
		res.send(ninja);
	});
	
});



module.exports = router;