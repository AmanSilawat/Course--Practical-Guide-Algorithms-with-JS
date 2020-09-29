// *basic memoization*
function tenTime(n) {
    n * 10;
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
function tenTime(n) {
    n * 10;
}

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


