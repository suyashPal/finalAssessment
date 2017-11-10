var mongoose = require('mongoose');
var episodelist1_schema=mongoose.Schema;


var episodelist1Schema=new episodelist1_schema({
    episode1_id: { type:Number },
    vid_url: {type:String },
    img_url:{type:String},
    season:{type:Number},
    episode1:{type:Number}
})

var Episode1 =mongoose.model('episode1',episodelist1Schema);

module.exports=Episode1;