function countUsernameCombinations(name) {
    let cleanName = name.replace(/\s+/g, '').toLowerCase();
    let combinations = new Set();

    for (let length = 1; length <= 6; length++) {
        for (let i = 0; i <= cleanName.length - length; i++) {
            combinations.add(cleanName.substr(i, length));
        }
    }

    return combinations.size;
}

const name = "Naip Lovyu";
const totalCombinations = countUsernameCombinations(name);
console.log("Total kombinasi username yang mungkin:", totalCombinations); 
