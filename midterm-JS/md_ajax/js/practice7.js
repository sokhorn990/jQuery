$(document).ready(function () {
    var url = "https://pixabay.com/api/?key=14001068-da63091f2a2cb98e1d7cc1d82&q=pink+honey&image_type=photo&pretty=true%20%22";
   $.getJSON(
       url,
       function(data){
        var result="";
           data.hits.forEach(element => {
               result+=`
               <div class="card mt-4">
               <div class="card-body">
                   <img src="${element.largeImageURL}" class="img-fluid" alt="">
               </div>
               <div class="card-header">
                   <img src="${element.userImageURL}" class="img-gluid rounded-circle" width="40" alt="">${element.tags}
               </div>
           </div>
               `;
           });
           $('#card').append(result);
       }
   );
})