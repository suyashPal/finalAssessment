var Episode1=require('../models/episodelist1');

exports.postEpisode1Details=function(request,response){
    var episode1=new Episode1({
        episode1_id: request.body.episode1_id,
        img_url:    request.body.img_url,
        vid_url: request.body.vid_url,
        season: request.body.season,
        episode1: request.body.episode1,
    });
    episode1.save((error,res)=>{
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
exports.getAllEpisode1Details=function(req,res){
    Episode1.find({},(error,response)=>{
        if(error)
        {
            return res.json(req,res,error);
            console.log(req+"\n"+res+"\n"+error);
        }
        res.json(response);
        console.log(response);
    });
}
