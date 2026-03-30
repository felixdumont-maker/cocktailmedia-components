// @ts-nocheck
class CocktailFaq extends HTMLElement {
  constructor() { super(); this.attachShadow({ mode: 'open' }); }
  connectedCallback() {
    const faqs = [
      { q: "C\u2019est quoi Cocktail M\u00e9dia exactement\u00a0?", a: "Cocktail M\u00e9dia, c\u2019est une production cr\u00e9ative \u00e0 la carte bas\u00e9e en Mauricie. On offre de la photo, de la vid\u00e9o, du graphisme, de l\u2019infographie et de la cr\u00e9ation de site web pour les PME. Pas une agence \u2014 pas de r\u00e9union de 3 heures, pas de soumission myst\u00e8re. Tu choisis ton service, tu paies, on produit." },
      { q: "Pourquoi les prix sont affich\u00e9s\u00a0?", a: "Parce qu\u2019on croit que la transparence, c\u2019est la base. Tu sais exactement combien \u00e7a co\u00fbte avant de commander. Pas de n\u00e9gociation, pas de devis surprise \u00e0 la fin. Comme au restaurant \u2014 le prix est sur le menu." },
      { q: "Comment \u00e7a marche pour commander\u00a0?", a: "Tu consultes le menu, tu choisis le service qui te convient, tu r\u00e9serves un appel de 15 minutes pour qu\u2019on comprenne ton besoin, puis tu paies en ligne. On te contacte et on produit. Simple de m\u00eame." },
      { q: "Est-ce que vous vous d\u00e9placez\u00a0?", a: "Oui. Le d\u00e9placement est inclus partout en Mauricie \u2014 Trois-Rivi\u00e8res, Shawinigan, Louiseville, B\u00e9cancour, Victoriaville et environs. Hors Mauricie, le d\u00e9placement est gratuit pour toute commande de 500$ et plus." },
      { q: "C\u2019est quoi la diff\u00e9rence avec une agence\u00a0?", a: "Cocktail M\u00e9dia, c\u2019est une usine cr\u00e9ative \u2014 tu commandes directement le service que tu veux, au prix affich\u00e9, et c\u2019est la m\u00eame personne qui te r\u00e9pond et qui produit ton projet. Pas de d\u00e9partement, pas de charg\u00e9 de compte, pas de processus compliqu\u00e9. C\u2019est direct, rapide et humain." },
      { q: "Est-ce qu\u2019il y a des frais cach\u00e9s\u00a0?", a: "Non. Le prix affich\u00e9 sur le menu, c\u2019est le prix que tu paies. Les seuls frais suppl\u00e9mentaires possibles sont les extras que tu choisis toi-m\u00eame (livraison express, revisites suppl\u00e9mentaires, etc.)." }
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
        :host{display:block;--fond:#FAF9F6;--noir:#2B2B2B;--rouge:#E83B14;--gris:#8a8580;--gris-clair:#c4beb6;--ligne:rgba(43,43,43,.08);font-family:'Montserrat',system-ui,sans-serif;-webkit-font-smoothing:antialiased;background:var(--fond);color:var(--noir)}
        .faq-section{max-width:800px;margin:0 auto;padding:4.5rem 2rem}
        .faq-header{text-align:center;margin-bottom:2.5rem}
        .faq-label{font-family:'Bebas Neue',sans-serif;font-size:.7rem;letter-spacing:.4em;color:var(--rouge);margin-bottom:.8rem}
        .faq-title{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4.5vw,3.2rem);letter-spacing:.03em;line-height:.95;color:var(--noir)}
        .faq-item{border-bottom:1px solid var(--ligne);overflow:hidden}
        .faq-item:first-of-type{border-top:1px solid var(--ligne)}
        .faq-question{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:1.2rem 0;cursor:pointer;list-style:none;transition:all .2s ease}
        .faq-question::-webkit-details-marker{display:none}
        .faq-question::marker{display:none;content:''}
        .faq-question:hover{padding-left:.4rem}
        .faq-question:hover .faq-q-text{color:var(--rouge)}
        .faq-q-text{font-family:'Bebas Neue',sans-serif;font-size:clamp(1rem,1.5vw,1.2rem);letter-spacing:.06em;color:var(--noir);transition:color .2s ease;flex:1}
        .faq-icon{width:24px;height:24px;flex-shrink:0;color:var(--rouge);transition:transform .3s ease;display:flex;align-items:center;justify-content:center}
        .faq-icon svg{width:16px;height:16px}
        .faq-item[open] .faq-icon{transform:rotate(45deg)}
        .faq-item[open] .faq-q-text{color:var(--rouge)}
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
customElements.define('cocktail-faq', CocktailFaq);
