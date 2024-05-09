var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_stations_2_1 = new ol.format.GeoJSON();
var features_stations_2_1 = format_stations_2_1.readFeatures(json_stations_2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_stations_2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_stations_2_1.addFeatures(features_stations_2_1);
var lyr_stations_2_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_stations_2_1, 
                style: style_stations_2_1,
                interactive: true,
                title: '<img src="styles/legend/stations_2_1.png" /> stations_2'
            });
var format_alto_volumen_copia_2 = new ol.format.GeoJSON();
var features_alto_volumen_copia_2 = format_alto_volumen_copia_2.readFeatures(json_alto_volumen_copia_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_alto_volumen_copia_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_alto_volumen_copia_2.addFeatures(features_alto_volumen_copia_2);
var lyr_alto_volumen_copia_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_alto_volumen_copia_2, 
                style: style_alto_volumen_copia_2,
                interactive: true,
    title: 'alto_volumen_copia<br />\
    <img src="styles/legend/alto_volumen_copia_2_0.png" /> MX1<br />\
    <img src="styles/legend/alto_volumen_copia_2_1.png" /> MX2<br />\
    <img src="styles/legend/alto_volumen_copia_2_2.png" /> MX4<br />\
    <img src="styles/legend/alto_volumen_copia_2_3.png" /> SPMX1<br />\
    <img src="styles/legend/alto_volumen_copia_2_4.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_stations_2_1.setVisible(true);lyr_alto_volumen_copia_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_stations_2_1,lyr_alto_volumen_copia_2];
lyr_stations_2_1.set('fieldAliases', {'locality': 'locality', 'zonificacion': 'zonificacion', 'station_code': 'station_code', 'station_name': 'station_name', 'numero_guias': 'numero_guias', });
lyr_alto_volumen_copia_2.set('fieldAliases', {'locality': 'locality', 'zonificacion': 'zonificacion', 'station_code': 'station_code', 'station_name': 'station_name', 'numero_guias': 'numero_guias', });
lyr_stations_2_1.set('fieldImages', {'locality': 'TextEdit', 'zonificacion': 'TextEdit', 'station_code': 'TextEdit', 'station_name': 'TextEdit', 'numero_guias': 'Range', });
lyr_alto_volumen_copia_2.set('fieldImages', {'locality': 'TextEdit', 'zonificacion': 'TextEdit', 'station_code': 'TextEdit', 'station_name': 'TextEdit', 'numero_guias': 'Range', });
lyr_stations_2_1.set('fieldLabels', {'locality': 'no label', 'zonificacion': 'no label', 'station_code': 'no label', 'station_name': 'no label', 'numero_guias': 'no label', });
lyr_alto_volumen_copia_2.set('fieldLabels', {'locality': 'no label', 'zonificacion': 'header label', 'station_code': 'header label', 'station_name': 'header label', 'numero_guias': 'header label', });
lyr_alto_volumen_copia_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});