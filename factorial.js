// // given an array of integers,
// //return the indices of the two numbers
// //that add up to a given target

// array1 = [1, 2, 5, 6, 8];

array1 = [1, 3, 7, 9, 2];

function findTwoSum2(array, target) {
    for (p = 0; p < array.length; p++) {
        const numberToFind = target - array[p];
        const q = p + 1;
        if (array[q] === numberToFind) {
            return [p, q];
        }
    }
    return null;
}
const result = findTwoSum2(array1, 11);

function calMaxArea(array) {
    let maxArea;
    for (i = 0; i < array.length; i++) {
        const q = i + 1;

        console.log(array[i] * array[q], array[i]);
    }
}
// calMaxArea(array1);

/* you are given an array of positive integers where 
each integer represents the height of a vertical line
on a chart find two lines which together with the x-axis
forms a container that would hold the greatest amount of water. 
Return the area of water it should hold*/

// const array = [];

function maxArea(array) {
    let results = [];
    for (p = 0; p < array.length; p++) {
        for (q = 0; q < array.length; q++) {
            if (array[p] < array[q]) {
                results.push(array[p] * (q - p));
            }
        }
    }
    if (array.length === 0) return 0;
    return Math.max(...results);
}
console.log(maxArea([6, 9, 3, 4, 5, 8]));
