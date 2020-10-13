module.exports = function reverse (n) {
    const numAsStr = String(Math.abs(n));
    let reversedStr = '';
    let i = numAsStr.length - 1;
  
    while (i >= 0) {
      reversedStr += numAsStr[i];
      i -= 1;
    }
    const reversedModule = Number(reversedStr);
  
    return reversedModule;
  };
