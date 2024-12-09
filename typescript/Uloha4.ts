export { };

function selectionSort(array: number[]): number[] {
    let iMin: number;
    for (let i = 0; i < array.length - 1 / 1; i++) {
        iMin = array[i];
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < iMin) iMin = j;
        }
        (i != iMin) && swapTwoElementsOfArray(array, i, iMin);
    }
    return array;
}

function swapTwoElementsOfArray(array: any[], i1: number, i2: number) {
    [array[i1], array[i2]] = [array[i2], array[i1]];
}

function bubbleSort(array: number[]): number[] {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            (array[i] > array[j]) && swapTwoElementsOfArray(array, i, j);
        }
    }
    return array;
}

function mergeSort(array: number[]): number[] {
    if (array.length <= 1) return array;
    let halfIndex = Math.round(array.length / 2);
    return merge(mergeSort(array.slice(0, halfIndex)), mergeSort(array.slice(halfIndex, array.length)));
}

function merge(array1: number[], array2: number[]): number[] {
    let result: number[] = [];
    let i1 = 0;
    let i2 = 0;
    while (i1 < array1.length && i2 < array2.length) {
        if (array1[i1] < array2[i2]) {
            result.push(array1[i1]);
            i1++;
        } else {
            result.push(array2[i2]);
            i2++;
        }
    }
    if (i1 < array1.length) {
        result = result.concat(array1.slice(i1, array1.length));
    } else {
        result = result.concat(array2.slice(i2, array2.length));
    }
    return result;
}


let testArray = [3, 6, 2, 1, 7, 9, 8, 5, 4, 1];
console.log(`selectionSort ${selectionSort(testArray)}`);
testArray = [3, 6, 2, 1, 7, 9, 8, 5, 4, 1];
console.log(`bubbleSort ${bubbleSort(testArray)}`);
testArray = [3, 6, 2, 1, 7, 9, 8, 5, 4, 1];
console.log(`mergeSort ${mergeSort(testArray)}`);