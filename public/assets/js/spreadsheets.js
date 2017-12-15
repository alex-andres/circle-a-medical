$(function() {

    let tableArr = [];

    $.ajax('/spreadsheets/uploadedFiles', {
        type: 'GET',
    }).then(res => {
        console.log(res);
    });

    $('#excelForm').submit((event) => {

        event.preventDefault();

        var file = event.target[0].files[0];
        var formData = new FormData();

        formData.append('excelFile', file);
        $.ajax({
            url: '/upload',
            type: 'post',
            data: formData,
            processData: false,
            contentType: false,
            success: function(res) {
                $('#statusCode').html(`Status Code: ${res.statusCode}`);
                $('#message').html(`Message: ${res.message}`);
                $('#outputModal').modal('show');
            },
            crossDomain: true
        });
    });
});