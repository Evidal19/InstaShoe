var listItems = document.querySelector('#the-list');
listItems.style.visibility = 'hidden';

window.addEventListener("load", () => {
  // get HMTL elements
  var filter = document.getElementById('the-filter'), // search box
      list = document.querySelectorAll('#the-list li'); // all list items
  
  // attach keyup listener to search box
  filter.onkeyup = () => {
    listItems.style.visibility = 'visible';
  
    // get current search term
    let search = filter.value.toLowerCase();

    // loop through items, show only items that match search
    for (let i of list) {
      let item = i.innerHTML.toLowerCase();
      if (item.indexOf(search) == -1) { i.classList.add('hide'); }
      else { i.classList.remove('hide'); }
    }
  };
});
