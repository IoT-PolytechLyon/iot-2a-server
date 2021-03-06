import User from '../models/user.js';

/**
 * Adds a new user account
 * @param {*} req request
 * @param {*} res result
 */
function createNewUserAccount(req, res) {

    emailAlreadyExist(req.body.email).then(function(alreadyExist) {

        if(alreadyExist == true) {
            res.json({message :"The email already exist."});
            console.log("The email already exist.");
            //throw "The email already exist";
        }
        else {
            const user = new User(req.body);
        
            user.save().then(data => {
                res.status(201).json({message: "L'utilisateur " + req.body.firstName + " " + req.body.lastName + " (" + req.body.email + ") a bien été ajouté."});
                console.log("L'utilisateur " + req.body.firstName + " " + req.body.lastName + " (" + req.body.email + ") a bien été ajouté.");
            })
            .catch(err => {
                res.json({message :err});
            })

        }

    })
}

/**
 * User sign in
 * @param {*} req request
 * @param {*} res result
 */
function userConnection(req, res) {
    User.findOne({email: req.body.email}, function(err, specificUser) {

        if(specificUser == null) {
            res.status(404).json({message: "The user ( " + req.body.email + ") does not exist."});
            console.log("The user ( " + req.body.email + ") does not exist.");
            
        }
        else {

            if(specificUser.password == req.body.password) {
                res.status(200).json({message: "The user ( " + req.body.email + ") is well authenticated."});
                console.log("The user ( " + req.body.email + ") is well authenticated.");

            }
            else {
                res.json({message: "The password is wrong."})
                console.log("The password is wrong.");
                //throw "The password is wrong";
            }
        }
        
    });
}

/**
 * If the email already exist into the database
 * @param {*} email user email
 */
function emailAlreadyExist(email) {
    return User.findOne({email: email}).then(function(result) {
        return result != null;
    });
}

export {createNewUserAccount, userConnection};