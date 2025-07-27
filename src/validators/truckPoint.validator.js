const { body, validationResult } = require('express-validator');

const validateTruckPoint = [
    body('name')
        .notEmpty().withMessage('El nom és obligatori.')
        .isString().withMessage('El nom ha de ser una cadena de text.'),

    body('address')
        .notEmpty().withMessage('L\'adreça és obligatòria.')
        .isString().withMessage('L\'adreça ha de ser una cadena de text.'),

    body('latitude')
        .notEmpty().withMessage('La latitud és obligatòria.')
        .isNumeric().withMessage('La latitud ha de ser un valor numèric.'),

    body('longitude')
        .notEmpty().withMessage('La longitud és obligatòria.')
        .isNumeric().withMessage('La longitud ha de ser un valor numèric.'),

    body('description')
        .optional()
        .isString().withMessage('La descripció ha de ser una cadena de text.'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = { validateTruckPoint };