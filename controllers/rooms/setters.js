const { HotelLayout } = require('../../services/HotelLayout');

const checkin = async (req, res) => {
    const roomTypeId = req.params.room_type_id;
    const roomId = req.params.id;
    const userId = req.body.user_id;
    const hotelLayout = new HotelLayout();
    // console.log('hotellayuout is:', hotelLayout);
    try {
        const room = await hotelLayout.findRoomById(roomTypeId, roomId);
        await room.checkin(userId);
        return res.status(200).json(room);
    } catch (error) {
        return res.status(404).json({
            status: "FAILURE",
            error: error.message
        })
    }
}

module.exports = {
    checkin
}