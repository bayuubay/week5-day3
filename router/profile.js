const router = require('express').Router();
const profileController=require('../controllers/profileController')
router.get('/',profileController.home);
router.get('/all',profileController.all);
router.get('/find/:number?', profileController.find);
router.get('/artikel/:id?', profileController.artikel);
router.get('/news', profileController.news);
module.exports = router;