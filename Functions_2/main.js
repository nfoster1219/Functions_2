function add(a, b) {
    return a + b
}

function multiply (a, b) {
    let answer = 0
    for (let i = 0; i < b; i++) {
        answer = add(answer, a)
    }
    return answer 
}

function power (x, n) {
    let answer = 1
    for (let i = 0; i < n; i++) {
        answer = multiply(answer, x)
    }
    return answer
}

function factorial (n) {
    let answer =1;
    for(i = 1; i<=n; i++){
      answer = multiply(answer, i);
     
    }
    return answer;
}

function fibonacci (n) {
    let answer = [1,1];
    for (let i = 2; i < n; i++) {
        answer[i] = answer [i-1]+ answer [i-2];
    }
    return answer [n-1];
}