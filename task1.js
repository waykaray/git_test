function f(number) {
    let rezult;
    if (typeof number === 'number') {
        rezult = number ** 3;
    } else {
        throw new Error('parameter type is not a Number')
    }
    return rezult;
}
let rezult1 = f(2);
console.log(rezult1);
let rezult2 = f('Content')
console.log(rezult2);
