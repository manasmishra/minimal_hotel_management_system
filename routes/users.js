var express = require('express');

var router = express.Router();

const UserSetters = require('../controllers/users/setters');
const UserGetters = require('../controllers/users/getters');

router.post('/', UserSetters.addUser);
router.put('/:id', UserSetters.updateUser);
router.get('/:id', UserGetters.findUserById);

// router.post('/set/:key', KVStoreController.Setters.setByKey);

module.exports = router;