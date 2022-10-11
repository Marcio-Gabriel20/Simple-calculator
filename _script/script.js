const result = document.getElementById('result');
const historic = document.getElementById('historic');

const insert = (num) => {
    let number = result.innerHTML;

    let nm = result.innerHTML = number + num;
    let nmHistoric = historic.innerHTML = number + num;

    if(nm.length == 22) {
        nm = result.innerHTML = "";
        nmHistoric = historic.innerHTML = "";
    }
}

const clean = () => {
    result.innerHTML = "";
}

const back = () => {
    let resultBack = result.innerHTML;

    result.innerHTML = resultBack.substring(0, resultBack.length -1);
}

const calc = () => {
    let resultCalc = result.innerHTML;

    if(resultCalc) {
        result.innerHTML = eval(resultCalc);
    } else {
        result.innerHTML = "Não existe nenhum calculo para ser efetuado.";
    }
}