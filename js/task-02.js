const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const el = ingredients.map(el => {

  const prodEl = document.createElement('li');
  prodEl.classList.add('item');
  prodEl.textContent = el;
  return prodEl;

})

const ul = document.querySelector('ul');
ul.append(...el);

console.log(ul);