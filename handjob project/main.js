function calcularIMC(){
    var peso = document.getElementById('peso').ariaValueMax;
    var altura = document.getElementById('altura').value;
    var imc = peso / (altura * altura);
    document.getElementById('imc').value = imc.toFixed(2);
}