var plusOne = function (digits) {
    digits = BigInt(digits.join(''))
    ++digits
    let numsArr = Array.from(String(digits), Number)
    return numsArr
};

var plusOne = function (digits) {

    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] != 9) {
            digits[i]++
            return digits
        }
        digits[i] = 0
    }
    digits.unshift(1)
    return digits
};
Brea