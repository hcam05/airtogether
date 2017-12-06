import db from '../db/dbConfig'

const groupController = {};

groupController.joinGroup = (req, res) => {
    db.connect()
        .then(obj => {
            console.log(req.body);
            // // db.query(addUserQuery(newUser))
            // db.query(`INSERT INTO "Users" ("username", "password", "first_name", "last_name", "email") VALUES ('${req.body.username}','${req.body.password}','${req.body.firstName}','${req.body.lastName}','${req.body.email}');`)
            // .then((resp) => {
            //         console.log('user created')
            //         res.send(resp);
            //     })
                // .catch((error) => res.send(error));
        })
        .catch(error => console.log('error connecting'));
}

export default groupController;  