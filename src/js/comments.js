
// Get comments from api
async function getComments() {
  const response = await fetch('https://my-json-server.typicode.com/telegraph/frontend-exercise/comments')
  const data = await response.json()
  return data;
}

getComments().then(data => {
  const commentsEl = document.querySelector('.comments')
  let commentsHTML = []; // Set empty array for html body

  // Display total number of comments
  const commentsLength = data.length; // Set comments length
  document.querySelector('.comments-length').innerHTML = commentsLength;

  // Loop through comments and build comments html array
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
  commentsEl.innerHTML = commentsHTML.join(''); // Join (with empty string) is to remove the "," between each array item
})

// Format date from comments to Day Month Year, hour:minutes format
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



// Sort by likes and newsest date
const sortTypes = document.querySelectorAll('.sort-likes, .sort-newest');

// Add event listner to both sort types
sortTypes.forEach(sortType => {
  sortType.addEventListener('click', sortComments)
})

// Sort comemnts used as the callback function from click event
function sortComments() {
  getComments().then(data => {
    const sortBy = this.className; // Get sort by type
    const commentsEl = document.querySelector('.comments')
    let commentsHTML = []; // Set empty array for html body

    // Sort according to selected choice
    data.sort((a,b) => {
      if(sortBy.includes('likes')) {
        return (a.likes > b.likes) ? -1 : 1
      }
      if(sortBy.includes('newest')) {
        return new Date(b.date) - new Date(a.date);
      }
    })

    // Loop through comments and build comments html array
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
    commentsEl.innerHTML = commentsHTML.join(''); // Join (with empty string) is to remove the "," between each array item
  })
}


module.exports = formatDate;