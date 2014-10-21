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
};

module.exports = Bob;
