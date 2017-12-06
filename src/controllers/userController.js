import db from '../db/dbConfig'

const userController = {};

const addUserQuery = (newUser) => {
    return `INSERT INTO "Users" ("username", "password", "first_name", "last_name", "email") VALUES ('${req.body.username}','${req.body.password}','${req.body.first_name}','${req.body.last_name}','${req.body.email}');`
}

userController.addUser = (req, res) => {
    db.connect()
        .then(obj => {
            db.query(`INSERT INTO "Users" ("username", "password", "first_name", "last_name", "email") VALUES ('${req.body.username}','${req.body.password}','${req.body.first_name}','${req.body.last_name}','${req.body.email}');`)
            .then((resp) => {
                    console.log('user created')
                    res.send(resp);
                })
                .catch((error) => res.send(error));
        })
        .catch(error => {
            console.log('error connecting')
            res.send(error);
        });
}

userController.getAllUsers = (req, res) => {
    db.connect()
        .then(obj => {
            db.query('SELECT * FROM "Users"')
            .then((resp) => {
                    res.send(resp);
                })
                .catch((error) => res.send(error));
        })
        .catch(error => {
            console.log('error connecting')
            res.send(error);
        });
}

userController.login = (req, res) => {
    //connect to db
    //verify credentials
}

export default userController;