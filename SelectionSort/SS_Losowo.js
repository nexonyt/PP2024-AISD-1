function toExport(howMuch) {
  function generateRandomArray(n) {
    let array = [];
    for (let i = 0; i < n; i++) {
      array.push(Math.floor(Math.random() * 10001));
    }
    return array;
  }

  const n = howMuch; //600 000
  const A = generateRandomArray(n);

  // console.log("Nie sortowana: " + A);

  const length = A.length;
  const czas_rozpoczecia_sortowania = new Date();

  for (let j = length - 1; j >= 1; j--) {
    let max = j;
    for (let i = j - 1; i >= 0; i--) {
      if (A[i] > A[max]) {
        max = i;
      }
    }
    // Zamiana miejscami elementów
    const temp = A[j];
    A[j] = A[max];
    A[max] = temp;
  }

  // console.log("Posortowana: " + A); // Wynik: [1, 2, 3, 4, 5, 8]

  const czas_zakonczenia_sortowania = new Date();
  const roznica =
    czas_zakonczenia_sortowania.getTime() -
    czas_rozpoczecia_sortowania.getTime();
  console.log(`Ilość milisekund dla ${n}: ` + roznica);

  console.log("Data rozpoczecia: " + czas_rozpoczecia_sortowania.getTime());
  console.log("Data zakonczenia: " + czas_zakonczenia_sortowania.getTime());
}

module.exports = { toExport };
