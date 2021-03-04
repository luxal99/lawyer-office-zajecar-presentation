const activeCasesCounter = 76;
const totalCasesCounter = 1512;
const casesWonCounter = 1455;
const clientsCounter = 123;

const activeCasesDiv = document.getElementById('activeCasesCounter');
const totalCasesDiv = document.getElementById('totalCasesCounter');
const casesWonDiv = document.getElementById('clientsCounter');
const clientsDiv = document.getElementById('casesWonCounter');
let increment = 0;

activeCaseCount();
totalCasesCount();
casesWonCount();
clientsCount();

function activeCaseCount() {
    initCounter(0, activeCasesCounter, activeCasesDiv)
}

function totalCasesCount() {
    initCounter(0, totalCasesCounter, totalCasesDiv)
}

function casesWonCount() {
    initCounter(0, casesWonCounter, casesWonDiv)
}

function clientsCount() {
    initCounter(0, clientsCounter, clientsDiv)
}

function initCounter(increment, counter, counterDiv) {
    setInterval(() => {
        if (increment < counter) {
            increment++
        }
        if (increment === counter) {
            setTimeout(() => {
                increment = 0;
            }, 10000)
        }
        counterDiv.innerText = increment;
    }, 1)
}
