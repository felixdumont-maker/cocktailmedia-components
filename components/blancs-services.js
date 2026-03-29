// @ts-nocheck
class BlancsServices extends HTMLElement {
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
          --blancs:#c9a84c;
          --blancs-bg:rgba(201,168,76,.06);
          --gris:#8a8580;
          --gris-clair:#c4beb6;
          --ligne:rgba(43,43,43,.08);
          font-family:'Montserrat',system-ui,sans-serif;
          -webkit-font-smoothing:antialiased;
          background:var(--fond);
          color:var(--noir);
        }

        .services-section{
          max-width:900px;
          margin:0 auto;
          padding:4rem 2rem;
        }

        /* Section header */
        .section-header{
          display:flex;align-items:center;gap:1rem;
          margin-bottom:2rem;
          padding-bottom:.8rem;
          border-bottom:3px solid var(--noir);
          position:relative;
        }
        .section-header::after{
          content:'';position:absolute;bottom:-3px;left:0;
          width:60px;height:3px;
          background:var(--blancs);
        }
        .section-icon{
          height:36px;width:auto;object-fit:contain;flex-shrink:0;
        }
        .section-header-info{flex:1}
        .section-label{
          font-family:'Bebas Neue',sans-serif;
          font-size:.65rem;letter-spacing:.3em;
          color:var(--blancs);margin-bottom:.2rem;
        }
        .section-title{
          font-family:'Bebas Neue',sans-serif;
          font-size:clamp(1.3rem,2vw,1.6rem);
          letter-spacing:.08em;color:var(--noir);
        }

        /* Service rows */
        .service{
          display:flex;justify-content:space-between;align-items:baseline;
          padding:.9rem 0;
          border-bottom:1px solid var(--ligne);
          text-decoration:none;color:var(--noir);
          transition:all .25s ease;
        }
        .service:hover{
          padding-left:.6rem;
          background:linear-gradient(90deg,var(--blancs-bg),transparent);
        }
        .service-name{
          font-size:.9rem;font-weight:500;
          flex-shrink:0;
          transition:color .2s ease;
        }
        .service:hover .service-name{color:var(--blancs)}
        .service-desc{
          font-size:.72rem;font-weight:400;
          color:var(--gris);margin-top:.15rem;
          line-height:1.4;
        }
        .service-left{
          display:flex;flex-direction:column;
          flex:1;
        }
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
          font-size:1rem;letter-spacing:.05em;
          color:var(--noir);
          white-space:nowrap;
          flex-shrink:0;
          transition:color .2s ease;
        }
        .service:hover .service-price{color:var(--blancs)}

        /* Service arrow */
        .service-arrow{
          font-size:.75rem;color:var(--gris);
          margin-left:.5rem;
          opacity:0;transform:translateX(-4px);
          transition:all .2s ease;
          flex-shrink:0;
        }
        .service:hover .service-arrow{
          opacity:1;transform:translateX(0);color:var(--blancs);
        }

        @media(max-width:640px){
          .services-section{padding:3rem 1.5rem}
          .section-header{flex-wrap:wrap;gap:.6rem}
          .service{flex-wrap:wrap;gap:.2rem}
          .service-dots{display:none}
          .service-price{font-size:.88rem}
          .service-arrow{display:none}
        }
      </style>
      <section class="services-section">
        <div class="section-header">
          <img src="https://static.wixstatic.com/shapes/603d87_8c1734c96e2d46389e682f8b32278949.svg" alt="" class="section-icon">
          <div class="section-header-info">
            <p class="section-label">NOS SERVICES</p>
            <h2 class="section-title">VID\u00c9OGRAPHIE \u00c0 LA CARTE</h2>
          </div>
        </div>

        <a href="https://www.cocktailmedia.ca/menu/les-blancs/videoscorporatives" class="service" target="_top">
          <div class="service-left">
            <span class="service-name">Vid\u00e9o corporatif</span>
            <span class="service-desc">Pr\u00e9sentation d'entreprise, t\u00e9moignage, promesse de marque</span>
          </div>
          <span class="service-dots"></span>
          <span class="service-price">300,00$</span>
          <span class="service-arrow">\u2192</span>
        </a>

        <a href="https://www.cocktailmedia.ca/menu/les-blancs/couverturedevenements" class="service" target="_top">
          <div class="service-left">
            <span class="service-name">Couverture d'\u00e9v\u00e8nements / 3H</span>
            <span class="service-desc">Galas, lancements, conf\u00e9rences, festivals</span>
          </div>
          <span class="service-dots"></span>
          <span class="service-price">300,00$</span>
          <span class="service-arrow">\u2192</span>
        </a>

        <a href="https://www.cocktailmedia.ca/menu/les-blancs/videoimmobiliere" class="service" target="_top">
          <div class="service-left">
            <span class="service-name">Vid\u00e9os immobiliers</span>
            <span class="service-desc">Visite guid\u00e9e, mise en valeur de propri\u00e9t\u00e9</span>
          </div>
          <span class="service-dots"></span>
          <span class="service-price">200,00$</span>
          <span class="service-arrow">\u2192</span>
        </a>

        <a href="https://www.cocktailmedia.ca/menu/les-blancs/videopardrone" class="service" target="_top">
          <div class="service-left">
            <span class="service-name">Vid\u00e9os a\u00e9riens</span>
            <span class="service-desc">Captation par drone, vues en hauteur</span>
          </div>
          <span class="service-dots"></span>
          <span class="service-price">200,00$</span>
          <span class="service-arrow">\u2192</span>
        </a>

        <a href="https://www.cocktailmedia.ca/menu/les-blancs/videos-reseaux-sociaux" class="service" target="_top">
          <div class="service-left">
            <span class="service-name">Forfait Short/Reel</span>
            <span class="service-desc">Vid\u00e9o courte optimis\u00e9e r\u00e9seaux sociaux</span>
          </div>
          <span class="service-dots"></span>
          <span class="service-price">330,00$</span>
          <span class="service-arrow">\u2192</span>
        </a>
      </section>
    `;
  }
}
customElements.define('blancs-services', BlancsServices);
