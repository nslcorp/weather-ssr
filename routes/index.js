const express = require('express');
const router = express.Router();

const controllers = require('../controller');

router.get('/', controllers.homePage.show);
router.get('/search', controllers.searchPage.show);
// router.get('/hourly', controller.getHourly);
// router.get('/signIn', controller.getSignIn);

module.exports = router;
