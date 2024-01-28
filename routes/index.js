const express = require('express');
const router= express.Router();

const controller= require('../controllers/habitnode');
router.get('/',controller.home);

router.get('/weekly',controller.weekly);
router.get('/delete-tasks/:id',controller.delete);
router.post('/create',controller.create);
router.get('/all_renews/',controller.toggle_tasks);
module.exports=router;