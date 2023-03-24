const findTheOldest = function(people) {
    let currentOldestPerson = people[0];
    let currentOldestPersonAge = 1;

    people.forEach(person => {
        
        if (!person.yearOfDeath) {
            death = new Date().getFullYear();
        }
        else {death = person.yearOfDeath;}
        
        if(death - person.yearOfBirth > currentOldestPersonAge){
            currentOldestPerson = person;
            currentOldestPersonAge = death - person.yearOfBirth;
        }



    }
    )

    return currentOldestPerson;
    //return people[0];

};

// Do not edit below this line
module.exports = findTheOldest;
