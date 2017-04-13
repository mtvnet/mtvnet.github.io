$(document).ready(function() {
    
    $('.item-btn').click(function(){
                
        var linkid  = $(this).prop('id');
        var pageto = 'trabajos.html';
        var urltotal = pageto+'#'+linkid;

        window.open(urltotal, '_parent');                 
    });
});