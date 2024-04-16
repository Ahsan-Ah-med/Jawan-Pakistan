// const multiTable = (value, length) => {
//   let table = "";
//   for (let i = 1; i <= length; i++) {
//     table += `${value} X ${i} = ${value * i} `;
//   }
//   return table;
// };

// let Tables = multiTable(prompt(),prompt())

// console.log(Tables)

const calculator = (value1, value2, ope) => {
    let sum;
    switch (ope) {
        case '+':
            sum = value1 + value2;
            break;
    
        case '-':
            sum = value1 - value2;
            break;
    
        case '*':
            sum = value1 * value2;
            break;
    
        case '/':
            sum = value1 / value2;
            break;
    
        case '%':
            sum = value1 % value2;
            break;
    
        default:
            sum = "Invalid Operator"
            break;
    }
    return sum;

}
 let finalResults = calculator(20,5 ,'$')
 console.log(finalResults)