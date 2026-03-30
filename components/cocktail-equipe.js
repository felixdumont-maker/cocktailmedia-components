// @ts-nocheck
class CocktailEquipe extends HTMLElement {
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
  --gris-ligne:rgba(255,255,255,.06);

          font-family:'Montserrat',system-ui,sans-serif;
          -webkit-font-smoothing:antialiased;
        }
        .equipe{background:var(--creme);padding:5rem 3rem}
        .equipe-inner{max-width:900px;margin:0 auto}
        .equipe-header{text-align:center;margin-bottom:3.5rem}
        .equipe-label{font-family:'Bebas Neue',sans-serif;font-size:.7rem;letter-spacing:.4em;color:var(--rouge);margin-bottom:.8rem}
        .equipe-title{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4.5vw,3.5rem);letter-spacing:.03em;color:var(--noir);line-height:.95}
        .equipe-subtitle{font-size:.9rem;color:var(--gris);font-weight:400;margin-top:.8rem}
        .team{display:grid;grid-template-columns:1fr 1fr;gap:2.5rem}
        .member{display:flex;flex-direction:column;align-items:center;text-align:center}
        .member-photo{width:160px;height:160px;border-radius:50%;object-fit:cover;object-position:center top;margin-bottom:1.5rem;border:3px solid var(--fond);box-shadow:0 8px 30px rgba(0,0,0,.08);transition:all .3s ease;filter:grayscale(.15)}
        .member:hover .member-photo{transform:scale(1.05);filter:grayscale(0);box-shadow:0 12px 40px rgba(232,59,20,.12);border-color:var(--rouge)}
        .member-name{font-family:'Bebas Neue',sans-serif;font-size:clamp(1.2rem,1.6vw,1.4rem);letter-spacing:.1em;color:var(--noir);margin-bottom:.2rem}
        .member-role{font-family:'Bebas Neue',sans-serif;font-size:.7rem;letter-spacing:.2em;color:var(--rouge);margin-bottom:.8rem}
        .member-desc{font-size:.82rem;font-weight:400;color:var(--gris);line-height:1.65;max-width:320px}
        @media(max-width:768px){.equipe{padding:4rem 1.5rem}.team{grid-template-columns:1fr;gap:3rem}}
        @media(max-width:480px){.equipe{padding:3rem 1.2rem}.member-photo{width:130px;height:130px}}
      </style>
      <section class="equipe">
        <div class="equipe-inner">
          <div class="equipe-header">
            <p class="equipe-label">DU VRAI MONDE</p>
            <h2 class="equipe-title">QUI EST DERRIÈRE LE BAR</h2>
            <p class="equipe-subtitle">Pas un algorithme. Pas un sous-traitant à l’autre bout du monde. Nous.</p>
          </div>
          <div class="team">
            <div class="member">
              <img src="https://static.wixstatic.com/media/603d87_0e458c68edac45949a9b9f6e893d4db5~mv2.jpg" alt="Félix Dumont" class="member-photo">
              <h3 class="member-name">FÉLIX DUMONT</h3>
              <span class="member-role">FONDATEUR & PRODUCTION</span>
              <p class="member-desc">Photo, vidéo, graphisme, web — je travaille directement sur tes projets. Tu m’appelles, je comprends ton idée, je la produis.</p>
            </div>
            <div class="member">
              <img src="https://static.wixstatic.com/media/603d87_606be45782ec4229b5f042e29fa2d109~mv2.png" alt="Marie-Christine Blanchette" class="member-photo">
              <h3 class="member-name">MARIE-CHRISTINE BLANCHETTE</h3>
              <span class="member-role">FINANCES & SERVICE CLIENTÈLE</span>
              <p class="member-desc">Suivi de projets, facturation et communication. Du début à la fin, c’est clair et sans complication.</p>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}
customElements.define('cocktail-equipe', CocktailEquipe);
