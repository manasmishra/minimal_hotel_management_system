const hotelServices = require('../../services/HotelLayout')

const findRooms = async (req, res) => {
    const availability = req.params.availability;
    const hotelLayout = new hotelServices.HotelLayout();
    let availableRooms = {};
    for(roomTypeKey in hotelLayout) {
        availableRooms[roomTypeKey] = {};
        let rooms = hotelLayout[roomTypeKey];
        availableRooms[roomTypeKey].price = rooms.price;
        availableRooms[roomTypeKey].rooms = [];
        for(roomNo in rooms.Rooms) {
            const room = rooms.Rooms[roomNo];
            // console.log('room is:', !room.isBooked && room);
            if(!room.isBooked) {
                availableRooms[roomTypeKey].rooms.push(roomNo);
            }
        }
    }
    console.log('available rooms:', availableRooms);
    res.status(200).json(availableRooms);
}

module.exports = {
    findRooms
}