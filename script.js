// Animation de défilement fluide
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Animation de survol pour les projets
const projects = document.querySelectorAll('.projet');

projects.forEach(project => {
    project.addEventListener('mouseover', function () {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });

    project.addEventListener('mouseout', function () {
        this.style.transform = 'scale(1)';
    });
});

// Animation de changement de couleur du logo au survol
const logo = document.querySelector('.logo');

logo.addEventListener('mouseover', function () {
    this.style.color = '#9b7d61';
});

logo.addEventListener('mouseout', function () {
    this.style.color = '#fff';
});

// Animation de survol pour les compétences
const skills = document.querySelectorAll('#competences li');

skills.forEach(skill => {
    skill.addEventListener('mouseover', function () {
        this.style.fontWeight = 'bold';
        this.style.transition = 'font-weight 0.3s ease';
    });

    skill.addEventListener('mouseout', function () {
        this.style.fontWeight = 'normal';
    });
});

// Animation de changement de couleur pour les liens de compétences au survol
const skillLinks = document.querySelectorAll('#competences li a');

skillLinks.forEach(link => {
    link.addEventListener('mouseover', function () {
        this.style.color = '#9b7d61';
    });

    link.addEventListener('mouseout', function () {
        this.style.color = '#5e4934';
    });
});

// Animation de changement de couleur pour les liens de contact au survol
const contactLinks = document.querySelectorAll('#contact a');

contactLinks.forEach(link => {
    link.addEventListener('mouseover', function () {
        this.style.color = '#9b7d61';
    });

    link.addEventListener('mouseout', function () {
        this.style.color = '#5e4934';
    });
});

// Animation de chargement (simulée)
document.addEventListener('DOMContentLoaded', function () {
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.display = 'none';
    }
});
