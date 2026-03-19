let a = 0;
let b = 1;
let sum = 0;
let count = 0;

while (count < 20) {
    sum += a;
    
    let next = a + b;
    a = b;
    b = next;
    
    count++;
}

document.writeln("Tổng của 20 số Fibonacci đầu tiên là:", sum);