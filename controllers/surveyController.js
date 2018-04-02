const mongoose = require('mongoose');
const Survey = mongoose.model('surveys');
const Mailer = require('../services/mailer');

exports.createSurvey = (req, res) => {
    const { title, subject, body, recepient } = req.body;

    const survey = new Survey({
        title, 
        subject, 
        body,
        recipients: recipients.split(',').map(email => ({ email })),
        _user: req.user.id,
        dateSent: Date.now()
    });

    // Send an email!!!
    const mailer = new Mailer({
        
    });

}