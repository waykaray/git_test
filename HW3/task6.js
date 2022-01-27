const arr = [1, 2, 3];
const acc = 0;
function reduceRight(arr, f, acc) {
    if (!Array.isArray(arr)) {
        throw new Error("1 параметр не массив");
    }
    else {
        let rezult = acc;
        for (i = arr.length - 1; i >= 0; i--) {
            rezult = f.call(null, rezult, arr[i], i, arr);
        }
        return rezult;
    }
}
console.log(reduceRight(arr, function (acc, item) {
    return acc + item;
}, acc));