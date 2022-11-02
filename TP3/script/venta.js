let desc = document.getElementById('categ');
let cant = document.getElementById('cant');
const precio = 200;
let total = ''

function CalcularDescuento() {
    switch (desc.value) {
        case "1":
            return 0.80;

        case "2":
            return 0.50;
        case "3":
            return 0.15;
        case "4":
            return precio;
    }

}

function calcular() {
    total = (precio - (precio * CalcularDescuento())) * cant.value;
    document.getElementById('pagar').innerHTML = total;

}
function borrar() {
    document.getElementById('pagar').innerHTML = ''
}
