$(document).ready(function () {
    $('#add').click(function () {
        var username = $('#name').val();
        var password = $('#pass').val();
        if (username == "" || username.length <= 3) {
            $('#name').css('border', '1px solid red');
        } else {
            $('#name').css('border', '1px solid green');
            $('.alert-danger').fadeIn(2000);
        }
        if (password == "" || password.length <= 3) {
            $('#pass').css('border', '1px solid red');
        } else {
            $('#pass').css('border', '1px solid green');
            $('.alert-info').fadeIn(2000);
        }
        $('#danger').html('username');
        $('#info').html('password');

    });
});