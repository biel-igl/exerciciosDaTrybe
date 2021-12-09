let corFundo=document.getElementById("mudaFundo");
corFundo.addEventListener("input",mudaCorDoFundo);
function mudaCorDoFundo(){
    document.body.style.backgroundColor=corFundo.value;
}
let corTexto=document.getElementById("mudaTexto");
corTexto.addEventListener("input",mudaCorDoTexto);
function mudaCorDoTexto(){
    document.body.style.color=corTexto.value;
}
let tamanhoDaLetra = document.getElementById("fontSize");
tamanhoDaLetra.addEventListener("input", mudaTamanhoDaLetra);
function mudaTamanhoDaLetra(){
    document.body.style.fontSize=tamanhoDaLetra.value+"px";
    document.getElementById("tamanhoQueEsta").innerText="A letra esta em: "+tamanhoDaLetra.value+"px";
}
let espaçamento= document.getElementById("lineHeight");
espaçamento.addEventListener("input", mudaEspaçamento);
function mudaEspaçamento(){
    document.body.style.lineHeight=espaçamento.value+"px";
    document.getElementById("tamanhoEsta").innerText="O espaçamento esta em : "+espaçamento.value+"px";
}
let fonte1=document.querySelectorAll(".mudaFonte")[0];
fonte1.addEventListener("click", mudaLetra1);;
let fonte2=document.querySelectorAll(".mudaFonte")[1];
fonte2.addEventListener("click", mudaLetra2);;
let fonte3=document.querySelectorAll(".mudaFonte")[2];
fonte3.addEventListener("click", mudaLetra3);;
function mudaLetra1(){
    document.body.style.fontFamily=fonte1.value;
}
function mudaLetra2(){
    document.body.style.fontFamily=fonte2.value;
}
function mudaLetra3(){
    document.body.style.fontFamily=fonte3.value;
}