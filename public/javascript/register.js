const imageForm = document.querySelector("#imageForm");
const imageInput = document.querySelector("#imageInput");

const signupFormHandler = async (event) => {
    event.preventDefault();
    const file = imageInput.files[0];

    const { url } = await fetch("/api/users/s3url").then((res) => res.json());
    console.log("url " + url);

  
    await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: file,
    }).then(() => {
      const imageUrl = url.split("?")[0];

      const username = document.querySelector("#username").value.trim();
      const email = document.querySelector("#email").value.trim();
      const password = document.querySelector("#password").value.trim();
    
      if (username && email && password) {
        fetch("/api/users", {
          method: "POST",
          body: JSON.stringify({
            username: username,
            email: email,
            password: password,
            file_src: imageUrl
          }),
          headers: { "Content-Type": "application/json" },
        }).then(()=>{
          location.href = "/login";
        })
      }
    });

    

}

  
document.querySelector('#submit-form')
.addEventListener('submit', signupFormHandler);