// bài 1:  Giải phương trình bậc 2 ax^2 + bx + c = 0
// input a ,b , b  => in ra màn hình giá trị của x

let a = prompt("Nhập vào số a:");
let b = prompt("Nhập vào số b:");
let c = prompt("Nhập vào số c:");

if (a == 0) {
    x = - c/b;
    console.log("Phương trình có nghiệm là:");
    console.log("x=" + x);
}
if (a != 0) {
    delta = b*b - 4*a*c;
    if (delta < 0) {
        console.log("Phương trình vô nghiệm");
    }
    else {
        if (delta == 0) {
            x = -b/(2*a);
            console.log("Phương trình có nghiệm kép là:");
            console.log("x=" + x);
        }
        else {
            x1 = (-b + Math.sqrt(delta)) / 2*a;
            x2 = (-b - Math.sqrt(delta)) / 2*a;
            console.log("Phương trình có nghiệm là:");
            console.log("x1=" + x1);
            console.log("x2=" + x2);
        }
    }
}

// bài 2: Tìm 1 số a có phải là số nguyên tố hay không?

function check_SNT(){
    let a = prompt("Nhập vào số a:");
    let i = "";
    let SNT = true;
    if (a < 2) {
        SNT = false;
    }
    else {
        for (i = 2; i < a-1; i++){
            if (a % i == 0){
                SNT = false;
                break;
            }
        }
    }
    if (SNT == true) {
        console.log(a + " là số nguyên tố");
    }
    else {
        console.log(a + " không là số nguyên tố");
    }
}
check_SNT();