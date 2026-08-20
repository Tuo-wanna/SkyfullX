# Guide de Personnalisation du Portfolio

Ce guide vous aide à personnaliser facilement votre portfolio selon vos besoins.

## 🎨 Modifier les couleurs

Ouvrez `css/styles.css` et modifiez les variables CSS au début du fichier :

```css
:root {
    --primary: #0066cc;        /* Couleur principale (bleu) */
    --primary-dark: #0052a3;   /* Couleur principale foncée */
    --secondary: #f59e0b;      /* Couleur secondaire (orange) */
    --dark: #1f2937;           /* Texte foncé */
    --light: #f9fafb;          /* Fond clair */
    --gray: #6b7280;           /* Gris pour sous-titres */
    --success: #10b981;        /* Vert pour succès */
}
```

**Exemples de couleurs professionnelles :**
- Bleu professionnel: `#0066cc` ou `#1e3a8a`
- Vert moderne: `#059669` ou `#10b981`
- Orange chaud: `#f59e0b` ou `#d97706`
- Gris élégant: `#6b7280` ou `#4b5563`

## 📝 Modifier le contenu principal

### En-tête (Header)
Dans `index.html`, trouvez la section `<header>` et modifiez :
- Le nom de la navigation
- Les liens du menu

### Section Héro
Modifiez le texte principal, le slogan et les statistiques.

**Localisation** : Cherchez `<section class="hero">`

```html
<p class="eyebrow">Votre titre professionnel</p>
<h1>Votre slogan principal</h1>
<p class="lead">Votre description</p>
```

### Section À Propos
Mettez à jour votre biographie dans `<section class="about">`

### Compétences
Modifiez les 4 cartes de compétences dans `<section class="skills">` :

```html
<article class="skill-card">
    <div class="icon">⚡</div>
    <h3>Électronique</h3>
    <p>Votre description</p>
</article>
```

**Emojis suggérés :**
- ⚡ Électricité/Électronique
- 🔧 Maintenance/Réparation
- 🤖 Automatisation/Robotique
- 💻 Informatique/Tech
- 🎨 Design/Créativité
- 📱 Mobile/Applications
- 🌐 Web/Internet
- 📊 Data/Analytics

### Formation (Timeline)
Modifiez vos études dans `<section class="education">` :

```html
<div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-content">
        <span class="time">ANNÉE</span>
        <h3>Titre du cours/études</h3>
        <p>Description</p>
    </div>
</div>
```

### Projets
Mettez à jour vos projets dans `<section class="projects">` :

```html
<article class="project-card">
    <img src="URL_IMAGE" alt="Description projet" />
    <div class="project-overlay">
        <span>Catégorie</span>
        <h3>Titre du projet</h3>
    </div>
</article>
```

**Où trouver des images :**
- Unsplash: https://unsplash.com
- Pexels: https://pexels.com
- Pixabay: https://pixabay.com

### Contact
Modifiez vos informations dans `<section class="contact">` :

```html
<a href="tel:+22505XXXXXXX" class="contact-item">
    <span>📞</span>
    <div>
        <small>Téléphone</small>
        <strong>Votre numéro</strong>
    </div>
</a>
```

## 📱 Personnaliser les images

1. **Image héro** : Cherchez et remplacez l'URL
   ```html
   src="https://images.unsplash.com/photo-xxx"
   ```

2. **Image à propos** : Modifiez de la même manière

3. **Images projets** : Remplacez les URL des projets

**Format recommandé :**
- Résolution: 800x600px minimum
- Format: JPG ou PNG
- Taille: < 500KB pour performance

## 🔧 Modifier les fonctionnalités JavaScript

Le fichier `js/script.js` contient:

### Email
Modifiez l'adresse email :
```javascript
const email = "votre.email@gmail.com";
```

### Téléphone WhatsApp
Dans `index.html`, modifiez l'URL WhatsApp :
```html
<a class="whatsapp-float" 
   href="https://wa.me/VOTRENUMERO?text=Message">
```

## 🎯 Ajouter de nouvelles sections

Exemple pour ajouter une section "Expérience":

1. Ajouter le lien dans le menu (header)
2. Créer la section HTML avec les mêmes classes
3. Ajouter les styles CSS si nécessaire

**Structure de section :**
```html
<section class="section" id="experience">
    <div class="container">
        <div class="section-heading">
            <p class="eyebrow eyebrow-dark">Section</p>
            <h2>Titre de la section</h2>
        </div>
        <!-- Contenu -->
    </div>
</section>
```

## 🎨 Modifier les animations

Dans `css/styles.css`, vous pouvez ajuster :

### Durée des animations
```css
--transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

Changez `0.3s` en `0.5s` ou `0.2s` selon vos préférences

### Ajouter une animation personnalisée
```css
@keyframes votre-animation {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

## 📱 Tester la responsivité

1. Ouvrez le navigateur (F12)
2. Ouvrez les DevTools
3. Activez le mode responsive
4. Testez sur différentes tailles d'écran:
   - Mobile: 375px
   - Tablette: 768px
   - Desktop: 1200px+

## ✅ Checklist avant publication

- [ ] Tous les textes sont corrects et sans fautes
- [ ] Les images se chargent correctement
- [ ] Les liens fonctionnent (téléphone, email, WhatsApp)
- [ ] Le portfolio s'affiche bien sur mobile
- [ ] L'année du copyright est à jour
- [ ] Le CV est mis à jour (files/cv.html)
- [ ] Pas d'erreurs console (F12)

## 🚀 Prochaines étapes

### Niveau 1 - Basique
- ✓ Mettre à jour le contenu
- ✓ Changer les couleurs
- ✓ Ajouter des projets

### Niveau 2 - Intermédiaire
- Ajouter un formulaire de contact fonctionnel
- Intégrer EmailJS ou Formspree
- Ajouter des témoignages
- Créer un blog

### Niveau 3 - Avancé
- Déployer sur Netlify, Vercel ou GitHub Pages
- Ajouter un CMS (Contentful, Strapi)
- Optimiser SEO
- Ajouter Google Analytics

## 🆘 Dépannage

**Q: Le menu mobile ne s'ouvre pas**
- Vérifiez que JavaScript est activé
- Vérifiez la console (F12) pour les erreurs

**Q: Les images ne s'affichent pas**
- Vérifiez l'URL de l'image
- Assurez-vous que le lien est accessible

**Q: Le design ne s'affiche pas correctement**
- Effacez le cache du navigateur (Ctrl+Shift+Delete)
- Rechargez la page (Ctrl+F5)

## 📞 Besoin d'aide ?

- Consultez la documentation HTML/CSS/JS
- Testez vos modifications en temps réel
- Utilisez les DevTools du navigateur

---

*Bonne chance pour votre portfolio ! 🚀*