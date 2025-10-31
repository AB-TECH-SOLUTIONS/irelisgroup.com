// Simule un nombre d'offres (entre 20 et 150)
function updateOffersCounter() {
  const min = 20;
  const max = 150;
  const count = Math.floor(Math.random() * (max - min + 1)) + min;
  const counterEl = document.getElementById('offers-counter');
  if (counterEl) {
    counterEl.textContent = `${count} offres disponibles au Cameroun`;
  }
}

// Met à jour le compteur au chargement de la page
document.addEventListener('DOMContentLoaded', updateOffersCounter);

function performSearch(){
  const keyword = document.getElementById('search-keyword').value.trim();
  const location = document.getElementById('search-location').value.trim();
  const note = document.getElementById('search-note');
  note.textContent = `Recherche en cours pour "${keyword || 'tous'}" ${location? 'à '+location: ''} ... (Prototype)`;
  // Simulated result (no backend)
  setTimeout(()=>{ note.textContent = `Aucun résultat réel (prototype). Vous pouvez consulter la page Offres pour exemple.`; },1200);
}

// small helper to navigate (used in other pages)
function goTo(path){ window.location.href = path }

// Simule le calcul de compatibilité (MVP)
function calculateMatch() {
  // Dans un vrai système, on comparerait avec une offre ou une base
  // Ici : score aléatoire entre 70 et 95% pour effet "premium"
  const score = Math.floor(Math.random() * 26) + 70;
  
  const resultEl = document.getElementById('match-result');
  const scoreEl = document.getElementById('match-score');
  
  if (resultEl && scoreEl) {
    scoreEl.textContent = `${score} %`;
    resultEl.style.display = 'block';
    
    // Scroll vers le résultat
    resultEl.scrollIntoView({ behavior: 'smooth' });
  }
}