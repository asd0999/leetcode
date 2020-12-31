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

var isValid = function(s) {
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

// check :
console.log(isValid("()"));
console.log(isValid("({[}"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));