function toExport(howMuch) {
  function generateArrayWithConstants(n, constantValue) {
    let array = [];
    for (let i = 0; i < n; i++) {
      array.push(constantValue);
    }
    return array;
  }

  let n = howMuch;
  let constantValue = 1;
  let A = generateArrayWithConstants(n, constantValue);

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

  console.log("Data rozpoczecia: " + czas_rozpoczecia_sortowania);
  console.log("Data zakonczenia: " + czas_zakonczenia_sortowania);
}

module.exports = { toExport };
