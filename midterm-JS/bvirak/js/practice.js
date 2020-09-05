$(document).ready(function () {
    $('#btn').on('click', function () {
        var username = $('#username').val();
        var password = $('#pass').val();
        isUsername(username);
        isPassword(password);
    });
})
function setSuccess(success) {
    $('#' + success).addClass('border-success').removeClass('border-danger');
    $('#btn').addClass('bg-success').removeClass('bg-danger');
}
function setError(error) {
    $('#' + error).addClass('border-danger').removeClass('border-success');
    $('#btn').addClass('bg-danger').removeClass('bg-success');
}
var isUsername = (u) => {
    u == "" ? setError('username') : setSuccess('username');
}
var isPassword = (p) => {
    p == "" ? setError('pass') : setSuccess('pass');
}