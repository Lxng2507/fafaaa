const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const question = document.getElementById("question");
const mainImage = document.getElementById("main-image");

// Cette fonction fait fuir le bouton à un endroit aléatoire
function fuir() {
    // On calcule la taille de l'écran disponible (moins la taille du bouton)
    const largeurEcran = window.innerWidth - 150; // 150px de marge
    const hauteurEcran = window.innerHeight - 150;

    // On génère une position aléatoire
    const randomX = Math.floor(Math.random() * largeurEcran);
    const randomY = Math.floor(Math.random() * hauteurEcran);

    // On applique la nouvelle position
    noBtn.style.position = "absolute"; // Il devient libre de bouger partout
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}

// 1. Quand la souris approche (PC) -> Il fuit
noBtn.addEventListener("mouseover", fuir);

// 2. Si on essaie de cliquer dessus (Tactile / Mobile) -> Il fuit aussi !
noBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Empêche le clic de fonctionner
    fuir(); // Le bouton s'enfuit
});

// LOGIQUE DU BOUTON OUI
yesBtn.addEventListener("click", () => {
    // 1. Changer l'image pour le gif mignon
    mainImage.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2QyZGVhODQ5YmYyODQ5YmYyODQ5YmYyODQ5YmYyODQ5YmYyODQ5JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/T86i6yDyOYz7J6dPhf/giphy.gif";
    
    // 2. Mettre le message "Thank you so muchhh"
    question.innerText = "Thank you so muchhh";
    
    // 3. Cacher les deux boutons
    yesBtn.style.display = "none";
    noBtn.style.display = "none";

    // 4. Lancer les confettis (couleurs chocolat)
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#8B4513', '#D2691E', '#F4A460'] 
    });
});