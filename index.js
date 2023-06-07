const item1 = document.querySelector('.item1');
const item2 = document.querySelector('.item2');
const item3 = document.querySelector('.item3');

item1.addEventListener('click', () => {
  item1.classList.toggle('active');
});

item2.addEventListener('click', () => {
  item2.classList.toggle('active');
});

item3.addEventListener('click', () => {
  item3.classList.toggle('active');
});