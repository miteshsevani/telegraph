const express = require('express');
const moment = require('moment');
const router = express.Router();

router.get('/', (req, res) => {

	let postDate = req.app.get('article').post.date;
	postDate = moment(postDate).format('dddd Do MMMM YYYY, HH:mm');


	//console.log(postDate.toString());
	res.render("home", {
		meta: req.app.get('meta'),
		article: req.app.get('article'),
		postDate: postDate,
		posts: req.app.get('posts')
	});
});

module.exports = router;
