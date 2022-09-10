let i = 0;
let number = document.getElementById("number");
let calculate = () => {
    let numberConvert = parseInt(number.innerText);
    let calcUp = i++;
    numberConvert = calcUp;
    localStorage.setItem("Count", numberConvert);
    displayOnUi();
    // console.log(numberConvert);
};

let displayOnUi = () => {
    let haveLs = localStorage.getItem("Count");
    number.innerText = haveLs;
};
displayOnUi();