const moment = require('moment');
const meta = require('../model/MetaModel');
const article = require('../model/ArticleModel');
const posts = require('../model/PostsModel');
const formatDate = require('../../src/js/formatDate')
exports.index = function(req, res) {

  // Format Date
	let postDate = article.post.date;
	//postDate = moment(postDate).format('dddd Do MMMM YYYY, HH:mm');
	postDate = formatDate(postDate, 'article');
	// Get associated articles
	const articleCategory = article.post.category;

	let associatedPosts = [];
	posts.posts.map(post => {
		if(post.category === articleCategory) {
			return associatedPosts.push(post);
		}
  })

  // Render content
  res.render("article", {
		meta: meta,
		article: article,
		postDate: postDate,
		posts: associatedPosts
  });
};