export default function handler(req, res) {

  const { type } = req.query;

  const cases = {
    bronze: {
      price: 100,
      rewards: [10,20,30,50,80,100,150,250,500]
    },

    silver: {
      price: 500,
      rewards: [80,100,150,250,500,750,1000]
    },

    gold: {
      price: 1000,
      rewards: [300,500,750,1000,1500,2000,5000]
    },

    diamond: {
      price: 5000,
      rewards: [1000,2000,5000,7000,10000,15000]
    }
  };

  if (!cases[type]) {
    return res.status(400).json({
      success: false,
      message: "Case topilmadi"
    });
  }

  const rewards = cases[type].rewards;

  const reward =
    rewards[Math.floor(Math.random() * rewards.length)];

  res.status(200).json({
    success: true,
    case: type,
    price: cases[type].price,
    reward: reward
  });

}
