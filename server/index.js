const express = require("express");
const app = express();
app.use(express.json());
require('dotenv').config();
const mongoose = require("mongoose");
const cors=require("cors")
const PORT=process.env.SITE
const db=process.env.DB;
const bodyParser = require('body-parser');
const path = require('path');
const multer = require('multer');



app.use(bodyParser.json());
const corsoptions={
  origin:"http://localhost:3000",
  methods:"GET,POST,DELETE",
  credentials:true
}
app.use(
  cors(corsoptions)
)
mongoose.connect(`${db}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("db is connected");
  })
  .catch((err) => {
    console.log("error");
    console.log(err); 
  });

const userroutes=require("./routes/route")
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use("/",userroutes);

app.listen(PORT,()=>{
    console.log(`app listening at ${PORT}`)
})