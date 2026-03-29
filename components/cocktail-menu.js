// @ts-nocheck
class CocktailMenu extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&display=swap');
        *,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
        :host{display:block;--creme:#FFF4E9;--fond:#FAF9F6;--noir:#2B2B2B;--rouge:#E83B14;--gris:#8a8580;--gris-clair:#c4beb6;--gris-ligne:rgba(255,255,255,.06);font-family:'Montserrat',system-ui,sans-serif;-webkit-font-smoothing:antialiased}
        .menu-section{padding:5rem 3rem;position:relative;overflow:hidden;background:var(--noir);color:var(--fond)}
        .menu-section::after{content:'';position:absolute;inset:0;opacity:.03;pointer-events:none;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");background-size:128px}
        .menu-inner{max-width:1100px;margin:0 auto;position:relative;z-index:2}
        .menu-header{text-align:center;margin-bottom:4rem}
        .menu-label{font-family:'Bebas Neue',sans-serif;font-size:.75rem;letter-spacing:.4em;color:var(--rouge);margin-bottom:1rem}
        .menu-title{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.5rem,5vw,4rem);letter-spacing:.03em;color:var(--fond);line-height:.95}
        .menu-subtitle{font-size:.9rem;color:var(--gris-clair);margin-top:1rem;font-weight:400}
        .menu-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:1px;background:var(--gris-ligne);border:1px solid var(--gris-ligne)}
        .cat{background:var(--noir);padding:2.5rem 1.5rem;text-decoration:none;color:var(--fond);display:flex;flex-direction:column;align-items:center;text-align:center;position:relative;overflow:hidden;transition:all .4s ease}
        .cat::before{content:'';position:absolute;bottom:0;left:0;right:0;height:0;background:linear-gradient(to top,rgba(232,59,20,.12),transparent);transition:height .4s ease}
        .cat:hover::before{height:100%}
        .cat:hover{transform:translateY(-4px)}
        .cat-num{font-family:'Bebas Neue',sans-serif;font-size:.65rem;letter-spacing:.2em;color:var(--gris);margin-bottom:1.2rem;transition:color .3s ease}
        .cat:hover .cat-num{color:var(--rouge)}

        /* Logo container — holds both default and hover versions */
        .cat-logo-wrap{
          position:relative;
          height:60px;width:60px;
          margin-bottom:1rem;
          display:flex;align-items:center;justify-content:center;
        }
        .cat-logo,.cat-logo-hover{
          position:absolute;
          height:60px;width:auto;
          object-fit:contain;
          transition:opacity .4s ease, transform .4s ease;
        }
        .cat-logo{
          filter:brightness(0) invert(1);
          opacity:.85;
        }
        .cat-logo-hover{
          opacity:0;
        }
        .cat:hover .cat-logo{
          opacity:0;
        }
        .cat:hover .cat-logo-hover{
          opacity:1;
          transform:scale(1.1) rotate(-5deg);
        }

        .cat-name{font-family:'Bebas Neue',sans-serif;font-size:clamp(1.1rem,1.5vw,1.3rem);letter-spacing:.1em;margin-bottom:.3rem;transition:color .3s ease}
        .cat:hover .cat-name{color:var(--rouge)}
        .cat-type{font-size:.72rem;font-weight:400;color:var(--gris);line-height:1.4}
        .cat-price{font-family:'Bebas Neue',sans-serif;font-size:.7rem;letter-spacing:.1em;color:var(--gris);margin-top:1rem;padding-top:.8rem;border-top:1px solid rgba(255,255,255,.06);transition:color .3s ease}
        .cat:hover .cat-price{color:var(--rouge)}
        .cat-arrow{font-size:.8rem;color:var(--gris);margin-top:.8rem;opacity:0;transform:translateY(5px);transition:all .3s ease .1s}
        .cat:hover .cat-arrow{opacity:1;transform:translateY(0);color:var(--rouge)}

        /* Per-category hover colors */
        .cat-apero::before{background:linear-gradient(to top,rgba(74,140,92,.15),transparent)}
        .cat-apero:hover .cat-num,.cat-apero:hover .cat-name,.cat-apero:hover .cat-price,.cat-apero:hover .cat-arrow{color:#4a8c5c}

        .cat-roses::before{background:linear-gradient(to top,rgba(212,114,140,.15),transparent)}
        .cat-roses:hover .cat-num,.cat-roses:hover .cat-name,.cat-roses:hover .cat-price,.cat-roses:hover .cat-arrow{color:#d4728c}

        .cat-blancs::before{background:linear-gradient(to top,rgba(201,168,76,.15),transparent)}
        .cat-blancs:hover .cat-num,.cat-blancs:hover .cat-name,.cat-blancs:hover .cat-price,.cat-blancs:hover .cat-arrow{color:#c9a84c}

        .cat-rouges::before{background:linear-gradient(to top,rgba(138,32,32,.15),transparent)}
        .cat-rouges:hover .cat-num,.cat-rouges:hover .cat-name,.cat-rouges:hover .cat-price,.cat-rouges:hover .cat-arrow{color:#8a2020}

        .cat-digestifs::before{background:linear-gradient(to top,rgba(232,115,26,.15),transparent)}
        .cat-digestifs:hover .cat-num,.cat-digestifs:hover .cat-name,.cat-digestifs:hover .cat-price,.cat-digestifs:hover .cat-arrow{color:#e8731a}

        .menu-footer{text-align:center;margin-top:3rem}
        .menu-cta{display:inline-flex;align-items:center;gap:.6rem;font-family:'Bebas Neue',sans-serif;font-size:1rem;letter-spacing:.14em;color:var(--noir);background:var(--creme);padding:.8rem 2.2rem;border-radius:100px;text-decoration:none;transition:all .3s ease}
        .menu-cta:hover{background:var(--rouge);color:white;transform:translateY(-2px);box-shadow:0 8px 25px rgba(232,59,20,.25)}
        .menu-cta-coupe{height:18px;transition:all .3s ease}
        .menu-cta:hover .menu-cta-coupe{filter:brightness(0) invert(1)}
        @media(max-width:968px){.menu-grid{grid-template-columns:repeat(3,1fr)}.menu-section{padding:4rem 2rem}}
        @media(max-width:640px){.menu-grid{grid-template-columns:1fr 1fr}.menu-section{padding:3rem 1.5rem}.cat{padding:2rem 1rem}.cat-logo-wrap{height:45px;width:45px}.cat-logo,.cat-logo-hover{height:45px}}
        @media(max-width:400px){.menu-grid{grid-template-columns:1fr}}
      </style>
      <section class="menu-section">
        <div class="menu-inner">
          <div class="menu-header">
            <p class="menu-label">NOS SP\u00c9CIALIT\u00c9S</p>
            <h2 class="menu-title">QU\u2019EST-CE QU\u2019ON<br>TE SERT ?</h2>
            <p class="menu-subtitle">Production cr\u00e9ative \u00e0 la carte. Choisis ta cat\u00e9gorie.</p>
          </div>
          <div class="menu-grid">

            <a href="https://www.cocktailmedia.ca/menu/apero" class="cat cat-apero" target="_top">
              <span class="cat-num">01</span>
              <div class="cat-logo-wrap">
                <img src="https://static.wixstatic.com/shapes/603d87_30652102cab24c9e83d9405fe124ee69.svg" alt="" class="cat-logo">
                <img src="https://static.wixstatic.com/shapes/603d87_0cc1bcf27bef43ec8e813002500c237b.svg" alt="" class="cat-logo-hover">
              </div>
              <span class="cat-name">L\u2019AP\u00c9RO</span>
              <span class="cat-type">Infographie</span>
              <span class="cat-price">\u00c0 PARTIR DE 100$</span>
              <span class="cat-arrow">\u2192</span>
            </a>

            <a href="https://www.cocktailmedia.ca/menu/les-roses" class="cat cat-roses" target="_top">
              <span class="cat-num">02</span>
              <div class="cat-logo-wrap">
                <img src="https://static.wixstatic.com/shapes/603d87_a748d18eac8848e2b12f2731acfeaeb1.svg" alt="" class="cat-logo">
                <img src="https://static.wixstatic.com/shapes/603d87_eb0d5a4b99ac4cb19e19d5a42c7076a4.svg" alt="" class="cat-logo-hover">
              </div>
              <span class="cat-name">LES ROS\u00c9S</span>
              <span class="cat-type">Graphisme</span>
              <span class="cat-price">\u00c0 PARTIR DE 75$</span>
              <span class="cat-arrow">\u2192</span>
            </a>

            <a href="https://www.cocktailmedia.ca/menu/les-blancs" class="cat cat-blancs" target="_top">
              <span class="cat-num">03</span>
              <div class="cat-logo-wrap">
                <img src="https://static.wixstatic.com/shapes/603d87_8c1734c96e2d46389e682f8b32278949.svg" alt="" class="cat-logo">
                <img src="https://static.wixstatic.com/shapes/603d87_cd02952b588d4de29c73989fbe711aa4.svg" alt="" class="cat-logo-hover">
              </div>
              <span class="cat-name">LES BLANCS</span>
              <span class="cat-type">Vid\u00e9ographie</span>
              <span class="cat-price">\u00c0 PARTIR DE 200$</span>
              <span class="cat-arrow">\u2192</span>
            </a>

            <a href="https://www.cocktailmedia.ca/menu/les-rouges" class="cat cat-rouges" target="_top">
              <span class="cat-num">04</span>
              <div class="cat-logo-wrap">
                <img src="https://static.wixstatic.com/shapes/603d87_26a759fec56b434d996293b5902ea3e7.svg" alt="" class="cat-logo">
                <img src="https://static.wixstatic.com/shapes/603d87_1d504dc18efa4e018bceca267c76545e.svg" alt="" class="cat-logo-hover">
              </div>
              <span class="cat-name">LES ROUGES</span>
              <span class="cat-type">Photographie</span>
              <span class="cat-price">\u00c0 PARTIR DE 50$</span>
              <span class="cat-arrow">\u2192</span>
            </a>

            <a href="https://www.cocktailmedia.ca/menu/les-digestifs" class="cat cat-digestifs" target="_top">
              <span class="cat-num">05</span>
              <div class="cat-logo-wrap">
                <img src="https://static.wixstatic.com/shapes/603d87_2841476480cb44b48a46eb7ffe2c32bc.svg" alt="" class="cat-logo">
                <img src="https://static.wixstatic.com/shapes/603d87_8f16057626cc42c4a2f04426fd63699d.svg" alt="" class="cat-logo-hover">
              </div>
              <span class="cat-name">LES DIGESTIFS</span>
              <span class="cat-type">Site web</span>
              <span class="cat-price">\u00c0 PARTIR DE 150$</span>
              <span class="cat-arrow">\u2192</span>
            </a>

          </div>
          <div class="menu-footer">
            <a href="https://www.cocktailmedia.ca/menu" class="menu-cta" target="_top">VOIR LE MENU COMPLET <img src="https://static.wixstatic.com/shapes/603d87_c9b09d330c54453fbf1b8edd389c9cfa.svg" alt="" class="menu-cta-coupe"></a>
          </div>
        </div>
      </section>
    `;
  }
}
customElements.define('cocktail-menu', CocktailMenu);
