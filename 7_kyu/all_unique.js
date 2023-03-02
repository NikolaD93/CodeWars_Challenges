const hasUniqueChars = (str) => {

  //! Simple solution using Set  
  // return new Set(str).size === str.length

  //! My solution
  str = str.split("");

  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) !== i) return false;
  }
  return true;
 
};


