const icons =
[
        {
            name: 'cat',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas',
            color: 'orange'
        },
        {
            name: 'crow',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas',
            color: 'orange'
        },
        {
            name: 'dog',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas',
            color: 'orange'
        },
        {
            name: 'dove',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas',
            color: 'orange'
        },
        {
            name: 'dragon',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas',
            color: 'orange'
        },
        {
            name: 'horse',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas',
            color: 'orange'
        },
        {
            name: 'hippo',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas',
            color: 'orange'
        },
        {
            name: 'fish',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas',
            color: 'orange'
        },
        {
            name: 'carrot',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas',
            color: 'green'
        },
        {
            name: 'apple-alt',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas',
            color: 'green'
        },
        {
            name: 'lemon',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas',
            color: 'green'
        },
        {
            name: 'pepper-hot',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas',
            color: 'green'
        },
        {
            name: 'user-astronaut',
            prefix: 'fa-',
            type: 'user',
            family: 'fas',
            color: 'blue'
        },
        {
            name: 'user-graduate',
            prefix: 'fa-',
            type: 'user',
            family: 'fas',
            color: 'blue'
        },
        {
            name: 'user-ninja',
            prefix: 'fa-',
            type: 'user',
            family: 'fas',
            color: 'blue'
        },
        {
            name: 'user-secret',
            prefix: 'fa-',
            type: 'user',
            family: 'fas',
            color: 'blue'
        }
    
];
const output = document.querySelector('.output');

// ----------------------------------------------
function createCard(objects) {
    return `<i class="element ${objects.family} ${objects.prefix}${objects.name} ${objects.color}"></i>`;
  }

//   stampo tutte le card
  icons.forEach((element) => {
    output.innerHTML += createCard(element);
  });

//   animal
  const iconsAnimal = icons.filter(function (element) {
    const animalType = element.type;
    return animalType === "animal";
  });

  //   vegetable
  const iconsVegetable = icons.filter(function (element) {
    const typeVegetable = element.type;
    return typeVegetable === "vegetable";
  });

  //   user
  const iconsUser = icons.filter(function (element) {
    const typeUser = element.type;
    return typeUser === "user";
  });


// associo la tendina 
  const selectType = document.getElementById("select");

//   in base al type selezionato faccio il reset e stampo le card 
selectType.addEventListener("change", () => {
    
    if(selectType.value === "Animal") {   //TODO animal si può selezionare solo come seconda scelta
        output.innerHTML = "";
        iconsAnimal.forEach((element) => {
            output.innerHTML += createCard(element);
        });

    } else if(selectType.value === "Vegetable") {
        output.innerHTML = "";
        iconsVegetable.forEach((element) => {
            output.innerHTML += createCard(element);
        });

    } else {
        output.innerHTML = "";
        iconsUser.forEach((element) => {
            output.innerHTML += createCard(element);
        });
    }
});
  
  //   --------------------------------------------
  
  
  
  
  
  
  
  
  
  
  
  
  
  


//   document.getElementById("animal").addEventListener("click", function(){
//     icons.forEach((iconsAnimal) => {
//         output.innerHTML = createCard(element);
//       });
//   })
//   const selectVegetable = document.getElementById('vegetable');
//   const selectUser = document.getElementById('user');







  
  
  
  
  
  // ----------------------------------------------
  
//   const iconsAnimal = icons.filter((animal)=> {
//       if(animal==='type: vegetable'){
//           return true;
//       }
//       return false;
//   })
// console.log(iconsAnimal)
  
  




// icons.forEach((element) => {
//     output.innerHTML += `<i class="element ${element.family} ${element.prefix}${element.name} ${element.color}"></i>`;
// })

// const selectAnimal = document.getElementById('animal');
// const selectVegetable = document.getElementById('vegetable');
// const selectUser = document.getElementById('user');


// document.getElementById('animal').addEventListener("click", function(){ 
   
// });
  
