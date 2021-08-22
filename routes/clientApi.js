const express = require('express');
const clientApi = express.Router();
const clientController = require('../controllers/clientController');

clientApi.post('/client/login', clientController.login);

clientApi.get('/client/account/:client_id',clientController.getAccounts);

clientApi.get('/client/account/:client_id/:date', clientController.getAccountByDate);

clientApi.get('/client/transaction/:client_id', clientController.getTransactions);

clientApi.get('/client/transaction/:client_id/:date', clientController.getTransactionByDate);

module.exports = clientApi;