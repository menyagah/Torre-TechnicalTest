const express = require('express');
const cors = require('cors');
const { default: axios } = require('axios');
const app = express();
app.use(cors())

app.get('/username', async (req,res)=> {
    let endpoint = 'https://torre.bio/api/bios/' + req.query.username

    const { data } = await axios.get(endpoint)
    res.send(data || [])
});

app.listen(3001, ()=> {
    console.log('Listening on port 3001')
});