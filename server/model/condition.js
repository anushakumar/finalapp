var mongoose=require("mongoose");
var Schema=mongoose.Schema;


var condition=new Schema({
  wavename:String,
  wavetype:String,
  location:String,
  noofparticipant:Number,
  plannedstartdate:String,
  plannedenddate:String,
  actualstartdate:String,
  actualenddate:String,
  participantmovingout:Number,

});

module.exports=mongoose.model('condition',condition);
