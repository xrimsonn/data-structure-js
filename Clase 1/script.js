// Definición de arreglos y objetos
var people = ['James', 'Carlitos', 'Juan', 'Sofia', 'Amanda'];
var nums = [1, 2, 3, 4, 5];
var pets = [
  {
    species: 'Gato',
    breed: 'Naranja',
    age: 3,
  },
  {
    species: 'Gato',
    breed: 'Siames',
    age: 2,
  },
  {
    species: 'Perro',
    breed: 'Labrador',
    age: 5,
  },
];

// Función para mostrar información de mascotas en una tabla HTML
function animals() {
  var table = document.getElementById('table'); // Obtiene una referencia a una tabla en el documento
  pets.forEach((a) => { // Itera a través de los objetos de mascotas
    var tr = document.createElement('tr'); // Crea una fila
    var tds = document.createElement('td'); // Crea celdas para especie, raza y edad
    var tdb = document.createElement('td');
    var tda = document.createElement('td');

    tds.innerHTML = a.species; // Llena las celdas con datos de mascotas
    tdb.innerHTML = a.breed;
    tda.innerHTML = a.age;

    tr.appendChild(tds); // Agrega las celdas a la fila
    tr.appendChild(tdb);
    tr.appendChild(tda);
    table.appendChild(tr); // Agrega la fila a la tabla
  });
}

// Función para mostrar una lista de personas
function show() {
  animals(); // Llama a la función "animals" para mostrar información de mascotas

  var list = document.getElementById('list'); // Obtiene una referencia a una lista en el documento

  people.forEach((person) => { // Itera a través de los nombres de personas
    var li = document.createElement('li'); // Crea elementos de lista
    li.innerHTML = person; // Llena los elementos con nombres de personas
    list.appendChild(li); // Agrega los elementos a la lista
  });
}

// Función para calcular la suma de los números en el arreglo "nums"
function sumArray() {
  console.log(nums); // Muestra el arreglo "nums" en la consola

  let sum = 0;
  nums.forEach((x) => { // Itera a través de los números y calcula la suma
    sum += x;
  });

  console.log('La suma es: ' + sum); // Muestra la suma en la consola
}

// Función para trabajar con un objeto que representa a una persona
function objAttribute() {
  var objAntonio = {
    name: 'José Antonio',
    age: 19,
    footballTeam: 'Tottenham Hotspur',
  };

  console.log(objAntonio); // Muestra el objeto "objAntonio" en la consola
  console.log(
    'El equipo de ' + objAntonio.name + ' es el ' + objAntonio.footballTeam
  ); // Muestra información sobre el objeto en la consola
}
