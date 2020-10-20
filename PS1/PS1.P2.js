const evaluate = expression => ({
    "+": () => parseInt(expression[0]) + parseInt(expression[2]),
    "-": () => parseInt(expression[0]) - parseInt(expression[2]),
    "*": () => parseInt(expression[0]) * parseInt(expression[2]),
    "/": () => parseInt(expression[0]) / parseInt(expression[2]),
    "^": () => Math.pow(parseInt(expression[0]), parseInt(expression[2]))
})[expression[1]];
// console.log(evaluate('9^2')());
// const expression = '8/3';
// let operator = evaluate(expression);
// console.log(`${expression} = ${operator()}`)

module.exports = {evaluate};