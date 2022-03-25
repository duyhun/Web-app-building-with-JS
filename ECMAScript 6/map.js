const birds = [
    {id: "DV8", name: "Eurasian Collared-Dove", type: "Dove" },
    {id: "HK12", name: "Bald Eagle", type: "Hawk" },
    {id: "HK6", name: "Cooper's Hawk", type: "Hawk" },
    {id: "SP11", name: "Bell's Sparrow", type: "Sparrow" },
    {id: "DV2", name: "Mourning Dove", type: "Dove" }
];

let newBirds = birds.map(function printBird(bird){
    console.log(bird.id);
});
