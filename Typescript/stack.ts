const promptSync = require("prompt-sync");
const input = promptSync();

class Stack {
  top: number = -1;
  size: number;
  a: number[];

  constructor(size: number) {
    this.size = size;
    this.a = new Array(size);
  }

  push() {
    if (this.top === this.size - 1) {
      console.log("Stack Overflow");
      return;
    }

    const val = Number(input("Enter value to push: "));
    this.top++;
    this.a[this.top] = val;
  }

  pop() {
    if (this.top === -1) {
      console.log("Stack is empty");
      return;
    }

    console.log("Popped:", this.a[this.top]);
    this.top--;
  }

  display() {
    if (this.top === -1) {
      console.log("Stack is empty");
      return;
    }

    console.log("Stack contents:");
    for (let i = this.top; i >= 0; i--) {
      console.log(this.a[i]);
    }
  }

  getTop() {
    if (this.top === -1) {
      console.log("Stack is empty");
    } else {
      console.log("Top element:", this.a[this.top]);
    }
  }

  isEmpty() {
    console.log(this.top === -1 ? "Stack is Empty" : "Stack is not Empty");
  }

  isFull() {
    console.log(this.top === this.size - 1 ? "Stack is Full" : "Stack is not Full");
  }
}

const size = Number(input("Enter the size of the stack: "));
const stack = new Stack(size);

let choice: number;

do {
  console.log("\nOptions:");
  console.log("1. Push");
  console.log("2. Display");
  console.log("3. Pop");
  console.log("4. Top");
  console.log("5. Is Empty");
  console.log("6. Is Full");
  console.log("7. Exit");

  choice = Number(input("Enter choice: "));

  if (choice === 1) stack.push();
  else if (choice === 2) stack.display();
  else if (choice === 3) stack.pop();
  else if (choice === 4) stack.getTop();
  else if (choice === 5) stack.isEmpty();
  else if (choice === 6) stack.isFull();
  else if (choice !== 7) console.log("Invalid input");

} while (choice !== 7);