let a = 5; // Chiều cao
for (let i = 1; i <= a; i++) {
    console.log("* ".repeat(i));
}
let c = 5;
for (let i = 1; i <= c; i++) {
    // In khoảng trắng trước, sau đó in dấu *
    console.log("  ".repeat(c - i) + "* ".repeat(i));
}
let b = 5;
for (let i = b; i >= 1; i--) {
    console.log("* ".repeat(i));
}


let d = 5;
for (let i = d; i >= 1; i--) {
    console.log("  ".repeat(d - i) + "* ".repeat(i));
}