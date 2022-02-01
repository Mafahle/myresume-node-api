const ResumeProfile = require('../models/resume-profile');
const { Op } = require('sequelize');

const htmlToPdf = require('html-pdf-node');

const date = new Date();
exports.createResume = async (req, res, next) => {
    const name = req.body.name;
    const surname = req.body.surname;
    const profession = req.body.profession;
    const summary = req.body.summary;
    const contactDetails = req.body.contactDetails;
    const skills = req.body.skills;
    const languages = req.body.languages;
    const experience = req.body.experience;
    const education = req.body.education;

    const newResume = await ResumeProfile.create({
        name: name,
        surname: surname,
        profession: profession,
        summary: summary,
        contactDetails: contactDetails,
        skills: skills,
        languages: languages,
        experience: experience,
        education: education
    });
    
    const options = { format: 'A4', path: `./data/Myresume-${name}-${date.getUTCFullYear()}.pdf` };
    const file = { url: 'https://react-bootstrap.github.io/forms/overview/' };
    const pdfBuffer = await htmlToPdf.generatePdf(file, options);

    if ((newResume !== null) && pdfBuffer) {
        return res.json({
            'message': 'Resume was successfully created.'
        });
    }

    return res.json({
        'message': 'Error: Resume creation not successful.'
    });
};

exports.getTalentData = async (req, res, next) => {
    const talentInfo = await ResumeProfile.findAll({ 
        where: {
            name: {
                [Op.ne]: null
            }
        }
    });

    if(talentInfo){
        res.json({
            'message': 'Data request was successful',
            'data': talentInfo
        })
    }
};


