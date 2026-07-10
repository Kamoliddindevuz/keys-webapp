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
async function openCase(type){

const data = cases[type];

if(balance < data.price){
document.getElementById("result").innerHTML="❌ Balans yetarli emas";
return;
}

balance -= data.price;
updateBalance();
buildRoulette(type);
const prize = getRandomReward(type);

const track = document.getElementById("track");
const items = track.querySelectorAll(".item");

const index = Math.floor(Math.random()*items.length);

items[index].innerHTML = "💎"+prize;

track.style.transition="none";
track.style.transform="translateX(0px)";

setTimeout(()=>{
    track.style.transition="transform 4s cubic-bezier(.15,.8,.2,1)";

const move = (index*120)+60;

track.style.transform=`translateX(-${move}px)`;

setTimeout(()=>{
spinRoulette(prize);
balance += prize;
updateBalance();

document.getElementById("result").innerHTML=
`🎉 Siz yutdingiz<br><br>💎 ${prize}`;

},4200);

},50);

}
