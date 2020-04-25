function login(){
    var cpf = $("#cpf").val();
    var senha = $("#senha").val();
    if(cpf == ""){
        $(".pCpf").show();
    }
    if(senha == ""){
        $(".pSenha").show();
    }
    if(senha != "" && cpf != ""){
        window.location.replace("./perfil.html");
    }

}
function cadastro(){
    var nome = $("#nome").val();
    var cpf = $("#cpf").val();
    var email = $("#email").val();
    var cEmail = $("#cEmail").val();
    var senha = $("#senha").val();
    var cSenha = $("#cSenha").val();
    if(nome == ""){
        $(".pNome").show();
    }
    if(cpf == ""){
        $(".pCpf").show();
        $("#cpf").css("margin-top", "1rem");
    }
    if(email == ""){
        $(".pEmail").show();
        $("#email").css("margin-top", "1rem");
    }
    if(cEmail == ""){
        $(".pCemail").show();
        $("#cEmail").css("margin-top", "1rem");
    }
    if(senha == ""){
        $(".pSenha").show();
        $("#senha").css("margin-top", "1rem");
    }
    if(cSenha == ""){
        $(".pCsenha").show();
        $("#cSenha").css("margin-top", "1rem");
    }
    if(nome != "" && cpf != "" && email != "" && cEmail != "" && senha != "" && cSenha != ""){
        alert("Seu cadastro foi realizado com sucesso, você receberá mais informações via email.")
        window.location.replace("./index.html");
    }
}