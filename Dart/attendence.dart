import "dart:io";

class Check {
  double attendence;

  Check(this.attendence);

  void checkEligibility() {
    if (attendence >= 75) {
      print("Eligible for exam");
    } else {
      print("Not eligible for exam");
    }
  }
}

void main() {
  print("Enter Attendence percentage");
  double? attendence = double.parse(stdin.readLineSync()!);

  Check c = Check(attendence);
  c.checkEligibility();
}
