
const express = require('express');
const adminApi = express.Router();
const adminController = require('../controllers/adminController')

adminApi.post('/admin/createClient',adminController.createClient);

adminApi.delete('/admin/deleteClient', adminController.deleteClient);

module.exports = adminApi;