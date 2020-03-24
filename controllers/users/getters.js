const { user } = require('../../models/users')

const findUserById = async (req, res) => {
    const id = req.params.id;
    try {
        console.log('user required is:', user, typeof user);
        const userObj = await user.findUserById(id);
        console.log('user created is:', userObj);
        res.status(200).json(userObj);
    } catch (error) {
        console.error('Got some error while creating the user:', error);
        res.status(404).json({
            status: 'FAILURE',
            error: error.message
        })
    }
}

module.exports = {
    findUserById
}