// @ts-nocheck
class CocktailProcess extends HTMLElement {
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
        .process{background:var(--fond);padding:5rem 3rem;position:relative}
        .process-inner{max-width:1000px;margin:0 auto}
        .process-header{text-align:center;margin-bottom:4rem}
        .process-label{font-family:'Bebas Neue',sans-serif;font-size:.7rem;letter-spacing:.4em;color:var(--rouge);margin-bottom:.8rem}
        .process-title{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4.5vw,3.5rem);letter-spacing:.03em;color:var(--noir);line-height:.95}
        .steps{display:grid;grid-template-columns:repeat(3,1fr);gap:2rem;position:relative}
        .steps::before{content:'';position:absolute;top:48px;left:calc(16.66% + 1rem);right:calc(16.66% + 1rem);height:2px;background:linear-gradient(90deg,var(--rouge),var(--gris-clair),var(--rouge));opacity:.2;z-index:0}
        .step{text-align:center;position:relative;z-index:1}
        .step-num{width:64px;height:64px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 1.5rem;font-family:'Bebas Neue',sans-serif;font-size:1.5rem;letter-spacing:.05em;transition:all .3s ease}
        .step:nth-child(1) .step-num{background:var(--creme);color:var(--noir)}
        .step:nth-child(2) .step-num{background:var(--rouge);color:white}
        .step:nth-child(3) .step-num{background:var(--noir);color:white}
        .step:hover .step-num{transform:scale(1.1);box-shadow:0 8px 25px rgba(0,0,0,.1)}
        .step-title{font-family:'Bebas Neue',sans-serif;font-size:clamp(1.2rem,1.8vw,1.5rem);letter-spacing:.08em;color:var(--noir);margin-bottom:.6rem}
        .step-desc{font-size:.85rem;font-weight:400;color:var(--gris);line-height:1.65;max-width:280px;margin:0 auto}
        .step-desc strong{color:var(--noir);font-weight:600}
        .step-aside{font-size:.72rem;font-style:italic;color:var(--gris-clair);margin-top:.6rem}
        @media(max-width:768px){.process{padding:4rem 1.5rem}.steps{grid-template-columns:1fr;gap:2.5rem}.steps::before{display:none}}
        @media(max-width:480px){.process{padding:3rem 1.2rem}}
      </style>
      <section class="process">
        <div class="process-inner">
          <div class="process-header">
            <p class="process-label">SIMPLE DE MÊME</p>
            <h2 class="process-title">COMMENT ÇA MARCHE</h2>
          </div>
          <div class="steps">
            <div class="step"><div class="step-num">01</div><h3 class="step-title">TU CHOISIS</h3><p class="step-desc">Consulte le menu, choisis le service qui te convient. Les <strong>prix sont affichés</strong>, pas de devis mystère.</p><p class="step-aside">Comme au restaurant.</p></div>
            <div class="step"><div class="step-num">02</div><h3 class="step-title">TU PAIES</h3><p class="step-desc">Tu réserves en ligne et tu paies. <strong>Pas de négociation</strong>, pas de facture surprise à la fin.</p><p class="step-aside">Oui, c’est vraiment ça.</p></div>
            <div class="step"><div class="step-num">03</div><h3 class="step-title">ON PRODUIT</h3><p class="step-desc">On t’appelle, on comprend ton idée, et on la <strong>produit</strong>. Livré dans les délais, sans complication.</p><p class="step-aside">Pas de réunion de 3 heures. Promis.</p></div>
          </div>
        </div>
      </section>
    `;
  }
}
customElements.define('cocktail-process', CocktailProcess);
