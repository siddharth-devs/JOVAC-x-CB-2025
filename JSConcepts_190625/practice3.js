// // Higher Order Function

const data1 = [2,5,3,6]

const data2 = [5,7,43,7]

const calculateDouble = function (x){
    let output = [];
    for (let i=0; i<x.length;i++){
        output.push(x[i]*x[i]);
    }
    return output;
}

console.log(calculateDouble(data1));
// console.log(calculateDouble(data2));


const calculateHalf = function (data){
    let output =[]
    for (let i = 0; i<data.length;i++){
        output.push(data[i]/2);
    }
    return output;
}

console.log(calculateHalf(data1));
console.log(calculateHalf(data2));

const doubleData = function (data){
    return data*data;
}

const calculate = function (data, logic){
    let output = [];
    for (let i =0;i<data.length;i++){
        output.push(logic(data[i]));
    }
    return output;

}
/*
const data1 = [8,4,2,6,1]

console.log(calculate(data1,doubleData));*/