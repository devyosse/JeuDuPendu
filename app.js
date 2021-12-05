//Utiliser un tableau pour stocker des mots à faire deviner au joueur.
let tableauMots = [
    "jeux",
    "virtuel",
    "pendu",
    "formation",
    "duel",
]
let element = "a,b,c,d,e,f,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x"


let bouton = document.getElementById('bouton');
let affichageLettre = document.getElementById('lettretaper');
let lettre = document.getElementById('input').value;

//Selectionner aléatoirement dans notre tableau un mot à faire deviner.
const randomMot = tableauMots[Math.floor(Math.random() * tableauMots.length)];


// Verifier si la lettre est contenue dans le mot à faire deviner
let affichageMot = document.getElementById('motdeviner');

for(let i = 0;i > tableauMots.length;i++){
    affichageLettre.innerHTML = '_';
    affichageMot.innerHTML = tableauMots.join("");

}

bouton.addEventListener('click', function () {
    let vrai = true;
    tableauMots.push(lettre.value);

    affichageLettre.innerHTML = "Lettres déja utiliser : " +lettre;

    for(let i = 0;i > tableauMots.length;i++) {
        if (randomMot.includes(element) > 1) {
            affichageMot.innerHTML = affichageMot.join(element);
        }
    }
})


// Afficher à la bonne position la  lettre trouvée
//par l'utilisateur qui composent le mot à faire deviner


//Si la lettre n'est pas contenue dans le mot à faire deviner,
//afficher un message à l'utilisateur

console.log(randomMot)