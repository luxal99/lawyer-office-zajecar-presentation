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
    initCounter(0, activeCasesCounter, activeCasesDiv,100)
}

function totalCasesCount() {
    initCounter(0, totalCasesCounter, totalCasesDiv,1)
}

function casesWonCount() {
    initCounter(0, casesWonCounter, casesWonDiv,1)
}

function clientsCount() {
    initCounter(0, clientsCounter, clientsDiv,100)
}

function initCounter(increment, counter, counterDiv,interval) {
    setInterval(() => {
        if (increment < counter) {
            increment++
        }
        if (increment === counter) {
            setTimeout(() => {
                increment = 0;
            }, 1000)
        }
        counterDiv.innerText = increment;
    }, interval)
}
