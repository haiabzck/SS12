let ten = "";
let tuoi = "";
let tiepTuc = true;

while (tiepTuc) {
    let menu = `--- MENU CHƯƠNG TRÌNH ---
1. Nhập tên
2. Nhập tuổi
3. In tên và tuổi
4. In bảng cửu chương
5. Kiểm tra chẵn/lẻ
6. Tính tổng từ 1 đến N
7. In dãy số
8. Kiểm tra số nguyên tố
9. Đảo ngược chuỗi
10. Thoát
Chọn một chức năng (1-10):`;

    let luaChon = prompt(menu);

    switch (luaChon) {
        case "1":
            ten = prompt("Nhập tên của bạn:");
            break;
        case "2":
            tuoi = prompt("Nhập tuổi của bạn:");
            break;
        case "3":
            alert(ten && tuoi ? `Tên: ${ten}, Tuổi: ${tuoi}` : "Vui lòng nhập đủ tên và tuổi ở mục 1 và 2!");
            break;
        case "4":
            let n4 = Number(prompt("Nhập số muốn in bảng cửu chương:"));
            let bcc = `Bảng cửu chương ${n4}:\n`;
            for (let i = 1; i <= 10; i++) bcc += `${n4} x ${i} = ${n4 * i}\n`;
            alert(bcc);
            break;
        case "5":
            let n5 = Number(prompt("Nhập số cần kiểm tra:"));
            alert(n5 % 2 === 0 ? `${n5} là số chẵn` : `${n5} là số lẻ`);
            break;
        case "6":
            let n6 = Number(prompt("Nhập N:"));
            let tong = 0;
            for (let i = 1; i <= n6; i++) tong += i;
            alert(`Tổng từ 1 đến ${n6} là: ${tong}`);
            break;
        case "7":
            let daySo = prompt("Nhập dãy số (cách nhau bằng dấu phẩy):");
            alert("Dãy số bạn vừa nhập: " + daySo);
            break;
        case "8":
            let n8 = Number(prompt("Nhập số cần kiểm tra số nguyên tố:"));
            let laSNT = n8 > 1;
            for (let i = 2; i <= Math.sqrt(n8); i++) {
                if (n8 % i === 0) { laSNT = false; break; }
            }
            alert(laSNT ? `${n8} là số nguyên tố` : `${n8} không phải số nguyên tố`);
            break;
        case "9":
            let chuoi = prompt("Nhập chuỗi cần đảo ngược:");
            let daoNguoc = "";
            for (let i = chuoi.length - 1; i >= 0; i--) daoNguoc += chuoi[i];
            alert("Chuỗi đảo ngược: " + daoNguoc);
            break;
        case "10":
            alert("Tạm biệt!");
            tiepTuc = false;
            break;
        default:
            alert("Lựa chọn không hợp lệ, vui lòng chọn lại!");
    }
}