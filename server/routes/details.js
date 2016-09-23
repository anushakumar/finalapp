var express = require('express');
var router = express.Router();
var check=require('../model/condition');


router.post('/add',function(req,res,next)
  {
 console.log(req.body);
 var details=new check();
 details.wavename=req.body.Batch_Name;
 details.wavetype=req.body.Batch_Type;
 details.location=req.body.Location;
 details.noofparticipant=req.body.Candidate;
 details.plannedstartdate=req.body.Start_Date;
 details.plannedenddate=req.body.End_Date;
 details.actualstartdate="";
 details.actualenddate="";
 details.participantmovingout="";
 details.save(function(err)
{
 if(err)
 {
   res.send(err);
 }
 else
   {
     console.log("Saved successfully");
     res.send('details added');
   }
 });
 });

module.exports = router;
