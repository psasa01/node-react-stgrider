const surveyController = require('../controllers/surveyController');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');

module.exports = (app) => {
    app.post('/api/surveys',
        requireLogin,
        requireCredits,
        surveyController.createSurvey
    )
}