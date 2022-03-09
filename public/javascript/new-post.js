const imageForm = document.querySelector("#imageForm");
const imageInput = document.querySelector("#imageInput");

imageForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const file = imageInput.files[0];

  const { url } = await fetch("/api/users/s3url").then((res) => res.json());
  console.log("url " + url);

  // add image to s3 bucket
  await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: file,
  }).then(() => {
    const imageUrl = url.split("?")[0];
    console.log(imageUrl);

    const post_title = document.querySelector("#post_title").value.trim();
    const post_description = document
      .querySelector("#post_description")
      .value.trim();
    const price = document.querySelector("#price").value.trim();

    fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        post_title: post_title,
        post_description: post_description,
        file_src: imageUrl,
        price: price,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
        location.href = '/home';
    });
    // const img = document.createElement("img")
    // img.src = imageUrl
    // document.body.appendChild(img)
  });
});
