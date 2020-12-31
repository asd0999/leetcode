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
    let openParenthesis = [];
    let lastOpenParenthesis = "";
    let parenthesis = s.split("");
    // console.log(s);
    // console.log(parenthesis);
    for (i = 0; i < parenthesis.length; i++) {
        // if first para is a close para
        if (i == 0 && close.includes(parenthesis[i])) {
            return false;
        }

        if (open.includes(parenthesis[i])) {
            openParenthesis.push(parenthesis[i]);
            lastOpenParenthesis = openParenthesis[openParenthesis.length - 1];
            // console.log(openParenthesis, "last open: ", lastOpenParenthesis);
        } else {
            // console.log("here");
            // console.log(lastOpenParenthesis);
            // console.log(complement[lastOpenParenthesis]);
            if (parenthesis[i] == complement[lastOpenParenthesis]) {
                // console.log("found complement closing: ", parenthesis[i]);
                openParenthesis.pop();
                // console.log(openParenthesis);
                lastOpenParenthesis = openParenthesis[openParenthesis.length - 1];
                // console.log(openParenthesis, "last open: ", lastOpenParenthesis);
            } else {
                return false;
            }
        }
    }

    return lastOpenParenthesis ? false : true;
};

// check :
console.log(isValid("()"));
console.log(isValid("({[}"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));