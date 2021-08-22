const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 3010;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(cors());

//add routes

const adminApi = require('./routes/adminApi');
app.use(adminApi);

const clientApi = require('./routes/clientApi');
app.use(clientApi);

app.get('/',(req,res)=>{
    return res.status(200).json({message: 'hello world'});
});

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
});

module.exports = app;