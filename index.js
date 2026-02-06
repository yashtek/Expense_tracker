const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
});

