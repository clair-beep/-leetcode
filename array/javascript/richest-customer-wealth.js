var maximumWealth = function(accounts) {
    // loop 
    let wealth = 0; 
    for(let i = 0; i < accounts.length; i++) {
      //variable storing sun of subarrays
      let temp = accounts[i].reduce((acc, cur) => acc += cur)
      //conditional evaluate if wealth >temp 
      if (temp > wealth) {
        wealth = temp
      }
    }
    //return 
    return wealth;
};