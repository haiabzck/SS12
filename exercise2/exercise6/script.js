let a = Number(prompt('Mời bạn nhập vào  a : '));
let b = Number(prompt('Mời bạn nhập vào  b : '));

    if (a === 0) {
        if (b === 0) {
            alert("Phương trình vô số nghiệm") ;
        } else {
            alert("Phương trình vô nghiệm");
        }
    } else {
        let x = -b / a;
        alert("Phương trình có nghiệm x = " + x) ;
    }