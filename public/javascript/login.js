async function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('reg-username').value.trim();
    const email = document.querySelector('email').value.trim();
    const password = document.querySelector('reg-password').value.trim();
  
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
  
    const email = document.querySelector('username').value.trim();
    const password = document.querySelector('password').value.trim();
  
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
  
document.getElementById('button-sign-up').addEventListener('submit', signupFormHandler);
document.getElementById('button-login').addEventListener('submit', loginFormHandler);