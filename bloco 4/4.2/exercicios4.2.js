let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
/* //1
for (number of numbers){
    console.log(number);
}
//2
let a=0
for (soma of numbers){
    a+=soma
}
console.log(a)
//3
let a=0;
let div=0;
for (soma of numbers){
    a+=soma;
}
div=a/numbers.length;
console.log(div);
//4
let a=0;
let div=0;
for (soma of numbers){
    a+=soma;
}
div=a/numbers.length;
if (div>20){
    console.log("valor maior que 20");
} else{
    console.log("valor menor ou igual a 20");
}
//5
let maior=0;
for (let a=0;a<numbers.length;a+=1){
    if (maior<numbers[a]){
        maior=numbers[a];
    }
}
console.log(maior);
//6
let c=0;
for (let a=0;a<numbers.length;a+=1){
    if (numbers[a]%2!=0){
        c+=1;
    }
}
if (c!=0){
    console.log(c);
}else {
    console.log("nenhum valor ímpar encontrado");
}
//7
let menor=(numbers[0]);
for (let a=0;a<numbers.length;a+=1){
    if (menor>numbers[a]){
        menor=numbers[a];
    }
}
console.log(menor);
//8
let imp=[];
for (let a=0;a<25;a+=1){
    imp.push(a+1);
}
console.log(imp);*/
//9
let imp=[];
let div=[];
for (let a=0;a<25;a+=1){
    imp.push(a+1);
}
for (let c=0;c<imp.length;c+=1){
    div.push(imp[c]/2);
}
console.log(div);