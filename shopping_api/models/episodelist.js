var mongoose = require('mongoose');
var episodelist_schema=mongoose.Schema;


var episodelistSchema=new episodelist_schema({
    episode_id: { type:Number },
    vid_url: {type:String },
    img_url:{type:String},
    season:{type:Number},
    episode:{type:Number}
})

var Episode =mongoose.model('episode',episodelistSchema);

module.exports=Episode;