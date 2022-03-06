async function loginFormHandler(event) {
  event.preventDefault();

  console.log("login form handler");

  const username = document.querySelector("#username").value.trim();
  const password = document.querySelector("#password").value.trim();

  if (username && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/home");
    } else {
      alert(response.statusText);
    }
  } else {
    alert('username or password incorrect');
  }
}

document.querySelector("#submit-btn")
  .addEventListener("click", loginFormHandler);

document.querySelector('#button-sign-up')
  .addEventListener('click', signupFormHandler);
