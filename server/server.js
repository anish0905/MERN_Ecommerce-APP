const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');

//create a database connection -> u can also

//create a seperate file for this and then import / use that file here 







mongoose.connect('mongodb+srv://amitkumar425863:amitkumar425863@cluster0.f46dl.mongodb.net/').then(()=>console.log(" mongodb connected ")).catch(()=>console.log(error));

const app = express();



const PORT = process.env.PORT || 5000;


app.use(
  cors({
    origin: 'http://localhost:5173/',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: [
      "Content-Type", 
      "Authorization",
      'Catche-Control',
      'Expires',
      'Pragma'


    ],
     credentials: true,
  })
)


app.use(cookieParser());

app.use(express.json());

app.listen(PORT , ()=>console.log(`Server is now running on PORT ${PORT}`))
