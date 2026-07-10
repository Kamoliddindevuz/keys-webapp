function buildRoulette(type){

const track=document.getElementById("track");

track.innerHTML="";

const rewards=CASES[type].rewards;

for(let i=0;i<40;i++){

const reward=rewards[Math.floor(Math.random()*rewards.length)];

const item=document.createElement("div");

item.className="item";

item.innerHTML=`💎${reward.value}`;

if(reward.chance>=25){

item.style.border="2px solid #8a8a8a";

}else if(reward.chance>=15){

item.style.border="2px solid #4CAF50";

}else if(reward.chance>=8){

item.style.border="2px solid #2196F3";

}else if(reward.chance>=4){

item.style.border="2px solid #9C27B0";

}else{

item.style.border="2px solid gold";

}

track.appendChild(item);

}

}

function spinRoulette(prize){

const track=document.getElementById("track");

const items=track.querySelectorAll(".item");

let winIndex=30;

items[winIndex].innerHTML=`💎${prize}`;

track.style.transition="none";

track.style.transform="translateX(0px)";

setTimeout(()=>{

const move=(winIndex*110)-160;

track.style.transition="transform 5s cubic-bezier(.08,.8,.15,1)";

track.style.transform=`translateX(-${move}px)`;

},50);

}
