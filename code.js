class calculadora {
    constructor(estado) {
        this.encendida = estado;
    }

    sumar(a = 0, b = 0) {
        if (this.encendida == true) {
            const c = parseInt(a) + parseInt(b);
            return c;
        }
    }

    restar(a = 0, b = 0) {
        if (this.encendida == true) {
            const c = parseInt(a) - parseInt(b);
            return c;
        }
    }

    dividir(a = 0, b = 0) {
        if (this.encendida == true) {
            const c = parseInt(a) / parseInt(b);
            return c;
        }
    }

    multiplicar(a = 0, b = 0) {
        if (this.encendida == true) {
            const c = parseInt(a) * parseInt(b);
            return c;
        }
    }
}

const calc = new calculadora(true);


var primerValor = document.querySelector(`#primerValor`);
var segundoValor = document.querySelector(`#segundoValor`);
var operacion = document.querySelector(`#cajaOperacion`);
var cajaResultado = document.querySelector(`#resultado`);

const opSumar = document.querySelector(`#sumar`);
const opRestar = document.querySelector(`#restar`);
const opMultiplicar = document.querySelector(`#multiplicar`);
const opDividir = document.querySelector(`#dividir`);
const opBorrar = document.querySelector(`#borrar`);
const botonIgual = document.querySelector(`#botonIgual`);

opSumar.addEventListener(`click`, e => {
    if (cajaResultado.textContent !== "") {
        e.preventDefault()
    } else operacion.textContent = opSumar.value;
})

opRestar.addEventListener(`click`, e => {
    if (cajaResultado.textContent !== "") {
        e.preventDefault()
    } else operacion.textContent = opRestar.value;
})

opMultiplicar.addEventListener(`click`, e => {
    if (cajaResultado.textContent !== "") {
        e.preventDefault()
    } else operacion.textContent = opMultiplicar.value;
})

opDividir.addEventListener(`click`, e => {
    if (cajaResultado.textContent !== "") {
        e.preventDefault()
    } else operacion.textContent = opDividir.value;
})


const uno = document.querySelector(`#uno`);
const dos = document.querySelector(`#dos`);
const tres = document.querySelector(`#tres`);
const cuatro = document.querySelector(`#cuatro`);
const cinco = document.querySelector(`#cinco`);
const seis = document.querySelector(`#seis`);
const ciete = document.querySelector(`#ciete`);
const ocho = document.querySelector(`#ocho`);
const nueve = document.querySelector(`#nueve`);
const cero = document.querySelector(`#cero`);

const addNumbers = n => {
    if (operacion.textContent == "") {
        primerValor.textContent += n.value;
    } else {
        segundoValor.textContent += n.value;
    }
}

uno.addEventListener(`click`, e => {
    if (cajaResultado.textContent !== "") {
        e.preventDefault()
    } else addNumbers(uno);

})
dos.addEventListener(`click`, e => {
    if (cajaResultado.textContent !== "") {
        e.preventDefault()
    } else addNumbers(dos);

})
tres.addEventListener(`click`, e => {
    if (cajaResultado.textContent !== "") {
        e.preventDefault()
    } else addNumbers(tres);
})
cuatro.addEventListener(`click`, e => {
    if (cajaResultado.textContent !== "") {
        e.preventDefault()
    } else addNumbers(cuatro);
})
cinco.addEventListener(`click`, e => {
    if (cajaResultado.textContent !== "") {
        e.preventDefault()
    } else addNumbers(cinco);
})
seis.addEventListener(`click`, e => {
    if (cajaResultado.textContent !== "") {
        e.preventDefault()
    } else addNumbers(seis);
})
ciete.addEventListener(`click`, e => {
    if (cajaResultado.textContent !== "") {
        e.preventDefault()
    } else addNumbers(ciete);
})
ocho.addEventListener(`click`, e => {
    if (cajaResultado.textContent !== "") {
        e.preventDefault()
    } else addNumbers(ocho);
})
nueve.addEventListener(`click`, e => {
    if (cajaResultado.textContent !== "") {
        e.preventDefault()
    } else addNumbers(nueve);
})
cero.addEventListener(`click`, e => {
    if (cajaResultado.textContent !== "") {
        e.preventDefault()
    } else addNumbers(cero);
})
opBorrar.addEventListener(`click`, e => {
    primerValor.textContent = "";
    segundoValor.textContent = "";
    operacion.textContent = "";
    cajaResultado.textContent = "";
})

const realizarOP = e => {
    let v1 = primerValor.textContent;
    let v2 = segundoValor.textContent;
    if (operacion.textContent == "+") {
        return calc.sumar(v1, v2)
    } else if (operacion.textContent == "-") {
        return calc.restar(v1, v2)
    } else if (operacion.textContent == "*") {
        return calc.multiplicar(v1, v2)
    } else if (operacion.textContent == "/") {
        return calc.dividir(v1, v2)
    } else {
        return calc.sumar(v1, v2)
    }
}

botonIgual.addEventListener(`click`, e => {
    if (primerValor.textContent == "" && segundoValor.textContent == "") {
        alert(`ingresa un valor`)
    } else {
        const res = realizarOP();
        cajaResultado.textContent = res;
        if (cajaResultado !== "") {
            operacion.textContent = "";
            primerValor.textContent = "";
            segundoValor.textContent = "";
        }
    }
})