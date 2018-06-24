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

    $('#map').vectorMap({
        map: 'world_mill_en',
        panOnDrag: true,

        focusOn: {
          x: 0.5,
          y: 0.5,
          scale: 5,
          animate: false,
          lat: 53,
          lng: 8.4
        },

        backgroundColor: "#e6f6ff",

        regionStyle : {
          initial: {
            fill: 'white',
            "fill-opacity": 1,
            stroke: 'none',
            "stroke-width": 0,
            "stroke-opacity": 1
          },
          hover: {
            fill: '#ffb6c3',
            cursor: 'pointer'
          },
          selected: {
            fill: '#ff92a6'
          },
          selectedHover: {
          }
        },


        markerStyle : {
          initial: {
            fill: '#f77164',
            stroke: '#c51100',
            "fill-opacity": 1,
            "stroke-width": 0.5,
            "stroke-opacity": 1,
            r: 12
          },
          hover: {
            fill: '#ea220f',
            "stroke-width": 1,
            cursor: 'pointer'
          },
          selected: {
            fill: '#ea220f'
          }
        },

        markers : [
            {
                latLng : [49.460562, 11.069856],
                name : "Nuernberg"
            }
        ]


      });

    $('.tr-DE').click(function(){
        $('#map').vectorMap('set', 'focus', {scale: 8, lat: 49.460562, lng: 11.069856, animate: true});
      });
/*
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
*/
});

function downloadConfig () {
    configObj.a.click();
    window.URL.revokeObjectURL(configObj.url);
}