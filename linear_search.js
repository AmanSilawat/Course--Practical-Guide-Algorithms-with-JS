// TASK: Implement linear search. (for loop)

function linearSearch(list, item) {
    for (let i = 0; i < list.length; i++) {
        if(list[i] == item) {
            return `found the item : ${item}`;
        }
    }
    return 'not found.'
}

console.log( linearSearch([2,6,7,91,103], 90) );




// TASK: Implement linear search. (forEach)
function linearSearch(list, item) {
    let index = -1;
    list.forEach((listItem, i) => {
        if (listItem == item) {
            index = i;
        }
    });
    return index;
}

console.log( linearSearch([2,6,7,91,103], 90) );