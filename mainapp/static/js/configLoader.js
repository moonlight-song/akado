var configObj = {
    a : "",
    url : ""
}


$(document).ready(function() {

    $.ajax ({
        type : 'GET',
        url : 'http://127.0.0.1:8000/dashboard/get-config',
        
        xhrFields: {
            responseType: 'blob'
        }
    }).done (function (data) {

        configObj.a = document.createElement('a');
        configObj.url = window.URL.createObjectURL(data);
        configObj.a.href = configObj.url;
        configObj.a.download = 'config.ovpn';

    }).fail(function() {
        alert( "js fail" );
    });

});

function downloadConfig () {
    configObj.a.click();
    window.URL.revokeObjectURL(configObj.url);
}