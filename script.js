let balance = 1000;

const prizes = [10,20,50,100,250,500];

function openCase(){

    if(balance < 100){
        document.getElementById("result").innerHTML="❌ Balans yetarli emas";
        return;
    }

    balance -= 100;

    const track = document.getElementById("track");

    track.style.transition="none";
    track.style.transform="translateX(0px)";

    setTimeout(()=>{

        const prize = prizes[Math.floor(Math.random()*prizes.length)];

        const index = prizes.indexOf(prize);

        const move = (index*100)-150;

        track.style.transition="transform 3s cubic-bezier(.17,.67,.19,1)";
        track.style.transform=`translateX(-${move}px)`;

        setTimeout(()=>{

            balance += prize;

            document.getElementById("balance").innerHTML=balance;

            document.getElementById("result").innerHTML=
            "🎉 Siz yutdingiz <br><br> 💎 "+prize;

        },3000);

    },100);

}
