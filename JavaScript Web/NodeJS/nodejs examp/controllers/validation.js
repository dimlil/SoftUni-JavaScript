const { body } = require('express-validator');

module.exports = [
    body('startEnd', 'The start end should be 4 characters long and separated with "-"')
        .custom((value) => {
            if (value < 4 || !value.includes('-')) {
                throw new Error(`The start end should be 4 characters long and separated with "-"`)
            }
            return true;
        }),
    body('date', 'The date and time should be 6 characters long and separated with "-"')
        .custom((value) => {
            if (value < 6 || !value.includes('-')) {
                throw new Error(`The date and time should be 6 characters long and separated with "-"`)
            }
            return true;
        }),
    body('seats', 'The seats should be positive number')
        .isInt({
            min: 0
        }),
    body('description', 'The descrtiption should be 10 characters long')
        .isLength({
            min: 10
        })

]