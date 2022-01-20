var n = 1000;
for (var num = 1; ; num++) {
    n = n / 2;
    if (n < 50) {
        console.log(num);
        console.log(n);
        break;
    }
}
