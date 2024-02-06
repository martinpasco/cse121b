/* LESSON 3 - Programming Tasks */
let photoElement = document.querySelector(`#photo`);
/* Profile Object  */  /* Populate Profile Object with placesLive objects */
let myProfile = {
    name: "Martin Pasco",
    photo: {
        src:"images/Martin.png",
        alt: "My Profile Picture"
    },
    favoriteFoods: ["Chocolate", "Tacos", "Seco de Pollo"],
    Hobies: ["ciclying", "Swiming", "Soccer"],
    placeLived: ["Lima- Perú", "Miami - USA"]
};

/* DOM Manipulation - Output */
/* Name */
document.querySelector("#name").innerHTML = `My name is <em>${myProfile.name}</em`;
/* Photo with attributes */
photoElement.src = myProfile.photo.src;
photoElement.alt = myProfile.photo.alt;
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(item => {
    let li = document.createElement("li");
    li.textContent= item;
    document.querySelector("#favorite-foods").appendChild(li);
})

/* Hobbies List */
myProfile.Hobies.forEach(item => {
    let li = document.createElement("li");
    li.textContent= item;
    document.querySelector("#hobbies").appendChild(li);
})

/* Places Lived DataList */
myProfile.placeLived.forEach(item => {
    let li = document.createElement("li");
    li.textContent= item;
    document.querySelector("#places-lived").appendChild(li);
})



