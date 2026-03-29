// @ts-nocheck
class BlancsCta extends HTMLElement {
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
          --gris:#8a8580;
          --gris-clair:#c4beb6;
          --ligne:rgba(43,43,43,.08);
          font-family:'Montserrat',system-ui,sans-serif;
          -webkit-font-smoothing:antialiased;
          background:var(--noir);
          color:var(--fond);
        }

        .cta-section{
          max-width:900px;
          margin:0 auto;
          padding:4.5rem 2rem;
          text-align:center;
          position:relative;
        }

        /* Subtle noise overlay like menu section */
        :host::after{
          content:'';position:absolute;inset:0;opacity:.03;pointer-events:none;
          background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size:128px;
        }

        .cta-inner{position:relative;z-index:2}

        /* Logo */
        .cta-logo{
          height:60px;width:auto;
          margin-bottom:1.5rem;
          opacity:.15;
          filter:brightness(0) invert(1);
        }

        /* Label */
        .cta-label{
          font-family:'Bebas Neue',sans-serif;
          font-size:.7rem;letter-spacing:.4em;
          color:var(--blancs);margin-bottom:.8rem;
        }

        /* Title */
        .cta-title{
          font-family:'Bebas Neue',sans-serif;
          font-size:clamp(2rem,4.5vw,3.2rem);
          letter-spacing:.03em;line-height:.95;
          color:var(--fond);margin-bottom:.8rem;
        }

        /* Subtitle */
        .cta-subtitle{
          font-size:.88rem;font-weight:400;
          color:var(--gris-clair);line-height:1.6;
          max-width:440px;margin:0 auto 2rem;
        }

        /* Primary button */
        .cta-btn{
          display:inline-flex;align-items:center;gap:.6rem;
          font-family:'Bebas Neue',sans-serif;
          font-size:1.1rem;letter-spacing:.14em;
          color:var(--noir);background:var(--blancs);
          padding:.9rem 2.5rem;border-radius:100px;
          text-decoration:none;transition:all .3s ease;
        }
        .cta-btn:hover{
          background:var(--creme);
          transform:translateY(-3px);
          box-shadow:0 10px 30px rgba(201,168,76,.25);
        }
        .cta-btn-coupe{
          height:18px;transition:transform .3s ease;
          filter:brightness(0);
        }
        .cta-btn:hover .cta-btn-coupe{transform:rotate(-15deg) scale(1.1)}

        /* Secondary link */
        .cta-secondary{
          display:block;
          margin-top:1.2rem;
          font-size:.78rem;color:var(--gris);
          text-decoration:none;
          transition:color .2s ease;
        }
        .cta-secondary:hover{color:var(--blancs)}

        /* Back to menu */
        .cta-back{
          display:inline-flex;align-items:center;gap:.4rem;
          margin-top:2rem;
          font-family:'Bebas Neue',sans-serif;
          font-size:.75rem;letter-spacing:.15em;
          color:var(--gris);text-decoration:none;
          transition:all .2s ease;
        }
        .cta-back:hover{color:var(--blancs)}
        .cta-back-arrow{
          transition:transform .2s ease;
        }
        .cta-back:hover .cta-back-arrow{transform:translateX(-3px)}

        @media(max-width:480px){
          .cta-section{padding:3.5rem 1.2rem}
          .cta-btn{width:100%;justify-content:center}
        }
      </style>
      <section class="cta-section">
        <div class="cta-inner">
          <img src="https://static.wixstatic.com/shapes/603d87_8c1734c96e2d46389e682f8b32278949.svg" alt="" class="cta-logo" aria-hidden="true">
          <p class="cta-label">PR\u00caT \u00c0 TOURNER ?</p>
          <h2 class="cta-title">ON EN JASE 15 MINUTES</h2>
          <p class="cta-subtitle">Pas de pitch, pas de pression. Tu nous expliques ton id\u00e9e, on te dit exactement ce qu'on peut faire.</p>

          <a href="https://www.cocktailmedia.ca/menu/depos" class="cta-btn" target="_top">
            R\u00c9SERVER UN APPEL
            <img src="https://static.wixstatic.com/shapes/603d87_8c1734c96e2d46389e682f8b32278949.svg" alt="" class="cta-btn-coupe">
          </a>
          <a href="mailto:info@cocktailmedia.ca" class="cta-secondary" target="_top">Ou \u00e9cris-nous \u00e0 info@cocktailmedia.ca</a>

          <a href="https://www.cocktailmedia.ca/menu" class="cta-back" target="_top">
            <span class="cta-back-arrow">\u2190</span> RETOUR AU MENU COMPLET
          </a>
        </div>
      </section>
    `;
  }
}
customElements.define('blancs-cta', BlancsCta);
