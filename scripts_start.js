const toLib = require("./MergeSort/MS_VKsztaltna");

A = [
  40000, 80000, 120000, 160000, 200000, 240000, 280000, 320000, 360000, 400000,
  440000, 480000, 520000, 560000, 600000,
];

// A = [100, 200, 500, 1000, 10000];

for (let i = 0; i < A.length; i++) {
  const result = toLib.toExport(A[i]);
}
