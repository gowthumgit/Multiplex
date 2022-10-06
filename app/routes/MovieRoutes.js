const express = require('express')
const UserController = require('../controllers/Movie')
const router =  express.Router();

router.get('/',UserController.findAll);
router.post('/',UserController.create);
router.get('/:id',UserController.findOne);
router.delete('/:id',UserController.destroy);
router.put('/:id',UserController.update);
router.patch( '/:id' , UserController.update);

module.exports = router