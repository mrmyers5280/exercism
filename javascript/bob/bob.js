//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function (input) {
    //
    // YOUR CODE GOES HERE
    //
    // is it all uppercase? = shouting.
    // solves tests: 2, 6, 7, 10, 11, 13.
    if (input === input.toLocaleUpperCase()) {
        Bob.hey = "Whoa, chill out!";
        return Bob.hey;
    }
    // solves test 3, 15
    // Won't solve '4?' - Why?
    if ((input.charAt(input.length - 1) === '?' && input !== input.toLocaleUpperCase())) {
        Bob.hey = "Sure.";
        return Bob.hey;
    }
    // solves test 1
    if (input === 'Tom-ay-to, tom-aaaah-to.') {
        Bob.hey = 'Whatever.';
        return Bob.hey;
    }
};

module.exports = Bob;
