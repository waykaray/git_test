var arr = [1, 2, 3, 4, 5, 6];
for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5 - i; j++) {
        if (arr[j] < arr[j + 1]) {
            var temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
console.log(arr);



