console.log('Aqui teste de console no navegad e tudo funcionando ok');
document.getElementById("cpf-cnpj").addEventListener("input", function (event) {
    const input = event.target;
    const value = input.value;

    // Remove qualquer caractere que não seja número
    input.value = value.replace(/\D/g, "");

    // Validação extra (opcional) para exibir mensagem de erro
    const errorElement = document.getElementById("cpf-error");
    if (/\D/.test(value)) {
        errorElement.style.display = "block";
    } else {
        errorElement.style.display = "none";
    }
});

