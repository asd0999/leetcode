/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    let obj = {};
    let result = [];

    for (let i = 0; i < words.length; i++) {
        let cur = words[i];
        if (obj[cur]) {
            obj[cur]++;
        } else {
            obj[cur] = 1;
        }
    }
    // console.log("obj: ", obj);

    let obj2 = {};
    for (let i = 0; i < Object.keys(obj).length; i++) {
        let cur = Object.keys(obj)[i];
        if (obj2[obj[cur]]) {
            obj2[obj[cur]] = [...obj2[obj[cur]], cur];
        } else {
            obj2[obj[cur]] = [cur];
        }
    }
    // console.log("obj2: ", obj2);

    const freq = Object.keys(obj2).sort((a, b) => parseInt(b) - parseInt(a));
    // console.log(freq);

    for (let i = 0; i < freq.length; i++) {
        let f = freq[i];
        if (result.length < k) {
            if (obj2[f].length > 1) {
                let tmp = obj2[f].sort();
                result.push(...tmp);
            } else {
                result.push(obj2[f][0]);
            }
        } else {
            break;
        }
    }
    // console.log(result);
    return result.slice(0, k);
};

console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 3));
console.log(
    topKFrequent(["i", "love", "leetcode", "i", "love", "coding", "leetcode"], 2)
);