import express from "express"
import bodyParser from "body-parser" 
const app = express();
const port =3002;

app.use(bodyParser.json());
const router =express.Router();

router.post("/" , (req , res)=>{
console.log(("req.body" , req.body))
res.send({message: "All is Well"}).status(200);
})

app.use("/api/v1/products" , router)

app.listen(port,() =>{
  console.log(`Server Running on Port Number ${port}`)
})