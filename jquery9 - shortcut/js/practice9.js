$(document).ready(function () {
    $('#login').on('click', function () {
        let username = $('#user').val();
        $('.alert-success').html(username);
        let password = $('#pass').val();
        $('.alert-primary').html(password);
       
        isUser(username);
        isPassword(password);

    });
});
function setSuccess(success) {
    $("#" + success).addClass("border-success").removeClass("border-danger");

}
function error(error) {
    $("#" + error).addClass("border-danger").removeClass("border-success");
}
function isUser(u) {
    (u != "") ? (

        setSuccess('user'),
        $.notify("User correct", "success")
    ) : (
            error('user'),
            $.notify("User incorrect", "error")
        );
}
function isPassword(p) {
    (p != "") ? (
        setSuccess('pass'),
        $.notify("Password correct", "success")
    ) : (

            error('pass'),
            $.notyiy("Password incorrect", "error")
        );
}