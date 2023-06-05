const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
//const StudentSchema = require('../Models/student');
const Student = require('../Models/student');
 

router.post('/post', (req, res, next) => {
    const student = new Student({

        _id: new mongoose.Types.ObjectId,
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender
    });

    student.save().then((result) => {
        res.status(200).send(result);
        console.log(result);
    }).catch(err => {
        res.status(400).send(err);
    })
});

router.get('/',(req,res)=>{
    Student.find()
    .then((result)=>{
        res.status(200).send(result)
    }).catch(err=>{
        res.status(400).send(err)
    })
});

router.get('/byname',(req,res)=>{
    Student.find({name:req.body.name})
    .then((result)=>{
        res.status(200).send(result)
    })
});




module.exports = router;