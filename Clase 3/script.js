// Asignación a los arreglos (números, nombres y objetos de personas).
var numbers = [5, 11, 55, 331, 2, 35];
var names = ['José', 'Antonio', 'Carlitos', 'Vanessa', 'Brian'];
var people = [
  {
    name: 'Sofía',
    age: 18,
  },
  {
    name: 'Ulises',
    age: 20,
  },
  {
    name: 'Pablo',
    age: 19,
  },
];

// Carga todos los elementos al body cuando carga la página.
function showList() {
  // Obtiene la lista usando el DOM.
  var nulist = document.getElementById('num-list');

  // Recorre todos los elementos de "numbers" y crea elementos de lista.
  numbers.forEach((number, i) => {
    var li = document.createElement('li');
    li.id = 'nuli' + i;
    li.innerHTML = number;
    nulist.appendChild(li);
  });

  // Hace lo mismo con los nombres.
  var nalist = document.getElementById('name-list');
  names.forEach((name, i) => {
    var li = document.createElement('li');
    li.id = 'nali' + i;
    li.innerHTML = name;
    nalist.appendChild(li);
  });

  // Y también con los objetos.
  var oblist = document.getElementById('obj-list');
  people.forEach((person, i) => {
    var li = document.createElement('li');
    li.id = 'obli' + i;
    li.innerHTML = 'Nombre: ' + person.name + ', Edad: ' + person.age;
    oblist.appendChild(li);
  });
}

// Ordena los números
function sortNumbers() {
  // Usa el sort() para ordenarlos (alfabéticamente).
  numbers.sort();

  // Recorre los elementos de "numbers" y actualiza su contenido.
  numbers.forEach((number, i) => {
    var li = document.getElementById('nuli' + i);
    li.innerHTML = number;
  });
}

// Ordena los nombres
function sortNames() {
  names.sort();
  names.forEach((name, i) => {
    var li = document.getElementById('nali' + i);
    li.innerHTML = name;
  });
}

function sortPeopleByAge() {
  // Ordena el arreglo de objetos por el atributo edad.
  people.sort((a, b) => a.age - b.age);
  people.forEach((person, i) => {
    var li = document.getElementById('obli' + i);
    li.innerHTML = 'Nombre: ' + person.name + ', Edad: ' + person.age;
  });
}

// Función para desordenar el arreglo pasado como parámetro.
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  // Actualiza el orden de cada arreglo en el HTML.
  numbers.forEach((number, i) => {
    var li = document.getElementById('nuli' + i);
    li.innerHTML = number;
  });

  names.forEach((name, i) => {
    var li = document.getElementById('nali' + i);
    li.innerHTML = name;
  });

  people.forEach((person, i) => {
    var li = document.getElementById('obli' + i);
    li.innerHTML = 'Nombre: ' + person.name + ', Edad: ' + person.age;
  });
}
