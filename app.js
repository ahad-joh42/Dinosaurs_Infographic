
   // Create Dino Constructor
    function Dino(species,weight,height,diet,where,when,fact){
        this.species=species;
        this.weight=weight;
        this.height=height;
        this.diet=diet;
        this.where=where;
        this.when=when;
        this.fact=fact;
    }


    // get dino data from json
    const dinos = [
        {
            species : "Triceratops",
            weight : 13000,
            height : 114,
            diet : "herbavor",
            where : "North America",
            when : "Late Cretaceous",
            fact : "First discovered in 1889 by Othniel Charles Marsh"
        },
        {
            species : "Tyrannosaurus Rex",
            weight : 11905,
            height : 144,
            diet : "carnivor",
            where : "North America",
            when : "Late Cretaceous",
            fact : "The largest known skull measures in at 5 feet long."
        },
        {
            species : "Anklyosaurus",
            weight : 10500,
            height : 55,
            diet : "herbavor",
            where : "North America",
            when : "Late Cretaceous",
            fact : "Anklyosaurus survived for approximately 135 million years."
        },
        {
            species : "Brachiosaurus",
            weight : 70000,
            height : "372",
            diet : "herbavor",
            where : "North America",
            when : "Late Jurasic",
            fact : "An asteroid was named 9954 Brachiosaurus in 1991."
        },
        {
            species: "Stegosaurus",
            weight: 11600,
            height: 79,
            diet: "herbavor",
            where: "North America, Europe, Asia",
            when: "Late Jurasic to Early Cretaceous",
            fact: "The Stegosaurus had between 17 and 22 seperate places and flat spines."
        },
        {
            species: "Elasmosaurus",
            weight: 16000,
            height: 59,
            diet: "carnivor",
            where: "North America",
            when: "Late Cretaceous",
            fact: "Elasmosaurus was a marine reptile first discovered in Kansas."
        },
        {
            species: "Pteranodon",
            weight: 44,
            height: 20,
            diet: "carnivor",
            where: "North America",
            when: "Late Cretaceous",
            fact: "Actually a flying reptile, the Pteranodon is not a dinosaur."
        },
        {
            species: "Pigeon",
            weight: 0.5,
            height: 9,
            diet: "herbavor",
            where: "World Wide",
            when: "Holocene",
            fact: "All birds are living dinosaurs."
        }

    ];


    // Create Dino Objects
    const dinoObjects = dinos.map(function(dino){
        const dinoObject = new Dino (
            dino.species,
            dino.weight,
            dino.height,
            dino.diet,
            dino.where,
            dino.when,
            dino.fact)
        return dinoObject ;

    })
     
         
    // Create Human Constructor
    function Human(name,weight,height,diet){
        this.name=name;
        this.weight=weight;
        this.height=height;
        this.diet=diet;
    } 
    

    // Use IIFE to get human data from form
    function getHumanDataFromForm (){
    return(function(){        
    const name = document.getElementById("name").value;
    const weight = document.getElementById("weight").value;
    const height = (document.getElementById("feet").value)*12 +(document.getElementById("inches").value);
    const diet = document.getElementById("diet").value;

    return new Human(name, weight, height, diet);
    })()}


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 
    Dino.prototype.compareheight=function(humanHeight){
        if (humanHeight>this.height){
        return this.species+'is shorter than you'
       } else if (humanHeight<this.height){
        return this.species + 'is taller than you'
       } else 
       return 'You and '+ this.species + 'are equal of height'
    };
 
     
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.
    Dino.prototype.compareWeight = function(humanWeight){
        if (humanWeight >this.weight){
        return this.species+' is thinner than'
       }else if (humanWeight<this.weight){
        return this.species + ' is thicker than you'
       } else 
       return 'You and '+ this.species + ' are equal of weight'
    };


    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.
    Dino.prototype.compareDiet = function(humanDiet){
        if (humanDiet == this.diet){
        return this.species+'You and '+this.species+ ' follow the same diet'
       }else 
        return this.species + "You and " + this.species +" don't follow the same diet" 
    };


    // Generate Tiles for each Dino in Array
    const tilesForEachDino = function() {
        let tilesArray = [];
        dinoObjects.forEach(function(index){
        let tile = `<div class="grid-item"> <h3> ${index.species} </h3> <img src="images/${index .species}.png"></img> <p>${index.fact}<br></p> </div>`; 
        tilesArray.push(tile)
        });
        return tilesArray;
        } 


    const tileForHuman = function () { 
        let humanTile = `<div class="grid-item"> <h3> ${getHumanDataFromForm().name}</h3> <img src="images/human.png"></img> </div>`;
        return humanTile;
        } 


        // Add tiles to DOM
    function addTilesToDOM(tiles, humanTile) { 
            document.getElementById("grid").innerHTML = ''; 
            for (let i = 0; i < 9 ; i++) {
                if (i==4){
                    tiles.splice(4, 0, humanTile);
                }
            document.getElementById("grid").innerHTML += tiles[i];
            } 
        } 

    // Remove form from screen
    function hideForm() {
        let form = document.getElementById("dino-compare");
        form.style.display = 'none';
    } 
   
    // On button click, prepare and display infographic
    document.getElementById("btn").addEventListener('click',function(){
        hideForm();
        addTilesToDOM(tilesForEachDino(),tileForHuman());
    });
