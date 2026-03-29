// @ts-nocheck
class AperoHero extends HTMLElement {
  constructor() { super(); this.attachShadow({ mode: 'open' }); }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&display=swap');
        *,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
        :host{display:block;--creme:#FFF4E9;--fond:#FAF9F6;--noir:#2B2B2B;--apero:#4a8c5c;--gris:#8a8580;--gris-clair:#c4beb6;--neg-color:#d5cec4;font-family:'Montserrat',system-ui,sans-serif;-webkit-font-smoothing:antialiased}
        .hero{min-height:60vh;display:flex;flex-direction:column;position:relative;overflow:hidden;background:var(--creme)}
        .hero-body{flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:4rem 2rem 3rem;position:relative;z-index:2;text-align:center}
        .bg-word{position:absolute;font-family:'Bebas Neue',sans-serif;letter-spacing:.04em;color:var(--neg-color);text-decoration:line-through;text-decoration-color:var(--apero);opacity:0;z-index:1;pointer-events:none;white-space:nowrap;user-select:none}
        .bg-w1{font-size:clamp(5rem,18vw,15rem);text-decoration-thickness:clamp(3px,.5vw,8px);top:8%;left:-2%;transform:rotate(-5deg);animation:bgWordIn .8s ease-out .2s forwards}
        .bg-w2{font-size:clamp(4rem,14vw,12rem);text-decoration-thickness:clamp(3px,.4vw,7px);bottom:10%;right:-1%;transform:rotate(3deg);animation:bgWordIn .8s ease-out .5s forwards}
        .hero-logo{height:70px;width:auto;margin-bottom:1.2rem;position:relative;z-index:5;opacity:0;animation:fadeUp .6s ease-out .6s forwards;filter:brightness(0) saturate(100%)}
        .hero-label{font-family:'Bebas Neue',sans-serif;font-size:.75rem;letter-spacing:.4em;color:var(--apero);position:relative;z-index:5;margin-bottom:.8rem;opacity:0;animation:fadeUp .6s ease-out .8s forwards}
        .hero-title{font-family:'Bebas Neue',sans-serif;font-size:clamp(3rem,9vw,8rem);line-height:.9;letter-spacing:.02em;color:var(--noir);margin-bottom:.8rem;position:relative;z-index:5;opacity:0;animation:punchIn .7s ease-out 1s forwards}
        .hero-title .accent{color:var(--apero)}
        .hero-type{font-family:'Bebas Neue',sans-serif;font-size:clamp(1rem,1.8vw,1.3rem);letter-spacing:.25em;color:var(--gris);margin-bottom:1.5rem;position:relative;z-index:5;opacity:0;animation:fadeUp .6s ease-out 1.3s forwards}
        .hero-subtitle{font-size:clamp(.85rem,1.1vw,1rem);font-weight:400;line-height:1.7;color:var(--gris);max-width:520px;margin:0 auto 2rem;position:relative;z-index:5;opacity:0;animation:fadeUp .6s ease-out 1.5s forwards}
        .hero-subtitle strong{color:var(--noir);font-weight:600}
        .hero-divider{width:60px;height:3px;background:linear-gradient(90deg,var(--apero),rgba(74,140,92,.3));border:none;position:relative;z-index:5;opacity:0;animation:fadeUp .6s ease-out 1.7s forwards}
        .hero-price{font-family:'Bebas Neue',sans-serif;font-size:.8rem;letter-spacing:.2em;color:var(--gris-clair);margin-top:1.2rem;position:relative;z-index:5;opacity:0;animation:fadeIn .8s ease-out 1.9s forwards}
        @keyframes bgWordIn{from{opacity:0}to{opacity:.12}}
        @keyframes punchIn{0%{opacity:0;transform:scale(.9) translateY(25px)}60%{opacity:1;transform:scale(1.015) translateY(-4px)}100%{opacity:1;transform:scale(1) translateY(0)}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fadeIn{from{opacity:0}to{opacity:1}}
        @media(max-width:768px){.hero{min-height:50vh}.hero-body{padding:3rem 1.5rem 2.5rem}.bg-w1{font-size:4rem;top:5%}.bg-w2{font-size:3rem;bottom:8%}}
        @media(max-width:480px){.hero-body{padding:2.5rem 1.2rem 2rem}.bg-w1{font-size:3rem}.bg-w2{font-size:2.2rem}}
      </style>
      <section class="hero">
        <div class="hero-body">
          <span class="bg-word bg-w1" aria-hidden="true">ENNUYANT</span>
          <span class="bg-word bg-w2" aria-hidden="true">BROUILLON</span>
          <img src="https://static.wixstatic.com/shapes/603d87_30652102cab24c9e83d9405fe124ee69.svg" alt="" class="hero-logo">
          <p class="hero-label">COCKTAIL M\u00c9DIA</p>
          <h1 class="hero-title">L\u2019<span class="accent">AP\u00c9RO</span></h1>
          <p class="hero-type">INFOGRAPHIE</p>
          <p class="hero-subtitle">Des documents visuels qui font bonne impression. <strong>Pr\u00e9sentations Powerpoint et plans d\u2019affaires</strong> \u2014 clairs, pros, pr\u00eats \u00e0 livrer.</p>
          <hr class="hero-divider">
          <p class="hero-price">\u00c0 PARTIR DE 100$</p>
        </div>
      </section>`;
  }
}
customElements.define('apero-hero', AperoHero);
