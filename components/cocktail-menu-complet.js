// @ts-nocheck
class CocktailMenuComplet extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&display=swap');
        *,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
        :host{
          display:block;
          --creme:#FFF4E9;
  --fond:#FAF9F6;
  --noir:#2B2B2B;
  --rouge:#E83B14;
  --gris:#8a8580;
  --gris-clair:#c4beb6;
  --ligne:rgba(43,43,43,.08);
  --col-apero:#4a8c5c;
  --col-apero-bg:rgba(74,140,92,.06);
  --col-roses:#d4728c;
  --col-roses-bg:rgba(212,114,140,.06);
  --col-blancs:#c9a84c;
  --col-blancs-bg:rgba(201,168,76,.06);
  --col-rouges:#8a2020;
  --col-rouges-bg:rgba(138,32,32,.06);
  --col-digestifs:#e8731a;
  --col-digestifs-bg:rgba(232,115,26,.06);
          font-family:'Montserrat',system-ui,sans-serif;
          -webkit-font-smoothing:antialiased;
          background:var(--fond);
          color:var(--noir);
        }
        



/* ============ PAGE ============ */
.menu-page{
  max-width:900px;
  margin:0 auto;
  padding:4rem 2rem 5rem;
}

/* Header */
.page-header{
  text-align:center;
  margin-bottom:3.5rem;
  padding-bottom:2.5rem;
  border-bottom:1px solid var(--ligne);
}
.page-logo{
  height:70px;width:auto;
  margin-bottom:1.5rem;
  opacity:.9;
}
.page-label{
  font-family:'Bebas Neue',sans-serif;
  font-size:.7rem;letter-spacing:.4em;
  color:var(--rouge);margin-bottom:.8rem;
}
.page-title{
  font-family:'Bebas Neue',sans-serif;
  font-size:clamp(2.5rem,5vw,4rem);
  letter-spacing:.03em;line-height:.95;
  color:var(--noir);margin-bottom:.8rem;
}
.page-title .rouge{color:var(--rouge)}
.page-subtitle{
  font-size:.9rem;color:var(--gris);font-weight:400;line-height:1.6;
  max-width:500px;margin:0 auto;
}

/* Category block */
.category{
  margin-bottom:3rem;
}
.cat-header{
  display:flex;align-items:center;gap:1rem;
  margin-bottom:1.5rem;
  padding-bottom:.8rem;
  border-bottom:3px solid var(--noir);
  position:relative;
}
.cat-header::after{
  content:'';position:absolute;bottom:-3px;left:0;width:60px;height:3px;
  background:var(--rouge);
}

/* Per-category colors */
.cat-apero .cat-header::after{background:var(--col-apero)}
.cat-apero .cat-header-link{color:var(--col-apero);border-color:var(--col-apero)}
.cat-apero .cat-header-link:hover{background:var(--col-apero);color:white}
.cat-apero .service:hover{background:linear-gradient(90deg,var(--col-apero-bg),transparent)}
.cat-apero .service:hover .service-name{color:var(--col-apero)}
.cat-apero .service:hover .service-price{color:var(--col-apero)}

.cat-roses .cat-header::after{background:var(--col-roses)}
.cat-roses .cat-header-link{color:var(--col-roses);border-color:var(--col-roses)}
.cat-roses .cat-header-link:hover{background:var(--col-roses);color:white}
.cat-roses .service:hover{background:linear-gradient(90deg,var(--col-roses-bg),transparent)}
.cat-roses .service:hover .service-name{color:var(--col-roses)}
.cat-roses .service:hover .service-price{color:var(--col-roses)}

.cat-blancs .cat-header::after{background:var(--col-blancs)}
.cat-blancs .cat-header-link{color:var(--col-blancs);border-color:var(--col-blancs)}
.cat-blancs .cat-header-link:hover{background:var(--col-blancs);color:white}
.cat-blancs .service:hover{background:linear-gradient(90deg,var(--col-blancs-bg),transparent)}
.cat-blancs .service:hover .service-name{color:var(--col-blancs)}
.cat-blancs .service:hover .service-price{color:var(--col-blancs)}

.cat-rouges .cat-header::after{background:var(--col-rouges)}
.cat-rouges .cat-header-link{color:var(--col-rouges);border-color:var(--col-rouges)}
.cat-rouges .cat-header-link:hover{background:var(--col-rouges);color:white}
.cat-rouges .service:hover{background:linear-gradient(90deg,var(--col-rouges-bg),transparent)}
.cat-rouges .service:hover .service-name{color:var(--col-rouges)}
.cat-rouges .service:hover .service-price{color:var(--col-rouges)}

.cat-digestifs .cat-header::after{background:var(--col-digestifs)}
.cat-digestifs .cat-header-link{color:var(--col-digestifs);border-color:var(--col-digestifs)}
.cat-digestifs .cat-header-link:hover{background:var(--col-digestifs);color:white}
.cat-digestifs .service:hover{background:linear-gradient(90deg,var(--col-digestifs-bg),transparent)}
.cat-digestifs .service:hover .service-name{color:var(--col-digestifs)}
.cat-digestifs .service:hover .service-price{color:var(--col-digestifs)}
.cat-header-logo{
  height:36px;width:auto;object-fit:contain;flex-shrink:0;
}
.cat-header-info{flex:1}
.cat-header-name{
  font-family:'Bebas Neue',sans-serif;
  font-size:clamp(1.3rem,2vw,1.6rem);
  letter-spacing:.08em;
}
.cat-header-type{
  font-size:.75rem;color:var(--gris);font-weight:400;
}
.cat-header-link{
  font-family:'Bebas Neue',sans-serif;
  font-size:.75rem;letter-spacing:.1em;
  color:var(--rouge);text-decoration:none;
  border:1px solid var(--rouge);
  padding:.3rem .8rem;border-radius:100px;
  transition:all .2s ease;
  flex-shrink:0;
}
.cat-header-link:hover{background:var(--rouge);color:white}

/* Service row */
.service{
  display:flex;justify-content:space-between;align-items:baseline;
  padding:.7rem 0;
  border-bottom:1px solid var(--ligne);
  text-decoration:none;color:var(--noir);
  transition:all .2s ease;
}
.service:hover{
  padding-left:.5rem;
  background:linear-gradient(90deg,rgba(232,59,20,.03),transparent);
}
.service-name{
  font-size:.88rem;font-weight:500;
  flex:1;
  transition:color .2s ease;
}
.service:hover .service-name{color:var(--rouge)}
.service-dots{
  flex:1;
  border-bottom:1px dotted var(--gris-clair);
  margin:0 .8rem;
  min-width:30px;
  align-self:center;
  margin-bottom:4px;
}
.service-price{
  font-family:'Bebas Neue',sans-serif;
  font-size:.95rem;letter-spacing:.05em;
  color:var(--noir);
  white-space:nowrap;
  flex-shrink:0;
  transition:color .2s ease;
}
.service:hover .service-price{color:var(--rouge)}

/* Note */
.cat-note{
  font-size:.72rem;font-style:italic;
  color:var(--gris);margin-top:.6rem;
}

/* Extras */
.extras-label{
  font-family:'Bebas Neue',sans-serif;
  font-size:.7rem;letter-spacing:.3em;
  color:var(--gris);
  margin-bottom:1rem;
  text-align:center;
}

/* Footer */
.page-footer{
  text-align:center;
  margin-top:3rem;
  padding-top:2.5rem;
  border-top:1px solid var(--ligne);
}
.page-footer-text{
  font-size:.82rem;color:var(--gris);font-weight:400;
  margin-bottom:1.5rem;line-height:1.6;
}
.page-footer-cta{
  display:inline-flex;align-items:center;gap:.5rem;
  font-family:'Bebas Neue',sans-serif;font-size:1rem;
  letter-spacing:.12em;color:white;background:var(--rouge);
  padding:.8rem 2rem;border-radius:100px;
  text-decoration:none;transition:all .3s ease;
}
.page-footer-cta:hover{
  background:var(--noir);
  transform:translateY(-2px);
}
.page-footer-secondary{
  display:block;
  margin-top:1rem;
  font-size:.78rem;color:var(--gris);
  text-decoration:none;
  transition:color .2s ease;
}
.page-footer-secondary:hover{color:var(--rouge)}
.page-footer-coupe{
  height:50px;width:auto;
  margin-top:2rem;
  opacity:.12;
}

/* ============ RESPONSIVE ============ */
@media(max-width:640px){
  .menu-page{padding:3rem 1.5rem 4rem}
  .cat-header{flex-wrap:wrap;gap:.6rem}
  .cat-header-link{margin-top:.3rem}
  .service{flex-wrap:wrap;gap:.2rem}
  .service-dots{display:none}
  .service-price{font-size:.85rem}
}
      </style>
      <div class="menu-page">

  <div class="page-header">
    <img src="https://static.wixstatic.com/shapes/603d87_c9b09d330c54453fbf1b8edd389c9cfa.svg" alt="Cocktail Media" class="page-logo">
    <p class="page-label">COCKTAIL MÉDIA</p>
    <h1 class="page-title">SERVICES <span class="rouge">&</span> LISTE DE PRIX</h1>
    <p class="page-subtitle">Tous nos services créatifs, prix affichés. Tu choisis, tu paies, on produit.</p>
  </div>

  <!-- L'APÉRO -->
  <div class="category cat-apero">
    <div class="cat-header">
      <img src="https://static.wixstatic.com/shapes/603d87_30652102cab24c9e83d9405fe124ee69.svg" alt="" class="cat-header-logo">
      <div class="cat-header-info">
        <div class="cat-header-name">L'APÉRO</div>
        <div class="cat-header-type">Infographie</div>
      </div>
      <a href="https://www.cocktailmedia.ca/menu/apero" class="cat-header-link" target="_top">DÉTAILS →</a>
    </div>
    <a href="https://www.cocktailmedia.ca/menu/apero/toastvisuel" class="service" target="_top"><span class="service-name">Présentation Powerpoint</span><span class="service-dots"></span><span class="service-price">100,00$</span></a>
    <a href="https://www.cocktailmedia.ca/menu/apero/plan-signature" class="service" target="_top"><span class="service-name">Création de plan d'affaires</span><span class="service-dots"></span><span class="service-price">200,00$</span></a>
  </div>

  <!-- LES ROSÉS -->
  <div class="category cat-roses">
    <div class="cat-header">
      <img src="https://static.wixstatic.com/shapes/603d87_a748d18eac8848e2b12f2731acfeaeb1.svg" alt="" class="cat-header-logo">
      <div class="cat-header-info">
        <div class="cat-header-name">LES ROSÉS</div>
        <div class="cat-header-type">Graphisme</div>
      </div>
      <a href="https://www.cocktailmedia.ca/menu/les-roses" class="cat-header-link" target="_top">DÉTAILS →</a>
    </div>
    <a href="https://www.cocktailmedia.ca/menu/les-roses/creation-logo-personnalise" class="service" target="_top"><span class="service-name">Création d'un logo personnalisé</span><span class="service-dots"></span><span class="service-price">200,00$</span></a>
    <a href="https://www.cocktailmedia.ca/menu/les-roses/refonte-identite-visuelle" class="service" target="_top"><span class="service-name">Refonte d'identité visuelle</span><span class="service-dots"></span><span class="service-price">150,00$</span></a>
    <a href="https://www.cocktailmedia.ca/menu/les-roses/creation-supports-imprimes" class="service" target="_top"><span class="service-name">Supports imprimables</span><span class="service-dots"></span><span class="service-price">75$ / 1 visuel — 200$ / 4</span></a>
    <a href="https://www.cocktailmedia.ca/menu/les-roses/creation-supports-numeriques" class="service" target="_top"><span class="service-name">Supports numériques</span><span class="service-dots"></span><span class="service-price">75$ / 1 visuel — 200$ / 4</span></a>
  </div>

  <!-- LES BLANCS -->
  <div class="category cat-blancs">
    <div class="cat-header">
      <img src="https://static.wixstatic.com/shapes/603d87_8c1734c96e2d46389e682f8b32278949.svg" alt="" class="cat-header-logo">
      <div class="cat-header-info">
        <div class="cat-header-name">LES BLANCS</div>
        <div class="cat-header-type">Vidéographie</div>
      </div>
      <a href="https://www.cocktailmedia.ca/menu/les-blancs" class="cat-header-link" target="_top">DÉTAILS →</a>
    </div>
    <a href="https://www.cocktailmedia.ca/menu/les-blancs/videoscorporatives" class="service" target="_top"><span class="service-name">Vidéo corporatif</span><span class="service-dots"></span><span class="service-price">300,00$</span></a>
    <a href="https://www.cocktailmedia.ca/menu/les-blancs/couverturedevenements" class="service" target="_top"><span class="service-name">Couverture d'évènements / 3H</span><span class="service-dots"></span><span class="service-price">300,00$</span></a>
    <a href="https://www.cocktailmedia.ca/menu/les-blancs/videoimmobiliere" class="service" target="_top"><span class="service-name">Vidéos immobiliers</span><span class="service-dots"></span><span class="service-price">200,00$</span></a>
    <a href="https://www.cocktailmedia.ca/menu/les-blancs/videopardrone" class="service" target="_top"><span class="service-name">Vidéos aériens</span><span class="service-dots"></span><span class="service-price">200,00$</span></a>
    <a href="https://www.cocktailmedia.ca/menu/les-blancs/videos-reseaux-sociaux" class="service" target="_top"><span class="service-name">Forfait Short/Reel</span><span class="service-dots"></span><span class="service-price">330,00$</span></a>
  </div>

  <!-- LES ROUGES -->
  <div class="category cat-rouges">
    <div class="cat-header">
      <img src="https://static.wixstatic.com/shapes/603d87_26a759fec56b434d996293b5902ea3e7.svg" alt="" class="cat-header-logo">
      <div class="cat-header-info">
        <div class="cat-header-name">LES ROUGES</div>
        <div class="cat-header-type">Photographie</div>
      </div>
      <a href="https://www.cocktailmedia.ca/menu/les-rouges" class="cat-header-link" target="_top">DÉTAILS →</a>
    </div>
    <a href="https://www.cocktailmedia.ca/menu/les-rouges/photo-de-produits" class="service" target="_top"><span class="service-name">Photos de produits</span><span class="service-dots"></span><span class="service-price">175,00$</span></a>
    <a href="https://www.cocktailmedia.ca/menu/les-rouges/photos-entreprise" class="service" target="_top"><span class="service-name">Photos en actions</span><span class="service-dots"></span><span class="service-price">250,00$</span></a>
    <a href="https://www.cocktailmedia.ca/menu/les-rouges/couverture-evenements" class="service" target="_top"><span class="service-name">Couverture d'évènement / 3H</span><span class="service-dots"></span><span class="service-price">250,00$</span></a>
    <a href="https://www.cocktailmedia.ca/menu/les-rouges/portrait-corporatif" class="service" target="_top"><span class="service-name">Portraits professionnels / 3 personnes</span><span class="service-dots"></span><span class="service-price">100,00$</span></a>
    <a href="https://www.cocktailmedia.ca/menu/les-rouges/retouches-avancees" class="service" target="_top"><span class="service-name">Retouches de photos existantes</span><span class="service-dots"></span><span class="service-price">50,00$</span></a>
    <a href="https://www.cocktailmedia.ca/menu/les-rouges/photographie-immobiliere" class="service" target="_top"><span class="service-name">Photographies immobilières (incluent le drone)</span><span class="service-dots"></span><span class="service-price">150,00$</span></a>
    <a href="https://www.cocktailmedia.ca/menu/les-rouges/photographie-par-drone" class="service" target="_top"><span class="service-name">Photographies par drone</span><span class="service-dots"></span><span class="service-price">200,00$</span></a>
  </div>

  <!-- LES DIGESTIFS -->
  <div class="category cat-digestifs">
    <div class="cat-header">
      <img src="https://static.wixstatic.com/shapes/603d87_2841476480cb44b48a46eb7ffe2c32bc.svg" alt="" class="cat-header-logo">
      <div class="cat-header-info">
        <div class="cat-header-name">LES DIGESTIFS</div>
        <div class="cat-header-type">Site web simple</div>
      </div>
      <a href="https://www.cocktailmedia.ca/menu/les-digestifs" class="cat-header-link" target="_top">DÉTAILS →</a>
    </div>
    <a href="https://www.cocktailmedia.ca/menu/les-digestifs/creation-site-web-simple" class="service" target="_top"><span class="service-name">Création de site web simple</span><span class="service-dots"></span><span class="service-price">500,00$</span></a>
    <a href="https://www.cocktailmedia.ca/menu/les-digestifs/boutique-en-ligne-simple" class="service" target="_top"><span class="service-name">Création d'une boutique en ligne</span><span class="service-dots"></span><span class="service-price">1 000,00$</span></a>
    <a href="https://www.cocktailmedia.ca/menu/les-digestifs/refonte-site-web-existant" class="service" target="_top"><span class="service-name">Refonte de site web</span><span class="service-dots"></span><span class="service-price">150,00$</span></a>
    <p class="cat-note">Les prix excluent les frais d'hébergement.</p>
  </div>

  <!-- LES EXTRAS -->
  <div class="category">
    <div class="cat-header">
      <div class="cat-header-info">
        <div class="cat-header-name">LES EXTRAS</div>
        <div class="cat-header-type">Services supplémentaires</div>
      </div>
    </div>
    <div class="service" target="_top"><span class="service-name">Livraisons express</span><span class="service-dots"></span><span class="service-price">20$ — 100$</span></div>
    <div class="service" target="_top"><span class="service-name">Revisite supplémentaire</span><span class="service-dots"></span><span class="service-price">10$ — 30$</span></div>
    <div class="service" target="_top"><span class="service-name">Ajout d'une personne</span><span class="service-dots"></span><span class="service-price">50,00$</span></div>
    <div class="service" target="_top"><span class="service-name">Photos supplémentaires</span><span class="service-dots"></span><span class="service-price">30$ — 75$</span></div>
    <div class="service" target="_top"><span class="service-name">Séance prolongée</span><span class="service-dots"></span><span class="service-price">50$ — 100$</span></div>
    <div class="service" target="_top"><span class="service-name">Entrevue en directe</span><span class="service-dots"></span><span class="service-price">100,00$</span></div>
    <p class="cat-note">Les prix varient selon le service.</p>
  </div>

  <!-- Footer -->
  <div class="page-footer">
    <p class="page-footer-text">
      Tu sais ce que tu veux ? On en jase 15 minutes.<br>
      Pas de pitch, pas de pression. Juste les réponses à tes questions.
    </p>
    <a href="https://www.cocktailmedia.ca/menu/depos" class="page-footer-cta" target="_top">RÉSERVER UN APPEL DE 15 MIN</a>
    <a href="mailto:info@cocktailmedia.ca" class="page-footer-secondary" target="_top">Ou écris-nous à info@cocktailmedia.ca</a>
    <img src="https://static.wixstatic.com/shapes/603d87_c9b09d330c54453fbf1b8edd389c9cfa.svg" alt="" class="page-footer-coupe" aria-hidden="true">
  </div>

</div>
    `;
  }
}
customElements.define('cocktail-menu-complet', CocktailMenuComplet);
