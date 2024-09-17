class Parent {
    constructor(a, b) {
        this.a = parseFloat(a);
        this.b = parseFloat(b);
    }
}

class Add extends Parent {
    calculate() {
        return this.a + this.b;
    }
}

class Sub extends Parent {
    calculate() {
        return this.a - this.b;
    }
}

class Multi extends Parent {
    calculate() {
        return this.a * this.b;
    }
}

class Divi extends Parent {
    calculate() {
        if (this.b === 0) {
            return "err";
        }
        return this.a / this.b;
    }
}

class StructureBuilder {
    constructor() {
        this.inputs = {};
    }

    build() {
        let num1 = document.getElementById('number1').value;
        let num2 = document.getElementById('number2').value;
        this.inputs = {
            a: num1,
            b: num2,
        }
    }
}

let selectedOperation = null;

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

     <button type="submit" id="add-btn">+</button>
     <button type="submit" id="sub-btn">-</button>
     <button type="submit" id="mult-btn">*</button>
     <button type="submit" id="divi-btn">%</button>
     <button type="submit" id="equal-btn">=</button>
 </form>

 <p id="result"></p> `;

document.body.appendChild(newDiv);

document.getElementById("add-btn").addEventListener('click', () => {
     selectedOperation = 'addition';
})
document.getElementById("sub-btn").addEventListener('click', () => {
     selectedOperation = 'subtraction';
})
document.getElementById("mult-btn").addEventListener('click', () => {
     selectedOperation = 'multiplication';
})
document.getElementById("divi-btn").addEventListener('click', () => {
     selectedOperation = 'division';
})


const form = document.getElementById('form');
form.addEventListener('submit', submit);

function submit(event) {
    event.preventDefault();

    const builder = new StructureBuilder;
     builder.build();

    let result;

    switch (selectedOperation) {
        case 'addition':
            const addition = new Add(builder.inputs.a, builder.inputs.b);
            result = addition.calculate();
            break;
        case 'subtraction':
            const subtraction =new Sub(builder.inputs.a, builder.inputs.b);
            result = subtraction.calculate();
            break;
        case 'multiplication':
            const multiplication = new Multi(builder.inputs.a, builder.inputs.b);
            result = multiplication.calculate();
            break;
        case 'division':
            const division =new Divi(builder.inputs.a, builder.inputs.b);
            result = division.calculate();
            break
        default:
            result = 'please select an operation';
            break
    }
    document.getElementById('result').innerHTML = result;
}
