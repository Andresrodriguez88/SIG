var map = L.map('map').setView([4.695252612863224, -74.07776638076456], 15);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var puntosDeInteres = [
    { nombre: "CAFAM FLORESTA", lat: 4.691643709489929, lng: -74.07496869047331 },
    { nombre: "CARACOL TV", lat: 4.687356300996275, lng: -74.0785 },
    { nombre: "OUTLEC FLORESTA", lat: 4.6913308107889895, lng: -74.07490751011649 },
    { nombre: "Punto 4", lat: 4.6985, lng: -74.0760 },
    { nombre: "Punto 5", lat: 4.7000, lng: -74.0780 }
];
// Agregar los marcadores a cada punto de interés
puntosDeInteres.forEach(function(punto) {
    L.marker([punto.lat, punto.lng]).addTo(map)
        .bindPopup("<b>" + punto.nombre + "</b>")
        .openPopup();
});
