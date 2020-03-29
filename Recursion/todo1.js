// Recursive Sigma
function recursiveSigma(num){
    if(num == 0){
        return 0;
    }
    if(num > 0){
        return num + recursiveSigma(num-1);
    }
}

console.log(recursiveSigma(5));

//recursive Factorial

function recursiveFactorial(num){
    if(num <= 0){
        return 1;
    }
    if(num > 0){
        return num * recursiveFactorial(num-1);
    }
}

console.log(recursiveFactorial(5));