/**
 * @param {string} s
 * @return {number}
 */
roman_map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};

var romanToInt = function(s) {
    // constraints
    if (s.length > 15 || s.length < 1) return 0;
    if (s.match("[^IVXLCDM]")) return 0; // ^ = !(not)

    let total = 0;
    for (let i = 0; i < s.length; i++) {
        if (
            (s[i] == "I" && s[i + 1] == "V") ||
            (s[i] == "I" && s[i + 1] == "X") ||
            (s[i] == "X" && s[i + 1] == "L") ||
            (s[i] == "X" && s[i + 1] == "C") ||
            (s[i] == "C" && s[i + 1] == "D") ||
            (s[i] == "C" && s[i + 1] == "M")
        ) {
            total -= roman_map[s[i]];
            // console.log(total);
        } else {
            total += roman_map[s[i]];
            // console.log(total);
        }
    }

    return total;
};

// check :
console.log(romanToInt("IV"));
console.log(romanToInt("IX"));
console.log(romanToInt("VII"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));