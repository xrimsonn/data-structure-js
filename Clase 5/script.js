var cars = ['Tsuru', 'Civic', 'Sentra', 'Chevy', 'Beetle'];

function show() {
  var list = document.getElementById('list');

  list.innerHTML = '';

  cars.forEach((e, i) => {
    var li = document.createElement('li');
    var input = document.createElement('input');
    li.innerHTML = e + '&nbsp';
    input.type = 'checkbox';
    input.id = 'd' + i;
    console.log(i);
    list.appendChild(li);
    li.appendChild(input);
  });
}

function add() {
  var car = document.getElementById('car').value;
  if (car != '') cars.push(car);
  show();
}

function remove() {
  for (let i = 0; i < cars.length; i++) {
    if (document.getElementById('d' + i).checked) cars.splice(i, 1);
  }
  show();
}
