const arr = [3, 2, 1];
function reverse(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("Параметр не массив");
    } else {
        if (arr.length == 0) {
            throw new Error("Пустой массив")
        } else {
            let arrNew = new Array();
            while (arr.length > 0) {
                arrNew.push(arr.pop());
            }
            return arrNew;
        }
    }
}
console.log(reverse(arr));