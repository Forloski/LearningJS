/*
Write a function countBs that takes a string as its only argument and returns
a number that indicates how many uppercase “B” characters there are in the
string.
Next, write a function called countChar that behaves like countBs, except
it takes a second argument that indicates the character that is to be counted
(rather than counting only uppercase “B” characters). Rewrite countBs to
make use of this new function.
*/

let ab = "fernando";
console.log(ab.length);



let beanCounting = function(string)
{
    
    let bCount = 0;

    for(i = 0; i < string.length; i++)
    {
        if(string[i] === "B") bCount++;
    }

    return bCount;

} 


let countChar = function(string, char)
{
    let charCount = 0;

    for(i = 0; i < string.length; i++)
    {
        if(string[i] === char) charCount++;
    }

    return charCount;
}


let newBeanCounting = function(string)
{
    return countChar(string,"B");
}

console.log(newBeanCounting("BarbaBiB"));