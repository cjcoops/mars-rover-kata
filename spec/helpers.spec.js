'use strict';

var helper = require('../helpers.js');

describe('Helper', function() {

  describe('returnFromInfiniteArray', function() {

    var array = [1, 2, 3, 4, 5];

    it('should return correct value depending on returnIndex var', function() {
      expect(helper.returnFromInfiniteArray(array, 1, 0)).toEqual(1);
      expect(helper.returnFromInfiniteArray(array, 1, 1)).toEqual(2);
      expect(helper.returnFromInfiniteArray(array, 1, 2)).toEqual(3);
      expect(helper.returnFromInfiniteArray(array, 1, 3)).toEqual(4);
      expect(helper.returnFromInfiniteArray(array, 1, 4)).toEqual(5);

      expect(helper.returnFromInfiniteArray(array, 4, 0)).toEqual(4);
      expect(helper.returnFromInfiniteArray(array, 4, -1)).toEqual(3);

      expect(helper.returnFromInfiniteArray(array, 1, 5)).toEqual(1);
      expect(helper.returnFromInfiniteArray(array, 1, -1)).toEqual(5);

      expect(helper.returnFromInfiniteArray(array, 1, 6)).toEqual(2);
      expect(helper.returnFromInfiniteArray(array, 1, -6)).toEqual(5);

      expect(helper.returnFromInfiniteArray(array, 3, 6)).toEqual(4);
      expect(helper.returnFromInfiniteArray(array, 3, -6)).toEqual(2);
    });

  });
});
