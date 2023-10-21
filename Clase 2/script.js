// Definición de un arreglo de objetos que representan personas y sus atributos
var people = [
  {
    name: 'Antonio',
    age: 19,
    body: {
      height: 1.8,
      skin_tone: 'Blanco',
      weight: 60,
    },
    awards: [
      'Mejor estudiante',
      'Nobel',
      'Placa del millon',
    ],
  },
  {
    name: 'Dalía',
    age: 19,
    body: {
      height: 1.6,
      skin_tone: 'Blanco',
      weight: 45,
    },
    awards: [
      'Oscar',
      'Placa del millon',
    ],
  },
  {
    name: 'Juan',
    age: 29,
    body: {
      height: 1.9,
      skin_tone: 'Moreno',
      weight: 90,
    },
    awards: [
      'Mejor estudiante',
      'Oscar',
      'Placa del millon',
    ],
  },
  {
    name: 'Pedro',
    age: 21,
    body: {
      height: 1.7,
      skin_tone: 'Black',
      weight: 65,
    },
    awards: [
      'Mejor estudiante',
      'Nobel',
    ],
  },
];

// Función para mostrar los premios (awards) de cada persona en el documento HTML
function showAwards() {
  var div = document.getElementById('award'); // Obtiene una referencia a un elemento div en el documento

  // Itera a través de cada objeto de persona en el arreglo "people"
  people.forEach((person) => {
    var bold = document.createElement('b'); // Crea un elemento "b" (negrita) para el nombre de la persona
    bold.innerHTML = person.name; // Establece el nombre de la persona como contenido del elemento "b"

    var ul = document.createElement('ul'); // Crea una lista no ordenada (ul) para los premios de la persona

    // Itera a través de los premios (awards) de la persona
    person.awards.forEach((award) => {
      var li = document.createElement('li'); // Crea elementos de lista (li) para cada premio
      li.innerHTML = award; // Establece el premio como contenido del elemento de lista
      ul.appendChild(li); // Agrega el elemento de lista a la lista no ordenada
    });

    div.appendChild(bold); // Agrega el nombre en negrita al elemento div
    div.appendChild(ul); // Agrega la lista de premios al elemento div
  });
}
