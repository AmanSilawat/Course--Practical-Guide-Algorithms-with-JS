// *basic memoization*
function tenTime(n) {
    n * 10;
}

const cache = {};

function basicMemo(n) {
    if (n in cache) {
        console.log('finding from cache');
        return cache[n];
    }
    else {
        console.log('new calculate')
        let res = tenTime(n);
        cache[n] = res;
        return res;
    }
}

basicMemo(5);
basicMemo(6);