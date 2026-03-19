let tienGoc = Number(prompt("Nhập số tiền gửi ban đầu (VNĐ):"));
let soThang = Number(prompt("Nhập số tháng gửi:"));
let laiSuatHangThang = Number(prompt("Nhập lãi suất hàng tháng (%):")) / 100;

let tongTien = tienGoc;

console.log(`--- Bảng chi tiết lãi nhập gốc cho ${soThang} tháng ---`);

for (let i = 1; i <= soThang; i++) {
    let tienLaiThangNay = tongTien * laiSuatHangThang;
    tongTien += tienLaiThangNay; // Lãi mẹ đẻ lãi con (cộng lãi vào gốc)
    
    console.log(`Tháng ${i}: Tiền lãi = ${tienLaiThangNay.toLocaleString()}đ | Tổng gốc lãi = ${tongTien.toLocaleString()}đ`);
}

console.log("-----------------------------------------");
console.log(`Sau ${soThang} tháng, tổng số tiền nhận được là: ${tongTien.toLocaleString()} VNĐ`);
