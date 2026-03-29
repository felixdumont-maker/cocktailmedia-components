// @ts-nocheck
class DigestifsInclus extends HTMLElement {
  constructor() { super(); this.attachShadow({ mode: 'open' }); }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&display=swap');
        *,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
        :host{display:block;--creme:#FFF4E9;--fond:#FAF9F6;--noir:#2B2B2B;--digestifs:#e8731a;--digestifs-pale:rgba(232,115,26,.1);--gris:#8a8580;--gris-clair:#c4beb6;font-family:'Montserrat',system-ui,sans-serif;-webkit-font-smoothing:antialiased;background:var(--creme);color:var(--noir)}
        .inclus-section{max-width:900px;margin:0 auto;padding:4rem 2rem}
        .inclus-header{text-align:center;margin-bottom:3rem}
        .inclus-label{font-family:'Bebas Neue',sans-serif;font-size:.7rem;letter-spacing:.4em;color:var(--digestifs);margin-bottom:.8rem}
        .inclus-title{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4.5vw,3.2rem);letter-spacing:.03em;line-height:.95;color:var(--noir)}
        .inclus-subtitle{font-size:.88rem;color:var(--gris);font-weight:400;margin-top:.8rem;line-height:1.6;max-width:500px;margin-left:auto;margin-right:auto}
        .inclus-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem}
        .inclus-card{background:var(--fond);border-radius:8px;padding:2rem 1.5rem;text-align:center;position:relative;overflow:hidden;transition:all .3s ease}
        .inclus-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:var(--digestifs);transform:scaleX(0);transform-origin:left;transition:transform .3s ease}
        .inclus-card:hover::before{transform:scaleX(1)}
        .inclus-card:hover{transform:translateY(-4px);box-shadow:0 8px 30px rgba(232,115,26,.08)}
        .card-icon{margin-bottom:1rem;display:flex;align-items:center;justify-content:center;width:52px;height:52px;border-radius:50%;background:var(--digestifs-pale);margin-left:auto;margin-right:auto;transition:all .3s ease}
        .inclus-card:hover .card-icon{background:var(--digestifs);transform:scale(1.08)}
        .inclus-card:hover .card-icon svg{stroke:white}
        .card-icon svg{width:22px;height:22px;fill:none;stroke:var(--digestifs);stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;transition:stroke .3s ease}
        .card-title{font-family:'Bebas Neue',sans-serif;font-size:1rem;letter-spacing:.1em;color:var(--noir);margin-bottom:.5rem}
        .card-desc{font-size:.78rem;font-weight:400;color:var(--gris);line-height:1.6}
        @media(max-width:768px){.inclus-grid{grid-template-columns:1fr 1fr;gap:1.2rem}}
        @media(max-width:480px){.inclus-section{padding:3rem 1.2rem}.inclus-grid{grid-template-columns:1fr;gap:1rem}.inclus-card{padding:1.5rem 1.2rem}}
      </style>
      <section class="inclus-section">
        <div class="inclus-header">
          <p class="inclus-label">PAS DE SURPRISE</p>
          <h2 class="inclus-title">CE QUI EST INCLUS</h2>
          <p class="inclus-subtitle">Chaque site web comprend ces \u00e9l\u00e9ments. Rien de cach\u00e9, tout est transparent.</p>
        </div>
        <div class="inclus-grid">
          <div class="inclus-card"><div class="card-icon"><svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></div><h3 class="card-title">DESIGN RESPONSIVE</h3><p class="card-desc">Ton site s\u2019adapte parfaitement sur mobile, tablette et ordinateur.</p></div>
          <div class="inclus-card"><div class="card-icon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></div><h3 class="card-title">OPTIMIS\u00c9 SEO</h3><p class="card-desc">Structure optimis\u00e9e pour les moteurs de recherche. Ton site sera trouv\u00e9.</p></div>
          <div class="inclus-card"><div class="card-icon"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div><h3 class="card-title">CERTIFICAT SSL</h3><p class="card-desc">Connexion s\u00e9curis\u00e9e HTTPS incluse. Confiance pour tes visiteurs.</p></div>
          <div class="inclus-card"><div class="card-icon"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg></div><h3 class="card-title">INT\u00c9GRATION DE CONTENU</h3><p class="card-desc">On int\u00e8gre tes textes, photos et vid\u00e9os. Tu n\u2019as qu\u2019\u00e0 fournir le mat\u00e9riel.</p></div>
          <div class="inclus-card"><div class="card-icon"><svg viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg></div><h3 class="card-title">1 REVISITE INCLUSE</h3><p class="card-desc">Une ronde de modifications apr\u00e8s la mise en ligne. Ajustements selon tes commentaires.</p></div>
          <div class="inclus-card"><div class="card-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div><h3 class="card-title">D\u00c9LAI DE 14 JOURS</h3><p class="card-desc">Livraison standard en 14 jours ouvrables. Option express disponible.</p></div>
        </div>
      </section>`;
  }
}
customElements.define('digestifs-inclus', DigestifsInclus);
