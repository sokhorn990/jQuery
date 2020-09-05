$(document).ready(function () {
    $('#btn').on('click', function () {
        var username = $('#user').val();
        var password = $('#pass').val();
        isUsername(username);
        isPassword(password);
    });
});
function setSuccess(success) {
    $('#' + success).addClass('border-success').removeClass('border-danger');
}
function setError(error) {
    $('#' + error).addClass('border-danger').removeClass('bordersuccess');
}
var isUsername = (u) => {
    u == "" ? setError('user') : setSuccess('user');
}
var isPassword = (p) => {
    p == "" ? setError('pass') : setSuccess('pass');
}