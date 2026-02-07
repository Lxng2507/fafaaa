const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const question = document.getElementById("question");
const mainImage = document.getElementById("main-image");

// Fonction pour déplacer le bouton en restant DANS l'écran
function fuir() {
    // 1. Récupérer la taille actuelle du bouton (largeur et hauteur)
    const btnLargeur = noBtn.offsetWidth;
    const btnHauteur = noBtn.offsetHeight;

    // 2. Calculer l'espace disponible (Taille écran - Taille bouton - petite marge de sécurité)
    // On enlève 20px de plus pour être sûr qu'il ne colle pas aux bords
    const maxX = window.innerWidth - btnLargeur - 20;
    const maxY = window.innerHeight - btnHauteur - 20;

    // 3. Générer des positions aléatoires dans ces limites
    // Math.max(0, ...) sert à éviter les bugs sur les très petits écrans
    const randomX = Math.max(0, Math.floor(Math.random() * maxX));
    const randomY = Math.max(0, Math.floor(Math.random() * maxY));

    // 4. Appliquer la nouvelle position
    noBtn.style.position = "absolute"; 
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}

// Événement pour PC (souris)
noBtn.addEventListener("mouseover", fuir);

// Événement pour Mobile (tactile)
// "touchstart" est plus réactif que "click" sur mobile
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault(); // Empêche le clic de se valider
    fuir();
});

// Sécurité supplémentaire : Si on arrive quand même à cliquer (ex: clic très rapide)
noBtn.addEventListener("click", (e) => {
    e.preventDefault();
    fuir();
});

// --- LOGIQUE DU BOUTON OUI (inchangée) ---
yesBtn.addEventListener("click", () => {
    mainImage.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2QyZGVhODQ5YmYyODQ5YmYyODQ5YmYyODQ5YmYyODQ5YmYyODQ5JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/T86i6yDyOYz7J6dPhf/giphy.gif";
    question.innerText = "Thank you so muchhh";
    
    yesBtn.style.display = "none";
    noBtn.style.display = "none";

    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#8B4513', '#D2691E', '#F4A460'] 
    });
});
