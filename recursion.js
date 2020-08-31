/* We’ve seen that % (the remainder operator) can be used to test whether a
number is even or odd by using % 2 to see whether it’s divisible by two. Here’s
another way to define whether a positive whole number is even or odd:

* Zero is even.
• One is odd.
• For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The
function should accept a single parameter (a positive, whole number) and return
a Boolean.
Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a
way to fix this? */

let isEven = function (n){
    if (n == 0) return true;
    else if (n == 1) return false;
    else if(isEven(n - 2)) return true;
    else return false;
}

console.log(isEven(50));
console.log(isEven(75));
// console.log(isEven(-1));

// With -1 the recursion goes to infinity exceding the maximum call stack.

let fixedIsEven = function (n){
    if(n < 0) n *= -1;
    if (n == 0) return true;
    else if (n == 1) return false;
    else if(isEven(n - 2)) return true;
    else return false;
}

console.log(fixedIsEven(-1));
console.log(fixedIsEven(-10));
console.log(fixedIsEven(-75));
