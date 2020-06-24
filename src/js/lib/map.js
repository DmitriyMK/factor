
function startButtonEvents () {
  document.getElementById('shop1').addEventListener(
    'click', function(){
      zoomToShop1()
    }
  )

  document.getElementById('shop2').addEventListener(
    'click', function(){
      zoomToShop2()
    }
  )

  document.getElementById('shop3').addEventListener(
    'click', function(){
      zoomToShop3()
    }
  )

  document.getElementById('shop4').addEventListener(
    'click', function(){
      zoomToShop4()
    }
  )

  document.getElementById('shop5').addEventListener(
    'click', function(){
      zoomToShop5()
    }
  );
  document.getElementById('shop6').addEventListener(
    'click', function(){
      zoomToShop6()
    }
  )

  document.getElementById('shop7').addEventListener(
    'click', function(){
      zoomToShop7()
    }
  )

  document.getElementById('shop8').addEventListener(
    'click', function(){
      zoomToShop8()
    }
  )

  document.getElementById('shop9').addEventListener(
    'click', function(){
      zoomToShop9()
    }
  );
};




var markersData = [
  {
    lat: 47.59448325,
    lng: 37.5007515,
    name: "Фактор",
    address: "г. Волноваха, ул. Центральная, 68"
  },
  {
    lat: 47.61811886,
    lng: 37.49267399,
    name: "Фактор",
    address: "г. Волноваха, ул. Центральная, 68"
  },
  {
    lat: 47.4609289,
    lng: 37.6489126,
    name: "Фактор",
    address: " пос. Андреевка, ул. Рудченко, 25"
  },
  {
    lat: 47.609115,
    lng: 37.4829432,
    name: "Фактор",
    address: " г. Волноваха, пер. Мостовой, 6"
  },
  {
    lat: 47.59945704,
    lng: 37.4952355,
    name: "Фактор",
    address: " г. Волноваха,  ул. Центральная, 66"
  },
  {
    lat: 47.6181695,
    lng: 37.4904304,
    name: "Фактор",
    address: " г. Волноваха,  ул. Центральная, 66"
  },
];

var map, infoWindow;

function initMap() {
  var centerLatLng = new google.maps.LatLng(47.59448325, 37.5007515);

  var mapOptions = {
    center: centerLatLng,
    zoom: 12,

    mapTypeControl: false,

    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
    },

    scrollwheel: false,
    disableDoubleClickZoom: true,
    navigationControlOptions: {
      style: google.maps.NavigationControlStyle.SMALL
    },
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: [{
      "featureType": "all",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "saturation": 36
        },
        {
          "color": "#333333"
        },
        {
          "lightness": 40
        }
      ]
    },
    {
      "featureType": "all",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "visibility": "on"
        },
        {
          "color": "#ffffff"
        },
        {
          "lightness": 16
        }
      ]
    },
    {
      "featureType": "all",
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#fefefe"
        },
        {
          "lightness": 20
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#fefefe"
        },
        {
          "lightness": 17
        },
        {
          "weight": 1.2
        }
      ]
    },
    {
      "featureType": "landscape",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f5f5f5"
        },
        {
          "lightness": 20
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f5f5f5"
        },
        {
          "lightness": 21
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dedede"
        },
        {
          "lightness": 21
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#869098"
        },
        {
          "visibility": "on"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#869098"
        },
        {
          "lightness": 17
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#ffffff"
        },
        {
          "lightness": 29
        },
        {
          "weight": 0.2
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#ffffff"
        },
        {
          "lightness": 18
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "visibility": "on"
        },
        {
          "color": "#869098"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#ffffff"
        },
        {
          "lightness": 16
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f2f2f2"
        },
        {
          "lightness": 19
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e9e9e9"
        },
        {
          "lightness": 17
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#def5f7"
        }
      ]
    }]
  };

  map = new google.maps.Map(document.getElementById("map"), mapOptions);

  var bounds = new google.maps.LatLngBounds();

  for (var i = 0; i < markersData.length; i++) {

    var latLng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
    var name = markersData[i].name;
    var address = markersData[i].address;

    addMarker(latLng, name, address);

    bounds.extend(latLng);
  }

  // map.fitBounds(bounds);
  startButtonEvents();

}

function addMarker(latLng, name, address) {

  var image = '../img/marker.png';

  var marker = new google.maps.Marker({
    position: latLng,
    map: map,
    // animation:google.maps.Animation.BOUNCE,
    icon: image,
    title: name
  });
};



function zoomToShop1() {
  var shop = new google.maps.LatLng(47.59448325, 37.5007515);
  map.setCenter(shop);
  map.setZoom(15);
}

function zoomToShop2() {
  var shop = new google.maps.LatLng(47.6181695,37.4904304);
  map.setCenter(shop);
  map.setZoom(15);
}

function zoomToShop3() {
  var shop = new google.maps.LatLng(47.4609289, 37.6489126);
  map.setCenter(shop);
  map.setZoom(15);
}

function zoomToShop4() {
  var shop = new google.maps.LatLng(47.609115, 37.4829432);
  map.setCenter(shop);
  map.setZoom(15);
}

function zoomToShop5() {
  var shop = new google.maps.LatLng(47.59945704, 37.4952355);
  map.setCenter(shop);
  map.setZoom(15);
}

function zoomToShop6() {
  var shop = new google.maps.LatLng(47.59945704, 37.4952355);
  map.setCenter(shop);
  map.setZoom(15);
}

function zoomToShop7() {
  var shop = new google.maps.LatLng(47.59945704, 37.4952355);
  map.setCenter(shop);
  map.setZoom(15);
}

function zoomToShop8() {
  var shop = new google.maps.LatLng(47.59448325, 37.5007515);
  map.setCenter(shop);
  map.setZoom(15);
}

function zoomToShop9() {
  var shop = new google.maps.LatLng(47.59945704, 37.4952355);
  map.setCenter(shop);
  map.setZoom(15);
}
