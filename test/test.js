test("union", function() {
  deepEqual([], ArrayUtil.union([], []), "empty and empty");
  deepEqual([1], ArrayUtil.union([1], []), "singleton and empty");
  deepEqual([1], ArrayUtil.union([], [1]), "empty and singleton");
  deepEqual([1], ArrayUtil.union([1], [1]), "singleton and singleton");
  deepEqual([1,2], ArrayUtil.union([1], [2]), "singleton and singleton");
  deepEqual([1,2,3,4], ArrayUtil.union([1,2,3], [3,2,4]), "many and many");
  deepEqual([1,6,5,2,3,4], ArrayUtil.union([1,2,3], [6,5,3,2,4]), "many and many");
  deepEqual([1,6,5,2,3,4], ArrayUtil.union([1,2,3], [6,5,3,4,2]), "many and many");
});
test("contains", function() {
  ok(ArrayUtil.contains([1,2,3], 3));
  ok(!ArrayUtil.contains([1,2,3], 4));
});
test("dummy test", function() {
  ok(true);
});
