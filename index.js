const express=require("express");
const cors=require("cors");
const bodyParser = require('body-parser');
const connectDB = require('./src/config/db.js');
const recipeRoutes = require('./src/routes/recipeRoutes.js');
require('dotenv').config();
const app=express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api/recipes', recipeRoutes);
connectDB();

const PORT=process.env.PORT||3000;
app.listen(PORT,()=>{
     console.log(`Server running on port ${PORT}`)
});




