// binarySearch([2,6,7,90,103], 90);

// first time loop
function binarySearch(list, item) {
    var min = 0; //0
    var max = list.length - 1; //5
    var guess; //undefinded

    while (min <= max) {
        guess = Math.floor((min + max) / 2); //2

        //7===90
        if (list[guess] === item) {
            return guess;
        } else {
            //7 < 90
            if (list[guess] < item) {
                min = guess + 1; // 3
            } else {
                max = guess - 1;
            }
        }
    }

    return -1;
}

// second time loop
function binarySearch(list, item) {
    var min = 0; //3
    var max = list.length - 1; //5
    var guess; //2

    while (min <= max) {
        guess = Math.floor((min + max) / 2); //3

        if (list[guess] === item) {
            //90===90
            return guess; //return 3
        } else {
            if (list[guess] < item) {
                min = guess + 1;
            } else {
                max = guess - 1;
            }
        }
    }

    return -1;
}

binarySearch([2, 6, 7, 90, 103], 90);
