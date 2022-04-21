//visualizing elevation with Google Earth Engine
//walkthough here: https://developers.google.com/earth-engine/tutorials/tutorial_api_02

//loading in our map images - using the image constructer "ee."
var map_image = ee.Image('CGIAR/SRTM90_V4');

//map view update - zooming in on the grand canyon 
Map.setCenter(-112.8598, 36.2841, 9);

//adding the map layer to our map
Map.addLayer(map_image);


//printing map_image data to console 
print('SRTM image', map_image);


//adding layer to map, setting our visulization options 
Map.addLayer(map_image, {min: 0, max: 3000}, 'custom visualization');

//adding the color pallete 
Map.addLayer(map_image, {min: 0, max: 3000, palette: ['blue', 'green', 'red']},
    'custom palette');
