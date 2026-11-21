
//image-finder-007.vercel.app
import express from 'express'
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express()

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

 app.post('/api/submit', async(req,res)=>{ 

   if(req.body.question === "burger")
   {
      res.send({received:'https://www.youtube.com/embed/JACRMtaSYzs?si=7GI-HkuMnDLOgZ9M'})
   
   }
   else if(req.body.question === "dance")
   {
      res.send({received:'https://www.youtube.com/embed/WcB-FiKhNJM?si=5Wj2yyqurX7GlaQg'})
      
   }
    else if(req.body.question === "meeting" )
   {
      res.send({received:'https://www.youtube.com/embed/u-j2OogHjdg?si=-CwbbUnopVwm5zrc'})
      
   }
    else if(req.body.question === "saloon")
   {
      res.send({received:'https://www.youtube.com/embed/E3YWCIhplTA?si=7P0dazcI7V53zdfO'})
      
   }
   else if(req.body.question === "rainDance"){
     res.send({received:'https://www.youtube.com/embed/8UhEcI7El3Y?si=xrH_xLcppBRHZz_j'})
   }  
    else if(req.body.question === "toyCar"){
     res.send({received:'https://www.youtube.com/embed/QZusq9uqoIw?si=ThEwWj2NOjaEo7Fb'})
   }  
})

app.listen(8000,()=>{

    console.log(">>>>>>>Server started at port 8000")

})


