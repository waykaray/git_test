const arr = [1, 2, 3];
function f(i) {
    console.log(i);
}
function forEach(arr, f) {
    if (!Array.isArray(arr)) {
        throw new Error("1 параметр не массив");
    }
    else if (!typeof function f(i) { } == "function") {
        throw new Error("2 параметр не функция");
    }
    else
        for (i of arr) {
            f(i);
        }
}
forEach(arr, f);
