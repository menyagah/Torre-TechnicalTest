const express = require('express');
const cors = require('cors');
const { default: axios } = require('axios');
const app = express();
app.use(cors())


app.listen(3001, ()=> {
    console.log('Listening on port 3001')
});