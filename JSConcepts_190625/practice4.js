// MAP :

const arr = [5,1,4,6];

Double = [10,2,8,12]

Triple = [15,3,12,18]


function double(x){
    return x*2
}

function triple(x){
    return x*3
}

const output = arr.map(double);

console.log(output);

const output1 = arr.map(triple);

console.log(output1);

function double(x){
    return x*2
}


Array.prototype.calculate = function (logic){
    let output = []
    for (let i =0; i<this.length;i++){
        output.push(logic(this[i]));
    }
    return output;
} 
/*
const arr1 = [1,2,3,4]
const arr2 = [4,3,2,1]
const output1 = arr1.calculate(double);
console.log(output1);

const output2 = arr2.calculate(double);
console.log(output2);*/