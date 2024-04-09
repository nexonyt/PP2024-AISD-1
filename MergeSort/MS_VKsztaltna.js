function toExport(howMuch) {
  function generateVShapedArray(n) {
    const vArray = [];

    for (let i = n; i >= Math.ceil(n / 2); i--) {
      vArray.push(i);
    }

    for (let i = Math.floor(n / 2) + 1; i <= n; i++) {
      vArray.push(i);
    }

    return vArray;
  }

  let n = howMuch;
  let A = generateVShapedArray(n);
  function merge_Arrays(left_sub_array, right_sub_array) {
    let array = [];
    while (left_sub_array.length && right_sub_array.length) {
      if (left_sub_array[0] < right_sub_array[0]) {
        array.push(left_sub_array.shift());
      } else {
        array.push(right_sub_array.shift());
      }
    }
    return [...array, ...left_sub_array, ...right_sub_array];
  }
  function merge_sort(unsorted_Array) {
    const middle_index = unsorted_Array.length / 2;
    if (unsorted_Array.length < 2) {
      return unsorted_Array;
    }
    const left_sub_array = unsorted_Array.splice(0, middle_index);
    return merge_Arrays(merge_sort(left_sub_array), merge_sort(unsorted_Array));
  }

  const czas_rozpoczecia_sortowania = new Date();
  merge_sort(A);
  const czas_zakonczenia_sortowania = new Date();
  const roznica =
    czas_zakonczenia_sortowania.getTime() -
    czas_rozpoczecia_sortowania.getTime();
  console.log(`Ilość milisekund dla ${n}: ` + roznica);
  //   console.log("Data rozpoczecia: " + czas_rozpoczecia_sortowania.getTime());
  //   console.log("Data zakonczenia: " + czas_zakonczenia_sortowania.getTime());
}
module.exports = { toExport };
