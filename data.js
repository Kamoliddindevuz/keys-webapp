const CASES = {

bronze:{

name:"Bronze Case",

price:100,

rewards:[

10,
20,
50,
80,
100,
150,
250,
500

]

},

silver:{

name:"Silver Case",

price:500,

rewards:[

100,
150,
250,
500,
750,
1000,
1500

]

},

gold:{

name:"Gold Case",

price:1000,

rewards:[

500,
1000,
1500,
2000,
3000,
5000

]

}

};

function getCase(type){

return CASES[type];

}

function getRandomReward(type){

const rewards=CASES[type].rewards;

return rewards[
Math.floor(Math.random()*rewards.length)
];

}
