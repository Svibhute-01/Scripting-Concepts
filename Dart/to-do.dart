import 'dart:io';

List<String> todoList = [];

void addItem() {
  print("Enter task to add:");
  String? task = stdin.readLineSync();

  if (task != null && task.isNotEmpty) {
    todoList.add(task);
    print("Task added successfully!\n");
  } else {
    print("Invalid task. Please try again.\n");
  }
}

void deleteItem() {
  if (todoList.isEmpty) {
    print("No tasks to delete.\n");
    return;
  }

  viewItems();
  print("Enter task number to delete:");
  String? input = stdin.readLineSync();

  int? index = int.tryParse(input ?? "");

  if (index != null && index > 0 && index <= todoList.length) {
    print("Deleted: ${todoList[index - 1]}");
    todoList.removeAt(index - 1);
    print("Task deleted successfully!\n");
  } else {
    print("Invalid task number.\n");
  }
}

void viewItems() {
  if (todoList.isEmpty) {
    print("Your To-Do list is empty.\n");
  } else {
    print("\nYour To-Do List:");
    for (int i = 0; i < todoList.length; i++) {
      print("${i + 1}. ${todoList[i]}");
    }
    print("");
  }
}

void main() {
  while (true) {
    print("===== TO-DO APP =====");
    print("1. Add Task");
    print("2. Delete Task");
    print("3. View Tasks");
    print("4. Exit");
    print("Enter your choice:");

    String? choice = stdin.readLineSync();

    if (choice == "1") {
      addItem();
    } else if (choice == "2") {
      deleteItem();
    } else if (choice == "3") {
      viewItems();
    } else if (choice == "4") {
      print("Exiting App. Goodbye!");
      break;
    } else {
      print("Invalid choice. Please try again.\n");
    }
  }
}