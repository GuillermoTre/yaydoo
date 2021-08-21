function createClient(req,res){
    const md5 = require('md5');
    const db = require('../database/db');
    const client = req.body.name;
    const password = md5(req.body.password);
    const query = 'INSERT INTO clients(name, password) VALUES ($1, $2)'
    const params = [client,password];
    db.query(query,params,(error,response)=>{
        if(error) return res.status(500).json({message: `error inserting client ${client}`});

        return res.status(200).json({message: `${client} inserted`});
    })
}

function deleteClient(req,res){
    const db = require('../database/db');
    const client_id = req.body.client_id;
    console.log(client_id)
    const query = 'DELETE FROM public.clients WHERE id = $1;'
    const params = [client_id];
    db.query(query,params,(error,response)=>{
        if(error) {
            console.log(error)
            return res.status(500).json({message: `error deleting client ${client_id}`});
        }

        return res.status(200).json({message: `${client_id} deleted`});
    })
}

module.exports = {createClient, deleteClient};