var ArrayUtil = {
  // Make union array which keep orders of original arrays.
  // Elements contained in both arrays are in the same order as arr1.
  union: function(arr1, arr2) {
    var res = new Array(),
        i = 0,
        j = 0,
        len1 = arr1.length,
        len2 = arr2.length,
        val1,
        val2;
    while (i < len1 || j < len2) {
      // append arr1 elements not contained in arr2.
      while (i < len1) {
        val1 = arr1[i];
        if (ArrayUtil.contains(arr2, val1)) {
          break;
        } else {
          res.push(val1);
          i++;
        }
      }

      // append arr2 elements not contained in arr1.
      // skip arr2 elements already added to res.
      while (j < len2) {
        val2 = arr2[j];
        if (ArrayUtil.contains(arr1, val2)) {
          if (ArrayUtil.contains(res, val2)) {
            j++;
          } else {
            break;
          }
       } else {
          res.push(val2);
          j++;
        }
      }

      // append arr1 elements contained in arr2.
      while (i < len1) {
        val1 = arr1[i];
        if (ArrayUtil.contains(arr2, val1)) {
          res.push(val1);
          i++;
        } else {
          break;
        }
      }
    }
    return res;
  },
  contains: function(arr, val) {
    for (var i = 0, len = arr.length; i < len; ++i) {
      if (arr[i] === val) {
        return true;
      }
    }
    return false;
  },
  join: function(arr, sep) {
    var res = "";
    for (var i = 0, len = arr.length; i < len; ++i) {
      if (i > 0) {
        res += sep;
      }
      res += arr[i];
    }
    return res; 
  }
};
