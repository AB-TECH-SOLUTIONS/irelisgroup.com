// ========== INTERACTION OFFRES D'EMPLOI ==========
document.addEventListener('DOMContentLoaded', () => {
  const jobCards = document.querySelectorAll('.job-card');
  const jobDetailPanel = document.querySelector('.job-detail-panel');

  if (jobCards.length && jobDetailPanel) {
    jobCards.forEach(card => {
      card.addEventListener('click', () => {
        // Mettre à jour la classe "selected"
        jobCards.forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');

        // Extraire les données de la carte cliquée
        const title = card.querySelector('h3')?.textContent || 'Titre non disponible';
        const company = card.querySelector('p')?.textContent || 'Entreprise non précisée';
        const type = card.querySelector('.job-type')?.textContent || 'CDI';
        const badge = card.querySelector('.badge')?.textContent || '';

        // Mettre à jour le panneau de détail
        jobDetailPanel.innerHTML = `
          <h2>${title}</h2>
          <p><strong>Entreprise :</strong> ${company}</p>
          <p><strong>Type de contrat :</strong> ${type}</p>
          <p><strong>Lieu :</strong> Douala, Cameroun (À distance)</p>
          <p><strong>Salaire :</strong> 800k – 1.2M FCFA</p>
          <p><strong>Publiée il y a :</strong> 2 jours</p>
          <div class="job-description">
            <h3>Description du poste</h3>
            <p>Nous recherchons un professionnel expérimenté pour rejoindre notre équipe. Vous serez en charge du développement de solutions innovantes, en collaboration avec nos équipes techniques et produit.</p>
          </div>
          <div class="job-actions">
            <button class="btn-apply">Postuler maintenant</button>
          </div>
        `;

        // Réattacher l'événement au nouveau bouton
        jobDetailPanel.querySelector('.btn-apply').addEventListener('click', handleApplyClick);
      });
    });

    // Initialiser le premier élément
    if (jobCards[0]) {
      jobCards[0].click();
    }
  }

  // ========== GESTION DES BOUTONS ==========
  function handleApplyClick() {
    if (confirm('⚠️ Vous devez être connecté pour postuler.\nSouhaitez-vous vous connecter maintenant ?')) {
      window.location.href = 'login.html';
    }
  }

  // Appliquer à tous les boutons "Postuler" existants
  document.querySelectorAll('.btn-apply').forEach(btn => {
    btn.addEventListener('click', handleApplyClick);
  });

  // Formulaire d'alerte emploi
  const alertForm = document.querySelector('.alert-form');
  if (alertForm) {
    alertForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = alertForm.querySelector('input').value.trim();
      if (email && email.includes('@')) {
        alert(`✅ Alert emploi créée avec succès !\nVous recevrez des offres correspondant à votre profil à : ${email}`);
        alertForm.reset();
      } else {
        alert('❌ Veuillez entrer une adresse email valide.');
      }
    });
  }

  // ========== FORMULAIRES ==========
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const requiredFields = form.querySelectorAll('[required]');
      let isValid = true;

      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          isValid = false;
          field.style.borderColor = '#EF4444';
        } else {
          field.style.borderColor = '#D1D5DB';
        }
      });

      if (isValid) {
        const page = window.location.pathname.split('/').pop();
        if (page === 'register.html') {
          alert('✅ Compte créé avec succès !\nVous pouvez maintenant vous connecter.');
          window.location.href = 'login.html';
        } else if (page === 'publish-offer.html') {
          alert('✅ Offre publiée avec succès !\nElle sera visible dans les 24h.');
          window.location.href = 'espace-recruteur.html';
        } else if (page === 'login.html') {
          alert('✅ Connexion réussie !\nBienvenue sur votre tableau de bord.');
          window.location.href = 'dashboard.html';
        } else {
          alert('✅ Formulaire soumis avec succès !');
        }
      } else {
        alert('❌ Veuillez remplir tous les champs obligatoires.');
      }
    });
  });

  // ========== LIENS SOCIAUX ==========
  const whatsappBtn = document.querySelector('.whatsapp');
  const telegramBtn = document.querySelector('.telegram');

  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const url = 'https://wa.me/237600000000'; // À remplacer par le vrai numéro
      window.open(url, '_blank');
    });
  }

  if (telegramBtn) {
    telegramBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const url = 'https://t.me/irelis'; // À remplacer par le vrai lien
      window.open(url, '_blank');
    });
  }

  // Notification (simulé)
  const notificationIcon = document.querySelector('.notification-icon');
  if (notificationIcon) {
    notificationIcon.addEventListener('click', (e) => {
      e.preventDefault();
      alert('🔔 Vous avez 3 nouvelles notifications :\n• Nouvelle offre correspondant à votre profil\n• Candidature vue par TechCorp\n• Rappel : Mettez à jour votre CV');
    });
  }
});