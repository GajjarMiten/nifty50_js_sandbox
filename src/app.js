const data = require("../data.json");
const Share = require("./share_model");

let previous = new Share(data[0]);

const lastShare = new Share(data[data.length - 1]);

const buyingHistory = {};
let totalShares = 0;
let totalMoneyUsed = 0.0;

const buyLimitPerPercentage = 1000; // in rupees

for (let index = 1; index < data.length; index++) {
    const current = new Share(data[index]);
    let diffInPercentage = (
        (current.close / previous.close - 1) *
        100
    ).toPrecision(2);

    if (diffInPercentage > 0) {
        previous = current;
        continue;
    }

    diffInPercentage = Math.abs(diffInPercentage);
    const maxBuyLimitOfDay = diffInPercentage * buyLimitPerPercentage;
    const currentPricePerShare = current.close;

    const numOfSharesBought = Math.floor(
        maxBuyLimitOfDay / currentPricePerShare
    );

    if (numOfSharesBought < 1) {
        previous = current;
        continue;
    }

    const moneyUsed = numOfSharesBought * currentPricePerShare;

    buyingHistory[current.date] = {
        numOfSharesBought,
        moneyUsed,
    };

    totalShares += numOfSharesBought;
    totalMoneyUsed += moneyUsed;

    previous = current;
}

const totalValueAsOfLastShare = totalShares * lastShare.close;

console.log(totalValueAsOfLastShare, totalMoneyUsed);

const totalGain = (totalValueAsOfLastShare / totalMoneyUsed) * 100 - 100;

console.log(totalGain);
