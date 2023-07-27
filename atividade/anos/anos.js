function calcular() {
    const idade = parseInt(document.getElementById("idade").value);
    let fase;
    if (idade <= 11) {
        fase = "criança";
    }
    else if (idade >= 12 && idade<= 20){
        fase = "adolescente";
    }
    else if (idade >= 21 && idade <= 65){
        fase = "adulto"
    }
    else if (idade >=66){
        fase = "idoso"
    }
    const resultado = document.getElementById("resultado");
    resultado.innerHTML =`a fase de vida de ${document.getElementById("nome").value} é ${fase}`;
    }
    function ApenasLetras(e, t) {
        try {
            if (window.event) {
                var charCode = window.event.keyCode;
            } else if (e) {
                var charCode = e.which;
            } else {
                return true;
            }
            if (
                (charCode > 64 && charCode < 91) || 
                (charCode > 96 && charCode < 123) ||
                (charCode > 191 && charCode <= 255) // letras com acentos
            ){
                return true;
            } else {
                return false;
            }
        } catch (err) {
            alert(err.Description);
        }
    }