let a = Number(prompt('Mời bạn nhập vào  a : '));
let b = Number(prompt('Mời bạn nhập vào  b : '));
let c = Number(prompt('Mời bạn nhập vào  c : '));

 if (a === 0) {
        alert("Đây không phải phương trình bậc 2");
    }

    let delta = Math.pow(b, 2) - 4 * a * c;
    
    if (delta > 0) {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        alert(`Phương trình có 2 nghiệm: x1 = ${x1}, x2 = ${x2}`);
    } else if (delta === 0) {
        let x = -b / (2 * a);
        alert(`Phương trình có nghiệm kép: x1 = x2 = ${x}`);
    } else {
        alert("Phương trình vô nghiệm");
    }
