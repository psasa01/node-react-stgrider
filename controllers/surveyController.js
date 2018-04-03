const mongoose = require('mongoose');
const Survey = mongoose.model('surveys');
const Mailer = require('../services/mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

exports.createSurvey = (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
        title, 
        subject, 
        body,
        recipients: recipients.split(',').map(email => ({ email })),
        _user: req.user.id,
        dateSent: Date.now()
    });

    // Send an email!!!
    const mailer = new Mailer(survey, surveyTemplate(survey));
    mailer.send();

}