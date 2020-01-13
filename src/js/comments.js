const comments = fetch('https://my-json-server.typicode.com/telegraph/frontend-exercise/comments')
  .then(blob => blob.json())
  .then(data => {
    const commentsEl = document.querySelector('.comments')
    let commentsHTML = [];
    data.map(comment => {
      commentsHTML.push(`
        <div class="comment">
          <div class="meta">
            <span class="user">${comment.name}</span>
            <span class="date">${comment.date}</span>
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