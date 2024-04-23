var input = document.getElementById("calc-display");
function empty() {
    input.value = '';
}
function del1() {
    input.value = input.value.slice(0, -1);
}
function number(val) {
    input.value += val
}
function square() {
    input.value *= input.value 
}
function operator(oper) {
    if (input.value.charAt(input.value.length - 1) === '*' || input.value.charAt(input.value.length - 1) === '-' || input.value.charAt(input.value.length - 1) === '+' || input.value.charAt(input.value.length - 1) === '/' || input.value.charAt(input.value.length - 1) === '%' || input.value.charAt(input.value.length - 1) === '.' ) {
        input.value = input.value.slice(0, -1);
    }
    input.value += oper
}

const equals = () => {
    if (input.value !== '') {
        const expression = input.value;
        const result = new Function(`return ${expression}`)();
        input.value = result;
    }
};