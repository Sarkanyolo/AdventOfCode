import fs = require('fs');

function getTimes(input : string) : number {
    let flag = 0;
    for(let i = 0; i < input.length; i++){
        let counter = 0;
        for(let j = 0; j < input.length; j++){
            if(input[i] === input[j]) {
                counter++;
            }
        }
        if(counter > 1) {
            if(flag > 0 && counter !== flag) return 6;
            flag = counter;
        }
    }

    return flag;
}

function getResult(input : string[]) : number {
    let twos = 0;
    let threes = 0;
    
    for(let row = 0; row < input.length; row++){
        let res = getTimes(input[row]);
        if(res === 2 || res === 6){
            twos++;
        }
        if (res === 3 || res === 6){
            threes++;
        }
    }

    return twos * threes;
}

const input = fs.readFileSync('D:\\input.txt', 'utf8').split('\r\n');

console.log(getResult(input));
