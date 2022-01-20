let arr = [1, 2, -4, 3, -9, -1, 7];
let arrNew = [];
function isPositive(a) {
    if (typeof a === 'number') {
        if (a > 0)
            return true
        else
            return false
    }
    else {
        throw new Error('parameter type is not a Number');
    }
}
for (let i = 0; i < arr.length; i++) {
    if (isPositive(arr[i])) {
        arrNew.push(arr[i])
    }
}
console.log(arrNew);