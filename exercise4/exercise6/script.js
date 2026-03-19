let count = 0;
let num = 0;
let sum = 0;

while (count < 30) {
    if (num % 7 === 0) {
        sum += num;
        count++;
    }
    num++;
}

document.writeln("Tổng của 30 số đầu tiên chia hết cho 7 là:", sum);