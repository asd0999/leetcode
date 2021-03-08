/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s
        .replace(/[^a-zA-Z0-9]/g, "")
        .toLowerCase()
        .split("");
    console.log(s);
    a = s.join("");
    b = s.reverse().join("");
    return a === b;
};

// solution 2 - more efficient
var isPalindrome2 = function(s) {
    s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    let leftIdx = 0;
    let rightIdx = s.length - 1;

    while (leftIdx < rightIdx) {
        if (s[leftIdx] !== s[rightIdx]) return false;

        rightIdx--;
        leftIdx++;
    }
    return true;
};

// console.log(isPalindrome("A man, a plan, a canal: Panama"));
// console.log(isPalindrome("aa"));
// console.log(isPalindrome("ab@a"));
console.log(isPalindrome2('Marge, let\'s "[went]." I await {news} telegram.'));
// console.log(isPalindrome("0P"));