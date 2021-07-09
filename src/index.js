module.exports = function reverse(n) {
    if (n < 0) n *= -1;
    if (n % 10 === 0) n /= 10;
    return Number(n.toString().split('').reverse().join(''));
}
