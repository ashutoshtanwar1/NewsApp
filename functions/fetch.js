const request = require('request')

var fnews=[];

const fetch = (url,callback) => {

    request({url:url,json:true},(error,res)=>{
        fnews=[];
        for(var i=0;i<res.body.articles.length;i++){
            var arr={
                title:res.body.articles[i].title,
                content:res.body.articles[i].content,
                url:res.body.articles[i].url,
                urlimage:res.body.articles[i].urlToImage,
                desc:res.body.articles[i].description
            }
            fnews.push(arr); 
        }
        callback(undefined,fnews);
    })
}

module.exports = fetch