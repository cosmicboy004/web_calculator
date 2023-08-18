let input=document.querySelector("input");
console.dir(input);


let btn0=document.querySelector(".zero")
btn0.addEventListener("click",function(){
    input.value+="0";
})
let btn00=document.querySelector(".dblzero")
btn00.addEventListener("click",function(){
    input.value+="00";
})
let btn1=document.querySelector(".one")
btn1.addEventListener("click",function(){
    input.value+="1";
})
let btn2=document.querySelector(".two")
btn2.addEventListener("click",function(){
    input.value+="2";
})
let btn3=document.querySelector(".three")
btn3.addEventListener("click",function(){
    input.value+="3";
})
let btn4=document.querySelector(".four")
btn4.addEventListener("click",function(){
    input.value+="4";
})
let btn5=document.querySelector(".five")
btn5.addEventListener("click",function(){
    input.value+="5";
})
let btn6=document.querySelector(".six")
btn6.addEventListener("click",function(){
    input.value+="6";
})
let btn7=document.querySelector(".seven")
btn7.addEventListener("click",function(){
    input.value+="7";
})
let btn8=document.querySelector(".eight")
btn8.addEventListener("click",function(){
    input.value+="8";
})
let btn9=document.querySelector(".nine")
btn9.addEventListener("click",function(){
    input.value+="9";
})



let btnAdd=document.querySelector(".plus")
btnAdd.addEventListener("click",function(){
    input.value+='+';
})
let btnMinus=document.querySelector(".minus")
btnMinus.addEventListener("click",function(){
    input.value+='-';
})
let btnMultiply=document.querySelector(".multiply")
btnMultiply.addEventListener("click",function(){
    input.value+='*';
})
let btnDivide=document.querySelector(".divide")
btnDivide.addEventListener("click",function(){
    input.value+='/';
})
let btnEquals=document.querySelector(".equals")
btnEquals.addEventListener("click",function(){
    input.value=eval(input.value);
})
let btnDot=document.querySelector(".dot")
btnDot.addEventListener("click",function(){
    input.value+='.';
})




let btnAC=document.querySelector(".AC")
btnAC.addEventListener("click",function(){
    input.value='';
})
let btnDel=document.querySelector(".delete")
btnDel.addEventListener("click",function(){
    input.value=input.value.toString().slice(0,input.value.length-1);
})
let btnPrcnt=document.querySelector(".percent")
btnPrcnt.addEventListener("click",function(){
    input.value+='%';
})

console.dir(eval());