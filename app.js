const express = require("express"),
  mongoose = require("mongoose"),
  cors = require("cors"),
  bodyParser = require("body-parser"),
  path = require("path")

//*Express routes
const studentRoutes = require('./routes/student')
// mongoose.Promise = global.Promise;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors())
app.use('/students',studentRoutes)

//* Path front end
if(process.env.NODE_ENV === 'production'){
     app.use(express.static(path.join(__dirname,'./front-end/build')))

     app.get('*',(req,res,next)=>{
          res.sendFile(path.join(__dirname,'./front-end/build/index.html'))
     })
}




//*PORT routes  //*ถ้ามีไฟล์ env
const port = process.env.PORT || 4000;
app.listen(port, () => console.log("Connected to port : " + port));

//*404 Error
app.use((req,res,next) =>{
     next(createError(404))
})

//* Error Handler
app.use((err,req,res,next) =>{
     console.log(err.message)
     if(!err.statusCode) err.statusCode = 500
     res.status(err.statusCode).send(err.message)
})
