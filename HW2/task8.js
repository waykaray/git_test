function f(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("parameter type should be an array");
    }
    else if (arr.length == 0) {
        throw new Error("parameter can't be an empty");
    }
    else {
        if (arr.length == 1) {
            console.log(arr[0])
        } else {
            console.log(arr[0]);
            arr.splice(0, 1);
            f(arr);
        }
    }
}

f([1, 2, 3, 4, 5, 6]);