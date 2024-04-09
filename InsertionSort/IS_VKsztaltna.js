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

  const czas_rozpoczecia_sortowania = new Date();

  for (let j = 1; j < A.length; j++) {
    let key = A[j];
    let i = j - 1;
    while (i >= 0 && A[i] > key) {
      A[i + 1] = A[i];
      i = i - 1;
    }
    A[i + 1] = key;
  }

  const czas_zakonczenia_sortowania = new Date();
  const roznica =
    czas_zakonczenia_sortowania.getTime() -
    czas_rozpoczecia_sortowania.getTime();
  console.log(`Ilość milisekund dla ${n}: ` + roznica);

  console.log("Data rozpoczecia: " + czas_rozpoczecia_sortowania.getTime());
  console.log("Data zakonczenia: " + czas_zakonczenia_sortowania.getTime());
}
module.exports = { toExport };
