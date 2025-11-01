// Sélection des éléments du DOM
const message = document.getElementById("message");
const changeTextBtn = document.getElementById("changeText");
const changeColorBtn = document.getElementById("changeColor");
const output = document.getElementById("output");
const nameInput = document.getElementById("nameInput");

// 1️⃣ Clic sur "Changer le texte"
changeTextBtn.addEventListener("click", () => {
  message.textContent = "Vous avez cliqué sur ‘Changer le texte’ !";
  output.textContent = "Texte mis à jour avec succès.";
});

// 2️⃣ Clic sur "Changer la couleur"
changeColorBtn.addEventListener("click", () => {
  const colors = ["red", "green", "blue", "orange", "purple"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  message.style.color = randomColor;
  output.textContent = `Couleur changée en ${randomColor}.`;
});

// 3️⃣ Événement clavier (mise à jour du texte en direct)
nameInput.addEventListener("keyup", (event) => {
  output.textContent = `Vous avez tapé : ${event.target.value}`;
});

// 4️⃣ Événements souris (survol et sortie)
message.addEventListener("mouseenter", () => {
  message.style.backgroundColor = "#fff9c4"; // jaune clair
  output.textContent = "La souris est sur le message.";
});

message.addEventListener("mouseleave", () => {
  message.style.backgroundColor = "white";
  output.textContent = "La souris a quitté le message.";
});

// 5️⃣ Création dynamique d’un nouveau bouton
const newBtn = document.createElement("button");
newBtn.textContent = "Ajouter un paragraphe";
document.body.appendChild(newBtn);

// 6️⃣ Clic sur le bouton pour créer un paragraphe
newBtn.addEventListener("click", () => {
  const p = document.createElement("p");
  p.textContent = "Ce paragraphe a été créé dynamiquement !";
  p.classList.add("muted"); // exemple d’ajout de classe
  document.body.appendChild(p);
});
