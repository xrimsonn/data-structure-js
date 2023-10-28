var names_list = ['Esaú', 'Yanelin', 'Pedro', 'Milton', 'René'];
var people = [
  {
    name: 'René',
    pwd: '1234',
    age: 22,
  },
];

var name, pwd, age;

function show() {
  var list = document.getElementById('list');
  list.innerHTML = '';
  people.forEach((person, i) => {
    var li = document.createElement('li');
    li.innerHTML =
      'Nombre: ' +
      person.name +
      ', Contraseña:  ' +
      person.pwd +
      ', Edad: ' +
      person.age;
    list.appendChild(li);
  });
}

function set() {
  name = document.getElementById('name').value;
  pwd = document.getElementById('pwd').value;
  age = document.getElementById('age').value;
}

function insert_head() {
  set();
  people.unshift({
    name: name,
    pwd: pwd,
    age: age,
  });
  show();
}

function insert_tail() {
  set();
  people.push({
    name: name,
    pwd: pwd,
    age: age,
  });
  show();
}

function remove_tail() {
  if (people.length) {
    alert('¿Quieres eliminar el último registro?');
    people.pop();
  } else {
    alert('No hay personas restantes.');
  }
  show();
}

function sort_asc() {
  people.sort((a, b) => {
    return a.age - b.age;
  });
  show();
}

function sort_desc() {
  people.reverse();
  show();
}

function search() {
  set();
  let item = people.find((e) => e.name === name);
  if (!item) {
    alert('No existe la persona.');
  } else {
    document.getElementById('search').innerHTML =
      'Nombre: ' +
      item.name +
      ', Contraseña:  ' +
      item.pwd +
      ', Edad: ' +
      item.age;
  }
}
