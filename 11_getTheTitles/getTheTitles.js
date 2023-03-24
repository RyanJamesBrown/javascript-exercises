const getTheTitles = function(objects) {
    let titles = [];
    for(i=0; i < objects.length; i++){
        titles[i] =objects[i].title;
    }
    return titles;

};

// Do not edit below this line
module.exports = getTheTitles;
