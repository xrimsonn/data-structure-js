// Definimos una lista de personas con sus nombres, apellidos y edades
const people = [
  {
    name: 'Antonio',
    surname: 'Rosales',
    age: 19,
  },
  {
    name: 'René',
    surname: 'Ramos',
    age: 29,
  },
  {
    name: 'Yanelin',
    surname: 'Gurrola',
    age: 18,
  },
  {
    name: 'Brian',
    surname: 'Duarte',
    age: 21,
  },
  {
    name: 'Alexito',
    surname: 'Duarte',
    age: 20,
  },
];

// Función que carga la lista de personas en una página web
function load() {
  var list = document.getElementById('list');

  for (let i = 0; i < people.length; i++) {
    var li = document.createElement('li');
    li.id = 'li' + i;
    li.innerHTML =
      people[i].name + ' ' + people[i].surname + ' (' + people[i].age + ')';
    list.appendChild(li);
  }
}

// Función que ordena la lista de personas por edad
function sort() {
  people.sort(function (a, b) {
    return a.age - b.age;
  });

  for (let i = 0; i < people.length; i++) {
    var li = document.getElementById('li' + i);
    li.innerHTML =
      people[i].name + ' ' + people[i].surname + ' (' + people[i].age + ')';
  }
}

// Función que mezcla la lista de personas de forma aleatoria
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

  for (let i = 0; i < people.length; i++) {
    var li = document.getElementById('li' + i);
    li.innerHTML =
      people[i].name + ' ' + people[i].surname + ' (' + people[i].age + ')';
  }
}

// Función que busca una persona en la lista por su nombre o apellido
function findPerson(inputString) {
  return people.find((person) => {
    const nameMatch = person.name
      .toLowerCase()
      .includes(inputString.toLowerCase());
    const surnameMatch = person.surname
      .toLowerCase()
      .includes(inputString.toLowerCase());
    return nameMatch || surnameMatch;
  });
}

// Función que busca una persona en la lista por su nombre y muestra si la encuentra o no
function getPerson() {
  var name = document.getElementById('names').value;
  var namesAns = document.getElementById('namesAns');

  people.find((person) => {
    const nameMatch = person.name.toLowerCase().includes(name.toLowerCase());
    const surnameMatch = person.surname
      .toLowerCase()
      .includes(name.toLowerCase());
  });

  const foundPerson = findPerson(name);

  if (foundPerson) {
    namesAns.innerHTML =
      'Persona encontrada: ' + foundPerson.name + ' ' + foundPerson.surname;
  } else {
    namesAns.innerHTML = 'Persona NO encontrada';
  }
}

// Función que muestra una lista de personas mayores de una edad específica
function getAdults() {
  var ageAns = document.getElementById('ageAns');
  var age = document.getElementById('age').value;
  var ol = document.createElement('ul');

  ageAns.innerHTML = '';
  var adults = people.filter((person) => person.age > age);

  adults.forEach((a) => {
    var li = document.createElement('li');
    li.innerHTML = a.name + ' ' + a.surname + ' (' + a.age + ')';
    ol.appendChild(li);
  });

  ageAns.appendChild(ol);
}