$(document).ready(function() {

    $.ajax ({
        type : 'GET',
        url : 'http://127.0.0.1:8000/dashboard/get-config',
        xhrFields: {
            responseType: 'blob'
        }
    }).done (function (data) {
        //alert (JSON.stringify (response));

        var a = document.createElement('a');
        var url = window.URL.createObjectURL(data);
        a.href = url;
        a.download = 'myfile.jpg';
        a.click();
        window.URL.revokeObjectURL(url);

    }).fail(function() {
        alert( "error" );
    });

});