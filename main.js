function add(x, y) {
    return (x + y)
}
console.log(add(2, 4))
console.log(add(5, 7))

function multiply(x, y) {
    let product = x
    for (let index = 1; index < y; index++) {
        product = add(product, x)
    }
    return product
}
console.log(multiply(6, 4))

function power(x, n) {
    let powerNumber = x
    for (let index = 1; index < n; index += 1) {
        powerNumber = multiply(powerNumber, x)
    }
    return powerNumber
}
console.log(power(2, 8))
console.log(power(3, 4))


function factorial(x) {
    let total = 1;
    for (let index = 1; index < add(x, 1); index = add(index, 1)) {
        total = multiply(total, index);
    }
    return total;
}
console.log(factorial(4))
console.log(factorial(5))

function fibonacci(n) {

    let fibo = [0, 1];

    for (let index = 2; index < n; index++) {
        fibo[index] = add(fibo[add(index, -1)], fibo[add(index, -2)]);


    }
    return fibo[add(n, -1)];

}
console.log(fibonacci(8))