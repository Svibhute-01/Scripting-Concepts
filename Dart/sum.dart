
class Sum {
  int num;
  int sum = 0;
  Sum(this.num);

  int calculateSum() {
    for (int i = 1; i <= num; i++) {
      sum += i;
    }
    return sum;
  }
}

void main() {
  Sum s = Sum(6);
  int sum = s.calculateSum();
  print(sum);
}
