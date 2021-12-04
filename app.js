let tableauMots = [
    "jeux",
    "virtuel",
    "pendu",
    "formation",
    "duel",
]
let bouton = document.getElementById('bouton');
let input = document.getElementById('userletters').value;
let affichageLettre = document.getElementById('lettretaper');

//mots aleatoire
const randomlettres = tableauMots[Math.floor(Math.random() * tableauMots.length)];

//lettres utilisateur
bouton.addEventListener('click', function () {
   if(input > 0){
       document.getElementById('userletters').innerHTML = affichageLettre;
   }
})
