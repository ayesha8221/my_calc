// Clear on  click AC
function clr() {
    document.getElementById('result').value= ""
}

// delete numbers on click

function del(){
    document.getElementById('result').value= result.value.toString().slice(0,-1)
}

// input numbers on click

function num7(){
    document.getElementById('result').value+="7"
}

function num8(){
    document.getElementById('result').value+="8"
}

function num9(){
    document.getElementById('result').value+="9"
}

function num4(){
    document.getElementById('result').value+="4"
}

function num5(){
    document.getElementById('result').value+="5"
}

function num6(){
    document.getElementById('result').value+="6"
}

function num1(){
    document.getElementById('result').value+="1"
}

function num2(){
    document.getElementById('result').value+="2"
}

function num3(){
    document.getElementById('result').value+="3"
}

function num0(){
    document.getElementById('result').value+="0"
}


// function Operaters [-,+, /, x,]


function dot(){
    document.getElementById('result').value+= ","
}

function add(){
    document.getElementById('result').value+="+"
}

function multi(){
    document.getElementById('result').value+="*"
}

function divide(){
    document.getElementById('result').value+="/"
}

function sub(){
    document.getElementById('result').value+="-"
}

function modulus(){
    document.getElementById('result').value+="%"
}

// calculator result

function equals(){
    document.getElementById('result').value= eval(document.getElementById('result').value)
}

// non recurring operators

let operaters = ['+', '-', ',', '%', '*', '/']
let numbers = [num1, num2, num3, num4, num5, num6, num7, num8, num9, num0]

if ( operaters += operaters && operaters + numbers) {
    document.getElementById('result').value= ""
} 
else {
    document.getElementById('result').value = result.value.toString()
}






