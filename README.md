# Cocktail Media - Web Components

Composants web modulaires pour la page d'accueil de cocktailmedia.ca.
Chaque section est un Web Component indépendant.

## Structure

```
components/
  cocktail-hero.js      → Section hero (fond crème, titre bold, mots barrés)
  cocktail-menu.js      → Menu abrégé (fond noir, 5 catégories)
  cocktail-process.js   → Comment ça marche (3 étapes)
  cocktail-equipe.js    → Équipe (Félix + Marie-Christine)
index.html              → Page de test locale
```

## Utilisation dans Wix Studio

1. Activer GitHub Pages dans Settings > Pages
2. Dans Wix Studio, ajouter un Élément personnalisé par section
3. Source: URL de serveur
4. URL: `https://VOTRE-USERNAME.github.io/cocktailmedia-components/components/cocktail-hero.js`
5. Nom du tag: `cocktail-hero`

Répéter pour chaque section avec le fichier et tag correspondant.

## Tags disponibles

| Fichier | Tag |
|---------|-----|
| cocktail-hero.js | `cocktail-hero` |
| cocktail-menu.js | `cocktail-menu` |
| cocktail-process.js | `cocktail-process` |
| cocktail-equipe.js | `cocktail-equipe` |
