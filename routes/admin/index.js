const express = require('express');
const router = express.Router();

//affecting all !after /admin
router.all('/*', (req, res, next) => {
  req.app.locals.layout = 'admin';
  next();
});

router.get('/', (req, res) => res.render('admin/index'));
router.get('/dashboard', (req, res) => res.render('admin/dashboard'));

//posts routes
router.get('/posts', (req, res) => res.render('admin/index'));

module.exports = router;
