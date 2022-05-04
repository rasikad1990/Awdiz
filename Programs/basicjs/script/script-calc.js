function add(a, b) {
    var sum = a + b;
    return sum;
}

function subtract(a, b) {
    var diff = a - b;
    return diff;
}

function divide(a, b) {
    var div = a / b;
    return div;
}

function multiply(a, b) {
    var pro = a * b;
    return pro;
}

function modulus(a, b) {
    var mod = a % b;
    return mod;
}


function calculate(a, b, operator) {
    var result = NaN;

    switch (operator) {
        case '+':
            result = add(a, b);
            break;
        case '-':
            result = subtract(a, b);
            break;
        case '/':
            result = divide(a, b);
            break;
        case '*':
            result = multiply(a, b);
            break;
        case '%':
            result = modulus(a, b);
            break;
        default:
            console.log('wrong operator!');
            break;
    }
    return result;
}

// function printResult(){
//     var w = 400;
//     var z = 100;
//     var result = calculate(calculate(4, 5, '*'), z, '%');
//     console.log(result);
// }

function findResult(that, event) {
    event.preventDefault();
    var result = calculate(Number(that.a.value),
        Number(that.b.value), that.operator.value);
    // document.getElementsByClassName('result-div')[0].style.visibility = "visible";
    document.getElementById('result-span').innerHTML = "Calculated result: "+result;
    document.getElementById('result-span').style.fontSize = "large";
}
