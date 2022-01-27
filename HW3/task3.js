const arr = [1, 2, 3];
function f(i) {
    i += 1;
    return i;
}
function every(arr, f) {
    if (!Array.isArray(arr)) {
        throw new Error("1 параметр не массив");
    }
    else if (!typeof function f(i) { } == "function") {
        throw new Error("2 параметр не функция");
    }
    else {
        for (i in arr)
            if (f(arr[i]) > 0) {
                return true;
            } else return false;
    }
}
console.log(every(arr, f));
