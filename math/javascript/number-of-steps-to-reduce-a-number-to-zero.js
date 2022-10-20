var numberOfSteps = function(num) {
    let steps = 0;
    // while that's going to stop once num = 0
    while (num > 0) {
            // 2 conditionals, one for whet it's odd and anothes one when it's even 

        if(num % 2 === 0) {
           num = num /2
            steps ++
        } else {
           num =num - 1
            steps ++

        }
    }
    return steps
    
};