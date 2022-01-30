const ResumeProfile = require('../models/resume-profile');
const ContactDetails = require('../models/contact-details');

exports.createResume = async (req, res, next) => {
    const name = req.body.name;
    const surname = req.body.surname;
    const profession = req.body.profession;
    const summary = req.body.summary;

    const phoneNumber = req.body.contactDetails.phoneNumber;
    const email = req.body.contactDetails.email;
    const linkedIn = req.body.contactDetails.linkedIn;

    const newResume = await ResumeProfile.create({
        name: name,
        surname: surname,
        profession: profession,
        summary: summary,
        contactDetails: JSON.stringify(req.body.contactDetails)
    });

    const contactDetails = await ContactDetails.create({
        id: newResume.id,
        phoneNumber: phoneNumber,
        email: email,
        linkedIn: linkedIn
    });

    if (newResume && contactDetails) {
        return res.json({
            'message': 'Resume was successfully created.'
        });
    }

    res.json({
        'message': 'Error: Resume couldn\'t be created.'
    });
};


