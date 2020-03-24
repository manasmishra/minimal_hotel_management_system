const fs = require('fs');
const { Room } = require('../models/rooms')

class HotelLayout {
    constructor() {
        if(HotelLayout.instance) {
            return HotelLayout.instance;
        }
        try {
            const _data = fs.readFileSync('hotelLayout.json', 'utf8');
            const data = JSON.parse(_data);
            HotelLayout.instance = this;
            for (const _roomType in data) {
                let roomType = {};
                roomType.price = data[_roomType].price;
                roomType.Rooms = {};
                for(let i = 1; i <= data[_roomType].noOfRoms; i++) {
                    roomType.Rooms[i] = new Room(i);
                }
                HotelLayout.instance[_roomType] = roomType;
                        
            } 
        } catch (error) {
            throw error;
        }
        return HotelLayout.instance;
    }
    findRoomById = async (roomTypeId, roomId) => {
        const roomType = this['RoomType'+roomTypeId];
        const room = roomType && roomType.Rooms && roomType.Rooms[roomId];
        // console.log('Finding the room with id:', room);
        if(!room || room.isBooked) {
            throw new Error(`Room not available for Room Type: ${roomTypeId} and Room Id: ${roomId} for booking. Please try some other room`);
        }
        return room;
    }
}
module.exports = {
    HotelLayout
}