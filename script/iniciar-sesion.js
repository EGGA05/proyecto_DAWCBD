window.addEventListener("load",() =>{
    let formulario = document.getElementById("formulario")
    formulario.addEventListener("submit", function(event) {
        event.preventDefault()
    })

    let boton = document.getElementById("boton")
    boton.addEventListener("click",()=>{
        iniciarSesion()
    })

    let usuCont = document.getElementById("usu-cont")
    usuCont.addEventListener("click",()=>{
        window.alert(`usuario: usuario         contraseña: contraseña`)
    })
});

function iniciarSesion(){
    let usuario = document.getElementById("usuario")
    let valorUsuario = usuario.value

    let contraseña = document.getElementById("contraseña")
    let valorContraseña = contraseña.value

    if(valorUsuario == "usuario" && valorContraseña == "contraseña"){
        window.location.href = "./pagina-principal.html"
    }
    console.log(`contraseña: ${valorContraseña} usuario: ${valorUsuario}`)
}