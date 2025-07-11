const toastSuccess = new bootstrap.Toast(document.getElementById('toastSuccess'));
$("#formContact").submit(function(e){
    e.preventDefault()
    const name = $("#inputName").val().trim();
    const lastName = $("#inputLastName").val().trim();
    const email = $("#inputEmail").val().trim();
    const message = $("#formControlTextarea").val().trim();
    if(name === "" || lastName === "" || email === "" || message === ""){
        alert("Debes completar todos los campos");
    }
    const formData = new FormData();
    formData.append("nombre", name);
    formData.append("apellido", lastName);
    formData.append("email", email);
    formData.append("mensaje", message);

    fetch("https://formspree.io/f/xblyngze",{
        method: "POST",
        body: formData,
        headers: {
            Accept: "aplication/json"
        }
    }).then(Response =>{
        if(Response.ok){
            toastSuccess.show()
            this.reset()
        }
        else {
            alert("Hubo un error, intenta nuevamente");
        }
    })
    .catch(()=>{
        alert("Hubo un error")
    });

});

