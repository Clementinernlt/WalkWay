document.addEventListener("DOMContentLoaded", function () {
  var selectMenu = document.getElementById("shoes-select");

  var conteneur1 = document.getElementById("conteneur");
  var conteneur2 = document.getElementById("conteneur-2");

  conteneur1.style.display = "block";
  conteneur2.style.display = "none";

  selectMenu.addEventListener("change", function () {
    var selectedValue = selectMenu.value;

    conteneur1.style.display = "none";
    conteneur2.style.display = "none";

    if (selectedValue === "paire-1") {
      conteneur.style.display = "block";
    } else if (selectedValue === "paire-2") {
      conteneur2.style.display = "block";
    }
  });
});

const overlay1 = document.getElementById("product-shape");

// Définir la fonction changeColor pour changer la couleur du corps de la chaussure
function changeColor(picker) {
    // Modifier la couleur de remplissage (fill) en utilisant la valeur hexadécimale du sélecteur de couleur
    overlay1.style.fill = picker.value;
}

const overlay2 = document.getElementById("product-shape1");

// Définir la fonction changeColor2 pour changer la couleur du corps de la chaussure
function changeColor2(picker) {
    // Modifier la couleur de remplissage (fill) en utilisant la valeur hexadécimale du sélecteur de couleur
    overlay2.style.fill = picker.value;
}


const cart = document.getElementById('cart');
const addToCartBtn = document.getElementById('addToCartBtn');

let cartItemCount = 0;

addToCartBtn.addEventListener('click', () => {
  cartItemCount++;
  cart.textContent = cartItemCount;
});
