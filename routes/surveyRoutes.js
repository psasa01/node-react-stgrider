const surveyController = require('../controllers/surveyController');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');


module.exports = (app) => {
    
    app.get('/api/surveys/thanks', (req, res) => {
        res.send('thank for voting!!')
    });

    app.post('/api/surveys',
        requireLogin,
        requireCredits,
        surveyController.createSurvey
    )

    app.post('/api/surveys/webhooks', (req, res) => {
        console.log(req.body);
        res.send({});

    })
}