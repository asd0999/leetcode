/**
 * @param {character[]} chars
 * @return {number}
 */
// awesome solution not supported by leetcode
var compress1 = function(chars) {
    chars = chars.join("");
    const comp = chars.replace(/(\w)\1+/g, (m, v) => `${v}${m.length}`);
    return comp.split("");
};
// test:
// console.log(compress1("aaaabb"));
// console.log(compress1(["a", "a", "b", "b", "c", "c", "c"]));

// solution with array iteration
var compress = function(chars) {
    const res = [];
    let count = 1;
    for (let i = 0; i < chars.length; i++) {
        // if (chars[i] === chars[i - 1]) continue;
        let index = i;
        while (i > 0 && chars[i] === chars[i + 1]) {
            count++;
            i++;
        }
        i = index + count;
        res.push(chars[i]);
        if (count > 0) res.push(count + 1);
        count = 0;
    }
    return res;
};
// test :
console.log(compress(["a", "a", "b", "b", "c", "c", "c"]));
console.log(compress(["a", "a", "b", "c", "c", "c"]));

// turns out leetcode doesnt want to accept any of my answers, i dont understand why all my returns show up as [] when a console.log right before shows the right answer