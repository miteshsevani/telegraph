# telegraph
Telegraph front end exercise

Time Taken: Approximately 4 hours


### :mega: Styling

I have only used CSS - i would have usually opted to use sass as my css preprocessor

### :mega: Show single post
  Given that I submit the path of the article into the browser
	* And the path is "/einstein-and-churchill-both-took-daily-naps" - Done
	* Then the post page should be returned - Done
	* And the page shows the title of the article - Done
	* And the page shows the standfirst of the article - Done
	* And the page shows the date of the article - Done
	* And the page shows the image of the article - Done
	* And the page shows the associated comment count of the article - Done


### :mega: Show associated articles
  Given that I access the single post page
	* Then the post page should return associated posts by category - Done
	* And each item should show the title of the article - Done
	* And each item should show the date of the article - Does not have date in posts.json
	* And each item should show the thumbnail of the article - Done
	* And each item should show the premium label if premium - No premium articles included


### :mega: Show comments (Call made on client side and injected with js)
  Given that I access the single post page
	* Then the post page should return the associated comments - Done
	* And each comment should show the username - Done
	* And each comment should show the date of the comment - Done
	* And each comment should show the comment body - Done
	* And each comment should show the like count - Done


### :mega: Order comments by newest
	Given that I click the Newest button in the comments area
	* Then then the comments should display in order of date - Done
	* And the comments should show most recent first - Done

### :mega: Order comments by likes
	Given that I click the Likes button in the comments area
	* Then then the comments should display in order of most likes - Done
	* And the comments should show most liked first - Done