const addComment = document.querySelector('.add-comment');


addComment.addEventListener('click', (event) => {
    console.log('Hello new comment');
    event.preventDefault();

    const comment_text = document.querySelector('#comment').value.trim();
    const post_id =  document.querySelector('.post-id').textContent;
    const user_id = document.querySelector('.user-id').textContent;
    const date = new Date();

    fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({
            comment_text,
            user_id,
            post_id,
            date
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then( res => {
        console.log(res);
;       location.href = `/post/${post_id}`;
    })
})