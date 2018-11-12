$( document ).ready(function() {
     
    console.log( "DOM ready!" );
     
        
       $(".champs").keyup(function(){
           if($(this).val().length < 5){ 
               $(this).css({  
                   borderColor : "red",
               color : "red"
               });
            }
            else{
                $(this).css({  
                borderColor : "green",
                color : "green"
            });
            }
       });
       
       $("#envoyer").on("click", function (e) {
        e.preventDefault();
        var isError = false;
        $(".champs").each( function (item) {
            if ($( this ).val().length < 5 ){
                isError = true;
            }
        });

        if(isError){
            $(".modal-body2").text("Erreur dans la saisie")
            $('#Modal').modal("show");
        }else{
            $(".modal-title2").text("Bienvenue " + document.querySelector("#prenom").value)
            $('#myModal').modal("show");
        }
         
    });
    

        
       
               
    
     
});
