var romanToInt = (s) => {
    s = s.split('').reverse()
    let num = 0;
    for (let i =0; i < s.length; i++) {
      if(s[i] === 'V' && s[i +1] === 'I') {
        num += 4;
        s.splice(i, 1)
      } else if (s[i] === 'X' && s[i +1] === 'I') {
        num += 9;
        s.splice(i, 1)
  
      } else if (s[i] === 'L' && s[i +1] === 'X'){
        num += 40
        s.splice(i, 1)
  
      } else if (s[i] === 'C' && s[i +1] === 'X'){
        num += 90
        s.splice(i, 1)
      } else if (s[i] === 'D' && s[i +1] === 'C'){
        num += 400
        s.splice(i, 1) 
        
      } else if (s[i] === 'M' && s[i +1] === 'C'){
        num += 900
        s.splice(i, 1) 
        
      } else if (s[i] === 'I') {
        num += 1
  
      } else if (s[i] === 'V') {
        num += 5
  
      } else if (s[i] === 'X') {
        num += 10
  
      } else if (s[i] === 'L') {
        num += 50
  
      } else if (s[i] === 'C') {
        num += 100
  
      } else if (s[i] === 'D') {
        num += 500
  
      } else {
        num += 1000
  
      }
  
      
    }
    return num;
  }