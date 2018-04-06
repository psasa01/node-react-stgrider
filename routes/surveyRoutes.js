const surveyController = require('../controllers/surveyController');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');

module.exports = (app) => {
    
    app.get('/api/surveys/thanks', (req, res) => {
        res.send('thank for voting!!')
    });

    app.post('/api/surveys',
        requireLogin,
        requireCredits,
        surveyController.createSurvey
    )
}