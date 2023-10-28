var people = [
  'Esaú Melendez',
  'Yanelin Castro',
  'Pedro Porro',
  'Milton Batres',
  'René Duarte',
];

function show() {
  const list = document.getElementById('list');
  const first = document.getElementById('first');
  first.innerHTML = people[0]; // Mostrar el primer elemento

  list.innerHTML = '';

  if (people.length === 0) {
    first.innerHTML = 'No hay pacientes';
  } else {
    for (let i = 1; i < people.length; i++) {
      const li = document.createElement('li');
      li.innerHTML = people[i];
      list.append(li);
    }
  }
}

function next() {
  people.shift(); // Eliminar el primer elemento del array
  show();
}

function add() {
  const input = document.getElementById('input').value;
  people.push(input);
  show();
}
