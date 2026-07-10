let balance = Number(localStorage.getItem("balance")) || 1000;

document.getElementById("balance").innerHTML = balance + " 💎";

const cases = {

bronze:{
price:100,
rewards:[10,20,30,50,80,100,150,250,500]
},

silver:{
price:500,
rewards:[80,100,150,250,500,750,1000]
},

gold:{
price:1000,
rewards:[300,500,750,1000,1500,2000,5000]
}

};

function updateBalance(){

localStorage.setItem("balance",balance);

document.getElementById("balance").innerHTML=
balance+" 💎";

}

function randomReward(arr){

return arr[Math.floor(Math.random()*arr.length)];

}

function openCase(type){

const data=cases[type];

if(balance<data.price){

document.getElementById("result").innerHTML=
"❌ Balans yetarli emas";

return;

}

balance-=data.price;

updateBalance();

const prize=randomReward(data.rewards);

const track=document.getElementById("track");

track.style.transition="none";

track.style.transform="translateX(0px)";
    setTimeout(()=>{

const items=document.querySelectorAll(".item");

const index=Math.floor(Math.random()*items.length);

const move=(index*110)-160;

track.style.transition="transform 3s cubic-bezier(.17,.67,.19,1)";

track.style.transform=`translateX(-${move}px)`;

},100);

setTimeout(()=>{

balance+=prize;

updateBalance();

document.getElementById("result").innerHTML=
"🎉 Siz yutdingiz<br><br>💎 "+prize;

},3200);

}
