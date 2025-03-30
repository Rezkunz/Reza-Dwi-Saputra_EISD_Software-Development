function hasDuplicates(inputan) {
    return new Set(inputan).size !== inputan.length;
}
const inputan = [20, 1, 3, 2, 4, 6, 8, 5, 7, 9, 11, 13, 15, 10,  12, 14, 16, 18, 20, 17, 19];
console.log(hasDuplicates(inputan));
