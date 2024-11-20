console.log('Aqui teste de console no navegador e tudo funcionando ok');
document.getElementById("cpf-cnpj").addEventListener("input", function (event) {
    const input = event.target;
    const value = input.value;

    
    input.value = value.replace(/\D/g, "");

    
    const errorElement = document.getElementById("cpf-error");
    if (/\D/.test(value)) {
        errorElement.style.display = "block";
    } else {
        errorElement.style.display = "none";
    }
});

