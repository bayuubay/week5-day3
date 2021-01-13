const router = require('express').Router();
const articleController = require('../controllers/articleController')
router.get('/:path?',articleController.home);
// router.get('/', articleController.home);
// router.get('/all', articleController.all);
// router.get('/find', articleController.find);
// router.get('/search/:id?', articleController.search);
// router.post('/news', (req, res) => res.send('ini page news dari page article'));

module.exports = router;