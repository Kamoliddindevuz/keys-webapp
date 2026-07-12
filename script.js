let balance = 1000;
let inventory = [];

const cases = {
    bronze: {
        price: 100,
        rewards: [10,20,50,100,150,250,500]
    },
    silver: {
        price: 500,
        rewards: [100,250,500,750,1000,1500]
    },
    gold: {
        price: 1000,
        rewards: [500,1000,1500,2000,5000]
    }
};

function updateBalance(){
    document.getElementById("balance").innerHTML = balance + " 💎";
}

function randomReward(type){

    const rewards = cases[type].rewards;

    return rewards[Math.floor(Math.random()*rewards.length)];

}

updateBalance();

function openCase(type){

    const data = cases[type];

    if(balance < data.price){

        document.getElementById("result").innerHTML =
        "❌ Balans yetarli emas";

        return;

    }

    balance -= data.price;

    updateBalance();

    const prize = randomReward(type);
        buildRoulette(type);

    spinRoulette();

    setTimeout(()=>{

        balance += prize;

        inventory.push({
            reward: prize,
            date: new Date().toLocaleString()
        });

        updateBalance();

        document.getElementById("result").innerHTML =
        `🎉 Siz yutdingiz <br><br> 💎 ${prize}`;

    },4000);

}

function buildRoulette(type){

    const track=document.getElementById("track");

    track.innerHTML="";

    const rewards=cases[type].rewards;

    for(let i=0;i<40;i++){

        const value=rewards[Math.floor(Math.random()*rewards.length)];

        track.innerHTML += `
        <div class="item">
            💎${value}
        </div>`;
    }

}
function spinRoulette(){

    const track = document.getElementById("track");

    track.style.transition = "none";
    track.style.transform = "translateX(0px)";

    setTimeout(()=>{

        const move = Math.floor(Math.random()*1800)+1200;

        track.style.transition =
        "transform 4s cubic-bezier(.15,.8,.2,1)";

        track.style.transform =
        `translateX(-${move}px)`;

    },50);

}

function showInventory(){

    let list = document.getElementById("inventoryList");

    list.innerHTML = "";

    if(inventory.length===0){

        list.innerHTML="<p>📦 Inventar bo'sh</p>";

    }else{

        inventory.forEach((item,index)=>{

            list.innerHTML += `
            <div class="inv-item">
                <b>#${index+1}</b><br>
                💎 ${item.reward}<br>
                🕒 ${item.date}
            </div>`;
        });

    }

    document.getElementById("inventoryModal").style.display="flex";

}

function closeInventory(){

    document.getElementById("inventoryModal").style.display="none";

}

function showProfile(){

    document.getElementById("profileInfo").innerHTML = `
    <p><b>👤 Foydalanuvchi:</b> Mehmon</p>
    <p><b>💎 Balans:</b> ${balance}</p>
    <p><b>🎒 Inventar:</b> ${inventory.length} ta</p>
    `;

    document.getElementById("profileModal").style.display="flex";

}

function closeProfile(){

    document.getElementById("profileModal").style.display="none";

}

function dailyReward(){

    balance += 100;

    updateBalance();

    document.getElementById("result").innerHTML =
    "🎁 Daily Bonus: +100 💎";

}

window.openCase = openCase;
window.showInventory = showInventory;
window.closeInventory = closeInventory;
window.showProfile = showProfile;
window.closeProfile = closeProfile;
window.dailyReward = dailyReward;

updateBalance();
