const CASES = {
  bronze: {
    name: "Bronze Case",
    price: 100,
    color: "#cd7f32",
    rewards: [
      { value: 10, chance: 30 },
      { value: 20, chance: 25 },
      { value: 50, chance: 18 },
      { value: 80, chance: 10 },
      { value: 100, chance: 8 },
      { value: 150, chance: 5 },
      { value: 250, chance: 3 },
      { value: 500, chance: 1 }
    ]
  },

  silver: {
    name: "Silver Case",
    price: 500,
    color: "#c0c0c0",
    rewards: [
      { value: 80, chance: 25 },
      { value: 100, chance: 22 },
      { value: 150, chance: 18 },
      { value: 250, chance: 12 },
      { value: 500, chance: 10 },
      { value: 750, chance: 7 },
      { value: 1000, chance: 4 },
      { value: 2000, chance: 2 }
    ]
  },

  gold: {
    name: "Gold Case",
    price: 1000,
    color: "#FFD700",
    rewards: [
      { value: 300, chance: 25 },
      { value: 500, chance: 20 },
      { value: 750, chance: 18 },
      { value: 1000, chance: 14 },
      { value: 1500, chance: 10 },
      { value: 2000, chance: 7 },
      { value: 5000, chance: 4 },
      { value: 10000, chance: 2 }
    ]
  }
};

function getRandomReward(type) {
  const rewards = CASES[type].rewards;

  const total = rewards.reduce((a, b) => a + b.chance, 0);

  let random = Math.random() * total;

  for (const reward of rewards) {
    random -= reward.chance;

    if (random <= 0) {
      return reward.value;
    }
  }

  return rewards[0].value;
}
