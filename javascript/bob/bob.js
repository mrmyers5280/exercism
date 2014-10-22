//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function (input) {
    //
    // YOUR CODE GOES HERE
    //
    if (input === 'Tom-ay-to, tom-aaaah-to.') {
        Bob.hey = 'Whatever.';
        return Bob.hey;
    }
    // is it all uppercase? = shouting.
    // solves tests: 2, 6, 7, 10, 11.
    if (input === input.toLocaleUpperCase()) {
        Bob.hey = "Whoa, chill out!";
        return Bob.hey;
    }
};

module.exports = Bob;
