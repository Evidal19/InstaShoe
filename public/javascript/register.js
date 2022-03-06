const signupFormHandler = (event) => {
    event.preventDefault();
  
    const username = document.querySelector("#username").value.trim();
    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value.trim();
  
  
    if (username && email && password) {
      fetch("/api/users", {
        method: "POST",
        body: JSON.stringify({
          username,
          email,
          password,
        }),
        headers: { "Content-Type": "application/json" },
      }).then(()=>{
        location.href = "/login";
      })
    }
}

  
document.querySelector('#submit-form')
.addEventListener('submit', signupFormHandler);