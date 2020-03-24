class User {
    constructor() {
        if(User.instance) {
            return User.instance;
        }
        User.instance = this;
        return User.instance;
    }
    addUser = async (id, body) => {
        if(!User.instance) {
            User.instance = new User();
        }
        const user = {
            id,
            ...body
        };
        User.instance[id] = user;
        return user;
    }
    updateUser = async (id, body) => {
        let user = User.instance[id];
        if(!user) {
            throw new Error('User not Found');
        }
        if(body.name) {
            user.name = body.name;
        }
        if(body.idNo) {
            user.idNo = body.idNo;
        }
        if(body.address) {
            user.address = body.address;
        }
        if(body.idType) {
            user.idType = body.idType;
        }
        User.instance[id] = user;
        return user;
    }
    findUserById = (id) => {
        if(!User.instance[id]) {
            throw new Error('user not found');
        }
        return User.instance[id];
    }
}

module.exports = {
    user: new User()
}