
let nome = window.document.getElementById('nome-Input')
let email = windows.document.querySelector('#email-Input')
let comentario = window.document.querySelector('#comentario-Input')

function ValidarNome() {

    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome Invalido"
        txtNome.style.color = "red"
    } else {
        txtNome.innerHTML = "Nome Valido"
        txtNome.style.color = "green"
    }

}

function ValidarEmail() {
    let txtemail = document.querySelector("#txtEmail")
    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtemail.innerHTML = "E-mail invalido"
        txtemail.style.color = "red"
    } else {
        txtemail.innerHTML = "E-mail Valido"
        txtemail.style.color = "green"
    }
}
function validarComentario() {
    let txtcomentario = document.querySelector("#txtComentario")
    if (comentario.value.length >= 100) {
        txtcomentario.innerHTML = " Digite no maximo 100 caracteres"
        txtcomentario.style.color = "red"
        txtcomentario.style.display = "block"
    } else {
        txtcomentario.style.color = "green"
    }

}