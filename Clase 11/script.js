// Definición de un arreglo de objetos que almacena información de estudiantes
var students = [
  { name: 'Brian', grades: [75, 80, 85, 90, 95], id: 'f3Rhi' },
  { name: 'Julio', grades: [80, 85, 90, 95, 100], id: 'R43Li' },
  { name: 'Yanelin', grades: [90, 95, 100, 85, 95], id: 'IhRf3' },
];

// Definición de un objeto para representar al profesor "Milton" y su grupo de estudiantes
var teacher = { name: 'Milton', group: [] };

// Función que muestra la lista de estudiantes en una tabla HTML
function showStudents() {
  // Obtener la tabla HTML por su ID
  var table = document.getElementById('students-table');
  table.innerHTML = '';

  // Crear elementos para el encabezado y cuerpo de la tabla
  var thead = document.createElement('thead');
  var tbody = document.createElement('tbody');

  // Crear la fila de encabezado y las celdas correspondientes
  var headerRow = document.createElement('tr');
  var nameHeader = document.createElement('th');
  var gradesHeader = document.createElement('th');
  var idHeader = document.createElement('th');
  var finalGrade = document.createElement('th');
  var actionHeader = document.createElement('th');

  // Asignar texto a las celdas de encabezado
  nameHeader.textContent = 'Nombre';
  gradesHeader.textContent = 'Calificaciones';
  idHeader.textContent = 'Matrícula';
  finalGrade.textContent = 'Promedio final';
  actionHeader.textContent = 'Acción';

  // Agregar las celdas de encabezado a la fila de encabezado
  headerRow.appendChild(nameHeader);
  headerRow.appendChild(gradesHeader);
  headerRow.appendChild(idHeader);
  headerRow.appendChild(finalGrade);
  headerRow.appendChild(actionHeader);

  // Agregar la fila de encabezado al encabezado de la tabla
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Recorrer el arreglo de estudiantes y crear una fila y celdas para cada uno
  students.forEach(function (student) {
    var row = document.createElement('tr');
    var nameCell = document.createElement('td');
    var gradesCell = document.createElement('td');
    var idCell = document.createElement('td');
    var finalGradeCell = document.createElement('td');
    var addButtonCell = document.createElement('td');

    // Asignar los valores correspondientes a cada celda
    nameCell.textContent = student.name;
    gradesCell.textContent = student.grades.join(', ');
    idCell.textContent = student.id;
    finalGradeCell.innerHTML =
      student.grades.reduce(function (a, b) {
        return a + b;
      }, 0) / student.grades.length;

    // Crear un botón y asignarle contenido e interacción
    var addButton = document.createElement('button');
    addButton.className = 'icon-button';
    addButton.innerHTML = '<i class="fa-solid fa-user-plus"></i>';
    addButton.addEventListener('click', function () {
      // Obtener el nombre del estudiante desde la fila
      var studentName = nameCell.textContent;

      // Verificar si el estudiante ya está en el grupo del profesor
      var isStudentInGroup = teacher.group.some(function (groupStudent) {
        return groupStudent.name === studentName;
      });

      if (!isStudentInGroup) {
        // Buscar al estudiante en el arreglo de estudiantes
        var studentToAdd = students.find(function (s) {
          return s.name === studentName;
        });

        if (studentToAdd) {
          // 1. Creamos una copia del objeto 'studentToAdd' usando Object.assign({}, studentToAdd).
          //    Esto crea un nuevo objeto vacío ({}) y copia todas las propiedades de 'studentToAdd' en ese objeto.
          //    El resultado es que tenemos una copia exacta del estudiante sin modificar el original.
          // 2. Luego, agregamos esta copia del estudiante al grupo del profesor Milton.
          //    Usamos teacher.group.push() para agregar la copia al arreglo teacher.group.
          //    De esta manera, el estudiante se convierte en parte del grupo del profesor sin afectar el arreglo de estudiantes principal.
          teacher.group.push(Object.assign({}, studentToAdd));
          load(); // Actualizar las tablas para reflejar los cambios
        }
      }
    });

    // Agregar el botón a la celda correspondiente
    addButtonCell.appendChild(addButton);

    // Agregar las celdas a la fila
    row.appendChild(nameCell);
    row.appendChild(gradesCell);
    row.appendChild(idCell);
    row.appendChild(finalGradeCell);
    row.appendChild(addButtonCell);

    // Agregar la fila al cuerpo de la tabla
    tbody.appendChild(row);
  });

  // Agregar el cuerpo de la tabla a la tabla
  table.appendChild(tbody);
}

// Función que muestra la lista de estudiantes en el grupo del profesor
function showGroupStudents() {
  var summary = document.getElementById('teacher');
  summary.innerHTML = 'Alumnos del profesor ' + teacher.name;
  var table = document.getElementById('teacher-table');
  table.innerHTML = '';

  var thead = document.createElement('thead');
  var tbody = document.createElement('tbody');

  var headerRow = document.createElement('tr');
  var nameHeader = document.createElement('th');
  var gradesHeader = document.createElement('th');
  var idHeader = document.createElement('th');
  var finalGrade = document.createElement('th');

  nameHeader.textContent = 'Nombre';
  gradesHeader.textContent = 'Calificaciones';
  idHeader.textContent = 'Matrícula';
  finalGrade.textContent = 'Promedio final';

  headerRow.appendChild(nameHeader);
  headerRow.appendChild(gradesHeader);
  headerRow.appendChild(idHeader);
  headerRow.appendChild(finalGrade);

  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Recorrer la lista de estudiantes en el grupo del profesor
  teacher.group.forEach(function (groupStudent) {
    var row = document.createElement('tr');
    var nameCell = document.createElement('td');
    var gradesCell = document.createElement('td');
    var idCell = document.createElement('td');
    var finalGradeCell = document.createElement('td');

    nameCell.textContent = groupStudent.name;
    gradesCell.textContent = groupStudent.grades.join(', ');
    idCell.textContent = groupStudent.id;
    finalGradeCell.textContent =
      groupStudent.grades.reduce(function (a, b) {
        return a + b;
      }, 0) / groupStudent.grades.length;

    row.appendChild(nameCell);
    row.appendChild(gradesCell);
    row.appendChild(idCell);
    row.appendChild(finalGradeCell);

    tbody.appendChild(row);
  });

  table.appendChild(tbody);
}

// Función que agrega un nuevo estudiante al arreglo de datos
function add() {
  // Obtener los valores de los campos de entrada
  var name = document.getElementById('name').value;
  var grades = document.getElementById('grades').value;
  var id = document.getElementById('id').value;

  if (name && grades && id) {
    // Agregar un nuevo objeto estudiante al arreglo de datos
    students.push({
      name: name,
      grades: grades.split(',').map((grade) => {
        return parseInt(grade);
      }),
      id: id,
    });

    // Limpiar los campos de entrada
    document.getElementById('name').value = '';
    document.getElementById('grades').value = '';
    document.getElementById('id').value = '';

    // Actualizar las tablas para reflejar los cambios
    load();
  }
}

// Función que carga y muestra los datos en las tablas
function load() {
  showStudents();
  showGroupStudents();
}
