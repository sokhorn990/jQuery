
// const text= document.getElementById("text");
// text.style.display="none";  //simple code


// $('p').hide();           //hide document(jquery);


// $(function(){
    //     $('p').hide();        //short cut
    // })



    
    //   $(document).ready(function(){
    //     $('p').hide();         // syntact full
    // })

//........................................................................................

    $(document).ready(function(){
     $('#btn-hide').click(function(){
         $('p').hide();

     })   ;
     $('#btn-show').click(function(){
         $('p').show();
     });
    });
    
