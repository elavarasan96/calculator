
let outputScreen=document.getElementById("output-screen");

function display(num){
    outputScreen.value += num;
}

function Claculate(){
    try{
        outputScreen.value=eval(outputScreen.value);
    }
    catch(err){
        alert("Invaild")
    }
}

function Clear(){
    outputScreen.value="";
}

function del(){
    outputScreen.value=outputScreen.value.slice(0,-1);
}