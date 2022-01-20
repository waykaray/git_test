function f(a) {
    let rezult;
    if (a < 0 || a > 7) {
        throw new Error('parameter should be in the range of 1 to 7');
    } else if (typeof a === 'number') {
        rezult = (a == 1) ? 'Воскресенье' :
            (a == 2) ? 'Понедельник' :
                (a == 3) ? 'Вторник' :
                    (a == 4) ? 'Среда' :
                        (a == 5) ? 'Четверг' :
                            (a == 6) ? 'Пятница' : 'Суббота';
    } else {
        throw new Error('all parameters type should be a Number');
    }
    return rezult;
}
console.log(f(1));