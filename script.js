const showcase = document.getElementById("input")

function appendToDisplay(value){
    showcase.value +=value;
}

function calculate(){
    showcase.value = eval(showcase.value);
}

const clearDisplay = () =>{
    showcase.value = '';
}

function deleteButton(){
    showcase.value = showcase.value.slice(0, -1);
}