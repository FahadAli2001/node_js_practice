const mongoose = require('mongoose');


const StudentSchema = mongoose.Schema({

    _id:mongoose.Schema.Types.ObjectId,
    name:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:true
    },
    gender:{
        type:String,
        require:true
    }

});

module.exports = mongoose.model('students',StudentSchema);