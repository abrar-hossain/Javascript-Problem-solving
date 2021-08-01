function reverseNum(n)
{
    var num=n.toString();
    return num.split("").reverse().join("");
}

console.log(reverseNum(34567))