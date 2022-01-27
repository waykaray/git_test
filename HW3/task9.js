function arrayFill(value, count) {
    if (typeof value !== 'number' && typeof value !== 'string' && typeof value !== 'object' && !Array.isArray(value)) {
        throw new Error("ошибка");
    } else {
        let arr = new Array();
        for (i = 0; i < count; i++) {
            arr[i] = value;
        }
        return arr;
    }
}
console.log(arrayFill('x', 5));