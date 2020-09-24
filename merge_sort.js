function mergeSort(arr) {
    if (arr.length === 1) {
        // return once we hit an array with a single item
        return arr;
    }

    const middle = Math.floor(arr.length / 2); // get the middle item of the array rounded down
    const left = arr.slice(0, middle); // items on the left side
    const right = arr.slice(middle); // items on the right side
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);
    return sortArr(sortedLeft, sortedRight);
}

function sortArr(left, right) {
    // let result = [];
    // let indexLeft = 0;
    // let indexRight = 0;

    // while (indexLeft < left.length && indexRight < right.length) {
    //     if (left[indexLeft] < right[indexRight]) {
    //         result.push(left[indexLeft]);
    //         indexLeft++;
    //     } else {
    //         result.push(right[indexRight]);
    //         indexRight++;
    //     }
    // }

    // return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));

    const results = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            results.push(left.shift());
        } else {
            results.push(right.shift());
        }
    }

    return results.concat(left, right);
}

console.log( mergeSort([9, 2, 5, 6, 4, 3, 7, 10, 1, 8]) );
console.log( mergeSort( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] ) );
console.log( mergeSort(  [10, 9, 8, 7, 6, 5, 4, 3, 2, 1] ) );
