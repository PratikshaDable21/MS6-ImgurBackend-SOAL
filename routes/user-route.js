const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const user_signup = require('../model/user-model');

router.post('/signup', async (req, res) => {

    try {

        const user = await user_signup.find({ email: req.body.email })

        if (user.length >= 1) {
            return res.status(409).json({
                message: 'mail exists already'
            });
        }
        else {

            const saltPassword = await bcrypt.genSalt(10);
            const securePassword = await bcrypt.hash(req.body.password, saltPassword);

            const signedUpUser = new user_signup({
                fullname: req.body.fullname,
                username: req.body.username,
                email: req.body.email,
                password: securePassword

            });

            const saved_users = await signedUpUser.save();
            res.json(saved_users);


        }

    } catch (err) {
        res.json(`error in signup is:${err.message}`);

    }
});


router.post('/signin', async (req, res) => {
    try {

        const user = await user_signup.find({ email: req.body.email })
        if (user.length < 1) {
            return res.status(404).json({
                message: "login failed user doesn't exists with the emailid"
            });
        }
        bcrypt.compare(req.body.password, user[0].password, (err, result) => {
            if (err) {
                return res.status(401).json({
                    message: 'authentication failed password  does not match'
                });
            }
            if (result) {
                return res.status(200).json({
                    message: 'login successful'
                })
            }

        })
    }
    catch (err) {
        res.json(`error in signin is: ${err.message}`);

    }

});
module.exports = router;