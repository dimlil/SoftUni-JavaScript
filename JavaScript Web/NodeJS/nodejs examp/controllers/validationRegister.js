const { body } = require('express-validator');

module.exports = [

    body('email', 'The email should be in following format (mailbox @ domainname)')
        .isEmail(),
    body('password', 'The password should be at least 3 characters long and should consist only english letters and digits')
        .custom((value) => {
            const regex = /[A-Za-z0-9]+/g;
            if (value < 3 || !value.match(regex)) {
                throw new Error(`The password should be at least 3 characters long and should consist only english letters and digits`)
            }
            return true;
        }),
    body('repass', 'The repeat password should be equal to the password')
        .custom((value, { req }) => {

            if (value !== req.body.password) {
                throw new Error(`The repeat password should be equal to the password`)
            }
            return true;
        }),

]