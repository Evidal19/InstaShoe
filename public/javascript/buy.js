const buyBtn = document.querySelectorAll('.buy-btn');
const purchase_amounts = document.querySelectorAll('.purchase_amount');
const post_ids = document.querySelectorAll('.post_id');
const user_ids = document.querySelectorAll('.user_id');

let purchase_amount;
let post_id;
let user_id;

const buyBtnHandler = async (event) => {
    event.preventDefault();

    for (let i = 0; i < buyBtn.length; i++) {
        if(document.querySelector(`[data-post-id="${i}"]`)) {
            purchase_amount = purchase_amounts[i].textContent;
            post_id = post_ids[i].textContent;
            user_id = user_ids[i].textContent;
        }
    }

    // const purchase_amount = document.querySelector('.purchase_amount').textContent;
    // const post_id = document.querySelector('.post_id').textContent;
    // const user_id = document.querySelector('.user_id').textContent;

    console.log(purchase_amount + " postId " + post_id + "userid " + user_id );
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
        const sold_amount = document.querySelector('.purchase_amount').textContent;
        const post_id = document.querySelector('.post_id').textContent;
        const user_id = document.querySelector('.post_user_id').textContent;

        const newResponse = await fetch(`/api/sold`, {
            method: 'POST',
            body: JSON.stringify({
                sold_amount,
                // post_id
                post_id,
                // user_id
                user_id
            }),
            headers: {
              'Content-Type': 'application/json'
            }
        });
        if (newResponse.ok) {
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