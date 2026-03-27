// @ts-nocheck
class CocktailHero extends HTMLElement {
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
        .hero{
          min-height:100vh;min-height:100svh;
          display:flex;flex-direction:column;
          position:relative;overflow:hidden;
          background:var(--creme);
        }
        .hero-body{
          flex:1;display:flex;flex-direction:column;
          justify-content:center;align-items:center;
          padding:3rem 2rem 2rem;position:relative;z-index:2;text-align:center;
        }
        .bg-word{
          position:absolute;font-family:'Bebas Neue',sans-serif;
          letter-spacing:.04em;color:var(--neg-color);
          text-decoration:line-through;text-decoration-color:var(--rouge);
          opacity:0;z-index:1;pointer-events:none;white-space:nowrap;user-select:none;
        }
        .bg-w1{font-size:clamp(7rem,22vw,19rem);text-decoration-thickness:clamp(4px,.6vw,10px);top:5%;left:-3%;transform:rotate(-6deg);animation:bgWordIn .8s ease-out .2s forwards}
        .bg-w2{font-size:clamp(5rem,16vw,14rem);text-decoration-thickness:clamp(3px,.5vw,8px);bottom:12%;right:-2%;transform:rotate(4deg);animation:bgWordIn .8s ease-out .5s forwards}
        .bg-w3{font-size:clamp(4rem,13vw,11rem);text-decoration-thickness:clamp(3px,.4vw,7px);bottom:2%;left:3%;transform:rotate(-3deg);animation:bgWordIn .8s ease-out .8s forwards}
        .brand-name{font-family:'Bebas Neue',sans-serif;font-size:clamp(1rem,2vw,1.5rem);letter-spacing:.3em;color:var(--rouge);position:relative;z-index:5;margin-bottom:1.2rem;opacity:0;animation:fadeUp .6s ease-out .8s forwards}
        .punchline{font-family:'Bebas Neue',sans-serif;font-size:clamp(3.5rem,10vw,9.5rem);line-height:.9;letter-spacing:.02em;color:var(--noir);margin-bottom:2rem;position:relative;z-index:5;opacity:0;animation:punchIn .7s ease-out 1s forwards}
        .punchline .line{display:block}
        .punchline .rouge{color:var(--rouge)}
        .subtitle{font-size:clamp(.88rem,1.1vw,1rem);font-weight:400;line-height:1.7;color:var(--gris);max-width:520px;margin:0 auto 2.2rem;position:relative;z-index:5;opacity:0;animation:fadeUp .6s ease-out 1.4s forwards}
        .subtitle strong{color:var(--noir);font-weight:600}
        .cta-row{display:flex;align-items:center;gap:1.5rem;flex-wrap:wrap;justify-content:center;position:relative;z-index:5;opacity:0;animation:fadeUp .6s ease-out 1.7s forwards}
        .btn-main{display:inline-flex;align-items:center;gap:.6rem;font-family:'Bebas Neue',sans-serif;font-size:1.15rem;letter-spacing:.14em;color:white;background:var(--rouge);padding:.9rem 2.5rem;border-radius:100px;text-decoration:none;transition:all .3s ease}
        .btn-main:hover{background:var(--rouge-hover);transform:translateY(-3px);box-shadow:0 10px 30px rgba(232,59,20,.25)}
        .btn-main-coupe{height:20px;filter:brightness(0) invert(1);transition:transform .3s ease}
        .btn-main:hover .btn-main-coupe{transform:rotate(-15deg) scale(1.1)}
        .btn-secondary{font-size:.88rem;font-weight:500;color:var(--noir);text-decoration:none;border-bottom:1.5px solid var(--gris-clair);padding-bottom:2px;transition:all .25s ease}
        .btn-secondary:hover{color:var(--rouge);border-color:var(--rouge)}
        .slogan{margin-top:2.5rem;font-family:'Bebas Neue',sans-serif;font-size:.8rem;letter-spacing:.35em;color:var(--gris-clair);position:relative;z-index:5;opacity:0;animation:fadeIn .8s ease-out 2s forwards}
        .hero-bottom{padding:1rem 3rem;display:flex;justify-content:space-between;align-items:center;border-top:1px solid rgba(43,43,43,.06);position:relative;z-index:10;opacity:0;animation:fadeIn .6s ease-out 2.2s forwards}
        .bottom-left{font-size:.72rem;color:var(--gris);font-weight:400}
        .bottom-right{display:flex;align-items:center;gap:.5rem;font-size:.7rem;color:var(--gris);font-weight:500}
        .scroll-arrow{display:inline-block;animation:bounce 2s ease-in-out infinite}
        @keyframes bgWordIn{from{opacity:0}to{opacity:.14}}
        @keyframes punchIn{0%{opacity:0;transform:scale(.9) translateY(25px)}60%{opacity:1;transform:scale(1.015) translateY(-4px)}100%{opacity:1;transform:scale(1) translateY(0)}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fadeIn{from{opacity:0}to{opacity:1}}
        @keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(4px)}}
        @media(max-width:968px){
          .bg-w1{font-size:clamp(5rem,18vw,14rem)}
          .bg-w2{font-size:clamp(4rem,14vw,10rem)}
          .bg-w3{font-size:clamp(3rem,11vw,8rem)}
        }
        @media(max-width:768px){
          .hero-body{padding:2rem 1.5rem}
          .bg-w1{font-size:4.5rem;top:4%}.bg-w2{font-size:3.5rem;bottom:16%}.bg-w3{font-size:2.8rem;bottom:6%}
          .brand-name{font-size:1rem;letter-spacing:.25em;margin-bottom:1rem}
          .hero-bottom{padding:.8rem 1.5rem;flex-direction:column;gap:.3rem;text-align:center}
        }
        @media(max-width:480px){
          .hero-body{padding:1.5rem 1.2rem}
          .bg-w1{font-size:3.2rem}.bg-w2{font-size:2.5rem}.bg-w3{font-size:2rem}
          .brand-name{font-size:.85rem;letter-spacing:.18em}
          .cta-row{flex-direction:column;gap:1rem}
          .btn-main{width:100%;justify-content:center}
          .btn-secondary{align-self:center}
          .slogan{font-size:.7rem;letter-spacing:.25em}
        }
      </style>
      <section class="hero">
        <div class="hero-body">
          <span class="bg-word bg-w1" aria-hidden="true">COMPLIQUÉ</span>
          <span class="bg-word bg-w2" aria-hidden="true">ORDINAIRE</span>
          <span class="bg-word bg-w3" aria-hidden="true">INACCESSIBLE</span>
          <p class="brand-name">COCKTAIL MÉDIA</p>
          <h1 class="punchline">
            <span class="line">TU CHOISIS.</span>
            <span class="line">TU <span class="rouge">PAIES.</span></span>
            <span class="line">ON PRODUIT.</span>
          </h1>
          <p class="subtitle">
            <strong>Photo, vidéo, graphisme et création de site web</strong> en Mauricie.
            Un service créatif à la carte, simple, transparent et humain.
          </p>
          <div class="cta-row">
            <a href="https://www.cocktailmedia.ca/menu" class="btn-main" target="_top">
              VOIR LE MENU
              <img src="https://static.wixstatic.com/shapes/603d87_c9b09d330c54453fbf1b8edd389c9cfa.svg" alt="" class="btn-main-coupe">
            </a>
            <a href="https://www.cocktailmedia.ca/apropos" class="btn-secondary" target="_top">C’est quoi Cocktail Media ?</a>
          </div>
          <p class="slogan">ACCESSIBILITÉ · CRÉATIVITÉ · SIMPLICITÉ</p>
        </div>
        <div class="hero-bottom">
          <span class="bottom-left">Production créative à la carte — Trois-Rivières, QC</span>
          <span class="bottom-right">Découvrir <span class="scroll-arrow">↓</span></span>
        </div>
      </section>
    `;
  }
}
customElements.define('cocktail-hero', CocktailHero);
