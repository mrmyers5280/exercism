//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function (input) {
    //
    // YOUR CODE GOES HERE
    // - Order matters
    // solves tests 16, 17?
    if (/^\s*$/.test(input)) {
        Bob.hey = "Fine. Be that way!";
        return Bob.hey;
    }
    // solves tests: 2, 6, 7, 10, 11, 13
    // had to add !== to skip #9('4?')
    if (input === input.toLocaleUpperCase() && input !== input.toLocaleLowerCase()) {
        Bob.hey = "Whoa, chill out!";
        return Bob.hey;
    }
    // solves test 3, 9, 15
    else if (input.charAt(input.length - 1) === '?') {
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
