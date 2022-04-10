const buyBtn = document.querySelectorAll('.buy-btn');
const posts = document.querySelectorAll(`[data-post-id]`);

let purchase_amount;
let post_id;
let user_id;

const buyBtnHandler = async (event) => {
    event.preventDefault();

    const postInfo = event.target.parentElement.children;
    console.log(postInfo);
    // get parent of button's data-post-id 
    // then get the child elements on div
    // then get the values

    const purchase_amount = postInfo[0].innerText;
    const user_id = postInfo[1].innerText;
    const post_id = postInfo[2].innerText;

    console.log(purchase_amount + " postId " + post_id + "userid " + user_id );
    
    if(purchase_amount && post_id && user_id){
        const response = await fetch(`/api/purchases`, {
            method: 'POST',
            body: JSON.stringify({
                purchase_amount,
                // post_id
                post_id,
                // user_id
                user_id
            }),
            headers: {
              'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            alert('purchased shoe');
            location.href = "/home";
        } else {
            alert('error');
        }
    } else {
        alert('error');
    }
    

}


buyBtn.forEach(elem => elem.addEventListener('click', buyBtnHandler));