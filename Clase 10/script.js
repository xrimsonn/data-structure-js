class Stack {
  constructor() {
    this.elements = [];
  }

  push(element) {
    this.elements.push(element);
  }

  pop() {
    return this.elements.pop();
  }

  peek() {
    return this.elements[this.elements.length - 1];
  }

  isEmpty() {
    return this.elements.length === 0;
  }

  size() {
    return this.elements.length;
  }

  print() {
    console.log(this.elements.toString());
  }
}

var songs = [
  'Parking Lot',
  "I'll Take You Everywhere",
  'I Hate It Too',
  'Unfinished',
  'Grace, The Snow Is Here',
];

// Declaramos el historial con la clase de Stack
var _history = new Stack();

var songs_catalogue = [
  'Parking Lot',
  "I'll Take You Everywhere",
  'I Hate It Too',
  'Unfinished',
  'Grace, The Snow Is Here',
  'Stars',
  'Your Graduation',
  'M',
  "This isn't the Tenka-ichi Budokai",
  'Caught in a Flood With the Captain of the Cheerleading Squad',
  'Hialeah',
  'The Coffin Was So Light, I Thought It Might Float Away',
  'February - Bonus',
  'Palisade',
  'Safety',
];

function show() {
  const list = document.getElementById('list');
  const first = document.getElementById('first');
  first.innerHTML = '<i class="fa-regular fa-circle-play"></i> ' + songs[0];
  list.innerHTML = '';

  if (songs.length === 0) {
    first.innerHTML = 'No more tracks left';
  } else {
    songs.forEach((track, i) => {
      const li = document.createElement('li');
      const button = document.createElement('button');
      button.className = 'fa-solid fa-square-minus fa-lg';
      button.style = 'width: auto; background: none; border: none; cursor: pointer;';
      button.addEventListener('click', function () {
        li.remove();
      });

      if (i != 0) {
        li.appendChild(button);
        li.appendChild(document.createTextNode(track));
        list.appendChild(li);
      }
    });
  }
}

function show_history() {
  const history_list = document.getElementById('history');
  history_list.innerHTML = '';

  // Usamos el método size para saber si el historial está vacío
  if (_history.size() === 0) {
    history_list.innerHTML = 'No tracks played yet';
  } else {
    // Usamos el método forEach para recorrer el array del historial
    _history.elements.forEach((track) => {
      const li = document.createElement('li');
      li.appendChild(document.createTextNode(track));
      history_list.appendChild(li);
    });
  }
}

function show_catalogue() {
  const catalogue_list = document.getElementById('catalogue');
  catalogue_list.innerHTML = '';

  songs_catalogue.forEach((track) => {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(track));
    catalogue_list.appendChild(li);
  });
}

function next() {
  if (songs.length != 0) _history.push(songs[0]);
  songs.shift();
  show();
  show_history();
}

function previous() {
  // Usamos el método size otra vez y el método pop para sacar el último elemento del historial
  if (_history.size() != 0) songs.unshift(_history.pop());
  show();
  show_history();
}

function add() {
  const inputElement = document.getElementById('input');
  const input = inputElement.value;
  const inputLowerCase = input.toLowerCase();
  const catalogSong = songs_catalogue.find(song => song.toLowerCase() === inputLowerCase);

  if (catalogSong) {
    songs.push(catalogSong);
    inputElement.value = '';
    show();
  } else {
    alert('La canción no está en el catálogo de canciones.');
  }
}

function load() {
  show();
  show_history();
  show_catalogue();
}
