let a = 0;
let b = 1;
let count = 0;

console.log("20 số Fibonacci đầu tiên là:");

while (count < 20) {
    console.log(a);
    
    let next = a + b;
    a = b;
    b = next;
    
    count++;
}
