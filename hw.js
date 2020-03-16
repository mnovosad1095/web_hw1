function avgWordLengthCalc(s) {
    var cumulativeLen = 0
    s = s.replace(",", '')
    s = s.replace("!", '')

    var wordArray = s.split(" ")
    for (i = 0; i < wordArray.length; i++) {
        cumulativeLen += wordArray[i].length
    }

    return cumulativeLen/wordArray.length
}



function maxTotal(numArray) {
    function sortNumber(a, b) { return a-b; }
    numArray.sort(sortNumber);
    numArray.reverse() ;
    sum = 0 

    for (i = 0; i < 5 && i < numArray.length ; i++) {
        sum += numArray[i]
    }
    
    return sum
}

function pentagonalNumber(n) {
    return (3*(n**2) - n) / 2;
}

console.log(maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(pentagonalNumber(3))