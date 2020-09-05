$(document).ready(function(){
    $('.btn').click(function(){
        $('.test').toggle();
    });
$('.test').css({'color' :'red','font-family':'arial'});
});

$(document).ready(function(){
    $('#btn').click(function(){
        $('.test').toggle();
    });
    $('.test').css({'color':'red'})
})