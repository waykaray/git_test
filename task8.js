var arr = [1, 2, 3, 4];
var sum = 0;
for (i in arr) {
    if (arr[i] % 2 == 0 && arr[i] > 3) {
        sum += arr[i];
    }
    i++;
}
console.log(sum);
