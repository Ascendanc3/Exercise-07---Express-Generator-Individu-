const User = require("./model");

const index = async (req, res, next) => {
    // res.render('index', { title: 'Express' });
    try
    {
        const users = await User.find();
        res.send({status: "succes", message: "List Users", data: users});

    } 
    
    catch (error)
    {
        res.send({status: "error", message: error.message});
    }
  }

  const getUsers = async (req, res, next) => {
    try {
        const result = await User.find();

        res.send({
            status: 'Success',
            message: "GET users",
            data: result,
        });
    }
    catch(e) {
        res.send({
            status: 'Error',
            message: e.message,
        });
    }
}

const getUserById = async (req, res, next) => {
    try {
        const result = await User.findById(req.params.id);

        res.send({
            status: 'Success',
            message: "GET users by Id",
            data: result,
        });
    }
    catch(e) {
        res.send({
            status: "GET user by Id error",
            message: e.message,
        });
    }
}

const postUser = async (req, res, next) => {
    try {
        const result = await User.create({
            name: req.body.name,
            age: req.body.age,
            status: req.body.status,
        });

        res.send({
            status: 'Success',
            message: "POST user",
            data: result,
        });
    }
    catch(e) {
        res.send({
            status: "POST user error",
            message: e.message,
        });
    }
}

const putUser = async (req, res, next) => {
    console.log(`id: ${req.params.id} | name: ${req.body.name} | age: ${req.body.age} | status: ${req.body.status}`)

    try {
        const result = await User.updateOne({_id: req.params.id}, {
            name: req.body.name,
            age: req.body.age,
            status: req.body.status,
        });

        res.send({
            status: 'Success',
            message: "PUT user",
            result: result,
            updatedData: await User.findById(req.params.id),
        });
    }
    catch(e) {
        res.send({
            status: "PUT user error",
            message: e.message,
        });
    }
}

const deleteUser = async (req, res, next) => {
    try {
        const userDelete = await User.findById(req.params.id);
        const result = await User.deleteOne({_id: req.params.id});

        res.send({
            status: 'Success',
            message: "DELETE users by Id",
            result: result,
            deletedUser: userDelete,
        });
    }
    catch(e) {
        res.send({
            status: "DELETE user by Id error",
            message: e.message,
        });
    } 
}

module.exports = {
    index,
    getUsers, 
    getUserById,
    postUser,
    putUser,
    deleteUser,
};