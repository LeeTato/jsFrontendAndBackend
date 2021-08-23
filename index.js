import express from 'express';
const app = express();
 const port =5000;
 app.use(express.json);

app.get('/',  (req, res) => {
  console.log(req, res);
  return res.json({message:'connected'})
})
 
app.listen(port, function(){
    console.log('http:// localhost:' + port);
})


app.post ('new-user', (req, res) => {
    console.log(req.body);
    res.json({body:req.body, success:true})
})