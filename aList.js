/*
Write a function arrayToList that builds up a list structure like the one
shown when given [1, 2, 3] as argument. Also write a listToArray function
that produces an array from a list. Then add a helper function prepend, which
takes an element and a list and creates a new list that adds the element to the
front of the input list, and nth, which takes a list and a number and returns
the element at the given position in the list (with zero referring to the first
element) or undefined when there is no such element.
If you haven’t already, also write a recursive version of nth.

let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null,
    },
  },
};

*/

function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = {value: array[i], rest: list};
    }
    return list;
}


let test = [1, 2, 3, 10, 15, 60];

list = arrayToList(test);
console.log(list);



function listToArray(list)
{
    let array = [];;
    while(list != null)
    {
        array.push(list.value);
        list = list.rest;
    }
    return array;
}

console.log(listToArray(list));
console.log(list);

function prepend(list, element)
{
    list = {value: element, rest: list};
    return list;
}

list = prepend(list, 0);
console.log(list);

console.log(listToArray(list));

function nth(list, element, count = 0)
{
    if(list.value == element) 
    {
    return count;
    }
    else
    {
        count++;
        list = list.rest;
        count = nth(list, element, count);
        return count;
    }
}

console.log(nth(list, 15));

function correctNth(list, position)
{
    if (list == null) 
    {
        return undefined;
    }
    else if (position == 0) 
    {
        return list.value;
    }
    else 
    {
        return correctNth(list.rest, position - 1);
    }
}

console.log(correctNth(list, 5));

