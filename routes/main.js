const express = require('express');
const router = express.Router();

// router.use('/auth', require('./auth.js'));

router.use('/users', require('./users.js'));
router.use('/tasks', require('./tasks.js'));
<<<<<<< HEAD
router.use('/parse', require('./parse.js'));
=======
router.use('/photos', require('./photos.js'));
router.use('/news', require('./news.js'));
>>>>>>> master


module.exports = router;