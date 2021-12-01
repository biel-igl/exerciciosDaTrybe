let n=5;
if (n>=1){
    //1
    /*
    for(let a=1;a<=n;a+=1){
        let coluna="";
        for(let b=1;b<=n;b+=1){
            coluna= coluna  + '*';
        }
        console.log(coluna);
    }
    //2
    for (let a=1;a<=n;a+=1){
        let linha="";
        for (let b=1;b<=a;b+=1){
            linha=linha +"*";
        }
        console.log(linha);
    }*/
    //3
    for (let a=1;a<=n;a+=1){
        let linha="";
        for (let b=1;b<=n-a;b+=1){
            linha =linha + "1"
        }
        
        console.log(linha)
    }
}