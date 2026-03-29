// @ts-nocheck
class BlancsInclus extends HTMLElement {
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
          --blancs:#c9a84c;
          --blancs-pale:rgba(201,168,76,.1);
          --gris:#8a8580;
          --gris-clair:#c4beb6;
          --ligne:rgba(43,43,43,.08);
          font-family:'Montserrat',system-ui,sans-serif;
          -webkit-font-smoothing:antialiased;
          background:var(--creme);
          color:var(--noir);
        }

        .inclus-section{
          max-width:900px;
          margin:0 auto;
          padding:4rem 2rem;
        }

        /* Header */
        .inclus-header{
          text-align:center;
          margin-bottom:3rem;
        }
        .inclus-label{
          font-family:'Bebas Neue',sans-serif;
          font-size:.7rem;letter-spacing:.4em;
          color:var(--blancs);margin-bottom:.8rem;
        }
        .inclus-title{
          font-family:'Bebas Neue',sans-serif;
          font-size:clamp(2rem,4.5vw,3.2rem);
          letter-spacing:.03em;line-height:.95;
          color:var(--noir);
        }
        .inclus-subtitle{
          font-size:.88rem;color:var(--gris);font-weight:400;
          margin-top:.8rem;line-height:1.6;
          max-width:500px;margin-left:auto;margin-right:auto;
        }

        /* Grid */
        .inclus-grid{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:1.5rem;
        }

        /* Card */
        .inclus-card{
          background:var(--fond);
          border-radius:8px;
          padding:2rem 1.5rem;
          text-align:center;
          position:relative;
          overflow:hidden;
          transition:all .3s ease;
        }
        .inclus-card::before{
          content:'';position:absolute;top:0;left:0;right:0;
          height:3px;background:var(--blancs);
          transform:scaleX(0);transform-origin:left;
          transition:transform .3s ease;
        }
        .inclus-card:hover::before{transform:scaleX(1)}
        .inclus-card:hover{
          transform:translateY(-4px);
          box-shadow:0 8px 30px rgba(201,168,76,.1);
        }

        .card-icon{
          font-size:1.6rem;
          margin-bottom:1rem;
          display:flex;align-items:center;justify-content:center;
          width:52px;height:52px;
          border-radius:50%;
          background:var(--blancs-pale);
          margin-left:auto;margin-right:auto;
          transition:all .3s ease;
        }
        .inclus-card:hover .card-icon{
          background:var(--blancs);
          transform:scale(1.08);
        }
        .inclus-card:hover .card-icon svg{
          filter:brightness(0) invert(1);
        }

        .card-icon svg{
          width:22px;height:22px;
          fill:none;stroke:var(--blancs);
          stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;
          transition:filter .3s ease;
        }

        .card-title{
          font-family:'Bebas Neue',sans-serif;
          font-size:1rem;letter-spacing:.1em;
          color:var(--noir);margin-bottom:.5rem;
        }
        .card-desc{
          font-size:.78rem;font-weight:400;
          color:var(--gris);line-height:1.6;
        }

        @media(max-width:768px){
          .inclus-grid{grid-template-columns:1fr 1fr;gap:1.2rem}
        }
        @media(max-width:480px){
          .inclus-section{padding:3rem 1.2rem}
          .inclus-grid{grid-template-columns:1fr;gap:1rem}
          .inclus-card{padding:1.5rem 1.2rem}
        }
      </style>
      <section class="inclus-section">
        <div class="inclus-header">
          <p class="inclus-label">PAS DE SURPRISE</p>
          <h2 class="inclus-title">CE QUI EST INCLUS</h2>
          <p class="inclus-subtitle">Chaque service vid\u00e9o comprend ces \u00e9l\u00e9ments. Rien de cach\u00e9, tout est transparent.</p>
        </div>

        <div class="inclus-grid">

          <div class="inclus-card">
            <div class="card-icon">
              <svg viewBox="0 0 24 24"><path d="M15.6 11.8c0-.7-.2-1.4-.5-2M23 12c0 6.1-4.9 11-11 11S1 18.1 1 12 5.9 1 12 1c2.2 0 4.2.6 5.9 1.7"/><circle cx="12" cy="12" r="3"/><path d="M22 2 15 9"/><path d="M18 2h4v4"/></svg>
            </div>
            <h3 class="card-title">TOURNAGE SUR PLACE</h3>
            <p class="card-desc">D\u00e9placement en Mauricie inclus. On se pr\u00e9sente avec l'\u00e9quipement, pr\u00eat \u00e0 tourner.</p>
          </div>

          <div class="inclus-card">
            <div class="card-icon">
              <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="2"/><path d="M7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 7h5M17 17h5"/></svg>
            </div>
            <h3 class="card-title">MONTAGE PROFESSIONNEL</h3>
            <p class="card-desc">Montage complet avec transitions, corrections couleur et \u00e9talonnage.</p>
          </div>

          <div class="inclus-card">
            <div class="card-icon">
              <svg viewBox="0 0 24 24"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
            </div>
            <h3 class="card-title">MUSIQUE LIBRE DE DROITS</h3>
            <p class="card-desc">S\u00e9lection musicale adapt\u00e9e au ton de ta vid\u00e9o, sans frais additionnels.</p>
          </div>

          <div class="inclus-card">
            <div class="card-icon">
              <svg viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            </div>
            <h3 class="card-title">LIVRAISON NUM\u00c9RIQUE</h3>
            <p class="card-desc">Fichier HD livr\u00e9 par lien de t\u00e9l\u00e9chargement. Formats optimis\u00e9s web et r\u00e9seaux sociaux.</p>
          </div>

          <div class="inclus-card">
            <div class="card-icon">
              <svg viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
            </div>
            <h3 class="card-title">1 REVISITE INCLUSE</h3>
            <p class="card-desc">Une ronde de modifications apr\u00e8s visionnement. Ajustements pr\u00e9cis selon tes commentaires.</p>
          </div>

          <div class="inclus-card">
            <div class="card-icon">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <h3 class="card-title">D\u00c9LAI DE 10 JOURS</h3>
            <p class="card-desc">Livraison standard en 10 jours ouvrables. Option express disponible.</p>
          </div>

        </div>
      </section>
    `;
  }
}
customElements.define('blancs-inclus', BlancsInclus);
