const buyBtn = document.querySelector('.buy-btn');


const buyBtnHandler = async (event) => {
    event.preventDefault();

    const purchase_amount = document.querySelector('.purchase_amount').textContent;
    const post_id = document.querySelector('.post_id').textContent;
    const user_id = document.querySelector('.user_id').textContent;

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
        alert('purchased shoe');
    } else {
        alert('error');
    }

}

buyBtn.addEventListener('click', buyBtnHandler);