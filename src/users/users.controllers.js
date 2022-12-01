const Users = require('../models/users.models');

const findAllUsers = async () => {
    const data = await Users.findAll()
    return data
   
};

const findUserById = async (id) => {
    const data = await Users.findOne({
        where: {
            id,
        },
        attributes: {
            exclude: ['password'],
        },
    });
    return data;
    
};

const createUser = async (obj) => {
    const newUser = await Users.create({
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        password: data.password,
        birthday: data.birthday
    });
    return newUser;
};
const updateUser = async (id, obj) => {
    const data = await Quotes.update(obj, {
        where: {
            id: id
        }
    })
    return data[0]
}
const deleteUser = async (id) => {
    const data = await Users.destroy({
        where: {
            id: id,
        },
    });
    return data;
};


module.exports = {
    createUser,
    findAllUsers,
    findUserById,
    updateUser,
    deleteUser
};


