toBinary = function (n) {
    if (n < 0) {
        n = 0xFFFFFFFF + n + 1;
    }
    return parseInt(n, 10).toString(2);
}

module.exports = {
    toBinary,
}