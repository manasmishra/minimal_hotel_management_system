const { user } = require('../../models/users');

const getUserId = (() => {
    let cnt = 1;
    const incrementUserId = () => {
        return cnt++;
    }
    return incrementUserId;
})();

const addUser = async (req, res) => {
    const body = req.body;
    const id = getUserId();
    console.log('userid is:', id);
    try {
        console.log('user required is:', user, typeof user);
        const userObj = await user.addUser(id, body);
        console.log('user created is:', userObj);
        res.status(200).json(userObj);
    } catch (error) {
        console.error('Got some error while creating the user:', error);
        res.status(404).json({
            status: 'FAILURE',
            error: error
        })
    }
}

const updateUser = async (req, res) => {
    const body = req.body;
    const idNo = req.params.id;
    try {
        const updatedUser = await user.updateUser(idNo, body);
        console.log('user created is:', updatedUser);
        res.status(200).json(updatedUser);
    } catch (error) {
        console.error('Got some error while creating the user:', error);
        res.status(404).json({
            status: 'FAILURE',
            error: error
        })
    }
}

module.exports = {
    addUser,
    updateUser
}