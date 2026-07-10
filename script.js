let balance = Number(localStorage.getItem("balance")) || 1000;

const rewards = [10,20,50,100,250,500];
const chances = [30,25,20,15,8,2];

updateBalance();

function updateBalance(){
    document.getElementById("balance").innerText = balance;
    localStorage.setItem("balance", balance);
}

function randomReward(){
    let rand = Math.random()*100;
    let total = 0;

    for(let i=0;i<rewards.length;i++){
        total += chances[i];
        if(rand <= total){
            return rewards[i];
        }
    }
    return 10;
}

function openCase(){

    if(balance < 100){
        document.getElementById("result").innerHTML =
        "❌ Balans yetarli emas";
        return;
    }

    balance -= 100;

    document.getElementById("result").innerHTML =
    "🎰 Ochilmoqda...";

    setTimeout(()=>{

        const prize = randomReward();

        balance += prize;

        updateBalance();

        document.getElementById("result").innerHTML =
        "🎉 Siz yutdingiz <br><br>💎 "+prize;

    },2500);

}
