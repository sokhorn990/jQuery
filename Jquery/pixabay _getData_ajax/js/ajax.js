$(document).ready(function(){
    url="https://pixabay.com/api/?key=14001068-da63091f2a2cb98e1d7cc1d82&q=pink+honey&image_type=photo&pretty=true%20%22";
 $.ajax({
     dataType:'json',
     url,
     success:function(data){
         result="";
         data.hits.forEach(element => {
             result+=`
             <div class="col-6">
             <div class="card mt-5"> 
             <div class="card-body">
                <img src="${element.largeImageURL}" class="img-fluid ">
             </div>
             <div class="card-footer">
                <img src="${element.userImageURL}" class="img-fluid rounded-circle" width=40 >
                ${element.user}
             </div>
             </div></div>
             `;
         });
         $('#card').append(result);
     }
 })
})