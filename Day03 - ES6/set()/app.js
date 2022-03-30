const animal = [
    {
        ID: "DV8",
        Name: "Eurasian Collared-Dove",
        Type: "Dove"
    },
    {
        ID: "HK12",
        Name: "Bald Eagle",
        Type: "Hawk"
    },
    {
        ID: "HK6",
        Name: "Cooper's Hawk",
        Type: "Hawk"
    },
    {
        ID: "SP11",
        Name: "Bell's Sparrow",
        Type: "Sparrow"
    },
    {
        ID: "DV2",
        Name: "Mourning Dove",
        Type: "Dove"
    },
];

let zoo =  new Set(animal);
let tiger = {
    ID: "DV03",
    Name : "Tiger",
    Type: "animal"
}
console.log(zoo);

// //add to zoo new object 
let addAnimal = (animal) => {
    zoo.add(animal);
}
// addAnimal(tiger);

// //check if object already exist
let isExist = (animal) => {
    let checkExist = false;
    zoo.forEach(zo => {
        if ( zo.ID == animal.ID & zo.Name == animal.Name & zo.Type == animal.Type){
            checkExist = true;
        }
    })
    return checkExist;
}

console.log(isExist(tiger));

// // Delete object 
let deleteAnimailById = (animalID) => {
    zoo.forEach(zo => {
        if(zo.ID == animalID) {
            zoo.delete(zo);
        }
    })
}
deleteAnimailById("SP11");

// //add object if not exist 
let addIfNotExist = (animal) => {
    if(!isExist(animal)) {
        addAnimal(animal);
    }
}
addIfNotExist(tiger);
console.log(zoo);
