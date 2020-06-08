var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'];
  
  function addElementToBeginningOfArray(b,a) {
    var array = [a,...b]
    return array;
  }
  
  function destructivelyAddElementToBeginningOfArray(b,a) {
    b.unshift(a)
    return b;
  }
  
  function addElementToEndOfArray(a,b) {
    var array = [...a,b]
    return array;
  }
  
  function destructivelyAddElementToEndOfArray(a,b) {
    a.push(b)
    return a;
  }
  
  function accessElementInArray (a,i) {
    return a[i];
    
  }
  
  function destructivelyRemoveElementFromBeginningOfArray(a) {
    a.shift()
    return a;
  }
  function removeElementFromBeginningOfArray(a) {
    var array = a
    array.shift()
    return array;
  }
  