// @ts-nocheck
class CocktailApropos extends HTMLElement {
  constructor() { super(); this.attachShadow({ mode: 'open' }); }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&display=swap');
        *,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
        :host{
          display:block;
          --creme:#FFF4E9;--fond:#FAF9F6;--noir:#2B2B2B;--rouge:#E83B14;--rouge-hover:#d63210;
          --gris:#8a8580;--gris-clair:#c4beb6;--neg-color:#d5cec4;--ligne:rgba(43,43,43,.08);
          font-family:'Montserrat',system-ui,sans-serif;-webkit-font-smoothing:antialiased;
        }

        /* ============ HERO ============ */
        .hero{
          min-height:50vh;display:flex;flex-direction:column;
          position:relative;overflow:hidden;background:var(--creme);
        }
        .hero-body{
          flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center;
          padding:4rem 2rem 3rem;position:relative;z-index:2;text-align:center;
        }
        .bg-word{
          position:absolute;font-family:'Bebas Neue',sans-serif;letter-spacing:.04em;color:var(--neg-color);
          text-decoration:line-through;text-decoration-color:var(--rouge);
          opacity:0;z-index:1;pointer-events:none;white-space:nowrap;user-select:none;
        }
        .bg-w1{font-size:clamp(5rem,18vw,15rem);text-decoration-thickness:clamp(3px,.5vw,8px);top:8%;left:-2%;transform:rotate(-5deg);animation:bgWordIn .8s ease-out .2s forwards}
        .bg-w2{font-size:clamp(4rem,14vw,12rem);text-decoration-thickness:clamp(3px,.4vw,7px);bottom:10%;right:-1%;transform:rotate(3deg);animation:bgWordIn .8s ease-out .5s forwards}
        .hero-logo{height:70px;width:auto;margin-bottom:1.2rem;position:relative;z-index:5;opacity:0;animation:fadeUp .6s ease-out .4s forwards}
        .hero-label{font-family:'Bebas Neue',sans-serif;font-size:.75rem;letter-spacing:.4em;color:var(--rouge);position:relative;z-index:5;margin-bottom:.8rem;opacity:0;animation:fadeUp .6s ease-out .6s forwards}
        .hero-title{font-family:'Bebas Neue',sans-serif;font-size:clamp(3rem,9vw,7rem);line-height:.9;letter-spacing:.02em;color:var(--noir);margin-bottom:1rem;position:relative;z-index:5;opacity:0;animation:punchIn .7s ease-out .8s forwards}
        .hero-title .accent{color:var(--rouge)}
        .hero-subtitle{font-size:clamp(.85rem,1.1vw,1rem);font-weight:400;line-height:1.7;color:var(--gris);max-width:520px;margin:0 auto;position:relative;z-index:5;opacity:0;animation:fadeUp .6s ease-out 1.1s forwards}
        .hero-subtitle strong{color:var(--noir);font-weight:600}

        /* ============ HISTOIRE ============ */
        .histoire{background:var(--fond);padding:4.5rem 2rem}
        .histoire-inner{max-width:750px;margin:0 auto}
        .histoire-label{font-family:'Bebas Neue',sans-serif;font-size:.7rem;letter-spacing:.4em;color:var(--rouge);margin-bottom:.8rem;text-align:center}
        .histoire-title{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4.5vw,3.2rem);letter-spacing:.03em;line-height:.95;color:var(--noir);text-align:center;margin-bottom:2rem}
        .histoire-text{font-size:.9rem;font-weight:400;color:var(--gris);line-height:1.8;margin-bottom:1.2rem}
        .histoire-text strong{color:var(--noir);font-weight:600}
        .histoire-text:last-child{margin-bottom:0}

        /* ============ EQUIPE ============ */
        .equipe{background:var(--creme);padding:4.5rem 2rem}
        .equipe-inner{max-width:900px;margin:0 auto}
        .equipe-header{text-align:center;margin-bottom:3rem}
        .equipe-label{font-family:'Bebas Neue',sans-serif;font-size:.7rem;letter-spacing:.4em;color:var(--rouge);margin-bottom:.8rem}
        .equipe-title{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4.5vw,3.2rem);letter-spacing:.03em;color:var(--noir);line-height:.95}
        .equipe-subtitle{font-size:.88rem;color:var(--gris);font-weight:400;margin-top:.8rem}
        .team{display:grid;grid-template-columns:1fr 1fr;gap:2.5rem}
        .member{display:flex;flex-direction:column;align-items:center;text-align:center}
        .member-photo{width:160px;height:160px;border-radius:50%;object-fit:cover;object-position:center top;margin-bottom:1.5rem;border:3px solid var(--fond);box-shadow:0 8px 30px rgba(0,0,0,.08);transition:all .3s ease;filter:grayscale(.15)}
        .member:hover .member-photo{transform:scale(1.05);filter:grayscale(0);box-shadow:0 12px 40px rgba(232,59,20,.12);border-color:var(--rouge)}
        .member-name{font-family:'Bebas Neue',sans-serif;font-size:clamp(1.2rem,1.6vw,1.4rem);letter-spacing:.1em;color:var(--noir);margin-bottom:.2rem}
        .member-role{font-family:'Bebas Neue',sans-serif;font-size:.7rem;letter-spacing:.2em;color:var(--rouge);margin-bottom:.8rem}
        .member-desc{font-size:.82rem;font-weight:400;color:var(--gris);line-height:1.65;max-width:320px}

        /* ============ POURQUOI ============ */
        .pourquoi{background:var(--fond);padding:4.5rem 2rem}
        .pourquoi-inner{max-width:1000px;margin:0 auto}
        .pourquoi-header{text-align:center;margin-bottom:3rem}
        .pourquoi-label{font-family:'Bebas Neue',sans-serif;font-size:.7rem;letter-spacing:.4em;color:var(--rouge);margin-bottom:.8rem}
        .pourquoi-title{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4.5vw,3.2rem);letter-spacing:.03em;color:var(--noir);line-height:.95}
        .points{display:grid;grid-template-columns:repeat(3,1fr);gap:2rem}
        .point{text-align:center;position:relative}
        .point-num{width:56px;height:56px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 1.2rem;font-family:'Bebas Neue',sans-serif;font-size:1.3rem;letter-spacing:.05em;transition:all .3s ease}
        .point:nth-child(1) .point-num{background:var(--creme);color:var(--noir)}
        .point:nth-child(2) .point-num{background:var(--rouge);color:white}
        .point:nth-child(3) .point-num{background:var(--noir);color:white}
        .point:hover .point-num{transform:scale(1.1);box-shadow:0 8px 25px rgba(0,0,0,.1)}
        .point-title{font-family:'Bebas Neue',sans-serif;font-size:clamp(1.1rem,1.5vw,1.3rem);letter-spacing:.08em;color:var(--noir);margin-bottom:.6rem}
        .point-desc{font-size:.82rem;font-weight:400;color:var(--gris);line-height:1.65;max-width:300px;margin:0 auto}
        .point-desc strong{color:var(--noir);font-weight:600}
        .point-aside{font-size:.72rem;font-style:italic;color:var(--gris-clair);margin-top:.6rem}

        /* ============ ZONE ============ */
        .zone{background:var(--creme);padding:3.5rem 2rem;text-align:center}
        .zone-label{font-family:'Bebas Neue',sans-serif;font-size:.7rem;letter-spacing:.4em;color:var(--rouge);margin-bottom:.6rem}
        .zone-title{font-family:'Bebas Neue',sans-serif;font-size:clamp(1.5rem,3vw,2.2rem);letter-spacing:.03em;color:var(--noir);margin-bottom:.6rem}
        .zone-text{font-size:.85rem;color:var(--gris);font-weight:400;line-height:1.6;max-width:500px;margin:0 auto}
        .zone-text strong{color:var(--noir);font-weight:600}

        /* ============ CTA ============ */
        .cta{background:var(--noir);padding:4.5rem 2rem;text-align:center;position:relative;overflow:hidden}
        .cta::after{content:'';position:absolute;inset:0;opacity:.03;pointer-events:none;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");background-size:128px}
        .cta-inner{position:relative;z-index:2}
        .cta-logo{height:50px;width:auto;margin-bottom:1.5rem;opacity:.12;filter:brightness(0) invert(1)}
        .cta-label{font-family:'Bebas Neue',sans-serif;font-size:.7rem;letter-spacing:.4em;color:var(--rouge);margin-bottom:.8rem}
        .cta-title{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4.5vw,3.2rem);letter-spacing:.03em;line-height:.95;color:var(--fond);margin-bottom:.8rem}
        .cta-subtitle{font-size:.88rem;font-weight:400;color:var(--gris-clair);line-height:1.6;max-width:440px;margin:0 auto 2rem}
        .cta-btn{display:inline-flex;align-items:center;gap:.6rem;font-family:'Bebas Neue',sans-serif;font-size:1.1rem;letter-spacing:.14em;color:white;background:var(--rouge);padding:.9rem 2.5rem;border-radius:100px;text-decoration:none;transition:all .3s ease}
        .cta-btn:hover{background:var(--rouge-hover);transform:translateY(-3px);box-shadow:0 10px 30px rgba(232,59,20,.25)}
        .cta-btn-coupe{height:18px;filter:brightness(0) invert(1);transition:transform .3s ease}
        .cta-btn:hover .cta-btn-coupe{transform:rotate(-15deg) scale(1.1)}
        .cta-secondary{display:block;margin-top:1.2rem;font-size:.78rem;color:var(--gris);text-decoration:none;transition:color .2s ease}
        .cta-secondary:hover{color:var(--rouge)}

        /* ============ ANIMATIONS ============ */
        @keyframes bgWordIn{from{opacity:0}to{opacity:.12}}
        @keyframes punchIn{0%{opacity:0;transform:scale(.9) translateY(25px)}60%{opacity:1;transform:scale(1.015) translateY(-4px)}100%{opacity:1;transform:scale(1) translateY(0)}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}

        /* ============ RESPONSIVE ============ */
        @media(max-width:768px){
          .hero{min-height:45vh}
          .hero-body{padding:3rem 1.5rem 2.5rem}
          .bg-w1{font-size:4rem;top:5%}.bg-w2{font-size:3rem;bottom:8%}
          .team{grid-template-columns:1fr;gap:2.5rem}
          .points{grid-template-columns:1fr;gap:2rem}
        }
        @media(max-width:480px){
          .hero-body{padding:2.5rem 1.2rem 2rem}
          .bg-w1{font-size:3rem}.bg-w2{font-size:2.2rem}
          .histoire{padding:3rem 1.2rem}
          .equipe{padding:3rem 1.2rem}
          .pourquoi{padding:3rem 1.2rem}
          .zone{padding:2.5rem 1.2rem}
          .cta{padding:3.5rem 1.2rem}
          .cta-btn{width:100%;justify-content:center}
          .member-photo{width:130px;height:130px}
        }
      </style>

      <!-- HERO -->
      <section class="hero">
        <div class="hero-body">
          <span class="bg-word bg-w1" aria-hidden="true">CORPORATE</span>
          <span class="bg-word bg-w2" aria-hidden="true">COMPLIQU\u00c9</span>
          <img src="https://static.wixstatic.com/shapes/603d87_c9b09d330c54453fbf1b8edd389c9cfa.svg" alt="" class="hero-logo">
          <p class="hero-label">COCKTAIL M\u00c9DIA</p>
          <h1 class="hero-title">\u00c0 <span class="accent">PROPOS</span></h1>
          <p class="hero-subtitle">Une <strong>usine cr\u00e9ative \u00e0 la carte</strong> pour les PME qui veulent du contenu pro sans se compliquer la vie.</p>
        </div>
      </section>

      <!-- HISTOIRE -->
      <section class="histoire">
        <div class="histoire-inner">
          <p class="histoire-label">NOTRE HISTOIRE</p>
          <h2 class="histoire-title">POURQUOI COCKTAIL M\u00c9DIA EXISTE</h2>
          <p class="histoire-text">Cocktail M\u00e9dia est n\u00e9 d\u2019un constat simple\u00a0: les PME ont besoin de contenu visuel professionnel, mais les options disponibles sont souvent <strong>trop ch\u00e8res, trop longues ou trop compliqu\u00e9es.</strong></p>
          <p class="histoire-text">On a cr\u00e9\u00e9 une usine cr\u00e9ative qui fonctionne autrement. Un menu avec des prix affich\u00e9s, un processus direct, et une seule personne qui g\u00e8re ton projet du d\u00e9but \u00e0 la fin. Photo, vid\u00e9o, graphisme, infographie, site web \u2014 tout sous le m\u00eame toit.</p>
          <p class="histoire-text">Le nom Cocktail, c\u2019est l\u2019id\u00e9e du m\u00e9lange\u00a0: on combine les ingr\u00e9dients cr\u00e9atifs qu\u2019il te faut, au bon dosage, pour un r\u00e9sultat qui a du caract\u00e8re. <strong>Travailleur autonome depuis 2014</strong>, bas\u00e9 en Mauricie, au service des entrepreneurs qui veulent avancer sans attendre.</p>
        </div>
      </section>

      <!-- EQUIPE -->
      <section class="equipe">
        <div class="equipe-inner">
          <div class="equipe-header">
            <p class="equipe-label">DU VRAI MONDE</p>
            <h2 class="equipe-title">QUI EST DERRI\u00c8RE LE BAR</h2>
            <p class="equipe-subtitle">Pas un algorithme. Pas un sous-traitant \u00e0 l\u2019autre bout du monde. Nous.</p>
          </div>
          <div class="team">
            <div class="member">
              <img src="https://static.wixstatic.com/media/603d87_0e458c68edac45949a9b9f6e893d4db5~mv2.jpg" alt="F\u00e9lix Dumont" class="member-photo">
              <h3 class="member-name">F\u00c9LIX DUMONT</h3>
              <span class="member-role">FONDATEUR & PRODUCTION</span>
              <p class="member-desc">Photo, vid\u00e9o, graphisme, web \u2014 je travaille directement sur tes projets. Tu m\u2019appelles, je comprends ton id\u00e9e, je la produis. Une seule personne, du d\u00e9but \u00e0 la fin.</p>
            </div>
            <div class="member">
              <img src="https://static.wixstatic.com/media/603d87_606be45782ec4229b5f042e29fa2d109~mv2.png" alt="Marie-Christine Blanchette" class="member-photo">
              <h3 class="member-name">MARIE-CHRISTINE BLANCHETTE</h3>
              <span class="member-role">FINANCES & SERVICE CLIENT\u00c8LE</span>
              <p class="member-desc">Suivi de projets, facturation et communication. Du d\u00e9but \u00e0 la fin, c\u2019est clair et sans complication. Si t\u2019as une question, c\u2019est elle qui te r\u00e9pond.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- POURQUOI C'EST DIFFERENT -->
      <section class="pourquoi">
        <div class="pourquoi-inner">
          <div class="pourquoi-header">
            <p class="pourquoi-label">CE QUI NOUS D\u00c9MARQUE</p>
            <h2 class="pourquoi-title">COMMENT ON FONCTIONNE</h2>
          </div>
          <div class="points">
            <div class="point">
              <div class="point-num">01</div>
              <h3 class="point-title">PRIX AFFICH\u00c9S</h3>
              <p class="point-desc">Pas de soumission, pas de n\u00e9gociation. <strong>Les prix sont sur le menu.</strong> Tu sais exactement ce que tu paies avant de commander.</p>
              <p class="point-aside">Comme au restaurant.</p>
            </div>
            <div class="point">
              <div class="point-num">02</div>
              <h3 class="point-title">DIRECT AVEC TOI</h3>
              <p class="point-desc">Tu parles directement \u00e0 la personne qui produit ton projet. <strong>Un seul interlocuteur</strong>, une communication claire, un projet qui avance vite.</p>
              <p class="point-aside">Un appel, pis on est partis.</p>
            </div>
            <div class="point">
              <div class="point-num">03</div>
              <h3 class="point-title">TOUT SOUS LE M\u00caME TOIT</h3>
              <p class="point-desc">Photo, vid\u00e9o, graphisme, infographie, site web. <strong>Un seul fournisseur</strong> qui conna\u00eet ton image et qui garde tout coh\u00e9rent.</p>
              <p class="point-aside">Un seul endroit pour tout.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ZONE -->
      <section class="zone">
        <p class="zone-label">PARTOUT EN MAURICIE</p>
        <h2 class="zone-title">BAS\u00c9S \u00c0 TROIS-RIVI\u00c8RES</h2>
        <p class="zone-text">On se d\u00e9place partout en Mauricie \u2014 <strong>Trois-Rivi\u00e8res, Shawinigan, Louiseville, B\u00e9cancour, Victoriaville</strong> et environs. D\u00e9placement inclus dans tous nos services.</p>
      </section>

      <!-- CTA -->
      <section class="cta">
        <div class="cta-inner">
          <img src="https://static.wixstatic.com/shapes/603d87_c9b09d330c54453fbf1b8edd389c9cfa.svg" alt="" class="cta-logo" aria-hidden="true">
          <p class="cta-label">ON JASE ?</p>
          <h2 class="cta-title">15 MINUTES, PAS DE PRESSION</h2>
          <p class="cta-subtitle">Tu nous expliques ton id\u00e9e, on te dit exactement ce qu\u2019on peut faire. Simple de m\u00eame.</p>
          <a href="https://www.cocktailmedia.ca/menu/depos" class="cta-btn" target="_top">
            R\u00c9SERVER UN APPEL
            <img src="https://static.wixstatic.com/shapes/603d87_c9b09d330c54453fbf1b8edd389c9cfa.svg" alt="" class="cta-btn-coupe">
          </a>
          <a href="mailto:info@cocktailmedia.ca" class="cta-secondary" target="_top">Ou \u00e9cris-nous \u00e0 info@cocktailmedia.ca</a>
        </div>
      </section>
    `;
  }
}
customElements.define('cocktail-apropos', CocktailApropos);
