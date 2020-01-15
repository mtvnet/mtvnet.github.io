$(document).ready(function() {
    
    $.validate({
        form : '#contact_form'
    });

   
    /*cambia imagen de contacto cuando hay un error*/    
    $('.form-grp').bind('DOMSubtreeModified', function(e) {

        var hadError = $('.form-grp').hasClass('has-error');

        if(hadError){
            $('.retrato.ok').addClass('hideme').fadeOut(2600);
            $('.retrato.errors').removeClass('hideme').fadeIn( "slow" );
        }else{
            $('.retrato.errors').addClass('hideme').fadeOut(2600);
            $('.retrato.ok').removeClass('hideme').fadeIn( "slow" );
        }
        
    });

    $( "#contact_form" ).submit(function( event ) {
        if($(this).valid()) {
            $('.mensaje').removeClass('hideme');
        }
      });

    /*submit event*/
    /*$('#contact_form').submit(function(e){
        e.preventDefautl();
        $.ajax({
            url: "https://formspree.io/matrujillov@gmail.com",
            method: "POST",
            data: $(form).serialize(),
            dataType: "json"
        }).done(function(){
            alert('Tu mensaje ha sido enviado exitosamente');
            console.log(ajax)
        });
        return false;
    
    })*/
    
});