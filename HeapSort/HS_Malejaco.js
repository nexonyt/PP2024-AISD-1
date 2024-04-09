function toExport(howMuch) {
  function generateDescendingArray(n) {
    const descendingArray = [];
    for (let i = n; i >= 1; i--) {
      descendingArray.push(i);
    }
    return descendingArray;
  }

  function heapsort(A) {
    function heapify(A, i, heapsize) {
      const left = 2 * i + 1;
      const right = 2 * i + 2;
      let largest = i;

      if (left < heapsize && A[left] > A[largest]) largest = left;
      if (right < heapsize && A[right] > A[largest]) largest = right;

      if (largest !== i) {
        [A[i], A[largest]] = [A[largest], A[i]];
        heapify(A, largest, heapsize);
      }
    }

    const n = A.length;
    for (let i = Math.floor(n / 2); i >= 0; i--) {
      heapify(A, i, n);
    }

    for (let i = n - 1; i >= 1; i--) {
      [A[0], A[i]] = [A[i], A[0]];
      heapify(A, 0, i);
    }

    return A;
  }

  let n = howMuch;
  let A = generateDescendingArray(n);

  const czas_rozpoczecia_sortowania = new Date();
  let sortedArray = heapsort(A);
  const czas_zakonczenia_sortowania = new Date();

  const roznica =
    czas_zakonczenia_sortowania.getTime() -
    czas_rozpoczecia_sortowania.getTime();
  console.log(`Ilość milisekund dla ${n}: ` + roznica);
  //   console.log("Data rozpoczecia: " + czas_rozpoczecia_sortowania.getTime());
  //   console.log("Data zakonczenia: " + czas_zakonczenia_sortowania.getTime());
}
module.exports = { toExport };
