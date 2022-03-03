const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/user.controller');

router.post('/create', user_controller.create);
router.get('/findOne', user_controller.findOne);
router.get('/getAll', user_controller.getAll);
router.put('/update', user_controller.update);
router.patch('');
router.delete('/delete', user_controller.deleteOne);
router.delete('/deleteMany', user_controller.deleteMany);
router.delete('/deleteMany', user_controller.deleteMany);

module.exports = router;