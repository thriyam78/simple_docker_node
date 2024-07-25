
document.addEventListener('DOMContentLoaded', fetchItems);

async function fetchItems() {
  const res = await fetch('http://localhost:3000/api/items');
  const items = await res.json();
  const itemsList = document.getElementById('items');
  itemsList.innerHTML = '';
  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item.name;
    itemsList.appendChild(li);
  });
}

async function addItem() {
  const itemInput = document.getElementById('item-input');
  const res = await fetch('http://localhost:3000/api/items', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: itemInput.value })
  });
  const newItem = await res.json();
  const li = document.createElement('li');
  li.textContent = newItem.name;
  document.getElementById('items').appendChild(li);
  itemInput.value = '';
}