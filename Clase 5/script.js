class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  constructor(value) {
    this.root = new Node(value);
  }

  insert(value) {
    this.root = this._insert(this.root, value);
  }

  _insert(node, value) {
    if (node === null) {
      return new Node(value);
    }

    if (value < node.value) {
      node.left = this._insert(node.left, value);
    } else if (value > node.value) {
      node.right = this._insert(node.right, value);
    }

    return node;
  }

  remove(value) {
    const deletedNode = this._remove(this.root, value);
    this.root = deletedNode;
  }

  _remove(node, value) {
    if (node === null) {
      return null;
    }

    if (value < node.value) {
      node.left = this._remove(node.left, value);
    } else if (value > node.value) {
      node.right = this._remove(node.right, value);
    } else {
      if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      }
      const minValue = this.minValue(node.right);
      node.value = minValue;
      node.right = this._remove(node.right, minValue);
    }
    return node;
  }

  minValue(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node.value;
  }

  print() {
    this._print(this.root, 0);
  }

  _print(node, depth) {
    if (node !== null) {
      this._print(node.right, depth + 1);
      console.log(' '.repeat(depth * 4) + node.value);
      this._print(node.left, depth + 1);
    }
  }
}

const tree = new BinaryTree();

tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(18);
tree.insert(9);
tree.insert(8);
tree.insert(14);
tree.insert(20);
tree.insert(2);
tree.insert(6);
tree.insert(4);
tree.print();

console.log('Recorrido después de eliminar 7 y 15:');
tree.remove(7);
tree.remove(15);
tree.print();
