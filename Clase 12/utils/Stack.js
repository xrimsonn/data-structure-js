class Stack {

  constructor() {
    this.elements = [];
  }

  push(element) {
    this.elements.push(element);
  }

  pop() {
    this.elements.pop();
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

export default Stack;
