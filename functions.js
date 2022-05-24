function sum(a, b)
{
    return a + b;
}

function subtraction(a, b)
{
    return a - b;
}

function printHello()
{
    return 'Hello!'
}

function noNullArray(array)
{
    return array.filter((val) => val === null ? false : true)
}

module.exports = {
    sum,
    subtraction,
    printHello,
    noNullArray
}