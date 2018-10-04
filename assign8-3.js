//displaying multiplication table by using functions
var table=function(n){
for(var i=1;i<=10;i++)//for loop to verify the conditions
    console.log(`${n} * ${i} = ${n*i}`);//displays output to the console
}
console.log(table(10));//displays output to the console by calling the function
