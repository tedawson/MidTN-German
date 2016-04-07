L.mapbox.accessToken = 'pk.eyJ1IjoidGVkYXdzb24iLCJhIjoiWERiV1VUYyJ9.OXZwaFinKkWwA3KKtAxzsQ';
var map = L.mapbox.map('map', 'tedawson.jg9981oe')
    .setView([36.1475664, -86.8013206], 12);
var myLayer = L.mapbox.featureLayer().addTo(map);
var university = "#09FF00";
var learning = "#046E00";
var eatery = "#F40B0B";
var culture = "#C70707";
var historic1 = "#FFFC1A";
var historic2 = "#B6C000";
var bidnis = "#1F00B8";
var geoJson =
[
//Places of German teaching
//Post-secondary
//point 1 Vanderbilt
	{
	"type": "Feature",
	"geometry": {
	"type": "Point",
	"coordinates": [-86.8013206, 36.1475664]
	},
	"properties":{
	"title": "Vanderbilt University", 
	"marker-color": university,
	"marker-size": "medium",
	"image": "http://www.nursing.vanderbilt.edu/visitors/images/furman.gif",
	"description": "Vanderbilt awards BAs, MAs and PhDs in German. Visit the <a href='http://as.vanderbilt.edu/german'>department website</a> for more information.",
	}
	},
	//Belmont 2
	{
	"type": "Feature",
	"geometry": {
	"type": "Point",
	"coordinates": [-86.7940129, 36.1356358]
	},
	"properties":{
	"title": "Belmont University",
	"marker-color": university,
	"description": "Belmont offers majors and minors in German. Visit the <a href='http://www.belmont.edu/languages/german/index.html'>department website</a> for more information."
	}
	},
	//Lipscomb 3
	{
	"type": "Feature",
	"geometry": {
	"type": "Point",
	"coordinates": [-86.80006, 36.105636]
	},
	"properties":{
	"title": "Lipscomb University",
	"marker-color": university,
	"description": "Lipscomb offers a German major or minor. Visit the <a href=http://www.lipscomb.edu/foreignlanguages/german'>department website</a> for more information."
	}
	},
	//point MTSU 4
	{
	"type": "Feature",
	"geometry": {
	"type": "Point",
	"coordinates": [-86.359373, 35.846709]
	},
	"properties":{
	"title": "Middle TN State University",
	"marker-color": university,
	"description": "MTSU offers German majors and minors. Visit the <a href='http://mtsu.edu/programs/german/'>department website</a> for more information."
	}
	},
	//point Austin Peay 5 
	{
	"type": "Feature",
	"geometry": {
	"type": "Point",
	"coordinates": [-87.354097, 36.537977]
	},
	"properties":{
	"title": "Austin Peay State University",
	"marker-color": university,
	"description": "Austin Peay has offers German majors and minors. Visit the <a href='http://www.apsu.edu/langlit/for/german_major'>department website</a> for more information."
	}
	},
	//other places of teaching
	//point Hume-Fogg 1
	{
	"type": "Feature",
	"geometry": {
	"type": "Point",
	"coordinates": [-86.78179, 36.159655]
	},
	"properties":{
	"title": "Hume-Fogg Academic Magnet High School",
	"marker-color": learning,
	"description": "Hume-Fogg offers German 1 - German AP."
	}
	},
	//point MLK 2
	{
	"type": "Feature",
	"geometry": {
	"type": "Point",
	"coordinates": [-86.8009851, 36.162047]
	},
	"properties":{
	"title": "MLK Magnet School",
	"marker-color": learning,
	"description": "MLK offers German 1 - German AP."
	}
	},
	//point TFLI 3
	{
	"type": "Feature",
	"geometry": {
	"type": "Point",
	"coordinates": [-86.797424, 36.192392]
	},
	"properties":{
	"title": "Tennessee Foreign Language Institute",
	"marker-color": learning,
	"description": "The Tennessee Foreign Language Institute offers courses in German."
	}
	},
	// Brentwood High 4
	{
	"type": "Feature",
	"geometry": {
	"type": "Point",
	"coordinates": [-86.8147883, 36.0156133]
	},
	"properties":{
	"title": "Brentwood High School",
	"marker-color": learning,
	"description": "This is the best place to learn German because I am married to the German teacher."
	}
	},
	// MBA 5
	{
	"type": "Feature",
	"geometry": {
	"type": "Point",
	"coordinates": [-86.83662, 36.128724]
	},
	"properties":{
	"title": "Montgomery Bell Academy",
	"marker-color": learning,
	"description": "MBA offers German classes."
	}
	},
	// Ravenwood 6
	{
	"type": "Feature",
	"geometry": {
	"type": "Point",
	"coordinates": [-86.765533, 35.955837]
	},
	"properties":{
	"title": "Ravenwood High School",
	"marker-color": learning,
	"description": "Ravenwood offers German classes."
	}
	},
	// Centennial 7 
	{
	"type": "Feature",
	"geometry": {
	"type": "Point",
	"coordinates": [-86.821998, 35.930181]
	},
	"properties":{
	"title": "Centennial High School",
	"marker-color": learning,
	"description": "Centennial offers German classes."
	}
	},
	// Independence 8 
	{
	"type": "Feature",
	"geometry": {
	"type": "Point",
	"coordinates": [-86.891212, 35.825077]
	},
	"properties":{
	"title": "Independence High School",
	"marker-color": learning,
	"description": "Independence offers German classes."
	}
	},
	// Summit 9 
	{
	"type": "Feature",
	"geometry": {
	"type": "Point",
	"coordinates": [-86.874615, 35.772215]
	},
	"properties":{
	"title": "Summit High School",
	"marker-color": learning,
	"description": "Summit offers German classes."
	}
	},
	// McGavock 10 
	{
	"type": "Feature",
	"geometry": {
	"type": "Point",
	"coordinates": [-86.678882, 36.185759]
	},
	"properties":{
	"title": "McGavock High School",
	"marker-color": learning,
	"description": "McGavock offers German classes."
	}
	},
	//Cultural Sites
	//Eateries
	//Gersthaus 1 
	{
	"type": "Feature",
	"geometry": {
	"type": "Point",
	"coordinates": [-86.768306, 36.170869]
	},
	"properties":{
	"title": "The Gersthaus",
	"marker-color": eatery,
	"description": "This is a German restaurant. Info can be found on their <a href='http://www.gersthaus.com'>website</a>."
	}
	},
	//Cafe Edelweiss 2 
	{
	"type": "Feature",
	"geometry": {
	"type": "Point",
	"coordinates": [-87.417632, 36.593112]
	},
	"properties":{
	"title": "Cafe Edelweiss",
	"marker-color": eatery,
	"description": "This is a German restaurant."
	}
	},
	//Pharmacy 
	{
	"type": "Feature",
	"geometry": {
	"type": "Point",
	"coordinates": [-86.754182, 36.184876]
	},
	"properties":{
	"title": "The Pharmacy Burger Parlor and Beer Garden",
	"marker-color": eatery,
	"description": "Probably the most authentic Bratwurst in Davidson County can be found here."
	}
	},
	//Aldi 1 
	{
	"type": "Feature",
	"geometry": {
	"type": "Point",
	"coordinates": [-86.7475004, 36.1832094]
	},
	"properties":{
	"title": "Aldi",
	"marker-color": eatery,
	"description": "This German-owned grocery store is one of the best places to find German foods, especially around the holidays."
	}
	},
	//Aldi 2 
	{
	"type": "Feature",
	"geometry": {
	"type": "Point",
	"coordinates": [-86.8739786, 36.1450286]
	},
	"properties":{
	"title": "Aldi",
	"marker-color": eatery,
	"description": "This German-owned grocery store is one of the best places to find German foods, especially around the holidays."
	}
	},
	//Aldi 3 
	{
	"type": "Feature",
	"geometry": {
	"type": "Point",
	"coordinates": [-86.732259, 36.090253]
	},
	"properties":{
	"title": "Aldi",
	"marker-color": eatery,
	"description": "This German-owned grocery store is one of the best places to find German foods, especially around the holidays."
	}
	},
	//Cultural Sites
	//Other
	//Schermerhorn
	{
	"type": "Feature",
	"geometry": {
	"type": "Point",
	"coordinates": [-86.77544, 36.159774]
	},
	"properties":{
	"title": "Schermerhorn Symphony Center",
	"marker-color": culture,
	"description": "German music features heavily in the program of the Nashville Symphony. Check <a href='http://www.nashvillesymphony.org/tickets/calendar'>here</a> for the current concert calendar."
	}
	},
	//Blair
	{
	"type": "Feature",
	"geometry": {
	"type": "Point",
	"coordinates": [-86.806255, 36.138675]
	},
	"properties":{
	"title": "Blair School of Music",
	"marker-color": culture,
	"description": "Blair offers numerous outstanding concerts, many of them free, and including a great deal of German material. Check <a href='http://blair.vanderbilt.edu/'>here</a> for more information."
	}
	},
	//Belcourt
	{
	"type": "Feature",
	"geometry": {
	"type": "Point",
	"coordinates": [-86.801372, 36.136831]
	},
	"properties":{
	"title": "The Belcourt Theatre",
	"marker-color": culture,
	"description": "The Belcourt's program includes lots of international cinema. This is the first place to check for new German releases. Check their <a href='http://www.belcourt.org/'>website</a> for more information."
	}
	},
	//Sarratt
	{
	"type": "Feature",
	"geometry": {
	"type": "Point",
	"coordinates": [-86.803683, 36.1464975]
	},
	"properties":{
	"title": "International Lens",
	"marker-color": culture,
	"description": "The free international lens film series at Sarratt Cinema shows two or three new German films each semester. Check <a href='http://www.vanderbilt.edu/internationallens/'>here</a> for the current line-up."
	}
	},
	//Historical Sites
	//Morgan Park 1 
	{
	"type": "Feature",
	"geometry": {
	"type": "Point",
	"coordinates": [-86.78986, 36.181042]
	},
	"properties":{
	"title": "Morgan Park",
	"marker-color": historic2,
	"description": "Until 1909, what is now Morgan Park was the site of Frederick Laitenberger's German Biergarten"
	}
	},
	//Church of the Assumption 2 
	{
	"type": "Feature",
	"geometry": {
	"type": "Point",
	"coordinates": [-86.79154, 36.175428]
	},
	"properties":{
	"title": "Church of the Assumption",
	"image": "http://assumptionchurchnashville.org/images/church1.jpg",
	"marker-color": historic1,
	"description": "In 1859, the Diocese of Nashville met the need for a catholic church serving the German community by founding the Church of the Assumption. Sermons were said in German until the outbreak of WWI."
	}
	},
	//Businesses
	//Siemens
	{
	"type": "Feature",
	"geometry": {
	"type": "Point",
	"coordinates": [-86.699883, 36.0826823]
	},
	"properties":{
	"title": "Siemens Building Technologies",
	"marker-color": bidnis,
	"description": "This branch of the well-known Munich based company Siemens employs 40 in, among other things, energy conservation consulting."
	}
	},
	//Siemens 2
	{
	"type": "Feature",
	"geometry": {
	"type": "Point",
	"coordinates": [-86.728620, 36.1347042]
	},
	"properties":{
	"title": "Siemens Water Technologies",
	"marker-color": bidnis,
	"description": "A branch of the well-known Munich based company Siemens."
	}
	},
	//UBS
	{
	"type": "Feature",
	"geometry": {
	"type": "Point",
	"coordinates": [-86.8163035, 36.1431648]
	},
	"properties":{
	"title": "UBS Financial Services",
	"marker-color": bidnis,
	"description": "UBS is a Swiss company headquartered in the German-speaking cities of Basel and Zürich"
	}
	}
];
//myLayer.setGeoJSON(geoJson);

// popups 
// example source: https://www.mapbox.com/mapbox.js/example/v1.0.0/custom-marker-tooltip/
myLayer.on('layeradd', function(e) {
    var marker = e.layer,
        feature = marker.feature;
    var properties = feature.properties
    // Create custom popup content
    var image = ''
    if(properties.image){
      image = '<img src="' + properties.image + '" width="100px" style="float: left"/>'
    }

    var description = ''
    if(properties.description){
      description = properties.description
    }

    var popupContent = image + '<h3>' + properties.title + '</h3>'
                        + description

    // http://leafletjs.com/reference.html#popup
    marker.bindPopup(popupContent,{
        closeButton: true,
        minWidth: 450
    });
});
myLayer.setGeoJSON(geoJson);
map.legendControl.addLegend(document.getElementById('legend').innerHTML);
