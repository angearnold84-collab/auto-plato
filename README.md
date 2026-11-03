# Auto-Plato — site vitrine

Site statique, sans outil de compilation. Ouvrir `index.html` dans un navigateur ou publier le contenu de ce dossier comme site statique.

## Contenus intégrés

- Vidéo Auto-Plato fournie par le client : `assets/auto-plato-background.mp4`. Elle sert de fond fixe sur toutes les sections, en lecture automatique, silencieuse et en boucle. L’image `assets/auto-plato-logo.jpeg` sert d’affiche de remplacement.
- Logo Auto-Plato fourni par le client : `assets/auto-plato-logo.jpeg`.
- Photos de modèles provenant des pages officielles Toyota by CFAO Côte d’Ivoire et SOCIDA / Suzuki Côte d’Ivoire, copiées dans `assets/vehicles/`.
- Prix et fiches de modèles reliés aux pages publiques des constructeurs/distributeurs. Ils sont indicatifs, changent selon la version et ne confirment pas le stock d’Auto-Plato.
- Le bouton WhatsApp et le formulaire utilisent uniquement le numéro fourni : +225 05 04 55 23 64. Le formulaire ouvre un message prérempli dans WhatsApp et ne stocke pas les données.

## Sources des modèles

- Suzuki Dzire — https://www.suzuki-ci.com/modeles/suzuki-dzire-cote-divoire-berline-compacte-socida/10
- Toyota Vitz — https://toyotacfao.com/ci/fr/model/toyota-vitz
- Toyota RAV4 — https://toyotacfao.com/ci/fr/model/rav4
- Toyota Fortuner — https://toyotacfao.com/ci/fr/model/fortuner
- Toyota Hiace Van — https://toyotacfao.com/ci/fr/model/hiace-van
- Toyota Corolla Cross Hybrid Electric — https://toyotacfao.com/ci/fr/model/corolla-cross-HEV

Le PDF de la Suzuki Dzire est une synthèse imprimable issue des informations visibles sur la page SOCIDA. Les autres boutons PDF ouvrent la fiche technique officielle correspondante.

## Publication

Pour GitHub Pages, Vercel ou Netlify, publier le contenu de `outputs/` comme un site statique : `index.html`, `styles.css`, `app.js` et le dossier `assets/` doivent rester ensemble. Aucun build command ni framework n’est requis.

