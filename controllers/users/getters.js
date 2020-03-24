const { user } = require('../../models/users')

const findUserById = async (req, res) => {
    const id = req.params.id;
    try {
        const userObj = await user.findUserById(id);
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