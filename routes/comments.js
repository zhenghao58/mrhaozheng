var express = require('express');
var router = express.Router();
var CommentSchema = require('../schema/comment')
/* GET home page. */
router.get('/', function(req, res) {
  CommentSchema.find().setOptions({sort: 'name'})
  .exec(function(err, comments){
  		if (err) {
  			console.log(err)
  		} else{
  			res.render('comments', { 
  				title: 'Comments',
  				comments: comments
  				 });
  		};
  })
});

module.exports = router;
