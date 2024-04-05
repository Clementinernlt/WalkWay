const corpInput = document.getElementById('Poney1')
const lacetInput = document.getElementById('Poney2')
const semInput = document.getElementById('Poney3')
const price = document.getElementById('price')


let prix = 109.89
price.innerText = prix+ " €"

corpInput.addEventListener('change', ()=>{
    if(corpInput.checked){
        prix += 7
    }else{
        prix -= 7
    }
    price.innerText = prix +" €"
})

lacetInput.addEventListener('change', ()=>{
    if(lacetInput.checked){
        prix += 4
    }else{
        prix -= 4
    }
    price.innerText = prix +" €"
})

semInput.addEventListener('change', ()=>{
    if(semInput.checked){
        prix += 5
    }else{
        prix -= 5
    }
    price.innerText = prix +" €"
})


 // Récupération du bouton et du modal
 var button = document.querySelector('.button');
 var modal = document.getElementById('myModal');

 // Récupération du span qui permet de fermer le modal
 var span = document.getElementsByClassName('close')[0];

 // Lorsque l'utilisateur clique sur le bouton, afficher le modal
 button.addEventListener('click', function () {
     modal.style.display = 'block';
 });

 // Lorsque l'utilisateur clique sur le span (x) ou en dehors du modal, fermer le modal
 span.addEventListener('click', function () {
     modal.style.display = 'none';
 });

 window.addEventListener('click', function (event) {
     if (event.target == modal) {
         modal.style.display = 'none';
     }
 });




 
// Récupération de l'élément qui va changer de couleur
const overlay = document.getElementById("product-svg");
// Ajout de la fonction changeColor à tous les éléments cliquable

//changer la couleur du corp de la chaussure
function changeColor(picker) {
// Set the fill style
overlay.style.fill = picker.toHEXString();
}

//changer la couleur des lassets

const overlay2 = document.getElementById("product-svg2");
function changeColor2(picker) {
    // Set the fill style
    overlay2.style.fill = picker.toHEXString();
    }

//changer la couleur de la semelle
const overlay3 = document.getElementById("product-svg3");
function changeColor3(picker) {
    // Set the fill style
    overlay3.style.fill = picker.toHEXString();
    }
//Girly model
const girlybtn = document.getElementById("girly")

girlybtn.addEventListener('click', ()=>{
    overlay.style.fill = '#A93C3C'
    overlay2.style.fill = '#E36868'
    overlay3.style.fill = '#986E74'
})
//Aqua model
const aquabtn = document.getElementById("aqua")

aquabtn.addEventListener('click', ()=>{
    overlay.style.fill = '#447A80'
    overlay2.style.fill = '#44FFD3'
    overlay3.style.fill = '#008F6E'
})
// Default model
const classicbtn = document.getElementById("classic")

classicbtn.addEventListener('click', ()=>{
    overlay.style.fill = '#960000'
    overlay2.style.fill = '#ff0'
    overlay3.style.fill = '#293de2'
})

