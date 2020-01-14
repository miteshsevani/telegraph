fetch('https://my-json-server.typicode.com/telegraph/frontend-exercise/comments')
  .then(blob => blob.json())
  .then(data => {
    const commentsEl = document.querySelector('.comments')
    const commentsLength = data.length;
    let commentsHTML = [];

    // Display total number of comments
    document.querySelector('.comments-length').innerHTML = commentsLength;

    data.map(comment => {
      commentsHTML.push(`
        <div class="comment">
          <div class="meta">
            <span class="user">${comment.name}</span>
            <span class="date">${formatDate(comment.date)}</span>
            <span class="likes">${comment.likes} Likes</span>
          </div>
          <div class="comment-text">
            ${comment.body}
          </div>
        </div>
      `)
    })
    commentsEl.innerHTML = commentsHTML.join('');
  })
  .catch(err => {
    throw err
  });


  function formatDate(dateToFormat) {
    const date = new Date(dateToFormat);
    const day = date.getDate();
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    let hours = date.getHours() - 1; // minus 1 to offset bst time
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const minutes = date.getMinutes();
    return `${day} ${month} ${year}, ${hours}:${minutes}${ampm}`
  }