const request = require('request');

let movieInfo = function(movie,callback)
{
    const url ='http://www.omdbapi.com/?apikey=46ce154a&t='+movie+"&plot=full";

    request({url,json:true},(err,res)=>{
        if(err)
        {
            callback("Unable to access Movie DB",undefined);
        }
        else if(res.body.error)
        {
            callback(res.body.error,undefined);
        }
        else{
            callback(undefined,{
                title:res.body.Title,
                release:res.body.Released,
                genre:res.body.Genre,
                plot:res.body.Plot,
                imdbr:res.body.imdbRating,
                award:res.body.Awards

            });
        }
    });
}

module.exports = movieInfo;