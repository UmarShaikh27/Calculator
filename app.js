function call(getit){
    var inputHere = document.getElementById("inputId")
    inputHere.value += getit
}
function equalFunc(){
    var inputHere = document.getElementById("inputId")
    var answer = eval(inputHere.value)
    inputHere.value = answer
    
}

function clearFunc(){
    var inputHere = document.getElementById("inputId")
    inputHere.value = inputHere.value.slice(0,-1)
}
function allClearFunc(){
    var inputHere = document.getElementById("inputId")
    inputHere.value = ("")
    
}
