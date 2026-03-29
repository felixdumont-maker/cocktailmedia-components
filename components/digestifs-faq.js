// @ts-nocheck
class DigestifsFaq extends HTMLElement {
  constructor() { super(); this.attachShadow({ mode: 'open' }); }
  connectedCallback() {
    const faqs = [
      { q: "C\u2019est quoi un site web simple\u00a0?", a: "Un site vitrine de quelques pages (accueil, services, \u00e0 propos, contact) avec un design professionnel et responsive. Id\u00e9al pour les PME qui veulent \u00eatre pr\u00e9sentes en ligne sans complexit\u00e9." },
      { q: "Est-ce que je peux modifier mon site moi-m\u00eame apr\u00e8s\u00a0?", a: "Oui. Ton site est construit sur une plateforme que tu peux g\u00e9rer toi-m\u00eame pour les mises \u00e0 jour de contenu (textes, photos). On te montre comment faire." },
      { q: "Qu\u2019est-ce qui n\u2019est pas inclus dans le prix\u00a0?", a: "Les frais d\u2019h\u00e9bergement et le nom de domaine ne sont pas inclus. Ces frais varient selon le fournisseur et sont g\u00e9n\u00e9ralement entre 10$ et 30$ par mois." },
      { q: "C\u2019est quoi la diff\u00e9rence entre un site simple et une boutique en ligne\u00a0?", a: "Le site simple est un site vitrine pour pr\u00e9senter ton entreprise. La boutique en ligne inclut un syst\u00e8me de paiement, un catalogue de produits et la gestion des commandes." },
      { q: "Est-ce que le site sera visible sur Google\u00a0?", a: "Oui. Chaque site est optimis\u00e9 pour le r\u00e9f\u00e9rencement (SEO) avec les bonnes pratiques\u00a0: structure s\u00e9mantique, balises m\u00e9ta, vitesse de chargement et compatibilit\u00e9 mobile." },
      { q: "C\u2019est quoi le d\u00e9lai de livraison\u00a0?", a: "Le d\u00e9lai standard est de 14 jours ouvrables pour un site simple, un peu plus pour une boutique en ligne selon la complexit\u00e9. Le d\u00e9lai exact est confirm\u00e9 avant la r\u00e9servation." }
    ];
    const schemaData = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) };
    const faqHTML = faqs.map((f, i) => `
      <details class="faq-item" ${i === 0 ? 'open' : ''}>
        <summary class="faq-question"><span class="faq-q-text">${f.q}</span><span class="faq-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span></summary>
        <div class="faq-answer"><p>${f.a}</p></div>
      </details>`).join('');
    this.shadowRoot.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&display=swap');
        *,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
        :host{display:block;--fond:#FAF9F6;--noir:#2B2B2B;--digestifs:#e8731a;--gris:#8a8580;--gris-clair:#c4beb6;--ligne:rgba(43,43,43,.08);font-family:'Montserrat',system-ui,sans-serif;-webkit-font-smoothing:antialiased;background:var(--fond);color:var(--noir)}
        .faq-section{max-width:800px;margin:0 auto;padding:4.5rem 2rem}
        .faq-header{text-align:center;margin-bottom:2.5rem}
        .faq-label{font-family:'Bebas Neue',sans-serif;font-size:.7rem;letter-spacing:.4em;color:var(--digestifs);margin-bottom:.8rem}
        .faq-title{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4.5vw,3.2rem);letter-spacing:.03em;line-height:.95;color:var(--noir)}
        .faq-item{border-bottom:1px solid var(--ligne);overflow:hidden}
        .faq-item:first-of-type{border-top:1px solid var(--ligne)}
        .faq-question{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:1.2rem 0;cursor:pointer;list-style:none;transition:all .2s ease}
        .faq-question::-webkit-details-marker{display:none}
        .faq-question::marker{display:none;content:''}
        .faq-question:hover{padding-left:.4rem}
        .faq-question:hover .faq-q-text{color:var(--digestifs)}
        .faq-q-text{font-family:'Bebas Neue',sans-serif;font-size:clamp(1rem,1.5vw,1.2rem);letter-spacing:.06em;color:var(--noir);transition:color .2s ease;flex:1}
        .faq-icon{width:24px;height:24px;flex-shrink:0;color:var(--digestifs);transition:transform .3s ease;display:flex;align-items:center;justify-content:center}
        .faq-icon svg{width:16px;height:16px}
        .faq-item[open] .faq-icon{transform:rotate(45deg)}
        .faq-item[open] .faq-q-text{color:var(--digestifs)}
        .faq-answer{padding:0 0 1.2rem;animation:fadeIn .3s ease}
        .faq-answer p{font-size:.85rem;font-weight:400;color:var(--gris);line-height:1.7;max-width:680px}
        @keyframes fadeIn{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:translateY(0)}}
        @media(max-width:480px){.faq-section{padding:3rem 1.2rem}.faq-question{padding:1rem 0}}
      </style>
      <script type="application/ld+json">${JSON.stringify(schemaData)}<\/script>
      <section class="faq-section">
        <div class="faq-header">
          <p class="faq-label">QUESTIONS FR\u00c9QUENTES</p>
          <h2 class="faq-title">BON \u00c0 SAVOIR</h2>
        </div>
        ${faqHTML}
      </section>`;
  }
}
customElements.define('digestifs-faq', DigestifsFaq);
