class Employee {
  String  name;
  double salary;

  Employee(this.name, this.salary);

  void Salary() {
    if (salary > 50000) {
      print("High Salry");
    } else {
      print("Low salry");
    }
  }
}

void main() {
  Employee e = Employee("snehal",3000000);
  e.Salary();
}
