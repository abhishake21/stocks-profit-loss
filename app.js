const initialPrice = document.querySelector('#initial-price');
const quantityOfStocks = document.querySelector('#stocks-quantity');
const currentPrice = document.querySelector('#current-price');
const showMeBtn = document.querySelector('.show-me-btn');
const output = document.querySelector('.output-message');
const gif = document.querySelector('.gif');

output.style.display = "none";
gif.style.display = "none";

showMeBtn.addEventListener('click', clickHandler);

function calculateProfitLoss(initial, quantity, current) {
    if (initial > current) {
        let loss = (initial - current) * quantity;
        let lossPercentage = (loss / (initial * quantity)) * 100;
        outputMessage(`Whoops! Your Loss is ${loss} and loss Percentage is ${lossPercentage.toFixed(2)}%`, './Images/loss.gif');
    } else if (current > initial) {
        let profit = (current - initial) * quantity;
        let profitPercentage = (profit / (initial * quantity)) * 100;
        outputMessage(`Yay! Your Profit is ${profit} and profit Percentage is ${profitPercentage.toFixed(2)}%`, './Images/profit.gif');
    } else {
        outputMessage('No Profit No Loss', '');
    }
}

function clickHandler() {
    let initPrice = initialPrice.value;
    let stocksQty = quantityOfStocks.value;
    let currPrice = currentPrice.value;

    calculateProfitLoss(initPrice, stocksQty, currPrice);
}

function outputMessage(msg, gifLink) {
    output.innerHTML = msg;
    gif.src = gifLink;
    output.style.display = 'block';
    gif.style.display = 'block';
}

