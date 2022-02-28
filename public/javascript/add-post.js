async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name=""]').value;
    const text = document.querySelector('textarea[name=""]').value;
  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        text,
        post_url
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
}
  
document.querySelector('').addEventListener('submit', newFormHandler);
  