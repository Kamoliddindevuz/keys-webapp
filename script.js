let balance = 1000;
let inventory = [];
let spinning = false;

updateBalance();

function updateBalance() {
    document.getElementById("balance").innerHTML = balance + " 💎";
}

function openCase(type) {

    if (spinning) return;

    const data = getCase(type);

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

    spinning = true;

    balance -= data.price;

    updateBalance();

    buildRoulette(type);

    const prize = getRandomReward(type);
        spinRoulette();

    setTimeout(() => {

        balance += prize;

        inventory.push({
            reward: prize,
            date: new Date().toLocaleString()
        });

        updateBalance();

        document.getElementById("result").innerHTML =
        `🎉 Siz yutdingiz: 💎 ${prize}`;

        spinning = false;

    }, 4000);

}

function showInventory() {

    const list = document.getElementById("inventoryList");

    list.innerHTML = "";

    if (inventory.length === 0) {

        list.innerHTML = "<p>📦 Inventar bo'sh</p>";

    } else {

        inventory.forEach((item, index) => {

            list.innerHTML += `
            <div class="inv-item">
                <b>#${index + 1}</b><br>
                💎 ${item.reward}<br>
                🕒 ${item.date}
            </div>`;
        });

    }

    document.getElementById("inventoryModal").style.display = "flex";

}
function closeInventory() {

    document.getElementById("inventoryModal").style.display = "none";

}

function showProfile() {

    const info = document.getElementById("profileInfo");

    info.innerHTML = `
    <div class="inv-item">
        <b>👤 Foydalanuvchi:</b> Mehmon
    </div>

    <div class="inv-item">
        <b>💎 Balans:</b> ${balance}
    </div>

    <div class="inv-item">
        <b>🎒 Inventar:</b> ${inventory.length} ta
    </div>

    <div class="inv-item">
        <b>📦 Ochilgan Case:</b> ${inventory.length}
    </div>
    `;

    document.getElementById("profileModal").style.display = "flex";

}

function closeProfile() {

    document.getElementById("profileModal").style.display = "none";

}

function dailyReward() {

    const today = new Date().toDateString();
    const lastReward = localStorage.getItem("lastReward");

    if (lastReward === today) {

        document.getElementById("result").innerHTML =
        "⏳ Siz bugungi bonusni olib bo'lgansiz.";

        return;
    }

    balance += 100;

    updateBalance();

    localStorage.setItem("lastReward", today);

    document.getElementById("result").innerHTML =
    "🎁 Bugungi bonus: +100 💎";

}
window.openCase = openCase;

window.showInventory = showInventory;
window.closeInventory = closeInventory;

window.showProfile = showProfile;
window.closeProfile = closeProfile;

window.dailyReward = dailyReward;

window.addEventListener("load", () => {

    updateBalance();

    document.getElementById("result").innerHTML =
    "🎁 Xush kelibsiz! Case tanlang.";

});
