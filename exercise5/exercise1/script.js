let a = 0;
let b = 1;
let ketQua = "";

for (let i = 0; i < 100; i++) {
    ketQua += a + (i < 99 ? ", " : ""); 
    
    let tiepTheo = a + b;
    a = b;
    b = tiepTheo;
}

console.log("Dãy Fibonacci: " + ketQua);