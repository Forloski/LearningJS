/*
Looping a triangle
Write a loop that makes seven calls to console.log to output the following
triangle:
#
##
###
####
#####
######
#######
*/

let string = '#';

for(let i = 0; i < 7; i++)
{
    console.log(string);
    string += '#';
}

let piramid = '#';

for(;piramid.length < 8; piramid += `#`)
    console.log(piramid);

for(let triangle = "#"; triangle.length < 8; triangle += "#")
    console.log(triangle);