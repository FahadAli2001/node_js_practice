const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const mongoose = require('mongoose')
const StudentRoute = require('./Routes/studentroutes')

app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true }));
 
mongoose.connect('mongodb://0.0.0.0:27017/studentManagement', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Database connected');
    // Start your application or perform further operations
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });
 

app.use('/student',StudentRoute);


app.listen(3000,()=>{
    console.log('server created');
})