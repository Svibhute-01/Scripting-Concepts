var promptSync = require("prompt-sync");
var input = promptSync();
var Stack = /** @class */ (function () {
    function Stack(size) {
        this.top = -1;
        this.size = size;
        this.a = new Array(size);
    }
    Stack.prototype.push = function () {
        if (this.top === this.size - 1) {
            console.log("Stack Overflow");
            return;
        }
        var val = Number(input("Enter value to push: "));
        this.top++;
        this.a[this.top] = val;
    };
    Stack.prototype.pop = function () {
        if (this.top === -1) {
            console.log("Stack is empty");
            return;
        }
        console.log("Popped:", this.a[this.top]);
        this.top--;
    };
    Stack.prototype.display = function () {
        if (this.top === -1) {
            console.log("Stack is empty");
            return;
        }
        console.log("Stack contents:");
        for (var i = this.top; i >= 0; i--) {
            console.log(this.a[i]);
        }
    };
    Stack.prototype.getTop = function () {
        if (this.top === -1) {
            console.log("Stack is empty");
        }
        else {
            console.log("Top element:", this.a[this.top]);
        }
    };
    Stack.prototype.isEmpty = function () {
        console.log(this.top === -1 ? "Stack is Empty" : "Stack is not Empty");
    };
    Stack.prototype.isFull = function () {
        console.log(this.top === this.size - 1 ? "Stack is Full" : "Stack is not Full");
    };
    return Stack;
}());
var size = Number(input("Enter the size of the stack: "));
var stack = new Stack(size);
var choice;
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
    if (choice === 1)
        stack.push();
    else if (choice === 2)
        stack.display();
    else if (choice === 3)
        stack.pop();
    else if (choice === 4)
        stack.getTop();
    else if (choice === 5)
        stack.isEmpty();
    else if (choice === 6)
        stack.isFull();
    else if (choice !== 7)
        console.log("Invalid input");
} while (choice !== 7);
