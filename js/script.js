let calculate = () => {
    let number = document.getElementById("number");
    let numberConvert = parseInt(number.innerText);
    let calcUp = ++numberConvert;
    console.log(calcUp);
};