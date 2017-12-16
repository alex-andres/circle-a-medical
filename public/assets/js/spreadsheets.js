$(function() {

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

    $(".deleteBtn").click(function() {
        $.ajax({
            type: 'PUT',
            url: '/delete/' + $(this).attr('data-fileName'),
            success: function() {
                location.reload();
            }
        })
    });

    $(".processBtn").click(function() {
        $.ajax({
            type: 'GET',
            url: '/wizard/' + $(this).attr('data-fileName'),
            success: function(res) {
                $(html).html();
            }
        })
    });

    $('#modal-btn').click(() => {
        location.reload();
    });
});