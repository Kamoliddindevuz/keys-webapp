let balance = 1000;

const prizes = [
10,20,30,50,75,100,150,250
];

function openCase(){

if(balance<100){
document.getElementById("result").innerHTML="❌ Balans yetarli emas";
return;
}

balance-=100;

const prize=prizes[Math.floor(Math.random()*prizes.length)];

balance+=prize;

document.getElementById("balance").innerHTML=balance;

document.getElementById("result").innerHTML=
"🎉 Siz yutdingiz <br><br> 💎 "+prize;

}
