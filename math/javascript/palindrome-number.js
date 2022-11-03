var isPalindrome = function(x) {
    let arr = [...x.toString()]
 let result = arr.every((letter, index) => {
        return letter === arr[arr.length - index - 1];
    })

    return result
}