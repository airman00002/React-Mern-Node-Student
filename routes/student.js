let express = require('express'),
     router = express.Router()

//*Model
const Student = require('../model/Student')



//*Rooutes  create
router.route('/create-student').post(async(req,res,next)=>{
     try {
          let result = await Student.create(req.body)   
          res.status(200).json({success:true, message:'Successfuuly created',result:result})
     } 
     catch (error) {
          console.log(error.message)
          return next(error)
     }
})

//* Read Student
router.route('/').get(async(req,res,next)=>{
     try {
          let result = await Student.find()     
          res.status(200).json({success:true, message:'Success find ',result:result})
     } 
     catch (error) { 
          console.log(error.message)
          return next(error)
     }
})

//*Get Sigle Student
router.route('/edit-student/:id').get(async(req,res,next)=>{
     let id= req.params.id
     try {
          let result = await Student.findById(id)
          res.status(200).json({success:true, message:'Success findById',result:result})
     } 
     catch (error) {
          console.log(error.message)
          return next(error)
     }
})

//*Update Student
router.route('/update-student/:id').put(async(req,res,next)=>{
     let id= req.params.id
     try {
          let result = await Student.findByIdAndUpdate({_id:id},
               {$set:req.body},{new:true}) 
               res.status(200).json({success:true, message:'Success update student',result:result})    
     } 
     catch (error) {
          console.log(error.message)
          return next(error) 
     }
})

//*Delete Student
router.route('/delete-student/:id').delete(async(req,res,next)=>{
     let id= req.params.id
     try {
          let result = await Student.findByIdAndDelete(id) 
          res.status(200).json({success:true, message:' Successfuuly deleted',result:result})    
    
     } 
     catch (error) {
          console.log(error.message)
          return next(error) 
     }
})

module.exports = router