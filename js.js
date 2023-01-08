const keys = document.getElementsByTagName("input");
for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener("click", function(e){
        keypressed(this);
    })
    
}


function keypressed(obj){

    let val = obj.value;
    console.log(val);

    if(val == "C"){
        document.getElementById("ans").innerHTML="";
        document.getElementById("equ").innerHTML="";
    } else if (val == "="){ 
        let equation = document.getElementById("equ").innerHTML;
        equation = equation.replace("x", "*");
        let result = eval(equation);
        document.getElementById("ans").innerHTML = result;
    } else if (val == "<"){ 
        let v = document.getElementById("equ").innerHTML;
        document.getElementById("equ").innerHTML= v.substring(0,v.length-1);
    } else if (val == ":)"){
        document.getElementById("equ").innerHTML="(:";
        let myarr = [
            "Hi There!",
            "Hello World",
            "Hello!",
            "Cookies!!!",
            "Potatos!",
            "^-^",
            "How r u",
            "Lunch Time!",
            "YAYYYY!!!!"
        ]
        let rando = myarr[Math.floor(Math.random()*myarr.length)];
        document.getElementById("ans").innerHTML=rando; 
    } else {
        document.getElementById("equ").innerHTML+=val;
    }



}

