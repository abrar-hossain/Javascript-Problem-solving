
//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.


function uppercase(str) {

    var array = str.split(' ');
    newarray = [];
    for (var i = 0; i < array.length; i++) {
        newarray.push(array[i].charAt(0).toUpperCase() + array[i].slice(1));

    }

    return newarray.join(' ');
}

console.log(uppercase("the quick brown fox"));