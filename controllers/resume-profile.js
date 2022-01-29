const ResumeProfile = require('../models/resume-profile');

exports.createResume = async (req, res, next) => {
    const name = req.body.name;
    const surname = req.body.surname;
    const email = req.body.email;

    console.log(req.body);

    const newResume = ResumeProfile.build({
        name: name,
        surname: surname,
        email: email
    });

    await newResume.save();

    res.json({
        'message': 'Resume was successfully created.'
    });
};


