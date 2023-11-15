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

  traverse(node = this.root) {
    if (node !== null) {
      this.traverse(node.left);
      console.log(node.value);
      this.traverse(node.right);
    }
  }

  remove(value) {
    const deletedNode = this._remove(this.root, value);

    if (deletedNode !== null) {
      if (deletedNode.left !== null) {
        this.insert(deletedNode.left.value);
      }
      if (deletedNode.right !== null) {
        this.insert(deletedNode.right.value);
      }
    }

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
}

const tree = new BinaryTree();

tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(18);
tree.insert(9);

console.log('Recorrido en orden:');
tree.traverse();

console.log('Recorrido después de eliminar 5:');
tree.remove(5);
tree.traverse();

console.log('Recorrido después de agregar 12:');
tree.insert(12);
tree.traverse();
