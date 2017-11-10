var Episode=require('../models/episodelist');

exports.postEpisodeDetails=function(request,response){
    var episode=new Episode({
        episode_id: request.body.episode_id,
        img_url:    request.body.img_url,
        vid_url: request.body.vid_url,
        season: request.body.season,
        episode: request.body.episode,
    });
    episode.save((error,res)=>{
        if(error)
            return error;
        else
        {
            response.json({
                success:true,
                body:res
            });

        }
    })
}

//getting all the product information from the product collection
exports.getAllEpisodeDetails=function(req,res){
    Episode.find({},(error,response)=>{
        if(error)
        {
            return res.json(req,res,error);
            console.log(req+"\n"+res+"\n"+error);
        }
        res.json(response);
        console.log(response);
    });
}
