async function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('').value.trim();
    const email = document.querySelector('').value.trim();
    const password = document.querySelector('').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      // check the response status
      if (response.ok) {
        console.log('success');
      } else {
        alert(response.statusText);
      }
    }
}

async function loginFormHandler(event) {
    event.preventDefault();
  
    const email = document.querySelector('').value.trim();
    const password = document.querySelector('').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
}
  
document.querySelector('').addEventListener('submit', signupFormHandler);
document.querySelector('').addEventListener('submit', loginFormHandler);