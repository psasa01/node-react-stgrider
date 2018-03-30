const billingController = require('../controllers/billingController');
const requireLogin = require('../middlewares/requireLogin');

module.exports = (app) => {

    app.post('/api/stripe', 
        requireLogin,
        billingController.stripeHandler
    )

};
