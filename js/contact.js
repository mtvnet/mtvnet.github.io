
/*validacion email*/
//funcion validacion
function validaEmail(email) {
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (filter.test(email)) {
        return true;
    }
    else {
        return false;
    }
}

//validacion
$('#temail').blur(function() {
    if (!validaEmail($("#temail").val())) {
        alert("Por favor ingresa un Email válido");
    }
});


$('#btn_submit').click(function(){
    var form = $('#contact_form');
    var user_name = $('#tname').val();
    var user_email = $('#temail').val();
    var user_mensaje = $('#tmensaje').val();
    var adelante = true;

    if (user_name == "") {
        $('#tname').css('border', '1px solid #e41919');
        adelante = false;
    }
    if (user_email == "") {
        $('#temail').css('border', '1px solid #e41919');
        adelante = false;
    }     
    if (user_mensaje == "") {
        $('#tmensaje').css('border', '1px solid #e41919');
        adelante = false;
    }
        
    if (adelante) {
        $.ajax({
            url: "https://formspree.io/matrujillov@gmail.com",
            method: "POST",
            data: $(form).serialize(),
            dataType: "json",  
        });
        $('.msje').css('display', 'block')
    }
    return false;     
});
$("#contact_form input, #contact_form textarea").keyup(function(){
        $("#contact_form input, #contact_form textarea").css('border', '');
        //$("#result").slideUp();
});