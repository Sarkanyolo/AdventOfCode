import fs = require('fs');

function getDiffs(input : string, input2 : string) : number {
    let flag = 0;
    for(let i = 0; i < input.length; i++){
        if(input[i] != input2[i]) flag++;
    }

    return flag;
}

function showMatch(input : string[]) : void {
    for(let row = 0; row < input.length; row++){
        for(let row2 = row + 1; row2 < input.length; row2++){
            if(getDiffs(input[row], input[row2]) == 1){
                console.log(input[row]);
                console.log(input[row2]);
                return;
            }
        }
    }
}

const input = fs.readFileSync('D:\\input.txt','utf8').split('\r\n');

showMatch(input);