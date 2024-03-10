// Animation de défilement fluide
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    // Ajoute un écouteur d'événements sur chaque lien ancré débutant par "#"
    anchor.addEventListener('click', function (e) {
        // Empêche le comportement par défaut du lien lorsqu'il est cliqué
        e.preventDefault();

        // Récupère la cible de défilement basée sur l'attribut "href" du lien
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Effectue un défilement fluide vers la cible
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Animation de survol pour les projets
const projects = document.querySelectorAll('.projet');

projects.forEach(project => {
    // Ajoute des écouteurs d'événements pour le survol des projets
    project.addEventListener('mouseover', function () {
        // Applique une transformation d'échelle et une transition sur le survol
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });

    project.addEventListener('mouseout', function () {
        // Rétablit l'échelle normale lorsqu'on quitte le survol
        this.style.transform = 'scale(1)';
    });
});

// Animation de changement de couleur du logo au survol
const logo = document.querySelector('.logo');

logo.addEventListener('mouseover', function () {
    // Change la couleur du logo lors du survol
    this.style.color = '#9b7d61';
});

logo.addEventListener('mouseout', function () {
    // Rétablit la couleur initiale du logo lorsqu'on quitte le survol
    this.style.color = '#fff';
});

// Animation de survol pour les compétences
const skills = document.querySelectorAll('#competences li');

skills.forEach(skill => {
    // Ajoute des écouteurs d'événements pour le survol des compétences
    skill.addEventListener('mouseover', function () {
        // Applique un style de police en gras et une transition sur le survol
        this.style.fontWeight = 'bold';
        this.style.transition = 'font-weight 0.3s ease';
    });

    skill.addEventListener('mouseout', function () {
        // Rétablit le style de police normal lorsqu'on quitte le survol
        this.style.fontWeight = 'normal';
    });
});

// Animation de changement de couleur pour les liens de compétences au survol
const skillLinks = document.querySelectorAll('#competences li a');

skillLinks.forEach(link => {
    // Ajoute des écouteurs d'événements pour le survol des liens de compétences
    link.addEventListener('mouseover', function () {
        // Change la couleur du lien lors du survol
        this.style.color = '#9b7d61';
    });

    link.addEventListener('mouseout', function () {
        // Rétablit la couleur initiale du lien lorsqu'on quitte le survol
        this.style.color = '#5e4934';
    });
});

// Animation de changement de couleur pour les liens de contact au survol
const contactLinks = document.querySelectorAll('#contact a');

contactLinks.forEach(link => {
    // Ajoute des écouteurs d'événements pour le survol des liens de contact
    link.addEventListener('mouseover', function () {
        // Change la couleur du lien lors du survol
        this.style.color = '#9b7d61';
    });

    link.addEventListener('mouseout', function () {
        // Rétablit la couleur initiale du lien lorsqu'on quitte le survol
        this.style.color = '#5e4934';
    });
});

// Animation de chargement (simulée)
document.addEventListener('DOMContentLoaded', function () {
    // Sélectionne l'élément de chargement
    const loader = document.querySelector('.loader');
    if (loader) {
        // Cache l'élément de chargement lors du chargement complet du document
        loader.style.display = 'none';
    }
});
