// @ts-nocheck
class CocktailFooter extends HTMLElement {
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

        .footer{
          background:var(--noir);
          color:var(--fond);
          padding:4rem 3rem 2rem;
          position:relative;
        }

        .footer-inner{
          max-width:1100px;
          margin:0 auto;
        }

        /* Top section: CTA */
        .footer-cta-section{
          text-align:center;
          padding-bottom:3rem;
          margin-bottom:3rem;
          border-bottom:1px solid rgba(255,255,255,.08);
        }
        .footer-cta-title{
          font-family:'Bebas Neue',sans-serif;
          font-size:clamp(1.8rem,4vw,3rem);
          letter-spacing:.03em;
          color:var(--fond);
          margin-bottom:.8rem;
        }
        .footer-cta-title .rouge{color:var(--rouge)}
        .footer-cta-sub{
          font-size:.88rem;
          color:var(--gris);
          margin-bottom:2rem;
          font-weight:400;
        }
        .footer-cta-btn{
          display:inline-flex;align-items:center;gap:.6rem;
          font-family:'Bebas Neue',sans-serif;font-size:1.1rem;
          letter-spacing:.14em;color:var(--noir);background:var(--creme);
          padding:.85rem 2.5rem;border-radius:100px;
          text-decoration:none;transition:all .3s ease;
        }
        .footer-cta-btn:hover{
          background:var(--rouge);color:white;
          transform:translateY(-2px);
          box-shadow:0 8px 25px rgba(232,59,20,.2);
        }
        .footer-cta-coupe{height:20px;transition:all .3s ease}
        .footer-cta-btn:hover .footer-cta-coupe{filter:brightness(0) invert(1)}

        /* Grid: nav + contact + social */
        .footer-grid{
          display:grid;
          grid-template-columns:1fr 1fr 1fr;
          gap:3rem;
          margin-bottom:3rem;
        }

        .footer-col-title{
          font-family:'Bebas Neue',sans-serif;
          font-size:.8rem;
          letter-spacing:.25em;
          color:var(--rouge);
          margin-bottom:1.2rem;
        }

        /* Nav links */
        .footer-link{
          display:block;
          font-size:.82rem;
          font-weight:400;
          color:var(--gris);
          text-decoration:none;
          padding:.35rem 0;
          transition:all .2s ease;
        }
        .footer-link:hover{
          color:var(--fond);
          padding-left:.5rem;
        }

        /* Contact */
        .footer-contact-item{
          font-size:.82rem;
          font-weight:400;
          color:var(--gris);
          margin-bottom:.6rem;
          line-height:1.5;
        }
        .footer-contact-item a{
          color:var(--gris);
          text-decoration:none;
          transition:color .2s ease;
        }
        .footer-contact-item a:hover{color:var(--rouge)}

        /* Social */
        .social-links{
          display:flex;
          gap:.8rem;
          flex-wrap:wrap;
        }
        .social-link{
          display:flex;
          align-items:center;
          justify-content:center;
          width:40px;height:40px;
          border-radius:50%;
          background:rgba(255,255,255,.06);
          color:var(--gris);
          text-decoration:none;
          font-size:.8rem;
          font-weight:600;
          transition:all .3s ease;
        }
        .social-link:hover{
          background:var(--rouge);
          color:white;
          transform:translateY(-2px);
        }

        /* Bottom bar */
        .footer-bottom{
          display:flex;
          justify-content:space-between;
          align-items:center;
          padding-top:2rem;
          border-top:1px solid rgba(255,255,255,.06);
        }
        .footer-copyright{
          font-size:.7rem;
          color:var(--gris);
          font-weight:400;
        }
        .footer-slogan{
          font-family:'Bebas Neue',sans-serif;
          font-size:.7rem;
          letter-spacing:.3em;
          color:var(--gris);
        }

        @media(max-width:768px){
          .footer{padding:3rem 1.5rem 1.5rem}
          .footer-grid{grid-template-columns:1fr;gap:2rem}
          .footer-bottom{flex-direction:column;gap:.5rem;text-align:center}
        }
      </style>

      <footer class="footer">
        <div class="footer-inner">

          <div class="footer-cta-section">
            <h2 class="footer-cta-title">BESOIN D’UN COUP DE MAIN <span class="rouge">CRÉATIF</span> ?</h2>
            <p class="footer-cta-sub">On est à un clic. Pas de formulaire à 12 champs, promis.</p>
            <a href="https://www.cocktailmedia.ca/menu" class="footer-cta-btn" target="_top">
              VOIR LE MENU
              <img src="https://static.wixstatic.com/shapes/603d87_c9b09d330c54453fbf1b8edd389c9cfa.svg" alt="" class="footer-cta-coupe">
            </a>
          </div>

          <div class="footer-grid">
            <div>
              <p class="footer-col-title">NAVIGATION</p>
              <a href="https://www.cocktailmedia.ca" class="footer-link" target="_top">Accueil</a>
              <a href="https://www.cocktailmedia.ca/menu" class="footer-link" target="_top">Menu</a>
              <a href="https://www.cocktailmedia.ca/apropos" class="footer-link" target="_top">À propos</a>
              <a href="https://www.cocktailmedia.ca/blog" class="footer-link" target="_top">Blog</a>
              <a href="https://www.cocktailmedia.ca/politiques" class="footer-link" target="_top">Politiques</a>
            </div>

            <div>
              <p class="footer-col-title">CONTACT</p>
              <p class="footer-contact-item"><a href="mailto:info@cocktailmedia.ca">info@cocktailmedia.ca</a></p>
              <p class="footer-contact-item"><a href="tel:+18195314803">819-531-4803</a></p>
              <p class="footer-contact-item">Trois-Rivières, QC</p>
              <p class="footer-contact-item" style="margin-top:.8rem;font-size:.72rem;font-style:italic">Disponible en Mauricie</p>
            </div>

            <div>
              <p class="footer-col-title">RÉSEAUX</p>
              <div class="social-links">
                <a href="#" class="social-link" target="_top" title="Facebook">FB</a>
                <a href="#" class="social-link" target="_top" title="Instagram">IG</a>
                <a href="#" class="social-link" target="_top" title="TikTok">TK</a>
                <a href="#" class="social-link" target="_top" title="LinkedIn">IN</a>
              </div>
            </div>
          </div>

          <div class="footer-bottom">
            <span class="footer-copyright">© 2025 Cocktail Media. Tous droits réservés.</span>
            <span class="footer-slogan">ACCESSIBILITÉ · CRÉATIVITÉ · SIMPLICITÉ</span>
          </div>

        </div>
      </footer>
    `;
  }
}
customElements.define('cocktail-footer', CocktailFooter);
