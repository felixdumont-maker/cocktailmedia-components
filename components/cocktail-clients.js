// @ts-nocheck
class CocktailClients extends HTMLElement {
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
  --rouge-hover:#d63210;
  --rouge-pale:#fde8e3;
  --gris:#8a8580;
  --gris-clair:#c4beb6;
  --neg-color:#d5cec4;

          font-family:'Montserrat',system-ui,sans-serif;
          -webkit-font-smoothing:antialiased;
        }

        .clients{
          background:var(--fond);
          padding:4rem 0;
          overflow:hidden;
          position:relative;
        }

        .clients-header{
          text-align:center;
          margin-bottom:2.5rem;
          padding:0 2rem;
        }
        .clients-label{
          font-family:'Bebas Neue',sans-serif;
          font-size:.7rem;
          letter-spacing:.4em;
          color:var(--rouge);
          margin-bottom:.6rem;
        }
        .clients-title{
          font-family:'Bebas Neue',sans-serif;
          font-size:clamp(1.8rem,3.5vw,2.8rem);
          letter-spacing:.03em;
          color:var(--noir);
          line-height:.95;
        }
        .clients-stat{
          font-size:.88rem;
          color:var(--gris);
          font-weight:400;
          margin-top:.8rem;
        }
        .clients-stat strong{
          font-family:'Bebas Neue',sans-serif;
          font-size:1.8rem;
          color:var(--rouge);
          vertical-align:middle;
          margin-right:.3rem;
        }

        /* Marquee */
        .marquee-wrap{
          position:relative;
          width:100%;
          overflow:hidden;
        }
        /* Fade edges */
        .marquee-wrap::before,.marquee-wrap::after{
          content:'';
          position:absolute;
          top:0;bottom:0;
          width:80px;
          z-index:2;
          pointer-events:none;
        }
        .marquee-wrap::before{
          left:0;
          background:linear-gradient(90deg,var(--fond),transparent);
        }
        .marquee-wrap::after{
          right:0;
          background:linear-gradient(-90deg,var(--fond),transparent);
        }

        .marquee-track{
          display:flex;
          align-items:center;
          gap:3rem;
          width:max-content;
          animation:scroll 30s linear infinite;
        }
        .marquee-track:hover{
          animation-play-state:paused;
        }

        .client-item{
          flex-shrink:0;
          display:flex;
          align-items:center;
          gap:.8rem;
          padding:.8rem 1.5rem;
          background:white;
          border-radius:12px;
          border:1px solid rgba(43,43,43,.06);
          transition:all .3s ease;
        }
        .client-item:hover{
          border-color:var(--rouge);
          transform:translateY(-2px);
          box-shadow:0 6px 20px rgba(0,0,0,.05);
        }
        .client-logo{
          height:32px;width:auto;
          object-fit:contain;
          filter:grayscale(.3);
          transition:filter .3s ease;
        }
        .client-item:hover .client-logo{
          filter:grayscale(0);
        }
        .client-name{
          font-family:'Bebas Neue',sans-serif;
          font-size:.85rem;
          letter-spacing:.06em;
          color:var(--noir);
          white-space:nowrap;
        }

        @keyframes scroll{
          0%{transform:translateX(0)}
          100%{transform:translateX(-50%)}
        }

        @media(max-width:768px){
          .clients{padding:3rem 0}
          .marquee-track{gap:2rem}
          .client-item{padding:.6rem 1.2rem}
        }
      </style>

      <section class="clients">
        <div class="clients-header">
          <p class="clients-label">ILS NOUS FONT CONFIANCE</p>
          <h2 class="clients-title">NOS HABITUÉS</h2>
          <p class="clients-stat"><strong>60+</strong> projets livrés en moins d’un an</p>
        </div>

        <div class="marquee-wrap">
          <div class="marquee-track">
            <!-- Set 1 -->
            <div class="client-item"><span class="client-name">Clinique d’Esthétique Cartier</span></div>
            <div class="client-item"><span class="client-name">C’est bon de l’eau</span></div>
            <div class="client-item"><span class="client-name">Bijoutier Dominique Dugré</span></div>
            <div class="client-item"><span class="client-name">Les Belles Sœurs</span></div>
            <div class="client-item"><span class="client-name">Studio Nomad TV</span></div>
            <div class="client-item"><span class="client-name">Dek Hockey Shawinigan</span></div>
            <div class="client-item"><span class="client-name">Académie Aya Benzekri</span></div>
            <div class="client-item"><span class="client-name">Maude Massé</span></div>
            <!-- Set 2 (duplicate for seamless loop) -->
            <div class="client-item"><span class="client-name">Clinique d’Esthétique Cartier</span></div>
            <div class="client-item"><span class="client-name">C’est bon de l’eau</span></div>
            <div class="client-item"><span class="client-name">Bijoutier Dominique Dugré</span></div>
            <div class="client-item"><span class="client-name">Les Belles Sœurs</span></div>
            <div class="client-item"><span class="client-name">Studio Nomad TV</span></div>
            <div class="client-item"><span class="client-name">Dek Hockey Shawinigan</span></div>
            <div class="client-item"><span class="client-name">Académie Aya Benzekri</span></div>
            <div class="client-item"><span class="client-name">Maude Massé</span></div>
          </div>
        </div>
      </section>
    `;
  }
}
customElements.define('cocktail-clients', CocktailClients);
