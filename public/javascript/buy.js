const buyBtn = document.querySelector('.buy-btn');


const buyBtnHandler = async (event) => {
    event.preventDefault();

    const purchase_amount = document.querySelector('.purchase_amount').innerText;
    const post_id = document.querySelector('.post_id').innerText;
    const user_id = document.querySelector('.user_id').innerText;

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
        alert('purchased shoe');
    } else {
        alert('error');
    }

}

buyBtn.addEventListener('click', buyBtnHandler);