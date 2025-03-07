const counDown = document.getElementById("counDown");
const reciveValue = document.getElementById("reciveValue");
let startCount = 0;
let Invalid;

const startTimeBtn = () => {
    Invalid = setInterval(() => {
        counDown.innerHTML = startCount++; 
    },1000)
}

const stopTimeBtn = () => {
    clearInterval(Invalid);
}

const resetTimeBtn = () => {
    startCount = 0;
    counDown.innerHTML = startCount; 
    clearInterval(Invalid);
}

const getTimeBtn = () => {
    const newPara = document.createElement("p");
    newPara.innerText = `The Time Stop ${startCount}`
    reciveValue.append(newPara);
}

const clearTimeBtn = () => {
    reciveValue.innerText = "";
}

document.querySelector(".startBtn").addEventListener("click",startTimeBtn);

document.querySelector(".stopBtn").addEventListener("click",stopTimeBtn);

document.querySelector(".resetBtn").addEventListener("click",resetTimeBtn);

document.querySelector(".getTimeBtn").addEventListener("click",getTimeBtn);

document.querySelector(".clearBtn").addEventListener("click",clearTimeBtn);