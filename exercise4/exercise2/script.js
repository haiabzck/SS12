
let Celsius = Number(prompt('Mời bạn nhập vào nhiệt độ hiện tại : '));
  while (Celsius > 100 || Celsius < 20) {
    if (Celsius > 100) {
        Celsius = prompt("Nhiệt độ quá cao! Vui lòng giảm nhiệt độ:");
    } else if (Celsius < 20) {
        Celsius = prompt("Nhiệt độ quá thấp! Vui lòng tăng nhiệt độ:");
    }
    Celsius = Number(Celsius);
}

alert("Nhiệt độ hiện tại đã ổn định: " + Celsius + " độ.");  


