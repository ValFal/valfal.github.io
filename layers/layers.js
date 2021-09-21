var wms_layers = [];

var format_CCLandesArmagnac_0 = new ol.format.GeoJSON();
var features_CCLandesArmagnac_0 = format_CCLandesArmagnac_0.readFeatures(json_CCLandesArmagnac_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CCLandesArmagnac_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CCLandesArmagnac_0.addFeatures(features_CCLandesArmagnac_0);
var lyr_CCLandesArmagnac_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CCLandesArmagnac_0, 
                style: style_CCLandesArmagnac_0,
                interactive: true,
                title: '<img src="styles/legend/CCLandesArmagnac_0.png" /> CC-Landes-Armagnac'
            });
var format_CCVillneuveMarsanArm_1 = new ol.format.GeoJSON();
var features_CCVillneuveMarsanArm_1 = format_CCVillneuveMarsanArm_1.readFeatures(json_CCVillneuveMarsanArm_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CCVillneuveMarsanArm_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CCVillneuveMarsanArm_1.addFeatures(features_CCVillneuveMarsanArm_1);
var lyr_CCVillneuveMarsanArm_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CCVillneuveMarsanArm_1, 
                style: style_CCVillneuveMarsanArm_1,
                interactive: true,
                title: '<img src="styles/legend/CCVillneuveMarsanArm_1.png" /> CC-Villneuve-Marsan-Arm'
            });
var format_CCCantondePissos_2 = new ol.format.GeoJSON();
var features_CCCantondePissos_2 = format_CCCantondePissos_2.readFeatures(json_CCCantondePissos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CCCantondePissos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CCCantondePissos_2.addFeatures(features_CCCantondePissos_2);
var lyr_CCCantondePissos_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CCCantondePissos_2, 
                style: style_CCCantondePissos_2,
                interactive: true,
                title: '<img src="styles/legend/CCCantondePissos_2.png" /> CC-Canton-de-Pissos'
            });
var format_CCHLA_3 = new ol.format.GeoJSON();
var features_CCHLA_3 = format_CCHLA_3.readFeatures(json_CCHLA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CCHLA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CCHLA_3.addFeatures(features_CCHLA_3);
var lyr_CCHLA_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CCHLA_3, 
                style: style_CCHLA_3,
                interactive: true,
                title: '<img src="styles/legend/CCHLA_3.png" /> CC HLA '
            });
var format_CCPA_4 = new ol.format.GeoJSON();
var features_CCPA_4 = format_CCPA_4.readFeatures(json_CCPA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CCPA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CCPA_4.addFeatures(features_CCPA_4);
var lyr_CCPA_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CCPA_4, 
                style: style_CCPA_4,
                interactive: true,
                title: '<img src="styles/legend/CCPA_4.png" /> CC PA '
            });
var format_CCPaysMorcenais_5 = new ol.format.GeoJSON();
var features_CCPaysMorcenais_5 = format_CCPaysMorcenais_5.readFeatures(json_CCPaysMorcenais_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CCPaysMorcenais_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CCPaysMorcenais_5.addFeatures(features_CCPaysMorcenais_5);
var lyr_CCPaysMorcenais_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CCPaysMorcenais_5, 
                style: style_CCPaysMorcenais_5,
                interactive: true,
                title: '<img src="styles/legend/CCPaysMorcenais_5.png" /> CC-Pays-Morcenais'
            });
var format_CCCPLimite_6 = new ol.format.GeoJSON();
var features_CCCPLimite_6 = format_CCCPLimite_6.readFeatures(json_CCCPLimite_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CCCPLimite_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CCCPLimite_6.addFeatures(features_CCCPLimite_6);
var lyr_CCCPLimite_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CCCPLimite_6, 
                style: style_CCCPLimite_6,
                interactive: true,
                title: '<img src="styles/legend/CCCPLimite_6.png" /> CC CP Limite'
            });
var format_Fusionn_7 = new ol.format.GeoJSON();
var features_Fusionn_7 = format_Fusionn_7.readFeatures(json_Fusionn_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fusionn_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fusionn_7.addFeatures(features_Fusionn_7);
var lyr_Fusionn_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fusionn_7, 
                style: style_Fusionn_7,
                interactive: true,
                title: '<img src="styles/legend/Fusionn_7.png" /> Fusionné'
            });
var format_CCVMALimite_8 = new ol.format.GeoJSON();
var features_CCVMALimite_8 = format_CCVMALimite_8.readFeatures(json_CCVMALimite_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CCVMALimite_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CCVMALimite_8.addFeatures(features_CCVMALimite_8);
var lyr_CCVMALimite_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CCVMALimite_8, 
                style: style_CCVMALimite_8,
                interactive: true,
                title: '<img src="styles/legend/CCVMALimite_8.png" /> CC VMA Limite'
            });
var format_CCHLALimite_9 = new ol.format.GeoJSON();
var features_CCHLALimite_9 = format_CCHLALimite_9.readFeatures(json_CCHLALimite_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CCHLALimite_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CCHLALimite_9.addFeatures(features_CCHLALimite_9);
var lyr_CCHLALimite_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CCHLALimite_9, 
                style: style_CCHLALimite_9,
                interactive: true,
                title: '<img src="styles/legend/CCHLALimite_9.png" /> CC HLA Limite'
            });
var format_CCLALimite_10 = new ol.format.GeoJSON();
var features_CCLALimite_10 = format_CCLALimite_10.readFeatures(json_CCLALimite_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CCLALimite_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CCLALimite_10.addFeatures(features_CCLALimite_10);
var lyr_CCLALimite_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CCLALimite_10, 
                style: style_CCLALimite_10,
                interactive: true,
                title: '<img src="styles/legend/CCLALimite_10.png" /> CC LA Limite'
            });
var format_CCPAlimite_11 = new ol.format.GeoJSON();
var features_CCPAlimite_11 = format_CCPAlimite_11.readFeatures(json_CCPAlimite_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CCPAlimite_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CCPAlimite_11.addFeatures(features_CCPAlimite_11);
var lyr_CCPAlimite_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CCPAlimite_11, 
                style: style_CCPAlimite_11,
                interactive: true,
                title: '<img src="styles/legend/CCPAlimite_11.png" /> CC PA limite'
            });
var format_CCPMLimite_12 = new ol.format.GeoJSON();
var features_CCPMLimite_12 = format_CCPMLimite_12.readFeatures(json_CCPMLimite_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CCPMLimite_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CCPMLimite_12.addFeatures(features_CCPMLimite_12);
var lyr_CCPMLimite_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CCPMLimite_12, 
                style: style_CCPMLimite_12,
                interactive: true,
                title: '<img src="styles/legend/CCPMLimite_12.png" /> CC PM Limite'
            });

lyr_CCLandesArmagnac_0.setVisible(true);lyr_CCVillneuveMarsanArm_1.setVisible(true);lyr_CCCantondePissos_2.setVisible(true);lyr_CCHLA_3.setVisible(true);lyr_CCPA_4.setVisible(true);lyr_CCPaysMorcenais_5.setVisible(true);lyr_CCCPLimite_6.setVisible(true);lyr_Fusionn_7.setVisible(true);lyr_CCVMALimite_8.setVisible(true);lyr_CCHLALimite_9.setVisible(true);lyr_CCLALimite_10.setVisible(true);lyr_CCPAlimite_11.setVisible(true);lyr_CCPMLimite_12.setVisible(true);
var layersList = [lyr_CCLandesArmagnac_0,lyr_CCVillneuveMarsanArm_1,lyr_CCCantondePissos_2,lyr_CCHLA_3,lyr_CCPA_4,lyr_CCPaysMorcenais_5,lyr_CCCPLimite_6,lyr_Fusionn_7,lyr_CCVMALimite_8,lyr_CCHLALimite_9,lyr_CCLALimite_10,lyr_CCPAlimite_11,lyr_CCPMLimite_12];
lyr_CCLandesArmagnac_0.set('fieldAliases', {'fid': 'fid', 'ID_GEOFLA': 'ID_GEOFLA', 'CODE_COM': 'CODE_COM', 'INSEE_COM': 'INSEE_COM', 'NOM_COM': 'NOM_COM', 'STATUT': 'STATUT', 'X_CHF_LIEU': 'X_CHF_LIEU', 'Y_CHF_LIEU': 'Y_CHF_LIEU', 'X_CENTROID': 'X_CENTROID', 'Y_CENTROID': 'Y_CENTROID', 'Z_MOYEN': 'Z_MOYEN', 'SUPERFICIE': 'SUPERFICIE', 'POPULATION': 'POPULATION', 'CODE_ARR': 'CODE_ARR', 'CODE_DEPT': 'CODE_DEPT', 'NOM_DEPT': 'NOM_DEPT', 'CODE_REG': 'CODE_REG', 'NOM_REG': 'NOM_REG', });
lyr_CCVillneuveMarsanArm_1.set('fieldAliases', {'fid': 'fid', 'ID_GEOFLA': 'ID_GEOFLA', 'CODE_COM': 'CODE_COM', 'INSEE_COM': 'INSEE_COM', 'NOM_COM': 'NOM_COM', 'STATUT': 'STATUT', 'X_CHF_LIEU': 'X_CHF_LIEU', 'Y_CHF_LIEU': 'Y_CHF_LIEU', 'X_CENTROID': 'X_CENTROID', 'Y_CENTROID': 'Y_CENTROID', 'Z_MOYEN': 'Z_MOYEN', 'SUPERFICIE': 'SUPERFICIE', 'POPULATION': 'POPULATION', 'CODE_ARR': 'CODE_ARR', 'CODE_DEPT': 'CODE_DEPT', 'NOM_DEPT': 'NOM_DEPT', 'CODE_REG': 'CODE_REG', 'NOM_REG': 'NOM_REG', });
lyr_CCCantondePissos_2.set('fieldAliases', {'fid': 'fid', 'ID_GEOFLA': 'ID_GEOFLA', 'CODE_COM': 'CODE_COM', 'INSEE_COM': 'INSEE_COM', 'NOM_COM': 'NOM_COM', 'STATUT': 'STATUT', 'X_CHF_LIEU': 'X_CHF_LIEU', 'Y_CHF_LIEU': 'Y_CHF_LIEU', 'X_CENTROID': 'X_CENTROID', 'Y_CENTROID': 'Y_CENTROID', 'Z_MOYEN': 'Z_MOYEN', 'SUPERFICIE': 'SUPERFICIE', 'POPULATION': 'POPULATION', 'CODE_ARR': 'CODE_ARR', 'CODE_DEPT': 'CODE_DEPT', 'NOM_DEPT': 'NOM_DEPT', 'CODE_REG': 'CODE_REG', 'NOM_REG': 'NOM_REG', });
lyr_CCHLA_3.set('fieldAliases', {'fid': 'fid', 'ID_GEOFLA': 'ID_GEOFLA', 'CODE_COM': 'CODE_COM', 'INSEE_COM': 'INSEE_COM', 'NOM_COM': 'NOM_COM', 'STATUT': 'STATUT', 'X_CHF_LIEU': 'X_CHF_LIEU', 'Y_CHF_LIEU': 'Y_CHF_LIEU', 'X_CENTROID': 'X_CENTROID', 'Y_CENTROID': 'Y_CENTROID', 'Z_MOYEN': 'Z_MOYEN', 'SUPERFICIE': 'SUPERFICIE', 'POPULATION': 'POPULATION', 'CODE_ARR': 'CODE_ARR', 'CODE_DEPT': 'CODE_DEPT', 'NOM_DEPT': 'NOM_DEPT', 'CODE_REG': 'CODE_REG', 'NOM_REG': 'NOM_REG', });
lyr_CCPA_4.set('fieldAliases', {'fid': 'fid', 'ID_GEOFLA': 'ID_GEOFLA', 'CODE_COM': 'CODE_COM', 'INSEE_COM': 'INSEE_COM', 'NOM_COM': 'NOM_COM', 'STATUT': 'STATUT', 'X_CHF_LIEU': 'X_CHF_LIEU', 'Y_CHF_LIEU': 'Y_CHF_LIEU', 'X_CENTROID': 'X_CENTROID', 'Y_CENTROID': 'Y_CENTROID', 'Z_MOYEN': 'Z_MOYEN', 'SUPERFICIE': 'SUPERFICIE', 'POPULATION': 'POPULATION', 'CODE_ARR': 'CODE_ARR', 'CODE_DEPT': 'CODE_DEPT', 'NOM_DEPT': 'NOM_DEPT', 'CODE_REG': 'CODE_REG', 'NOM_REG': 'NOM_REG', });
lyr_CCPaysMorcenais_5.set('fieldAliases', {'fid': 'fid', 'ID_GEOFLA': 'ID_GEOFLA', 'CODE_COM': 'CODE_COM', 'INSEE_COM': 'INSEE_COM', 'NOM_COM': 'NOM_COM', 'STATUT': 'STATUT', 'X_CHF_LIEU': 'X_CHF_LIEU', 'Y_CHF_LIEU': 'Y_CHF_LIEU', 'X_CENTROID': 'X_CENTROID', 'Y_CENTROID': 'Y_CENTROID', 'Z_MOYEN': 'Z_MOYEN', 'SUPERFICIE': 'SUPERFICIE', 'POPULATION': 'POPULATION', 'CODE_ARR': 'CODE_ARR', 'CODE_DEPT': 'CODE_DEPT', 'NOM_DEPT': 'NOM_DEPT', 'CODE_REG': 'CODE_REG', 'NOM_REG': 'NOM_REG', });
lyr_CCCPLimite_6.set('fieldAliases', {'fid': 'fid', 'ID_GEOFLA': 'ID_GEOFLA', 'CODE_COM': 'CODE_COM', 'INSEE_COM': 'INSEE_COM', 'NOM_COM': 'NOM_COM', 'STATUT': 'STATUT', 'X_CHF_LIEU': 'X_CHF_LIEU', 'Y_CHF_LIEU': 'Y_CHF_LIEU', 'X_CENTROID': 'X_CENTROID', 'Y_CENTROID': 'Y_CENTROID', 'Z_MOYEN': 'Z_MOYEN', 'SUPERFICIE': 'SUPERFICIE', 'POPULATION': 'POPULATION', 'CODE_ARR': 'CODE_ARR', 'CODE_DEPT': 'CODE_DEPT', 'NOM_DEPT': 'NOM_DEPT', 'CODE_REG': 'CODE_REG', 'NOM_REG': 'NOM_REG', });
lyr_Fusionn_7.set('fieldAliases', {'fid': 'fid', 'ID_GEOFLA': 'ID_GEOFLA', 'CODE_COM': 'CODE_COM', 'INSEE_COM': 'INSEE_COM', 'NOM_COM': 'NOM_COM', 'STATUT': 'STATUT', 'X_CHF_LIEU': 'X_CHF_LIEU', 'Y_CHF_LIEU': 'Y_CHF_LIEU', 'X_CENTROID': 'X_CENTROID', 'Y_CENTROID': 'Y_CENTROID', 'Z_MOYEN': 'Z_MOYEN', 'SUPERFICIE': 'SUPERFICIE', 'POPULATION': 'POPULATION', 'CODE_ARR': 'CODE_ARR', 'CODE_DEPT': 'CODE_DEPT', 'NOM_DEPT': 'NOM_DEPT', 'CODE_REG': 'CODE_REG', 'NOM_REG': 'NOM_REG', 'layer': 'layer', 'path': 'path', });
lyr_CCVMALimite_8.set('fieldAliases', {'fid': 'fid', 'ID_GEOFLA': 'ID_GEOFLA', 'CODE_COM': 'CODE_COM', 'INSEE_COM': 'INSEE_COM', 'NOM_COM': 'NOM_COM', 'STATUT': 'STATUT', 'X_CHF_LIEU': 'X_CHF_LIEU', 'Y_CHF_LIEU': 'Y_CHF_LIEU', 'X_CENTROID': 'X_CENTROID', 'Y_CENTROID': 'Y_CENTROID', 'Z_MOYEN': 'Z_MOYEN', 'SUPERFICIE': 'SUPERFICIE', 'POPULATION': 'POPULATION', 'CODE_ARR': 'CODE_ARR', 'CODE_DEPT': 'CODE_DEPT', 'NOM_DEPT': 'NOM_DEPT', 'CODE_REG': 'CODE_REG', 'NOM_REG': 'NOM_REG', });
lyr_CCHLALimite_9.set('fieldAliases', {'fid': 'fid', 'ID_GEOFLA': 'ID_GEOFLA', 'CODE_COM': 'CODE_COM', 'INSEE_COM': 'INSEE_COM', 'NOM_COM': 'NOM_COM', 'STATUT': 'STATUT', 'X_CHF_LIEU': 'X_CHF_LIEU', 'Y_CHF_LIEU': 'Y_CHF_LIEU', 'X_CENTROID': 'X_CENTROID', 'Y_CENTROID': 'Y_CENTROID', 'Z_MOYEN': 'Z_MOYEN', 'SUPERFICIE': 'SUPERFICIE', 'POPULATION': 'POPULATION', 'CODE_ARR': 'CODE_ARR', 'CODE_DEPT': 'CODE_DEPT', 'NOM_DEPT': 'NOM_DEPT', 'CODE_REG': 'CODE_REG', 'NOM_REG': 'NOM_REG', });
lyr_CCLALimite_10.set('fieldAliases', {'fid': 'fid', 'ID_GEOFLA': 'ID_GEOFLA', 'CODE_COM': 'CODE_COM', 'INSEE_COM': 'INSEE_COM', 'NOM_COM': 'NOM_COM', 'STATUT': 'STATUT', 'X_CHF_LIEU': 'X_CHF_LIEU', 'Y_CHF_LIEU': 'Y_CHF_LIEU', 'X_CENTROID': 'X_CENTROID', 'Y_CENTROID': 'Y_CENTROID', 'Z_MOYEN': 'Z_MOYEN', 'SUPERFICIE': 'SUPERFICIE', 'POPULATION': 'POPULATION', 'CODE_ARR': 'CODE_ARR', 'CODE_DEPT': 'CODE_DEPT', 'NOM_DEPT': 'NOM_DEPT', 'CODE_REG': 'CODE_REG', 'NOM_REG': 'NOM_REG', });
lyr_CCPAlimite_11.set('fieldAliases', {'fid': 'fid', 'ID_GEOFLA': 'ID_GEOFLA', 'CODE_COM': 'CODE_COM', 'INSEE_COM': 'INSEE_COM', 'NOM_COM': 'NOM_COM', 'STATUT': 'STATUT', 'X_CHF_LIEU': 'X_CHF_LIEU', 'Y_CHF_LIEU': 'Y_CHF_LIEU', 'X_CENTROID': 'X_CENTROID', 'Y_CENTROID': 'Y_CENTROID', 'Z_MOYEN': 'Z_MOYEN', 'SUPERFICIE': 'SUPERFICIE', 'POPULATION': 'POPULATION', 'CODE_ARR': 'CODE_ARR', 'CODE_DEPT': 'CODE_DEPT', 'NOM_DEPT': 'NOM_DEPT', 'CODE_REG': 'CODE_REG', 'NOM_REG': 'NOM_REG', });
lyr_CCPMLimite_12.set('fieldAliases', {'fid': 'fid', 'ID_GEOFLA': 'ID_GEOFLA', 'CODE_COM': 'CODE_COM', 'INSEE_COM': 'INSEE_COM', 'NOM_COM': 'NOM_COM', 'STATUT': 'STATUT', 'X_CHF_LIEU': 'X_CHF_LIEU', 'Y_CHF_LIEU': 'Y_CHF_LIEU', 'X_CENTROID': 'X_CENTROID', 'Y_CENTROID': 'Y_CENTROID', 'Z_MOYEN': 'Z_MOYEN', 'SUPERFICIE': 'SUPERFICIE', 'POPULATION': 'POPULATION', 'CODE_ARR': 'CODE_ARR', 'CODE_DEPT': 'CODE_DEPT', 'NOM_DEPT': 'NOM_DEPT', 'CODE_REG': 'CODE_REG', 'NOM_REG': 'NOM_REG', });
lyr_CCLandesArmagnac_0.set('fieldImages', {'fid': 'TextEdit', 'ID_GEOFLA': 'TextEdit', 'CODE_COM': 'TextEdit', 'INSEE_COM': 'TextEdit', 'NOM_COM': 'TextEdit', 'STATUT': 'TextEdit', 'X_CHF_LIEU': 'Range', 'Y_CHF_LIEU': 'Range', 'X_CENTROID': 'Range', 'Y_CENTROID': 'Range', 'Z_MOYEN': 'Range', 'SUPERFICIE': 'TextEdit', 'POPULATION': 'TextEdit', 'CODE_ARR': 'TextEdit', 'CODE_DEPT': 'TextEdit', 'NOM_DEPT': 'TextEdit', 'CODE_REG': 'TextEdit', 'NOM_REG': 'TextEdit', });
lyr_CCVillneuveMarsanArm_1.set('fieldImages', {'fid': 'TextEdit', 'ID_GEOFLA': 'TextEdit', 'CODE_COM': 'TextEdit', 'INSEE_COM': 'TextEdit', 'NOM_COM': 'TextEdit', 'STATUT': 'TextEdit', 'X_CHF_LIEU': 'Range', 'Y_CHF_LIEU': 'Range', 'X_CENTROID': 'Range', 'Y_CENTROID': 'Range', 'Z_MOYEN': 'Range', 'SUPERFICIE': 'TextEdit', 'POPULATION': 'TextEdit', 'CODE_ARR': 'TextEdit', 'CODE_DEPT': 'TextEdit', 'NOM_DEPT': 'TextEdit', 'CODE_REG': 'TextEdit', 'NOM_REG': 'TextEdit', });
lyr_CCCantondePissos_2.set('fieldImages', {'fid': 'TextEdit', 'ID_GEOFLA': 'TextEdit', 'CODE_COM': 'TextEdit', 'INSEE_COM': 'TextEdit', 'NOM_COM': 'TextEdit', 'STATUT': 'TextEdit', 'X_CHF_LIEU': 'Range', 'Y_CHF_LIEU': 'Range', 'X_CENTROID': 'Range', 'Y_CENTROID': 'Range', 'Z_MOYEN': 'Range', 'SUPERFICIE': 'TextEdit', 'POPULATION': 'TextEdit', 'CODE_ARR': 'TextEdit', 'CODE_DEPT': 'TextEdit', 'NOM_DEPT': 'TextEdit', 'CODE_REG': 'TextEdit', 'NOM_REG': 'TextEdit', });
lyr_CCHLA_3.set('fieldImages', {'fid': 'TextEdit', 'ID_GEOFLA': 'TextEdit', 'CODE_COM': 'TextEdit', 'INSEE_COM': 'TextEdit', 'NOM_COM': 'TextEdit', 'STATUT': 'TextEdit', 'X_CHF_LIEU': 'Range', 'Y_CHF_LIEU': 'Range', 'X_CENTROID': 'Range', 'Y_CENTROID': 'Range', 'Z_MOYEN': 'Range', 'SUPERFICIE': 'TextEdit', 'POPULATION': 'TextEdit', 'CODE_ARR': 'TextEdit', 'CODE_DEPT': 'TextEdit', 'NOM_DEPT': 'TextEdit', 'CODE_REG': 'TextEdit', 'NOM_REG': 'TextEdit', });
lyr_CCPA_4.set('fieldImages', {'fid': 'TextEdit', 'ID_GEOFLA': 'TextEdit', 'CODE_COM': 'TextEdit', 'INSEE_COM': 'TextEdit', 'NOM_COM': 'TextEdit', 'STATUT': 'TextEdit', 'X_CHF_LIEU': 'Range', 'Y_CHF_LIEU': 'Range', 'X_CENTROID': 'Range', 'Y_CENTROID': 'Range', 'Z_MOYEN': 'Range', 'SUPERFICIE': 'TextEdit', 'POPULATION': 'TextEdit', 'CODE_ARR': 'TextEdit', 'CODE_DEPT': 'TextEdit', 'NOM_DEPT': 'TextEdit', 'CODE_REG': 'TextEdit', 'NOM_REG': 'TextEdit', });
lyr_CCPaysMorcenais_5.set('fieldImages', {'fid': 'TextEdit', 'ID_GEOFLA': 'TextEdit', 'CODE_COM': 'TextEdit', 'INSEE_COM': 'TextEdit', 'NOM_COM': 'TextEdit', 'STATUT': 'TextEdit', 'X_CHF_LIEU': 'Range', 'Y_CHF_LIEU': 'Range', 'X_CENTROID': 'Range', 'Y_CENTROID': 'Range', 'Z_MOYEN': 'Range', 'SUPERFICIE': 'TextEdit', 'POPULATION': 'TextEdit', 'CODE_ARR': 'TextEdit', 'CODE_DEPT': 'TextEdit', 'NOM_DEPT': 'TextEdit', 'CODE_REG': 'TextEdit', 'NOM_REG': 'TextEdit', });
lyr_CCCPLimite_6.set('fieldImages', {'fid': 'TextEdit', 'ID_GEOFLA': 'TextEdit', 'CODE_COM': 'TextEdit', 'INSEE_COM': 'TextEdit', 'NOM_COM': 'TextEdit', 'STATUT': 'TextEdit', 'X_CHF_LIEU': 'Range', 'Y_CHF_LIEU': 'Range', 'X_CENTROID': 'Range', 'Y_CENTROID': 'Range', 'Z_MOYEN': 'Range', 'SUPERFICIE': 'TextEdit', 'POPULATION': 'TextEdit', 'CODE_ARR': 'TextEdit', 'CODE_DEPT': 'TextEdit', 'NOM_DEPT': 'TextEdit', 'CODE_REG': 'TextEdit', 'NOM_REG': 'TextEdit', });
lyr_Fusionn_7.set('fieldImages', {'fid': '', 'ID_GEOFLA': '', 'CODE_COM': '', 'INSEE_COM': '', 'NOM_COM': '', 'STATUT': '', 'X_CHF_LIEU': '', 'Y_CHF_LIEU': '', 'X_CENTROID': '', 'Y_CENTROID': '', 'Z_MOYEN': '', 'SUPERFICIE': '', 'POPULATION': '', 'CODE_ARR': '', 'CODE_DEPT': '', 'NOM_DEPT': '', 'CODE_REG': '', 'NOM_REG': '', 'layer': '', 'path': '', });
lyr_CCVMALimite_8.set('fieldImages', {'fid': 'TextEdit', 'ID_GEOFLA': 'TextEdit', 'CODE_COM': 'TextEdit', 'INSEE_COM': 'TextEdit', 'NOM_COM': 'TextEdit', 'STATUT': 'TextEdit', 'X_CHF_LIEU': 'Range', 'Y_CHF_LIEU': 'Range', 'X_CENTROID': 'Range', 'Y_CENTROID': 'Range', 'Z_MOYEN': 'Range', 'SUPERFICIE': 'TextEdit', 'POPULATION': 'TextEdit', 'CODE_ARR': 'TextEdit', 'CODE_DEPT': 'TextEdit', 'NOM_DEPT': 'TextEdit', 'CODE_REG': 'TextEdit', 'NOM_REG': 'TextEdit', });
lyr_CCHLALimite_9.set('fieldImages', {'fid': 'TextEdit', 'ID_GEOFLA': 'TextEdit', 'CODE_COM': 'TextEdit', 'INSEE_COM': 'TextEdit', 'NOM_COM': 'TextEdit', 'STATUT': 'TextEdit', 'X_CHF_LIEU': 'Range', 'Y_CHF_LIEU': 'Range', 'X_CENTROID': 'Range', 'Y_CENTROID': 'Range', 'Z_MOYEN': 'Range', 'SUPERFICIE': 'TextEdit', 'POPULATION': 'TextEdit', 'CODE_ARR': 'TextEdit', 'CODE_DEPT': 'TextEdit', 'NOM_DEPT': 'TextEdit', 'CODE_REG': 'TextEdit', 'NOM_REG': 'TextEdit', });
lyr_CCLALimite_10.set('fieldImages', {'fid': 'TextEdit', 'ID_GEOFLA': 'TextEdit', 'CODE_COM': 'TextEdit', 'INSEE_COM': 'TextEdit', 'NOM_COM': 'TextEdit', 'STATUT': 'TextEdit', 'X_CHF_LIEU': 'Range', 'Y_CHF_LIEU': 'Range', 'X_CENTROID': 'Range', 'Y_CENTROID': 'Range', 'Z_MOYEN': 'Range', 'SUPERFICIE': 'TextEdit', 'POPULATION': 'TextEdit', 'CODE_ARR': 'TextEdit', 'CODE_DEPT': 'TextEdit', 'NOM_DEPT': 'TextEdit', 'CODE_REG': 'TextEdit', 'NOM_REG': 'TextEdit', });
lyr_CCPAlimite_11.set('fieldImages', {'fid': 'TextEdit', 'ID_GEOFLA': 'TextEdit', 'CODE_COM': 'TextEdit', 'INSEE_COM': 'TextEdit', 'NOM_COM': 'TextEdit', 'STATUT': 'TextEdit', 'X_CHF_LIEU': 'Range', 'Y_CHF_LIEU': 'Range', 'X_CENTROID': 'Range', 'Y_CENTROID': 'Range', 'Z_MOYEN': 'Range', 'SUPERFICIE': 'TextEdit', 'POPULATION': 'TextEdit', 'CODE_ARR': 'TextEdit', 'CODE_DEPT': 'TextEdit', 'NOM_DEPT': 'TextEdit', 'CODE_REG': 'TextEdit', 'NOM_REG': 'TextEdit', });
lyr_CCPMLimite_12.set('fieldImages', {'fid': 'TextEdit', 'ID_GEOFLA': 'TextEdit', 'CODE_COM': 'TextEdit', 'INSEE_COM': 'TextEdit', 'NOM_COM': 'TextEdit', 'STATUT': 'TextEdit', 'X_CHF_LIEU': 'Range', 'Y_CHF_LIEU': 'Range', 'X_CENTROID': 'Range', 'Y_CENTROID': 'Range', 'Z_MOYEN': 'Range', 'SUPERFICIE': 'TextEdit', 'POPULATION': 'TextEdit', 'CODE_ARR': 'TextEdit', 'CODE_DEPT': 'TextEdit', 'NOM_DEPT': 'TextEdit', 'CODE_REG': 'TextEdit', 'NOM_REG': 'TextEdit', });
lyr_CCLandesArmagnac_0.set('fieldLabels', {'fid': 'no label', 'ID_GEOFLA': 'no label', 'CODE_COM': 'no label', 'INSEE_COM': 'no label', 'NOM_COM': 'no label', 'STATUT': 'no label', 'X_CHF_LIEU': 'no label', 'Y_CHF_LIEU': 'no label', 'X_CENTROID': 'no label', 'Y_CENTROID': 'no label', 'Z_MOYEN': 'no label', 'SUPERFICIE': 'no label', 'POPULATION': 'no label', 'CODE_ARR': 'no label', 'CODE_DEPT': 'no label', 'NOM_DEPT': 'no label', 'CODE_REG': 'no label', 'NOM_REG': 'no label', });
lyr_CCVillneuveMarsanArm_1.set('fieldLabels', {'fid': 'no label', 'ID_GEOFLA': 'no label', 'CODE_COM': 'no label', 'INSEE_COM': 'no label', 'NOM_COM': 'no label', 'STATUT': 'no label', 'X_CHF_LIEU': 'no label', 'Y_CHF_LIEU': 'no label', 'X_CENTROID': 'no label', 'Y_CENTROID': 'no label', 'Z_MOYEN': 'no label', 'SUPERFICIE': 'no label', 'POPULATION': 'no label', 'CODE_ARR': 'no label', 'CODE_DEPT': 'no label', 'NOM_DEPT': 'no label', 'CODE_REG': 'no label', 'NOM_REG': 'no label', });
lyr_CCCantondePissos_2.set('fieldLabels', {'fid': 'no label', 'ID_GEOFLA': 'no label', 'CODE_COM': 'no label', 'INSEE_COM': 'no label', 'NOM_COM': 'no label', 'STATUT': 'no label', 'X_CHF_LIEU': 'no label', 'Y_CHF_LIEU': 'no label', 'X_CENTROID': 'no label', 'Y_CENTROID': 'no label', 'Z_MOYEN': 'no label', 'SUPERFICIE': 'no label', 'POPULATION': 'no label', 'CODE_ARR': 'no label', 'CODE_DEPT': 'no label', 'NOM_DEPT': 'no label', 'CODE_REG': 'no label', 'NOM_REG': 'no label', });
lyr_CCHLA_3.set('fieldLabels', {'fid': 'no label', 'ID_GEOFLA': 'no label', 'CODE_COM': 'no label', 'INSEE_COM': 'no label', 'NOM_COM': 'no label', 'STATUT': 'no label', 'X_CHF_LIEU': 'no label', 'Y_CHF_LIEU': 'no label', 'X_CENTROID': 'no label', 'Y_CENTROID': 'no label', 'Z_MOYEN': 'no label', 'SUPERFICIE': 'no label', 'POPULATION': 'no label', 'CODE_ARR': 'no label', 'CODE_DEPT': 'no label', 'NOM_DEPT': 'no label', 'CODE_REG': 'no label', 'NOM_REG': 'no label', });
lyr_CCPA_4.set('fieldLabels', {'fid': 'no label', 'ID_GEOFLA': 'no label', 'CODE_COM': 'no label', 'INSEE_COM': 'no label', 'NOM_COM': 'no label', 'STATUT': 'no label', 'X_CHF_LIEU': 'no label', 'Y_CHF_LIEU': 'no label', 'X_CENTROID': 'no label', 'Y_CENTROID': 'no label', 'Z_MOYEN': 'no label', 'SUPERFICIE': 'no label', 'POPULATION': 'no label', 'CODE_ARR': 'no label', 'CODE_DEPT': 'no label', 'NOM_DEPT': 'no label', 'CODE_REG': 'no label', 'NOM_REG': 'no label', });
lyr_CCPaysMorcenais_5.set('fieldLabels', {'fid': 'no label', 'ID_GEOFLA': 'no label', 'CODE_COM': 'no label', 'INSEE_COM': 'no label', 'NOM_COM': 'no label', 'STATUT': 'no label', 'X_CHF_LIEU': 'no label', 'Y_CHF_LIEU': 'no label', 'X_CENTROID': 'no label', 'Y_CENTROID': 'no label', 'Z_MOYEN': 'no label', 'SUPERFICIE': 'no label', 'POPULATION': 'no label', 'CODE_ARR': 'no label', 'CODE_DEPT': 'no label', 'NOM_DEPT': 'no label', 'CODE_REG': 'no label', 'NOM_REG': 'no label', });
lyr_CCCPLimite_6.set('fieldLabels', {'fid': 'no label', 'ID_GEOFLA': 'no label', 'CODE_COM': 'no label', 'INSEE_COM': 'no label', 'NOM_COM': 'no label', 'STATUT': 'no label', 'X_CHF_LIEU': 'no label', 'Y_CHF_LIEU': 'no label', 'X_CENTROID': 'no label', 'Y_CENTROID': 'no label', 'Z_MOYEN': 'no label', 'SUPERFICIE': 'no label', 'POPULATION': 'no label', 'CODE_ARR': 'no label', 'CODE_DEPT': 'no label', 'NOM_DEPT': 'no label', 'CODE_REG': 'no label', 'NOM_REG': 'no label', });
lyr_Fusionn_7.set('fieldLabels', {'fid': 'no label', 'ID_GEOFLA': 'no label', 'CODE_COM': 'no label', 'INSEE_COM': 'no label', 'NOM_COM': 'no label', 'STATUT': 'no label', 'X_CHF_LIEU': 'no label', 'Y_CHF_LIEU': 'no label', 'X_CENTROID': 'no label', 'Y_CENTROID': 'no label', 'Z_MOYEN': 'no label', 'SUPERFICIE': 'no label', 'POPULATION': 'no label', 'CODE_ARR': 'no label', 'CODE_DEPT': 'no label', 'NOM_DEPT': 'no label', 'CODE_REG': 'no label', 'NOM_REG': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_CCVMALimite_8.set('fieldLabels', {'fid': 'no label', 'ID_GEOFLA': 'no label', 'CODE_COM': 'no label', 'INSEE_COM': 'no label', 'NOM_COM': 'no label', 'STATUT': 'no label', 'X_CHF_LIEU': 'no label', 'Y_CHF_LIEU': 'no label', 'X_CENTROID': 'no label', 'Y_CENTROID': 'no label', 'Z_MOYEN': 'no label', 'SUPERFICIE': 'no label', 'POPULATION': 'no label', 'CODE_ARR': 'no label', 'CODE_DEPT': 'no label', 'NOM_DEPT': 'no label', 'CODE_REG': 'no label', 'NOM_REG': 'no label', });
lyr_CCHLALimite_9.set('fieldLabels', {'fid': 'no label', 'ID_GEOFLA': 'no label', 'CODE_COM': 'no label', 'INSEE_COM': 'no label', 'NOM_COM': 'no label', 'STATUT': 'no label', 'X_CHF_LIEU': 'no label', 'Y_CHF_LIEU': 'no label', 'X_CENTROID': 'no label', 'Y_CENTROID': 'no label', 'Z_MOYEN': 'no label', 'SUPERFICIE': 'no label', 'POPULATION': 'no label', 'CODE_ARR': 'no label', 'CODE_DEPT': 'no label', 'NOM_DEPT': 'no label', 'CODE_REG': 'no label', 'NOM_REG': 'no label', });
lyr_CCLALimite_10.set('fieldLabels', {'fid': 'no label', 'ID_GEOFLA': 'no label', 'CODE_COM': 'no label', 'INSEE_COM': 'no label', 'NOM_COM': 'no label', 'STATUT': 'no label', 'X_CHF_LIEU': 'no label', 'Y_CHF_LIEU': 'no label', 'X_CENTROID': 'no label', 'Y_CENTROID': 'no label', 'Z_MOYEN': 'no label', 'SUPERFICIE': 'no label', 'POPULATION': 'no label', 'CODE_ARR': 'no label', 'CODE_DEPT': 'no label', 'NOM_DEPT': 'no label', 'CODE_REG': 'no label', 'NOM_REG': 'no label', });
lyr_CCPAlimite_11.set('fieldLabels', {'fid': 'no label', 'ID_GEOFLA': 'no label', 'CODE_COM': 'no label', 'INSEE_COM': 'no label', 'NOM_COM': 'no label', 'STATUT': 'no label', 'X_CHF_LIEU': 'no label', 'Y_CHF_LIEU': 'no label', 'X_CENTROID': 'no label', 'Y_CENTROID': 'no label', 'Z_MOYEN': 'no label', 'SUPERFICIE': 'no label', 'POPULATION': 'no label', 'CODE_ARR': 'no label', 'CODE_DEPT': 'no label', 'NOM_DEPT': 'no label', 'CODE_REG': 'no label', 'NOM_REG': 'no label', });
lyr_CCPMLimite_12.set('fieldLabels', {'fid': 'no label', 'ID_GEOFLA': 'no label', 'CODE_COM': 'no label', 'INSEE_COM': 'no label', 'NOM_COM': 'header label', 'STATUT': 'no label', 'X_CHF_LIEU': 'no label', 'Y_CHF_LIEU': 'no label', 'X_CENTROID': 'no label', 'Y_CENTROID': 'no label', 'Z_MOYEN': 'no label', 'SUPERFICIE': 'no label', 'POPULATION': 'no label', 'CODE_ARR': 'no label', 'CODE_DEPT': 'no label', 'NOM_DEPT': 'no label', 'CODE_REG': 'no label', 'NOM_REG': 'no label', });
lyr_CCPMLimite_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});