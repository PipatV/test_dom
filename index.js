// สุ่ม 
var randomNumber1 = Math.round(Math.random()*6)+1;
var randomNumber2 = Math.round(Math.random()*6)+1;
// srcไฟล์
var ran1 = "/images/dice"+randomNumber1+".png";
var ran2 = "/images/dice"+randomNumber2+".png";

// เปลื่ยนภาพ
document.querySelector(".img1").setAttribute("src",ran1);
document.querySelector(".img2").setAttribute("src",ran2);

// display
if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerText = "❤Player 1 Win";
}else if(randomNumber1=== randomNumber2){
    document.querySelector("h1").innerText ="Draw";
}else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerText = "Player 2 Win❤";
}
