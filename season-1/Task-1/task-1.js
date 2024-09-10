let num1;
let num2;
let newDiv = document.createElement('div');
newDiv.innerHTML = `
 <form id="form">
     <label for="number1"> number 1:</lable>
     <br>
     <input type="number" id="number1"/>
     <br/>
     <br/>
     <label for="number2"> number 2:</lable>
     <br>
     <input type="number" id="number2"/>

     <br/>
     <br/>

     <button type="submit">Submit</button>
 </form>

 <p>addition: <span id="addition"></span></p>
 <p>subtraction: <span id="subtraction"></span></p>
 <p>multiplication: <span id="multiplication"></span></p>
 <p>division: <span id="division"></span></p> `

document.body.appendChild(newDiv);

const form = document.getElementById('form');
form.addEventListener('submit', submit);

const add = (x, y) => {
    return x + y;
}

const sub = function (x, y) {
    return x - y;
}

function mult(x, y) {
    return x * y;
}

const divi = (x, y) => {
    return x / y;
}


function submit(event) {
    event.preventDefault();

    num1 = document.getElementById('number1').value;
    num2 = document.getElementById('number2').value;

    document.getElementById('addition').innerText = add(num1, num2);
    document.getElementById('subtraction').innerText = sub(num1, num2);
    document.getElementById('multiplication').innerText = mult(num1, num2);
    document.getElementById('division').innerText = divi(num1, num2);
}
