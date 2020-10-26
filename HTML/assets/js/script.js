
nome.style.width = '100%'
email.style.width = '100%'

function ValidarNome(){

    let txt = document.querySelector("#nome")
    if(nome.value.length < 3){
        txt.innerHTML = "Nome Invalido"
        txt.style.color = "red"
    }else{
        txt.innerHTML = "Nome Valido"
        txt.style.color = "green"
    }

}
function validaEmail(){
    let txtEmail = document.querySelector("#email")
    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
        txtEmail.innerHTML = "E-mail invalido"
        txtEmail.style.color = "red"
    }else{
        txtEmail.innerHTML = "E-mail Valido"
        txtEmail.style.color = "Green"
    }
}
function validaComentario(){
    let txtComentario = document.querySelector("#assunto")
    if(comentario.value.length >= 100 ){
        txtComentario.innerHTML = " Digite no maximo 100 caracteres"
        txtComentario.style.color = "red"
        txtComentario.style.display = "block"
    }else{
        txtComentario.style.display = "none"
}
}