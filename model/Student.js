const mongo = require("mongodb");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;


// mongoose.connect("", { useNewUrlParser: true })
mongoose.connect("mongodb+srv://admin:123456abcd@react-mern-node.z6bkl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
.then(()=>console.log(' connected to database !!'))
.catch((error) =>console.log('Cound error with database '+ error))
const studentSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    roll_no: Number,
  },
  {
    collection: "students",
  }
);

module.exports = mongoose.model('Student',studentSchema)
