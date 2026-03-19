
let test1 = Number(prompt('Mời bạn nhập vào điểm bài kiểm tra: '));
let test2 = Number(prompt('Mời bạn nhập vào điểm thi giữa kỳ: '));
let test3 = Number(prompt('Mời bạn nhập vào điểm thi cuối kỳ: '));
let age = (test1 + test2 + test3) /3;
if(age > 9.0){
    alert('Xếp hạng học lực Xuất Sắc');
}else if(age < 9.0 && age >= 8.0){
    alert('Xếp hạng học lực Giỏi');
}else if(age <= 8.0 && age >= 6.5){
    alert('Xếp hạng học lực Khá');
}else if(age < 6.5 && age >= 5.0){
    alert('Xếp hạng học lực Trung Bình');
}else if(age < 5.0 && age >= 3.5){
    alert('Xếp hạng học lực Yếu');
}else{
    alert('Xếp hạng học lực Kém phải học lại');
}



