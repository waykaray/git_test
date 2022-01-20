function f(a, b, c) {
    let rezult;
    if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
        rezult = a + b + c;
    } else {
        throw new Error(' all parameters type should be a Number')
    }
    return rezult;
}
let rezult1 = f(1, 2, 3);
console.log(rezult1);
let rezult2 = f(1, 2, 's')
console.log(rezult2);