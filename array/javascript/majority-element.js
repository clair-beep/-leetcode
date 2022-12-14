function majorityElement(arr){

    let elem = {},
        count = 0,
        majElem = arr[0]
    
    for(const num of arr){
      elem[num] = elem[num] + 1 || 1
      //elem[num] > arr.length / 2
    }
    
    for(const n in elem){
      if(elem[n] > count){
        count = elem[n]
        majElem = n
      }
    } 
    
    return majElem
  }