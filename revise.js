// *basic memoization*
function tenTime(n) {
    return n * 10;
}

const cache = {};

function basicMemo(n) {
    if (n in cache) {
        console.log('finding from cache');
        return cache[n];
    } else {
        console.log('new calculate');
        let res = tenTime(n);
        cache[n] = res;
        return res;
    }
}

basicMemo(5);
basicMemo(6);

// ..
// ....
// .......
// *basic function memoization*
function funMemo(cb) {
    const cache = {};
    return function (n) {
        if (n in cache) {
            console.log('finding from cache');
            return cache[n];
        } else {
            console.log('new calculate');
            let res = cb(n);
            cache[n] = res;
            return res;
        }
    };
}

let memo = funMemo(tenTime);
memo(6); // new calculate
memo(6); // finding from cache

// ..
// ....
// .......
// *basic closure memoization*

function funClosureMemo(cb) {
    const cache = {};
    return function (n, ...args) {
        if (n in cache) {
            console.log('finding from cache');
            return cache[n];
        } else {
            console.log('new calculate');
            let res = cb(n, ...args);
            cache[n] = res;
            return res;
        }
    };
}

let memo2 = funClosureMemo(tenTime);
memo2(8); // new calculate
memo2(8); // finding from cache
memo2(9); // new calculate

// ..
// ....
// .......
// *Binary Search Tree (find Index)*

function binarySearch(arr, val) {
    let min = 0;
    let max = arr.length - 1;
    let index;
    
    while (min <= max) {
        index = Math.floor( (min+max) / 2)
        
        // base case
        console.log(index, "index")
        if( arr[index] === val ) {
            return index;
        } else{
            if( arr[index] < val ) {
                console.log(index, "index")
                min = index + 1;
            } else {
                max = index - 1;
            }
        }
    }
}
var resBin = binarySearch([1, 2, 3, 4, 5], 2);
console.log(resBin);
