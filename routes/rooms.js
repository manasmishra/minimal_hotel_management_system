var express = require('express');

var router = express.Router();

const RoomGetters = require('../controllers/rooms/getters');
const RoomSetters = require('../controllers/rooms/setters');

router.get('/:availability', RoomGetters.findRooms);
router.post('/checkin/:room_type_id/:id', RoomSetters.checkin)

// router.post('/set/:key', KVStoreController.Setters.setByKey);

module.exports = router;