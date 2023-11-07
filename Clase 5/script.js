function binarySearchTree() {
  this._root = null;
}

binarySearchTree.prototype = {
  constructor: binarySearchTree,

  add: function(value) {
    // Crear un nuevo nodo
    var node = {
      value: value,
      left: null,
      right: null
    };

    // Caso especial: no hay nodos
    if (this._root === null) {
      this._root = node;
    } else {
      // Empezar desde la raíz
      var current = this._root;

      while(true) {
        // Si el valor es menor que el nodo actual, ir a la izquierda
        if (value < current.value) {
          // Si no hay nodo a la izquierda, agregar el nuevo nodo
          if (current.left === null) {
            current.left = node;
            break;
          } else {
            current = current.left;
          }
        // Si el valor es mayor que el nodo actual, ir a la derecha
        } else if (value > current.value) {
          // Si no hay nodo a la derecha, agregar el nuevo nodo
          if (current.right === null) {
            current.right = node;
            break;
          } else {
            current = current.right;
          }
        // Si el valor es igual al nodo actual, ignorarlo
        } else {
          break;
        }
      }
    }
  },

  traverse: function(process) {
    // Función auxiliar
    function inOrder(node) {
      if (node) {
        // Recorrer el subárbol izquierdo
        if (node.left !== null) {
          inOrder(node.left);
        }

        // Llamar a la función de procesamiento
        process.call(this, node);

        // Recorrer el subárbol derecho
        if (node.right !== null) {
          inOrder(node.right);
        }
      }
    }

    // Iniciar desde la raíz
    inOrder(this._root);
  },

  size: function() {
    var length = 0;

    this.traverse(function(node) {
      length++;
    });

    return length;
  },

  toArray: function() {
    var result = [];

    this.traverse(function(node) {
      result.push(node.value);
    });

    return result;
  },

  contains: function(value) {
    var found = false;

    this.traverse(function(node) {
      if (value === node.value) {
        found = true;
      }
    });

    return found;
  },

}

var bst = new binarySearchTree();
bst.add(3);
bst.add(2);
bst.add(4);
bst.add(1);
bst.add(5);
bst.add(6);
bst.add(7);
bst.add(8);

console.log(bst.toArray());