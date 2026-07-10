let balance = Number(localStorage.getItem("balance")) || 1000;

let inventory = JSON.parse(localStorage.getItem("inventory")) || [];

updateBalance();

function updateBalance() {
    document.getElementById("balance").innerHTML = balance + " 💎";
    localStorage.setItem("balance", balance);
}

function saveInventory() {
    localStorage.setItem("inventory", JSON.stringify(inventory));
}

function addInventory(prize) {
    inventory.push({
        reward: prize,
        time: new Date().toLocaleString()
    });

    saveInventory();
}

async function openCase(type) {

    const data = CASES[type];

    if (!data) {
        document.getElementById("result").innerHTML =
        "❌ Case topilmadi";
        return;
    }

    if (balance < data.price) {
        document.getElementById("result").innerHTML =
        "❌ Balans yetarli emas";
        return;
    }

    balance -= data.price;

    updateBalance();

    buildRoulette(type);

    const prize = getRandomReward(type);
        spinRoulette(prize);

    setTimeout(() => {

        balance += prize;

        updateBalance();

        addInventory(prize);

        document.getElementById("result").innerHTML =
        `🎉 Siz yutdingiz<br><br>💎 ${prize}`;

    }, 5200);

}

function resetBalance(){

    balance = 1000;

    updateBalance();

}

function clearInventory(){

    inventory = [];

    saveInventory();

}

window.openCase = openCase;
window.resetBalance = resetBalance;
window.clearInventory = clearInventory;
window.addEventListener("load", () => {

    updateBalance();

    if(document.getElementById("result")){
        document.getElementById("result").innerHTML =
        "🎁 Case ochishga tayyor";
    }

});

function showInventory(){

const modal=document.getElementById("inventoryModal");
const list=document.getElementById("inventoryList");

list.innerHTML="";

if(inventory.length===0){

list.innerHTML="<p>📦 Inventar bo'sh</p>";

}else{

inventory.forEach((item,index)=>{

list.innerHTML+=`
<div class="inv-item">
<b>#${index+1}</b><br>
💎 ${item.reward}<br>
🕒 ${item.time}
</div>
`;

});

}

modal.style.display="flex";

}

function closeInventory(){

document.getElementById("inventoryModal").style.display="none";

} 
window.showInventory = showInventory;
window.closeInventory = closeInventory;
