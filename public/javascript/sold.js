async function soldFormHandler(event) {
  event.preventDefault();

  const sold = document.querySelector('button-dashboard-4').value.trim();
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const response = await fetch(`/api/post/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      sold
    }),
  });

  if (response.ok) {
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
  }
}

document.getElementById('#button-dashboard-4').addEventListener('submit', soldFormHandler);