class Room {
    constructor(id) {
        this.id = id;
        this.isBooked = false;
        this.isBookedBy = null;
    }
    checkin = (userId) => {
        this.isBooked = true;
        this.isBookedBy = userId;
    }
}

module.exports = {
    Room
}