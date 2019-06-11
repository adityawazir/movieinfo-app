const express = require('express');
const hbs = require('hbs');
const path = require('path');
const movieInfo = require('./utils/movieInfo')

const app = express();

//setting up paths
const publicPath= path.join(__dirname,'../public');
const viewPath = path.join(__dirname,'/../templates/views');
const partialsPath = path.join(__dirname,'/../templates/partials');

app.use(express.static(publicPath));
app.set('view engine','hbs');
app.set('views',viewPath);
hbs.registerPartials(partialsPath);

app.get('',(req,res)=>{
    res.render('index',{
        name:"Aditya Wazir",
        info:"movie Info",
        title:"Movie-Info"
    });
});

app.get('/about',(req,res)=>{
    res.render('about',{
        name:"Aditya Wazir",
        title:"About"
    });
});



app.get('/movieinfo',(req,res)=>{
     if(!req.query.moviename)
     {
        return res.send({
             error:"No movie entered"
         });
     }
     movieInfo(req.query.moviename,(err,moviedata)=>{
         if(err)
         {
            res.send({
                error : err
            })
         }else{
             res.send(moviedata);
         }
     });
});

app.get('*',(req,res)=>{
    res.render('error',{
        title:"ERROR 404",
        message:"Page not Found"
    })
})

app.listen(3499,()=>{
    console.log("listening on port 3499");
})
