const arr = [1, 2, 3];
const acc = 0;
function reduce(arr, f, acc) {
    if (!Array.isArray(arr)) {
        throw new Error("1 параметр не массив");
    }
    else if (!typeof function f() { } == "function") {
        throw new Error("2 параметр не функция");
    }
    else if (!typeof acc === 'number' && typeof acc === 'string') {
        throw new Error("3 параметр не число/строка");
    }
    else {
        let rezult = acc;
        for (i = 0; i < arr.length; i++) {
            rezult = f.call(null, rezult, arr[i], i, arr);
        }
        return rezult;
    }
}
console.log(reduce(arr, function (acc, item) {
    return acc + item;
}, acc));