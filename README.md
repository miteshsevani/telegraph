# telegraph
Telegraph front end exercise

:clock1: Time Taken: Approximately 4 hours

To view the page, go to http://localhost:3000/einstein-and-churchill-both-took-daily-naps

### :mega: Styling

I have only used CSS - I would have usually opted to use sass as my css preprocessor.

### :mega: Show single post
Given that I submit the path of the article into the browser
* And the path is "/einstein-and-churchill-both-took-daily-naps" - :white_check_mark:
* Then the post page should be returned - :white_check_mark:
* And the page shows the title of the article - :white_check_mark:
* And the page shows the standfirst of the article - :white_check_mark:
* And the page shows the date of the article - :white_check_mark:
* And the page shows the image of the article - :white_check_mark:
* And the page shows the associated comment count of the article - :white_check_mark:


### :mega: Show associated articles
Given that I access the single post page
* Then the post page should return associated posts by category - :white_check_mark:
* And each item should show the title of the article - :white_check_mark:
* And each item should show the date of the article - :interrobang: Does not have date in posts.json
* And each item should show the thumbnail of the article - :white_check_mark:
* And each item should show the premium label if premium - :interrobang: No premium articles included


### :mega: Show comments (Call made on client side and injected with js)
Given that I access the single post page
* Then the post page should return the associated comments - :white_check_mark:
* And each comment should show the username - :white_check_mark:
* And each comment should show the date of the comment - :white_check_mark:
* And each comment should show the comment body - :white_check_mark:
* And each comment should show the like count - :white_check_mark:


### :mega: Order comments by newest
Given that I click the Newest button in the comments area
* Then then the comments should display in order of date - :white_check_mark:
* And the comments should show most recent first - :white_check_mark:

### :mega: Order comments by likes
Given that I click the Likes button in the comments area
* Then then the comments should display in order of most likes - :white_check_mark:
* And the comments should show most liked first - :white_check_mark: