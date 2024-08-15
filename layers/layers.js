var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_WAYPOINT1_1 = new ol.format.GeoJSON();
var features_WAYPOINT1_1 = format_WAYPOINT1_1.readFeatures(json_WAYPOINT1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WAYPOINT1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WAYPOINT1_1.addFeatures(features_WAYPOINT1_1);
var lyr_WAYPOINT1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WAYPOINT1_1, 
                style: style_WAYPOINT1_1,
                popuplayertitle: "WAYPOINT 1",
                interactive: true,
                title: '<img src="styles/legend/WAYPOINT1_1.png" /> WAYPOINT 1'
            });
var format_KELURAHANPASIRKALIKI_2 = new ol.format.GeoJSON();
var features_KELURAHANPASIRKALIKI_2 = format_KELURAHANPASIRKALIKI_2.readFeatures(json_KELURAHANPASIRKALIKI_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KELURAHANPASIRKALIKI_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KELURAHANPASIRKALIKI_2.addFeatures(features_KELURAHANPASIRKALIKI_2);
var lyr_KELURAHANPASIRKALIKI_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KELURAHANPASIRKALIKI_2, 
                style: style_KELURAHANPASIRKALIKI_2,
                popuplayertitle: "KELURAHAN PASIR KALIKI",
                interactive: true,
                title: '<img src="styles/legend/KELURAHANPASIRKALIKI_2.png" /> KELURAHAN PASIR KALIKI'
            });
var format_BufferUTMvektorAedesLay_3 = new ol.format.GeoJSON();
var features_BufferUTMvektorAedesLay_3 = format_BufferUTMvektorAedesLay_3.readFeatures(json_BufferUTMvektorAedesLay_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BufferUTMvektorAedesLay_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BufferUTMvektorAedesLay_3.addFeatures(features_BufferUTMvektorAedesLay_3);
var lyr_BufferUTMvektorAedesLay_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BufferUTMvektorAedesLay_3, 
                style: style_BufferUTMvektorAedesLay_3,
                popuplayertitle: "Buffer UTM vektor Aedes Lay",
                interactive: true,
                title: '<img src="styles/legend/BufferUTMvektorAedesLay_3.png" /> Buffer UTM vektor Aedes Lay'
            });
var format_UTMVektorAedes_4 = new ol.format.GeoJSON();
var features_UTMVektorAedes_4 = format_UTMVektorAedes_4.readFeatures(json_UTMVektorAedes_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UTMVektorAedes_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UTMVektorAedes_4.addFeatures(features_UTMVektorAedes_4);
var lyr_UTMVektorAedes_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UTMVektorAedes_4, 
                style: style_UTMVektorAedes_4,
                popuplayertitle: "UTM Vektor Aedes",
                interactive: true,
                title: '<img src="styles/legend/UTMVektorAedes_4.png" /> UTM Vektor Aedes'
            });
var format_JALAN_AR_25K_5 = new ol.format.GeoJSON();
var features_JALAN_AR_25K_5 = format_JALAN_AR_25K_5.readFeatures(json_JALAN_AR_25K_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_AR_25K_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_AR_25K_5.addFeatures(features_JALAN_AR_25K_5);
var lyr_JALAN_AR_25K_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_AR_25K_5, 
                style: style_JALAN_AR_25K_5,
                popuplayertitle: "JALAN_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/JALAN_AR_25K_5.png" /> JALAN_AR_25K'
            });
var format_SUNGAI_AR_25K_6 = new ol.format.GeoJSON();
var features_SUNGAI_AR_25K_6 = format_SUNGAI_AR_25K_6.readFeatures(json_SUNGAI_AR_25K_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_AR_25K_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_AR_25K_6.addFeatures(features_SUNGAI_AR_25K_6);
var lyr_SUNGAI_AR_25K_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_AR_25K_6, 
                style: style_SUNGAI_AR_25K_6,
                popuplayertitle: "SUNGAI_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_AR_25K_6.png" /> SUNGAI_AR_25K'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_WAYPOINT1_1.setVisible(true);lyr_KELURAHANPASIRKALIKI_2.setVisible(true);lyr_BufferUTMvektorAedesLay_3.setVisible(true);lyr_UTMVektorAedes_4.setVisible(true);lyr_JALAN_AR_25K_5.setVisible(true);lyr_SUNGAI_AR_25K_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_WAYPOINT1_1,lyr_KELURAHANPASIRKALIKI_2,lyr_BufferUTMvektorAedesLay_3,lyr_UTMVektorAedes_4,lyr_JALAN_AR_25K_5,lyr_SUNGAI_AR_25K_6];
lyr_WAYPOINT1_1.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_KELURAHANPASIRKALIKI_2.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'CIMAHI_ADM': 'CIMAHI_ADM', 'CIMAHI_A_1': 'CIMAHI_A_1', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'RW': 'RW', 'RT': 'RT', });
lyr_BufferUTMvektorAedesLay_3.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_UTMVektorAedes_4.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_JALAN_AR_25K_5.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMOBJ': 'NAMOBJ', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_SUNGAI_AR_25K_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_WAYPOINT1_1.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_KELURAHANPASIRKALIKI_2.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'CIMAHI_ADM': 'TextEdit', 'CIMAHI_A_1': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_BufferUTMvektorAedesLay_3.set('fieldImages', {'fid': '', 'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_UTMVektorAedes_4.set('fieldImages', {'fid': '', 'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_JALAN_AR_25K_5.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMOBJ': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_SUNGAI_AR_25K_6.set('fieldImages', {'NAMOBJ': '', 'JNSSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_WAYPOINT1_1.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_KELURAHANPASIRKALIKI_2.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'CIMAHI_ADM': 'no label', 'CIMAHI_A_1': 'no label', 'KECAMATAN': 'no label', 'KELURAHAN': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_BufferUTMvektorAedesLay_3.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_UTMVektorAedes_4.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_JALAN_AR_25K_5.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMOBJ': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_SUNGAI_AR_25K_6.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_SUNGAI_AR_25K_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});