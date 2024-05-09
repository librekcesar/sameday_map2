var size = 0;
var placement = 'point';
function categories_alto_volumen_copia_2(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'MX1':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.47)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),fill: new ol.style.Fill({color: 'rgba(45,215,113,0.47)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'MX2':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.47)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),fill: new ol.style.Fill({color: 'rgba(218,183,27,0.47)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'MX4':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.47)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),fill: new ol.style.Fill({color: 'rgba(98,39,225,0.47)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SPMX1':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.47)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),fill: new ol.style.Fill({color: 'rgba(220,102,97,0.47)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.47)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),fill: new ol.style.Fill({color: 'rgba(87,210,78,0.47)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_alto_volumen_copia_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("station_code");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_alto_volumen_copia_2(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
