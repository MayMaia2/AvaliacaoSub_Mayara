function exibirDados(){

    if(!document.getElementById("formContato").checkValidity()){
        document.getElementById("formContato").reportValidity();
        return;
    }

    document.getElementById("cNome").textContent =
        document.getElementById("ibNome").value;

    document.getElementById("cEmail").textContent =
        document.getElementById("ibEmail").value;

    document.getElementById("cTelefone").textContent =
        document.getElementById("ibTelefone").value;

    document.getElementById("cNascimento").textContent =
        document.getElementById("ibNascimento").value;

    document.getElementById("cOrigem").textContent =
        document.getElementById("ibOrigem").value;

    document.getElementById("cMensagem").textContent =
        document.getElementById("ibMensagem").value;

    document.getElementById("confirmacao").style.display = "block";
}