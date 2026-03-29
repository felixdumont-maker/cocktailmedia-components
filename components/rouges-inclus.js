// @ts-nocheck
class RougesInclus extends HTMLElement {
  constructor() { super(); this.attachShadow({ mode: 'open' }); }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&display=swap');
        *,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
        :host{display:block;--creme:#FFF4E9;--fond:#FAF9F6;--noir:#2B2B2B;--rouges:#8a2020;--rouges-pale:rgba(138,32,32,.1);--gris:#8a8580;--gris-clair:#c4beb6;font-family:'Montserrat',system-ui,sans-serif;-webkit-font-smoothing:antialiased;background:var(--creme);color:var(--noir)}
        .inclus-section{max-width:900px;margin:0 auto;padding:4rem 2rem}
        .inclus-header{text-align:center;margin-bottom:3rem}
        .inclus-label{font-family:'Bebas Neue',sans-serif;font-size:.7rem;letter-spacing:.4em;color:var(--rouges);margin-bottom:.8rem}
        .inclus-title{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4.5vw,3.2rem);letter-spacing:.03em;line-height:.95;color:var(--noir)}
        .inclus-subtitle{font-size:.88rem;color:var(--gris);font-weight:400;margin-top:.8rem;line-height:1.6;max-width:500px;margin-left:auto;margin-right:auto}
        .inclus-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem}
        .inclus-card{background:var(--fond);border-radius:8px;padding:2rem 1.5rem;text-align:center;position:relative;overflow:hidden;transition:all .3s ease}
        .inclus-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:var(--rouges);transform:scaleX(0);transform-origin:left;transition:transform .3s ease}
        .inclus-card:hover::before{transform:scaleX(1)}
        .inclus-card:hover{transform:translateY(-4px);box-shadow:0 8px 30px rgba(138,32,32,.08)}
        .card-icon{font-size:1.6rem;margin-bottom:1rem;display:flex;align-items:center;justify-content:center;width:52px;height:52px;border-radius:50%;background:var(--rouges-pale);margin-left:auto;margin-right:auto;transition:all .3s ease}
        .inclus-card:hover .card-icon{background:var(--rouges);transform:scale(1.08)}
        .inclus-card:hover .card-icon svg{stroke:white}
        .card-icon svg{width:22px;height:22px;fill:none;stroke:var(--rouges);stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;transition:stroke .3s ease}
        .card-title{font-family:'Bebas Neue',sans-serif;font-size:1rem;letter-spacing:.1em;color:var(--noir);margin-bottom:.5rem}
        .card-desc{font-size:.78rem;font-weight:400;color:var(--gris);line-height:1.6}
        @media(max-width:768px){.inclus-grid{grid-template-columns:1fr 1fr;gap:1.2rem}}
        @media(max-width:480px){.inclus-section{padding:3rem 1.2rem}.inclus-grid{grid-template-columns:1fr;gap:1rem}.inclus-card{padding:1.5rem 1.2rem}}
      </style>
      <section class="inclus-section">
        <div class="inclus-header">
          <p class="inclus-label">PAS DE SURPRISE</p>
          <h2 class="inclus-title">CE QUI EST INCLUS</h2>
          <p class="inclus-subtitle">Chaque service photo comprend ces \u00e9l\u00e9ments. Rien de cach\u00e9, tout est transparent.</p>
        </div>
        <div class="inclus-grid">
          <div class="inclus-card"><div class="card-icon"><svg viewBox="0 0 24 24"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg></div><h3 class="card-title">S\u00c9ANCE SUR PLACE</h3><p class="card-desc">D\u00e9placement en Mauricie inclus. On arrive avec tout l\u2019\u00e9quipement n\u00e9cessaire.</p></div>
          <div class="inclus-card"><div class="card-icon"><svg viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg></div><h3 class="card-title">RETOUCHES PROFESSIONNELLES</h3><p class="card-desc">Correction des couleurs, exposition, recadrage et retouches sur chaque photo livr\u00e9e.</p></div>
          <div class="inclus-card"><div class="card-icon"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg></div><h3 class="card-title">PHOTOS EN HAUTE R\u00c9SOLUTION</h3><p class="card-desc">Fichiers HD pr\u00eats pour l\u2019impression et versions optimis\u00e9es pour le web.</p></div>
          <div class="inclus-card"><div class="card-icon"><svg viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg></div><h3 class="card-title">LIVRAISON NUM\u00c9RIQUE</h3><p class="card-desc">Galerie priv\u00e9e en ligne avec lien de t\u00e9l\u00e9chargement. Acc\u00e8s simple et rapide.</p></div>
          <div class="inclus-card"><div class="card-icon"><svg viewBox="0 0 24 24"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg></div><h3 class="card-title">1 REVISITE INCLUSE</h3><p class="card-desc">Une ronde de modifications incluse. Ajustements pr\u00e9cis selon tes pr\u00e9f\u00e9rences.</p></div>
          <div class="inclus-card"><div class="card-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div><h3 class="card-title">D\u00c9LAI DE 7 JOURS</h3><p class="card-desc">Livraison standard en 7 jours ouvrables. Option express disponible.</p></div>
        </div>
      </section>`;
  }
}
customElements.define('rouges-inclus', RougesInclus);
