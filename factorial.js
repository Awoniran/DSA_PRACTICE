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
calMaxArea(array1);
