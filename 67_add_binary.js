/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    if (a.length > b.length) {
        let c = b.split("").reverse();
        for (let i = 0; i < a.length - b.length; i++) {
            c.push("0");
        }
        b = c.reverse();
        a = a.split("");
        // console.log(a);
    } else if (a.length < b.length) {
        let c = a.split("").reverse();
        for (let i = 0; i < b.length - a.length; i++) {
            c.push("0");
        }
        a = c.reverse();
        b = b.split("");
        // console.log(b);
    } else {
        a = a.split("");
        b = b.split("");
    }
    // console.log(a, b);

    let a_num = [];
    let b_num = [];

    a.forEach((element) => {
        a_num.push(parseInt(element));
    });
    b.forEach((element) => {
        b_num.push(parseInt(element));
    });
    // console.log(a_num);
    // console.log(b_num);

    let soln = [];
    let sum = 0;
    let carryover = 0;
    for (let i = a_num.length - 1; i >= 0; i--) {
        sum = a_num[i] + b_num[i] + carryover;
        carryover = 0;

        if (sum == 2) {
            sum = 0;
            carryover = 1;
        } else if (sum == 3) {
            sum = 1;
            carryover = 1;
        }
        // console.log("i: ", i, "s: ", sum, "c: ", carryover);
        soln.push(sum);
        // console.log(soln);
        sum = 0;
    }
    soln = soln.reverse();

    if (carryover == 1) {
        soln = soln.reverse();
        soln.push(1);
        soln = soln.reverse();
    }

    let str = "";
    soln.forEach((e) => (str += e.toString()));
    return str;
};

// check :
console.log(addBinary("10", "1"));
console.log(addBinary("10", "111"));
console.log(addBinary("100110", "110101"));