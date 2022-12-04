var map = L.map('map').setView([33, -6], 5);


osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);



  
  //L.geoJSON(geojson, {
   // poinToLayer: createMarker,
   // onEachFeature: createPopup
  //}).addTo(map);
  



  function createCustomIcon (feature, latlng) {
    let myIcon = L.icon({
      iconUrl: 'prison.png',
      
      iconSize:     [35, 25], // width and height of the image in pixels
      shadowSize:   [35, 20], // width, height of optional shadow image
      iconAnchor:   [12, 12], // point of the icon which will correspond to marker's location
      shadowAnchor: [12, 6],  // anchor point of the shadow. should be offset
      popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
    })
    return L.marker(latlng, { icon: myIcon })
  }
  
  



var regi = L.geoJson(reg).addTo(map)

var pris = L.geoJson(prison)

// create an options object that specifies which function will called on each feature
let myLayerOptions1 = {
    pointToLayer: createCustomIcon,
    filter: casaFilter,
  }
  
// create the GeoJSON layer
var casa = L.geoJSON(prison, myLayerOptions1).addTo(map).bindPopup(function(layer){
  return` 
    <div>
       
    <h3> ${layer.feature.properties.name}  </h3>
       
       <h4>Nombre de détenus: </h4>  ${layer.feature.properties.Nombre_de_detenues }; 
       <h4>taux de surpopulation: </h4>  ${layer.feature.properties.Taux_de_surpopulation} ; 

   </div>
  `;
});

    



function casaFilter(feature) {
  if (feature.properties.region === "Casablanca-Settat") return true
}
let myLayerOptions2 = {
  pointToLayer: createCustomIcon,
  filter: fes_meknesFilter,
}

var fes_meknes = L.geoJson(prison, myLayerOptions2).addTo(map).bindPopup(function(layer){
  return` 
    <div>
       
    <h3>${layer.feature.properties.name}  </h3>
       
       <h4>Nombre de détenus: </h4>  ${layer.feature.properties.Nombre_de_detenues }; 
       <h4>taux de surpopulation: </h4>  ${layer.feature.properties.Taux_de_surpopulation} ; 

   </div>
  `;
});

function fes_meknesFilter(feature) {
  if (feature.properties.region === "Fes-meknes") return true
  }
  let myLayerOptions3 = {
    pointToLayer: createCustomIcon,
    filter: beni_mellal_khenifraFilter,
  }
  var beni_mellal_khenifra = L.geoJson(prison, myLayerOptions3).addTo(map).bindPopup(function(layer){
    return` 
      <div>
         
      <h3>${layer.feature.properties.name}  </h3>
         
         <h4>Nombre de détenus: </h4>  ${layer.feature.properties.Nombre_de_detenues }; 
         <h4>taux de surpopulation: </h4>  ${layer.feature.properties.Taux_de_surpopulation} ; 
  
     </div>
    `;
  });
  
function beni_mellal_khenifraFilter(feature) {
  if (feature.properties.region === " beni mellal khenifra") return true
  }
  let myLayerOptions4 = {
    pointToLayer: createCustomIcon,
    filter: OrientalFilter,
  }


  var Oriental = L.geoJson(prison, myLayerOptions4).addTo(map).bindPopup(function(layer){
    return` 
      <div>
         
      <h3>${layer.feature.properties.name}</h3>  
         
         <h4>Nombre de détenus: </h4>  ${layer.feature.properties.Nombre_de_detenues }; 
         <h4>taux de surpopulation: </h4>  ${layer.feature.properties.Taux_de_surpopulation} ; 
  
     </div>
    `;
  });
  
function OrientalFilter(feature) {
  if (feature.properties.region === " l'orientale") return true
  }
  let myLayerOptions5 = {
    pointToLayer: createCustomIcon,
    filter: Rabat_Sale_KenitraFilter,
  }



  var Rabat_Sale_Kenitra = L.geoJson(prison, myLayerOptions5).addTo(map).bindPopup(function(layer){
    return` 
      <div>
         
      <h3>${layer.feature.properties.name} </h3> 
         
         <h4>Nombre de détenus: </h4>  ${layer.feature.properties.Nombre_de_detenues }; 
         <h4>taux de surpopulation: </h4>  ${layer.feature.properties.Taux_de_surpopulation} ; 
  
     </div>
    `;
  });
  
function Rabat_Sale_KenitraFilter(feature) {
  if (feature.properties.region === "Rabat Sale Kenitra") return true
  }  
  let myLayerOptions6 = {
    pointToLayer: createCustomIcon,
    filter: Tanger_Tétouan_Al_HoceïmaFilter,
  }


  var Tanger_Tétouan_Al_Hoceïma = L.geoJson(prison, myLayerOptions6).addTo(map).bindPopup(function(layer){
    return` 
      <div>
         
      <h3>${layer.feature.properties.name}  </h3>
         
         <h4>Nombre de détenus: </h4>  ${layer.feature.properties.Nombre_de_detenues }; 
         <h4>taux de surpopulation: </h4>  ${layer.feature.properties.Taux_de_surpopulation} ; 
  
     </div>
    `;
  });
  
function Tanger_Tétouan_Al_HoceïmaFilter(feature) {
  if (feature.properties.region === "Tanger-Tétouan-Al Hoceïma") return true
  }
  let myLayerOptions7 = {
    pointToLayer: createCustomIcon,
    filter: Marrakech_SafiFilter,
  }



  var Marrakech_Safi = L.geoJson(prison, myLayerOptions7).addTo(map).bindPopup(function(layer){
    return` 
      <div>
         
      <h3>${layer.feature.properties.name} </h3> 
         
         <h4>Nombre de détenus: </h4>  ${layer.feature.properties.Nombre_de_detenues }; 
         <h4>taux de surpopulation: </h4>  ${layer.feature.properties.Taux_de_surpopulation} ; 
  
     </div>
    `;
  });
  
function Marrakech_SafiFilter(feature) {
  if (feature.properties.region === " Marrakech-Safi") return true
  }

  let myLayerOptions8 = {
    pointToLayer: createCustomIcon,
    filter: Drâa_TafilaletFilter,
  }



var Drâa_Tafilalet = L.geoJson(prison, myLayerOptions8).addTo(map).bindPopup(function(layer){
  return` 
    <div>
       
    <h3>${layer.feature.properties.name} </h3> 
       
       <h4>Nombre de détenus: </h4>  ${layer.feature.properties.Nombre_de_detenues }; 
       <h4>taux de surpopulation: </h4>  ${layer.feature.properties.Taux_de_surpopulation} ; 

   </div>
  `;
});
  
function Drâa_TafilaletFilter(feature) {
  if (feature.properties.region === " Drâa-Tafilalet") return true
  }


  let myLayerOptions9 = {
    pointToLayer: createCustomIcon,
    filter: Laâyoune_Sakia_El_HamraFilter,
  }


var Laâyoune_Sakia_El_Hamra = L.geoJson(prison, myLayerOptions9).addTo(map).bindPopup(function(layer){
  return` 
    <div>
      
    <h3>${layer.feature.properties.name}  </h3>
      
    <h4>Nombre de détenus: </h4>  ${layer.feature.properties.Nombre_de_detenues }; 
    <h4>taux de surpopulation: </h4>  ${layer.feature.properties.Taux_de_surpopulation} ; 
       
   </div>
  `;
});
  
function Laâyoune_Sakia_El_HamraFilter(feature) {
  if (feature.properties.region === " Laâyoune-Sakia El Hamra") return true
  }











var baseLayers = {
	"Mapbox": osm,

};

var overlays = {
	
    "reg" : regi,
    "casa" : casa,
    "Fes_Meknes" :fes_meknes,
    "beni_mellal_khenifra" : beni_mellal_khenifra,
    "Oriental": Oriental,
    "Rabat_Sale_Kenitra" : Rabat_Sale_Kenitra,
    "Tanger_Tétouan_Al_Hoceïma":Tanger_Tétouan_Al_Hoceïma,
    "Marrakech_Safi" : Marrakech_Safi,
    "Drâa_Tafilalet" : Drâa_Tafilalet,
    "Laâyoune_Sakia_El_Hamra" :Laâyoune_Sakia_El_Hamra,
    };

L.control.layers(baseLayers, overlays).addTo(map);
var m = L.control.polylineMeasure({
  position : "topleft",
  measureControlTitle : "Measure Length"
}).addTo(map)
