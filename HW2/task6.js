function isEven(a) {
    if (typeof a === 'number') {
        if (a % 2 == 0)
            return true
        else
            return false
    }
    else {
        throw new Error('parameter type is not a Number');
    }
}
console.log(isEven(2));