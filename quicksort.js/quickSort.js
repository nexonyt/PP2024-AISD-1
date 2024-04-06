
function toExport(howMuch = 100000) {

    function generateRandomArray(n) {
        let array = [];
        for (let i = 0; i < n; i++) {
          array.push(Math.floor(Math.random() * 10001));
        }
        return array;
      }
    
    const n = howMuch;
    const A = generateRandomArray(n);
    const czas_rozpoczecia_sortowania = new Date();

    function quickSortMain(A) {
        quickSort(A, 0, A.length - 1);
        return A;
    }

    function quickSort(A, p, r) {
        if (p < r) {
            let q = partition(A, p, r);
            quickSort(A, p, q);
            quickSort(A, q + 1, r);
        }
    }

    function partition(A, p, r) {
        let x = A[Math.floor((p + r) / 2)];
        let i = p - 1;
        let j = r + 1;

        while (true) {
            do {
                j--;
            } while (A[j] > x);

            do {
                i++;
            } while (A[i] < x);

            if (i < j) {
                // Zamień elementy miejscami
                let temp = A[i];
                A[i] = A[j];
                A[j] = temp;
            } else {
                return j;
            }
        }
    }
    quickSortMain(A);
    const czas_zakonczenia_sortowania = new Date();
    const roznica =
      czas_zakonczenia_sortowania.getTime() -
      czas_rozpoczecia_sortowania.getTime();
    console.log(`Ilość milisekund dla ${n}: ` + roznica);
  
    console.log("Data rozpoczecia: " + czas_rozpoczecia_sortowania.getTime());
    console.log("Data zakonczenia: " + czas_zakonczenia_sortowania.getTime());

}

toExport()