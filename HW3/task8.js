const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
f(arr); // 12
const arr2 = [[[[[1, 2]]]]];
f(arr2); // 3
const arr3 = [[[[[1, 2]]], 2], 1];
f(arr3); // 6
const arr4 = [[[[[]]]]];
f(arr4); // 0
const arr5 = [[[[[], 3]]]];
f(arr5); // 3

function f(array) {
    if (!Array.isArray(array)) {
        throw new Error("Параметр не массив");
    } else {
        let sum = 0;
        for (i of array) {
            if (Array.isArray(i)) {
                sum += f(i)
            } else if (typeof i == 'number') {
                sum += i;
            } else {
                throw new Error("ошибка");
            }
        }
        return sum;
    }
}
console.log(f(arr5));
