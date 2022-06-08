const initialPrice = document.querySelector('#initial-price');
const quantityOfStocks = document.querySelector('#stocks-quantity');
const currentPrice = document.querySelector('#current-price');
const showMeBtn = document.querySelector('.show-me-btn');
const output = document.querySelector('.output-message');
const gif = document.querySelector('.gif');

const header = document.querySelector('.heading');
const inputs = document.querySelectorAll('input[type=number]');
const headerText = document.querySelector('.header-text');

showMeBtn.addEventListener('click', clickHandler);

function calculateProfitLoss(initial, quantity, current) {
    if (initial > current) {
        let loss = (initial - current) * quantity;
        let lossPercentage = (loss / (initial * quantity)) * 100;
        outputMessage(`Whoops! Your <span>Loss</span> is <span>${loss}</span> and loss <span>Percentage</span> is <span>${lossPercentage.toFixed(2)}%</span>`, './Images/loss.gif');
        if (lossPercentage > 50) {
            lossLayout();
        } else {
            defaultLayout();
        }
    } else if (current > initial) {
        let profit = (current - initial) * quantity;
        let profitPercentage = (profit / (initial * quantity)) * 100;
        outputMessage(`Yay! Your <span>Profit</span> is <span>${profit}</span> and profit <span>Percentage</span> is <span>${profitPercentage.toFixed(2)}%</span>`, './Images/profit.gif');
        if (profitPercentage > 50) {
            profitLayout();
        } else {
            defaultLayout();
        }
    } else {
        outputMessage('<span>No Profit / No Loss</span>', './Images/no-profit-loss.webp');
        defaultLayout();
    }
}

function defaultLayout() {
    header.style.backgroundColor = "var(--primary-color)";
    headerText.style.color = 'white';
    headerText.style.textShadow = '3px 3px black';
    document.body.style.backgroundColor = "var(--secondary-color)";
    document.body.style.color = "white";
    inputs.forEach(input => input.style.boxShadow = '3px 3px var(--primary-color)');
    showMeBtn.style.boxShadow = '3px 3px var(--primary-color)';
}

function profitLayout() {
    header.style.backgroundColor = "var(--green)";
    headerText.style.color = 'black';
    headerText.style.textShadow = '0.5px 0.5px white';
    document.body.style.backgroundColor = "var(--off-green)";
    document.body.style.color = "black";
    inputs.forEach(input => input.style.boxShadow = '3px 3px var(--green)');
    showMeBtn.style.boxShadow = '3px 3px var(--green)';
}

function lossLayout() {
    header.style.backgroundColor = "var(--red)";
    headerText.style.color = 'black';
    headerText.style.textShadow = '0.5px 0.5px white';
    document.body.style.backgroundColor = "var(--off-red)";
    document.body.style.color = "black";
    inputs.forEach(input => input.style.boxShadow = '3px 3px var(--red)');
    showMeBtn.style.boxShadow = '3px 3px var(--red)';
}

function clickHandler() {
    let initPrice = Number(initialPrice.value);
    let stocksQty = Number(quantityOfStocks.value);
    let currPrice = Number(currentPrice.value);

    if (initialPrice.value && quantityOfStocks.value && currentPrice.value) {
        calculateProfitLoss(initPrice, stocksQty, currPrice);
    } else {
        defaultLayout();
        outputMessage('Enter all the details.', './Images/default.webp');
    }

}

function outputMessage(msg, gifLink) {
    output.innerHTML = msg;
    gif.src = gifLink;
    output.style.display = 'block';
    gif.style.display = 'block';
}

