const arr = [1, 2, 3];
function f(i) {
    if (i > 1) {
        return true;
    }
}
function filter(arr, f) {
    if (!Array.isArray(arr)) {
        throw new Error("1 параметр не массив");
    }
    else if (!typeof function f(i) { } == "function") {
        throw new Error("2 параметр не функция");
    }
    else {
        for (i in arr)
            if (f(arr[i])) {
                console.log(arr[i])
            }
    }
}
filter(arr, f);