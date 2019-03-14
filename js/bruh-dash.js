var global = window || GLOBAL;

/****************************************************************************************
 * Function signatures have been intentionally left out of the comments describing what *
 * each function does so that you can have practice looking up documentation. Please    *
 * Reference the documentation at [ https://lodash.com/docs/4.17.4 ] You should have    *
 * documentation up in a browser window at all times when working on projects!          *
 ****************************************************************************************/

global.bruhdash = {

  // returns the first element of an array
  first: function (arr) {
      return arr[0];
  },

  // returns the last element of an array
  last: function (arr) {
    return arr[arr.length-1]

  },

  // returns the index of the first matching element from left to right
  indexOf: function (arr, element) {
   
    var output = -1
for(i=0;i<arr.length;i++){
      if(arr[i]=== element){
        output =  i;
      }
      
}
  return output
    }
  ,

  

  // returns the index of the first matching element from right to left
  lastIndexOf: function (arr,element) {
    var output = -1
   for(i=arr.length;i>=0;i--){
    if(arr[i]=== element){
      output =  i;
    }
   }
return output;
  },

  // returns an array with all elements except for the last element
  initial: function (arr) {
    arr.pop();
    return arr
  },
  
  // returns an array with all falsey values removed
  compact: function(arr) {
    for(i=0;i<arr.length;i++){
      if(arr[i]===false|| arr[i]=== 0|| arr[i]=== null || isNaN(arr[i])||arr[i]===NaN|| arr[i]=== ''){
        arr.splice(i,1)
        i--
      }
    }
    return arr
  },

  // creates a slice of an array from the start index up to but not including the end index
  slice: function (arr, start, end) {
    arr = arr.slice(start, end);
    return arr
  },

  // returns a slice of array with n elements dropped from the beignning
  drop: function(arr, n){
    // arr.splice(0,n)
    // return arr;
    if(n===0){
     
      return arr;
    }else if(n === undefined){
      arr.splice(0,1)
      return arr
    } else{
      arr.splice(0,n)
      return arr;
    }

  },

  // returns a slice of array with n elements dropped from the end
  dropRight: function(arr, n) {
    if(n=== undefined){
      arr.splice(arr.length-1,1)
      return arr;
    } else if(n==0){
      return arr;
    } else{
      arr.splice(arr.length-(n), n)
      return arr;
    }

  },

  // creates a slice of an array with n elements taken from the beginning
  take: function (arr, n) {
    if (n === undefined){
      arr = arr.slice(0,1);
      return arr
    }else if(n ===0){
      var emp = [];
      return emp;
    } else if(n>arr.length){
      return arr;
    } else{
      arr = arr.slice(0,n);
      console.log(arr)
      return arr;
    }

  },

  // creates a slice of an array with n elements taken from the end
  takeRight: function (arr, n) {
    if(n === undefined){
      var last = [arr[arr.length-1]]
      return last
    } else if(n === 0){
      var emp = [];
      return emp;
    } else{
      arr = arr.slice(arr.length-n, arr.length);
      return arr;
    }
  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function(arr, value, start, end ) {
    if (start === undefined && end === undefined){
      for(i=0;i<arr.length;i++){
        arr.splice(i,1,value)
        
      }
      return arr;
    }else{
      for(i=start;i<end;i++){
        arr.splice(i,1,value)
      }
      return arr;
    }
    
  },

  // removes all given values from an array
  pull: function (arr, value1, value2) {
    for(i=0;i<arr.length;i++){
      if(arr[i]=== value1 || arr[i] === value2){
        arr.splice(i,1)
        i--
      }
    }
    return arr
  
  },

  // removes elements of an array corresponding to the given indices
  pullAt: function (arr, index) {
    var newArr = [];
    for(i=0;i<index.length;i++){
      newArr.push(arr[index[i]])
    }
    return newArr;
  },

  // creates an array excluding all the specified values
  without: function(arr,value1, value2) {
    var newArr = [];
    for(i=0;i<arr.length;i++){
      if(arr[i] !== value1 && arr[i] !== value2){
        newArr.push(arr[i])
      }
    }
    return newArr;

  },

  // returns an array with specified values excluded
  difference: function(arr, values) {
    y = 0
    for(i=0;i<arr.length;i++){
      if(arr[i]=== values[y]){
        arr.splice(i,1)
        i--
        y++
      }
    }
return arr;
  },

  /*******************
   *  STRETCH GOALS! *
   *******************/ 

  // creates an array of grouped elements
  zip: function (array1, array2, array3) {
    newZip0 = [];
    newZip1 = [];
    newZip2 = [];
    for(i=0;i<2;i++){
    
  }
  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function () {

  },

  // creates an array of elements into groups of length of specified size
  chunk: function(){

  },

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function() {

  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function() {

  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/ 

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function() {

  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function() {
    
  }
};
