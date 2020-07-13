var tbody = d3.select('#main-table')
var filterbutton = d3.select('#filter-btn');
filterbutton.on('click', runtablefilter);
var clearbutton = d3.select('#clear-filter-btn')
clearbutton.on('click', runclearfilter)


function buildtable(tableinfo){
    var row = tbody.append('tr')
    var sightingvalues = Object.values(tableinfo)
    sightingvalues.forEach(sightingvalue => {
       var cell = row.append('td')
       cell.text(sightingvalue)
   }); 
   
};

function runtablefilter(){
    tbody.html("");
    var filtereddata = data
/*
    var idarray = ['datetime','city','state','shape']
    idarray.forEach(htmlID => {
        var idElement = d3.select(`#${htmlID}`)
        var idValue = idElement.property('value') 
        console.log(`tabe length before filtering: ${filtereddata.length}`)//debug 
        console.log(`value to be filtered by: ${idValue}`)//debug
        console.log(`object key to use: ${htmlID}`)//debug
        if (idValue !="") {
            filtereddata = filtereddata.filter(sighting => sighting.htmlID == idValue)
            //console.log(`this is the object: ${sighting}`)//debug
            console.log(`table lenght after filtering: ${filtereddata.length}`)//debug
        } 
    })    

*/
    var dateElement = d3.select('#datetime')
    var dateValue = dateElement.property('value')  
    if (dateValue !="") {
        filtereddata = filtereddata.filter(sighting => sighting.datetime == dateValue)
    }

    var cityElement = d3.select('#city')
    var cityValue = cityElement.property('value')
    if (cityValue !=""){
        filtereddata = filtereddata.filter(sighting => sighting.city == cityValue)
    }

    var stateElement = d3.select('#state')
    var stateValue = stateElement.property('value')
    if (stateValue != ""){
        filtereddata = filtereddata.filter(sighting => sighting.state == stateValue)
    }

    var shapeElement = d3.select('#shape')
    var shapeValue = shapeElement.property('value')
    if (shapeValue != ""){
        filtereddata = filtereddata.filter(sighting => sighting.shape == shapeValue)
    } 
    
    filtereddata.forEach(buildtable)
};

function runclearfilter(){
    tbody.html("");
    data.forEach(buildtable)
    document.getElementById("my-form").reset();
    filtereddata = []
};


data.forEach(sightingobjects => {
  buildtable(sightingobjects)
});