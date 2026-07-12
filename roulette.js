function buildRoulette(type){

const track=document.getElementById("track");

track.innerHTML="";

const rewards=getCase(type).rewards;

for(let i=0;i<40;i++){

const value=rewards[
Math.floor(Math.random()*rewards.length)
];

track.innerHTML+=`
<div class="item">
💎${value}
</div>
`;

}

}

function spinRoulette(){

const track=document.getElementById("track");

track.style.transition="none";
track.style.transform="translateX(0px)";

setTimeout(()=>{

const move=Math.floor(Math.random()*1800)+1200;

track.style.transition=
"transform 4s cubic-bezier(.15,.8,.2,1)";

track.style.transform=
`translateX(-${move}px)`;

},50);

}
