function getDivisors(a) {
    if (typeof a !== "number") {
        throw new Error("parameter type is not a Number");
    }
    else if (a <= 0) {
        throw new Error("parameter can't be a 0");
    }
    else {
        let arr = [];
        for (let i = 0; i <= 12; i++) {
            if (a % i == 0)
                arr.push(i);
        }
        return arr;
    }

}
console.log(getDivisors(12));