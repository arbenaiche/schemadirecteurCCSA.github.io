var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CCSA_Limitesepci_copie_1 = new ol.format.GeoJSON();
var features_CCSA_Limitesepci_copie_1 = format_CCSA_Limitesepci_copie_1.readFeatures(json_CCSA_Limitesepci_copie_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CCSA_Limitesepci_copie_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CCSA_Limitesepci_copie_1.addFeatures(features_CCSA_Limitesepci_copie_1);
var lyr_CCSA_Limitesepci_copie_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CCSA_Limitesepci_copie_1, 
                style: style_CCSA_Limitesepci_copie_1,
                popuplayertitle: "CCSA_Limites — epci_copie",
                interactive: true,
                title: '<img src="styles/legend/CCSA_Limitesepci_copie_1.png" /> CCSA_Limites — epci_copie'
            });
var format_V32_nouv_2 = new ol.format.GeoJSON();
var features_V32_nouv_2 = format_V32_nouv_2.readFeatures(json_V32_nouv_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_V32_nouv_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_V32_nouv_2.addFeatures(features_V32_nouv_2);
var lyr_V32_nouv_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_V32_nouv_2, 
                style: style_V32_nouv_2,
                popuplayertitle: "V32_nouv",
                interactive: true,
                title: '<img src="styles/legend/V32_nouv_2.png" /> V32_nouv'
            });
var format_EXISTANT_3 = new ol.format.GeoJSON();
var features_EXISTANT_3 = format_EXISTANT_3.readFeatures(json_EXISTANT_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EXISTANT_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EXISTANT_3.addFeatures(features_EXISTANT_3);
var lyr_EXISTANT_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EXISTANT_3, 
                style: style_EXISTANT_3,
                popuplayertitle: "EXISTANT",
                interactive: true,
                title: '<img src="styles/legend/EXISTANT_3.png" /> EXISTANT'
            });
var format_Itinrairessecondaires_4 = new ol.format.GeoJSON();
var features_Itinrairessecondaires_4 = format_Itinrairessecondaires_4.readFeatures(json_Itinrairessecondaires_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Itinrairessecondaires_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Itinrairessecondaires_4.addFeatures(features_Itinrairessecondaires_4);
var lyr_Itinrairessecondaires_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Itinrairessecondaires_4, 
                style: style_Itinrairessecondaires_4,
                popuplayertitle: "Itinéraires secondaires",
                interactive: true,
                title: '<img src="styles/legend/Itinrairessecondaires_4.png" /> Itinéraires secondaires'
            });
var format_Itinrairesstructurants_5 = new ol.format.GeoJSON();
var features_Itinrairesstructurants_5 = format_Itinrairesstructurants_5.readFeatures(json_Itinrairesstructurants_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Itinrairesstructurants_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Itinrairesstructurants_5.addFeatures(features_Itinrairesstructurants_5);
var lyr_Itinrairesstructurants_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Itinrairesstructurants_5, 
                style: style_Itinrairesstructurants_5,
                popuplayertitle: "Itinéraires structurants",
                interactive: true,
                title: '<img src="styles/legend/Itinrairesstructurants_5.png" /> Itinéraires structurants'
            });

lyr_OSMStandard_0.setVisible(true);lyr_CCSA_Limitesepci_copie_1.setVisible(true);lyr_V32_nouv_2.setVisible(true);lyr_EXISTANT_3.setVisible(true);lyr_Itinrairessecondaires_4.setVisible(true);lyr_Itinrairesstructurants_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_CCSA_Limitesepci_copie_1,lyr_V32_nouv_2,lyr_EXISTANT_3,lyr_Itinrairessecondaires_4,lyr_Itinrairesstructurants_5];
lyr_CCSA_Limitesepci_copie_1.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'CODE_SIREN': 'CODE_SIREN', 'NATURE': 'NATURE', 'NOM': 'NOM', });
lyr_V32_nouv_2.set('fieldAliases', {'id': 'id', 'nom': 'nom', });
lyr_EXISTANT_3.set('fieldAliases', {'id': 'id', 'nom': 'nom', });
lyr_Itinrairessecondaires_4.set('fieldAliases', {'id': 'id', 'Longueur': 'Longueur', });
lyr_Itinrairesstructurants_5.set('fieldAliases', {'id': 'id', 'Longueur': 'Longueur', 'Commentair': 'Commentair', });
lyr_CCSA_Limitesepci_copie_1.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'CODE_SIREN': 'TextEdit', 'NATURE': 'TextEdit', 'NOM': 'TextEdit', });
lyr_V32_nouv_2.set('fieldImages', {'id': 'TextEdit', 'nom': 'TextEdit', });
lyr_EXISTANT_3.set('fieldImages', {'id': 'TextEdit', 'nom': 'TextEdit', });
lyr_Itinrairessecondaires_4.set('fieldImages', {'id': 'TextEdit', 'Longueur': 'TextEdit', });
lyr_Itinrairesstructurants_5.set('fieldImages', {'id': 'TextEdit', 'Longueur': 'TextEdit', 'Commentair': 'TextEdit', });
lyr_CCSA_Limitesepci_copie_1.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'CODE_SIREN': 'no label', 'NATURE': 'no label', 'NOM': 'no label', });
lyr_V32_nouv_2.set('fieldLabels', {'id': 'no label', 'nom': 'no label', });
lyr_EXISTANT_3.set('fieldLabels', {'id': 'no label', 'nom': 'no label', });
lyr_Itinrairessecondaires_4.set('fieldLabels', {'id': 'no label', 'Longueur': 'no label', });
lyr_Itinrairesstructurants_5.set('fieldLabels', {'id': 'no label', 'Longueur': 'no label', 'Commentair': 'no label', });
lyr_Itinrairesstructurants_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});