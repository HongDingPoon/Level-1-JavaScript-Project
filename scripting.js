
let pennies = 0;
let pValue = 0;
let nickels = 0;
let nValue = 0;
let dimes = 0;
let dValue = 0;
let quarters = 0;
let qValue = 0;
let total = 0;
const para = document.querySelector("button");
para.addEventListener("click", addPennie);
para.addEventListener("click", changeTotal);
const para1 = document.querySelector("#b1");
para1.addEventListener("click", subtractPennie);
para1.addEventListener("click", changeTotal);
const para2 = document.querySelector("#b2");
para2.addEventListener("click", addNickel);
para2.addEventListener("click", changeTotal);
const para3 = document.querySelector("#b3");
para3.addEventListener("click", subtractNickel);
para3.addEventListener("click", changeTotal);
const para4 = document.querySelector("#b4");
para4.addEventListener("click", addDime);
para4.addEventListener("click", changeTotal);
const para5 = document.querySelector("#b5");
para5.addEventListener("click", subtractDime);
para5.addEventListener("click", changeTotal);
const para6 = document.querySelector("#b6");
para6.addEventListener("click", addQuarter);
para6.addEventListener("click", changeTotal);
const para7 = document.querySelector("#b7");
para7.addEventListener("click", subtractQuarter);
para7.addEventListener("click", changeTotal);




function addPennie() {
    pennies++;
    pValue+=0.01;
    total +=0.01;
    pValue = Math.round(pValue * 100) / 100;
    let para1 = document.querySelector("p");
    para1.textContent = "Pennies: " + pennies + " Total value: $" + pValue;
}




function subtractPennie() {
    pennies--;
    if (pennies < 0) {
        pennies = 0;
    } else {
        pValue-=0.01;
        total-=0.01;
        pValue = Math.round(pValue * 100) / 100;
    }
    let para2 = document.querySelector("p");
    para2.textContent = "Pennies: " + pennies + " Total value: $" + pValue;
}




function addNickel() {
    nickels++;
    nValue+=0.05;
    total +=0.05;
    nValue = Math.round(nValue * 100) / 100;
    let para1 = document.querySelector("#p1");
    para1.textContent = "Nickels: " + nickels + " Total value: $" + nValue;
}




function subtractNickel() {
    nickels--;
    if (nickels < 0) {
        nickels = 0;
    } else {
        nValue-=0.05;
        total-=0.05;
        nValue = Math.round(nValue * 100) / 100;
    }
    let para2 = document.querySelector("#p1");
    para2.textContent = "Nickels: " + nickels + " Total value: $" + nValue;
}




function addDime() {
    dimes++;
    dValue+=0.10;
    total +=0.10;
    dValue = Math.round(dValue * 100) / 100;
    let para1 = document.querySelector("#p2");
    para1.textContent = "Dimes: " + dimes + " Total value: $" + dValue;
}




function subtractDime() {
    dimes--;
    if (dimes < 0) {
        dimes = 0;
    } else {
        dValue-=0.10;
        total-=0.10;
        dValue = Math.round(dValue * 100) / 100;
    }
    let para2 = document.querySelector("#p2");
    para2.textContent = "Dimes: " + dimes + " Total value: $" + dValue;
}




function addQuarter() {
    quarters++;
    qValue+=0.25;
    total +=0.25;
    qValue = Math.round(qValue * 100) / 100;
    let para1 = document.querySelector("#p3");
    para1.textContent = "Quarters: " + quarters + " Total value: $" + qValue;
}




function subtractQuarter() {
    quarters--;
    if (quarters < 0) {
        quarters = 0;
    } else {
        qValue-=0.25;
        total-=0.25;
        qValue = Math.round(qValue * 100) / 100;
    }
    let para2 = document.querySelector("#p3");
    para2.textContent = "Quarters: " + quarters + " Total value: $" + qValue;
}








function changeTotal() {
    let para3 = document.querySelector("#p4");
    total = Math.round(total * 100) / 100;
    para3.textContent = "Total value for all coins: $" + total;
}
