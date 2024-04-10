
// function toExport(howMuch = 100000) {

//     function generateRandomArray(n) {
//         let array = [];
//         for (let i = 0; i < n; i++) {
//           array.push(Math.floor(Math.random() * 10001));
//         }
//         return array;
//       }
    
//     const n = howMuch;
//     const A = generateRandomArray(n);
//     const czas_rozpoczecia_sortowania = new Date();

//     function quickSortMain(A) {
//         quickSort(A, 0, A.length - 1);
//         return A;
//     }

//     function quickSort(A, p, r) {
//         if (p < r) {
//             let q = partition(A, p, r);
//             quickSort(A, p, q);
//             quickSort(A, q + 1, r);
//         }
//     }

//     function partition(A, p, r) {
//         let x = A[Math.floor((p + r) / 2)];
//         let i = p - 1;
//         let j = r + 1;

//         while (true) {
//             do {
//                 j--;
//             } while (A[j] > x);

//             do {
//                 i++;
//             } while (A[i] < x);

//             if (i < j) {
//                 // Zamień elementy miejscami
//                 let temp = A[i];
//                 A[i] = A[j];
//                 A[j] = temp;
//             } else {
//                 return j;
//             }
//         }
//     }
//     quickSortMain(A);
//     const czas_zakonczenia_sortowania = new Date();
//     const roznica =
//       czas_zakonczenia_sortowania.getTime() -
//       czas_rozpoczecia_sortowania.getTime();
//     console.log(`Ilość milisekund dla ${n}: ` + roznica);
  
//     console.log("Data rozpoczecia: " + czas_rozpoczecia_sortowania.getTime());
//     console.log("Data zakonczenia: " + czas_zakonczenia_sortowania.getTime());

// }

// toExport()
const toExport = (howMuch) => {

    const quicksort = (arr, left, right) => {
        if (left < right) {
            const pivotIndex = partition(arr, left, right);
            quicksort(arr, left, pivotIndex - 1);
            quicksort(arr, pivotIndex + 1, right);
        }
    };
    
    const partition = (arr, left, right) => {
        const pivotIndex = choosePivot(arr, left, right);
        const pivotValue = arr[pivotIndex];
        [arr[pivotIndex], arr[right]] = [arr[right], arr[pivotIndex]];
        let storeIndex = left;
        for (let i = left; i < right; i++) {
            if (arr[i] < pivotValue) {
                [arr[i], arr[storeIndex]] = [arr[storeIndex], arr[i]];
                storeIndex++;
            }
        }
        [arr[right], arr[storeIndex]] = [arr[storeIndex], arr[right]];
        return storeIndex;
    };
    
    const choosePivot = (arr, left, right) => {
        // Choose pivot randomly
        // return Math.floor(Math.random() * (right - left + 1)) + left;
        
        // Choose pivot as the rightmost element
        // return right;
        
        // Choose pivot as the middle element
        return Math.floor((left + right) / 2);
    };


    const generateRandomArray = size => {
        let array = [];
        let num = 1;
        let direction = 'right';
        
        while (array.length < size) {
            if (direction === 'right') {
                for (let i = 1; i <= num; i++) {
                    array.push(i);
                    if (array.length === size) break;
                }
                direction = 'left';
            } else {
                for (let i = num; i >= 1; i--) {
                    array.push(i);
                    if (array.length === size) break;
                }
                direction = 'right';
            }
            num++;
        }
    
        return array;
    };
    
    const measureSortingTime = (arrSize, numTrials) => {
        const pivotChoices = ["random", "right", "middle"];
        const results = {};
        pivotChoices.forEach(choice => {
            results[choice] = [];
        });
    
        for (let i = 0; i < numTrials; i++) {
            const arr = generateRandomArray(arrSize);
            pivotChoices.forEach(choice => {
                const arrCopy = arr.slice();
                const startTime = new Date().getTime();
                quicksort(arrCopy, 0, arrCopy.length - 1);
                const endTime = new Date().getTime();
                results[choice].push(endTime - startTime);
            });
        }
    
        return results;
    };
    
    const arrSize = howMuch;
    const numTrials = 4;
    const results = measureSortingTime(arrSize, numTrials);
    console.log("Results:");
    Object.entries(results).forEach(([choice, times]) => {
        const averageTime = times.reduce((acc, curr) => acc + curr);
        console.log(`Average sorting time for ${choice} pivot: ${averageTime} miliseconds`);
    });
}

toExport()

module.exports = { toExport };