$(document).ready(function() {
        var idlink = window.location.hash.split('#')[1];
        var titu = "";

        if(idlink == "amasv"){
            titu = "A+V";
        };
        if(idlink == "oirs"){
            titu = "OIRS";
        };
        if(idlink == "lmi"){
            titu = "La Moneda Informa";
        };
        if(idlink == "fachap"){
            titu = "Festival AChAP";
        };
        if(idlink == "rdv"){
            titu = "Regístro Dirigentes Vecinales";
        };
        if(idlink == "dibo"){
            titu = "Dibo";
        };

        $('h3').append(titu); 

        $.ajax({
            type: 'GET',
            url: ''+idlink+'.json',
            //url: 'amasv.json',
            data: 'json'
        })
        .done(function(data){
            
            var slides = data;
                        
            for( var i=0; i< slides.length; i++ ){
                var slide = slides[i];
                var html  = "";
                    html += '<li>';
                    html += '    <image src="'+ slide.picture +'" alt="'+ slide.alternative +'" data-description="'+ slide.description +'">';
                    html += '</li>';
                $("#slide_gallery").append( html );
            };
            $('#slide_gallery').pgwSlideshow();
            $('.ps-caption').before('<input type="checkbox" id="more_info"><label class="info" for="more_info"></label>');     
        });          
});