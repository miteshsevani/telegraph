const article = require('./controllers/ArtcileController')
const express = require('express');
const router = express.Router();

router.get('/', article.index);

module.exports = router;
