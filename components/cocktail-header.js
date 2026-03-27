// @ts-nocheck
class CocktailHeader extends HTMLElement {
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
          position:absolute;
          top:0;left:0;right:0;
          z-index:100;
        }

        .header{
          padding:1.2rem 3rem;
          display:flex;
          justify-content:space-between;
          align-items:center;
          position:relative;
        }

        /* Logo */
        .header-logo{
          height:40px;width:auto;
          transition:transform .3s ease;
        }
        .header-logo:hover{transform:scale(1.05)}

        /* Nav links - desktop */
        .nav-links{
          display:flex;
          align-items:center;
          gap:.3rem;
        }
        .nav-link{
          font-family:'Bebas Neue',sans-serif;
          font-size:.95rem;
          letter-spacing:.1em;
          color:var(--noir);
          text-decoration:none;
          padding:.5rem 1rem;
          border-radius:100px;
          transition:all .25s ease;
          position:relative;
        }
        .nav-link:hover{
          background:rgba(43,43,43,.06);
        }
        .nav-link.active{
          color:var(--rouge);
        }
        .nav-link.active::after{
          content:'';
          position:absolute;
          bottom:6px;left:50%;transform:translateX(-50%);
          width:4px;height:4px;
          border-radius:50%;
          background:var(--rouge);
        }

        /* CTA button */
        .nav-cta{
          font-family:'Bebas Neue',sans-serif;
          font-size:.95rem;
          letter-spacing:.12em;
          color:white;
          background:var(--rouge);
          padding:.55rem 1.6rem;
          border-radius:100px;
          text-decoration:none;
          display:inline-flex;
          align-items:center;
          gap:.4rem;
          transition:all .3s ease;
          margin-left:.5rem;
        }
        .nav-cta:hover{
          background:var(--noir);
          transform:translateY(-2px);
          box-shadow:0 6px 20px rgba(232,59,20,.2);
        }
        .nav-cta-coupe{
          height:16px;width:auto;
          filter:brightness(0) invert(1);
          transition:transform .3s ease;
        }
        .nav-cta:hover .nav-cta-coupe{
          transform:rotate(-15deg);
        }

        /* Hamburger */
        .hamburger{
          display:none;
          flex-direction:column;
          gap:5px;
          cursor:pointer;
          padding:8px;
          border:none;
          background:none;
          z-index:200;
        }
        .hamburger span{
          display:block;
          width:24px;height:2px;
          background:var(--noir);
          transition:all .3s ease;
          border-radius:2px;
        }
        .hamburger.open span:nth-child(1){
          transform:rotate(45deg) translate(5px,5px);
        }
        .hamburger.open span:nth-child(2){
          opacity:0;
        }
        .hamburger.open span:nth-child(3){
          transform:rotate(-45deg) translate(5px,-5px);
        }

        /* Mobile menu */
        .mobile-menu{
          display:none;
          position:fixed;
          top:0;left:0;right:0;bottom:0;
          background:var(--creme);
          z-index:150;
          flex-direction:column;
          justify-content:center;
          align-items:center;
          gap:1rem;
          opacity:0;
          transition:opacity .3s ease;
        }
        .mobile-menu.open{
          display:flex;
          opacity:1;
        }
        .mobile-link{
          font-family:'Bebas Neue',sans-serif;
          font-size:clamp(2rem,6vw,3rem);
          letter-spacing:.08em;
          color:var(--noir);
          text-decoration:none;
          transition:color .2s ease;
          padding:.3rem 0;
        }
        .mobile-link:hover{color:var(--rouge)}
        .mobile-cta{
          font-family:'Bebas Neue',sans-serif;
          font-size:1.2rem;
          letter-spacing:.12em;
          color:white;
          background:var(--rouge);
          padding:.8rem 2.5rem;
          border-radius:100px;
          text-decoration:none;
          margin-top:1.5rem;
          transition:all .3s ease;
        }
        .mobile-cta:hover{background:var(--noir)}
        .mobile-slogan{
          font-family:'Bebas Neue',sans-serif;
          font-size:.7rem;
          letter-spacing:.3em;
          color:var(--gris-clair);
          margin-top:2rem;
        }

        @media(max-width:768px){
          .header{padding:1rem 1.5rem}
          .nav-links{display:none}
          .hamburger{display:flex}
          .header-logo{height:34px}
        }
      </style>

      <header class="header">
        <a href="https://www.cocktailmedia.ca" target="_top">
          <img src="https://static.wixstatic.com/shapes/603d87_aa27ced6fb9d4d8db0b6b99ebe3b88a6.svg" alt="Cocktail Media" class="header-logo">
        </a>

        <nav class="nav-links">
          <a href="https://www.cocktailmedia.ca" class="nav-link active" target="_top">ACCUEIL</a>
          <a href="https://www.cocktailmedia.ca/menu" class="nav-link" target="_top">MENU</a>
          <a href="https://www.cocktailmedia.ca/apropos" class="nav-link" target="_top">À PROPOS</a>
          <a href="https://www.cocktailmedia.ca/blog" class="nav-link" target="_top">BLOG</a>
          <a href="https://www.cocktailmedia.ca/menu" class="nav-cta" target="_top">
            COMMANDER
            <img src="https://static.wixstatic.com/shapes/603d87_c9b09d330c54453fbf1b8edd389c9cfa.svg" alt="" class="nav-cta-coupe">
          </a>
        </nav>

        <button class="hamburger" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </header>

      <div class="mobile-menu">
        <a href="https://www.cocktailmedia.ca" class="mobile-link" target="_top">ACCUEIL</a>
        <a href="https://www.cocktailmedia.ca/menu" class="mobile-link" target="_top">MENU</a>
        <a href="https://www.cocktailmedia.ca/apropos" class="mobile-link" target="_top">À PROPOS</a>
        <a href="https://www.cocktailmedia.ca/blog" class="mobile-link" target="_top">BLOG</a>
        <a href="https://www.cocktailmedia.ca/menu" class="mobile-cta" target="_top">COMMANDER</a>
        <p class="mobile-slogan">ACCESSIBILITÉ · CRÉATIVITÉ · SIMPLICITÉ</p>
      </div>
    `;

    // Hamburger toggle
    const hamburger = this.shadowRoot.querySelector('.hamburger');
    const mobileMenu = this.shadowRoot.querySelector('.mobile-menu');
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });
  }
}
customElements.define('cocktail-header', CocktailHeader);
