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


