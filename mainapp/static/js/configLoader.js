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


    jQuery('#vmap').vectorMap({
        map: 'world_en',
        backgroundColor: '#a5bfdd',
        borderColor: '#818181',
        borderOpacity: 0.25,
        borderWidth: 1,
        color: '#f4f3f0',
        enableZoom: true,
        hoverColor: '#c9dfaf',
        hoverOpacity: null,
        normalizeFunction: 'linear',
        scaleColors: ['#b6d6ff', '#005ace'],
        selectedColor: '#c9dfaf',
        selectedRegions: null,
        showTooltip: true,
        onRegionClick: function(element, code, region)
        {
            var message = 'You clicked "'
                + region
                + '" which has the code: '
                + code.toUpperCase();

            alert(message);
        }
    });

});

function downloadConfig () {
    configObj.a.click();
    window.URL.revokeObjectURL(configObj.url);
}