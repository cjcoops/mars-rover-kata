"use strict";

module.exports = {

  // make an array infinite virtually, so it has no start or end
  // which makes returnIndex a relative index
  returnFromInfiniteArray: function(array, currentValue, returnIndex) {
    if(!array instanceof Array) throw new Error('invalid array');

    // get currentIndex for currentValue
    for(var currentIndex=0; currentIndex < array.length; currentIndex++) {
      if(array[currentIndex] === currentValue) break;
    }

    // calculate absolute index to return
    var absoluteReturnIndex = currentIndex + returnIndex;

    // make sure absoluteReturnIndex is within boundaries of array
    if(absoluteReturnIndex < 0) {
      absoluteReturnIndex = array.length-1;
    } else if(absoluteReturnIndex > array.length-1) {
      absoluteReturnIndex = 0;
    }

    // finally return value for returnIndex
    return array[absoluteReturnIndex];
  }

};