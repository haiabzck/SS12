let a = 0;
let b = 1;
let result = null;

while (true) {
    if (a > 0 && a % 5 === 0) {
        result = a;
        break;
    }
    let next = a + b;
    a = b;
    b = next;
}

document.writeln("Số Fibonacci đầu tiên chia hết cho 5 là: ", result);