const article = require('./controllers/ArtcileController')
const express = require('express');
const router = express.Router();

//router.get('/einstein-and-churchill-both-took-daily-naps', article.index);
router.get('/einstein-and-churchill-both-took-daily-naps', article.index);

module.exports = router;