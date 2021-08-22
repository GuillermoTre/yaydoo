function login(req,res){
    const md5 = require('md5');
    const db = require('../database/db');
    const client = req.body.name;
    const password = md5(req.body.password);

    const query = 'select name from clients where name = $1 and password = $2';
    const params = [client,password];
    db.query(query,params,(error,response)=>{
        if(error){
            console.log(error);
            return res.status(500).json({message: `error with client ${client}`});
        }

        result = response.rows;

        if(result.length < 1) return res.status(401).json({message: 'user or password not found'});

        return res.status(200).json({message: `welcome ${result[0].name}`});
    })
};

function getAccounts(req,res){
    const db = require('../database/db');
    const client_id = req.params.client_id;
    const query = 'select acc_no, created_at from clients_account where client_id = $1';
    const params = [client_id];
    db.query(query,params,(error,response)=>{
        if(error) {
            console.log(error);
            return res.status(500).json({message: `error with client ${client}`});
        }

        result = response.rows;

        return res.status(200).json({account_info: result});
    })
};

function getAccountByDate(req,res){
    const db = require('../database/db');
    const client_id = req.params.client_id;
    const date = req.params.date;
    const query = 'select acc_no, created_at from clients_account where client_id = $1 and created_at = $2';
    const params = [client_id,date];
    db.query(query,params,(error,response)=>{
        if(error) {
            console.log(error);
            return res.status(500).json({message: `error with client ${client_id}`});
        }

        result = response.rows;

        return res.status(200).json({account_info: result});
    })
};

function getTransactions(req,res){
    const db = require('../database/db');
    const client_id = req.params.client_id;
    const query = 'select acc_no_from, acc_no_to, amount, created_at from clients_transaction where client_id = $1';
    const params = [client_id];
    db.query(query,params,(error,response)=>{
        if(error){
            console.log(error);
            return res.status(500).json({message: `error with client ${client_id}`});
        } 

        result = response.rows;

        return res.status(200).json({transactions: result});
    })
};

function getTransactionByDate(req,res){
    const db = require('../database/db');
    const client_id = req.params.client_id;
    const date = req.params.date;
    const query = 'select acc_no_from, acc_no_to, amount, created_at from clients_transaction where client_id = $1 and created_at = $2';
    const params = [client_id, date];
    db.query(query,params,(error,response)=>{
        if(error){
            console.log(error);
            return res.status(500).json({message: `error with client ${client_id}`});
        } 

        result = response.rows;

        return res.status(200).json({transactions: result});
    })
}

module.exports = {login, getAccounts, getAccountByDate, getTransactions, getTransactionByDate};