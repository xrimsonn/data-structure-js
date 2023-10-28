var cities = ['Acapulco', 'Chihuahua', 'San Guillermo', 'Aquiles Serdán'];

function show() {
  var list = document.getElementById('list');
  list.innerHTML = '';
  cities.forEach((city) => {
    var li = document.createElement('li');
    li.innerHTML = city;
    list.appendChild(li);
  });
}

function clean() {
  cities.splice(0);
  show();
}

function clean_interval() {
  cities.splice(1, 2);
  show();
}

function replace() {
  cities.splice(1, 1, 'Piedras Negras');
  show(); 
}

function insert() {
  cities.splice(1, 0, 'Monterrey');
  show(); 
}