let counterElement = document.getElementById("count");
function Decrement(){
    let updatedValue = parseInt(counterElement.textContent) -1;
    counterElement.textContent = updatedValue;
    if (updatedValue>0) {
        counterElement.style.color = 'green';
    }
    else if (updatedValue<0) {
        counterElement.style.color = 'red';
    }
    else{
        counterElement.style.color = 'black';
    }
}

function Increment() {
    let updatedValue = parseInt(counterElement.textContent)+1;
    counterElement.textContent = updatedValue;
    if (updatedValue>0) {
        counterElement.style.color = 'green';
    }
    else if (updatedValue<0) {
        counterElement.style.color = 'red';
    }
    else{
        counterElement.style.color = 'black';
    }
}

function Reset(){
    counterElement.textContent = 0;
    counterElement.style.color = 'black';
}