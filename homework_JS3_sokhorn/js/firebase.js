$(document).ready(function () {
    database.collection('homework3').get().then((data) => {
        var result = "";
        data.forEach(element => {
            result += `      
            <div class="card shadow-lg mt-4">
            <div class="card-header">
            <button type="button" class="btn btn-info float-right" data-toggle="modal" data-target="#myModal${element.id}">View</button>
            <div class="modal fade" id="myModal${element.id}">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <p class="modal-header"> &nbsp
                        <img src="${element.data().post}" class="img-fluid">
                    </p>
                   </div>
                </div>    
            </div>           
                <img src="${element.data().profile}" class="img-fluid rounded-circle" width =50 height=50> &nbsp;  ${element.data().name} 
            </div>
            <div class="card-body">         
                <img src="${element.data().post}" class ="img-fluid">
                ${element.data().text}           
                <button type="button" class="btn btn-danger float-right" id="btn" onclick="deleteData('${element.id}')">Delete</button>
             </div>
           </div>
        `;
        });
        $('#result').append(result);
    });
});
$('#add').on('click', function () {
    var name = $('#name').val();
    var profile = $('#profile').val();
    var post = $('#post').val();
    var text = $('#text').val();

    database.collection('homework3').add({
        name: name,
        profile: profile,
        post: post,
        text: text,
    });
    $('input[type=text],textarea').val("");
});

function deleteData(info) {
    database.collection('homework3').doc(info).delete();
}