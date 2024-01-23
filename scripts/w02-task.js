/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

const fullName = 'Martin Pasco';
const currentYear = 2025; //para ver lo efectivo del codigo
const profilePicture = `images/Martin.png`;


/* Step 3 - Element Variables */
const foodsElement = document.querySelector(`#food`);
const nameElement = document.getElementById(`name`);
const yearElement = document.querySelector(`#year`);
const imageElement = document.querySelector(`img`);



/* Step 4 - Adding Content */
yearElement.textContent = currentYear;
imageElement.setAttribute(`src`, profilePicture);
imageElement.setAttribute(`alt`, `This is ${fullName}`);

/* Step 5 - Array */
let favFoods = [`arroz con pollo`, `Ocopa`, `mazamorra`, `causa`];

foodsElement.innerHTML= favFoods;
let newfood = `chocolate`;
favFoods.push(newfood); 
foodsElement.innerHTML+= `<br>${favFoods}`;