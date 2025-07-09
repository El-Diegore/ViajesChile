$("#forContact").submit(function(e){
    e.preventDefault()
    const name = $("#inputName").val().trim();
    const lastName = $("#inputLastName").val().trim();
    const email = $("#inputEmail").val().trim();
    const message = $("#formControlTextarea").val().trim();
    if(name === "" || lasName === "" || email === "" || message === ""){
        alert("Debes completar todos los campos");
    }
    alert("El correo se ha enviado exitosamente!");
    this.submit();
})