/**
 * @param {string} s
 * @return {boolean}
 */

const open = ["(", "{", "["];
const close = [")", "}", "]"];
const complement = {
    "(": ")",
    "{": "}",
    "[": "]",
};

var isValid0 = function(s) {
    let openParentheses = [];
    let lastOpenParentheses = "";
    let parentheses = s.split("");
    // console.log(s);
    // console.log(parentheses);
    for (i = 0; i < parentheses.length; i++) {
        // if first para is a close para
        if (i == 0 && close.includes(parentheses[i])) {
            return false;
        }

        if (open.includes(parentheses[i])) {
            openParentheses.push(parentheses[i]);
            lastOpenParentheses = openParentheses[openParentheses.length - 1];
            // console.log(openParentheses, "last open: ", lastOpenParentheses);
        } else {
            // console.log("here");
            // console.log(lastOpenParentheses);
            // console.log(complement[lastOpenParentheses]);
            if (parentheses[i] == complement[lastOpenParentheses]) {
                // console.log("found complement closing: ", parentheses[i]);
                openParentheses.pop();
                // console.log(openParentheses);
                lastOpenParentheses = openParentheses[openParentheses.length - 1];
                // console.log(openParentheses, "last open: ", lastOpenParentheses);
            } else {
                return false;
            }
        }
    }

    return lastOpenParentheses ? false : true;
};

//attempting a better solution using stack data structure
var isValid = function(s) {
    const comp = {
        "(": ")",
        "{": "}",
        "[": "]",
    };
    let stack = [s[0]];
    for (let i = 1; i < s.length; i++) {
        let p = s[i];
        if (comp[p] !== undefined) {
            stack.push(p);
        } else {
            if (comp[stack[stack.length - 1]] === p) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length === 0 ? true : false;
};

// check :
console.log(isValid("()")); // true
console.log(isValid("({[}")); //false
console.log(isValid("()[]{}")); //true
console.log(isValid("(]")); //false
console.log(isValid("([)]")); //false
console.log(isValid("{[]}")); //true