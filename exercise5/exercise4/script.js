let chieuRong = 10;
let chieuCao = 5;

for (let i = 1; i <= chieuCao; i++) {
    let dong = "";
    for (let j = 1; j <= chieuRong; j++) {
        if (i === 1 || i === chieuCao || j === 1 || j === chieuRong) {
            dong += "* ";
        } else {
            dong += "  "; 
        }
    }
    console.log(dong);
}