// @ts-nocheck
class AperoFaq extends HTMLElement {
  constructor() { super(); this.attachShadow({ mode: 'open' }); }
  connectedCallback() {
    const faqs = [
      { q: "Combien de slides sont incluses dans la pr\u00e9sentation\u00a0?", a: "Le service couvre une pr\u00e9sentation compl\u00e8te d\u2019environ 10 \u00e0 15 slides. Si tu as besoin de plus, on s\u2019entend sur le volume exact avant de commencer." },
      { q: "Est-ce que je peux modifier la pr\u00e9sentation moi-m\u00eame apr\u00e8s\u00a0?", a: "Oui. Tu re\u00e7ois le fichier Powerpoint (.pptx) modifiable. Tu peux changer les textes, ajouter des slides ou adapter le contenu toi-m\u00eame." },
      { q: "C\u2019est quoi exactement le plan d\u2019affaires\u00a0?", a: "Un document visuel structur\u00e9 qui pr\u00e9sente ton projet d\u2019entreprise\u00a0: sommaire, march\u00e9 cible, mod\u00e8le d\u2019affaires, projections. Con\u00e7u pour impressionner les investisseurs et partenaires." },
      { q: "Est-ce que vous r\u00e9digez le contenu du plan d\u2019affaires\u00a0?", a: "On s\u2019occupe de la mise en page, du design et de la structure visuelle. Le contenu (textes, chiffres, donn\u00e9es) doit \u00eatre fourni par toi. On te guide sur la structure \u00e0 suivre." },
      { q: "C\u2019est quoi le d\u00e9lai de livraison\u00a0?", a: "Le d\u00e9lai standard est de 5 jours ouvrables. Si t\u2019es press\u00e9, on offre une option de livraison express moyennant un suppl\u00e9ment." },
      { q: "Est-ce que vous pouvez int\u00e9grer mon image de marque\u00a0?", a: "Absolument. On utilise tes couleurs, ta typographie et ton logo pour que le document soit 100% coh\u00e9rent avec ton identit\u00e9 visuelle." }
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
        :host{display:block;--fond:#FAF9F6;--noir:#2B2B2B;--apero:#4a8c5c;--gris:#8a8580;--gris-clair:#c4beb6;--ligne:rgba(43,43,43,.08);font-family:'Montserrat',system-ui,sans-serif;-webkit-font-smoothing:antialiased;background:var(--fond);color:var(--noir)}
        .faq-section{max-width:800px;margin:0 auto;padding:4.5rem 2rem}
        .faq-header{text-align:center;margin-bottom:2.5rem}
        .faq-label{font-family:'Bebas Neue',sans-serif;font-size:.7rem;letter-spacing:.4em;color:var(--apero);margin-bottom:.8rem}
        .faq-title{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4.5vw,3.2rem);letter-spacing:.03em;line-height:.95;color:var(--noir)}
        .faq-item{border-bottom:1px solid var(--ligne);overflow:hidden}
        .faq-item:first-of-type{border-top:1px solid var(--ligne)}
        .faq-question{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:1.2rem 0;cursor:pointer;list-style:none;transition:all .2s ease}
        .faq-question::-webkit-details-marker{display:none}
        .faq-question::marker{display:none;content:''}
        .faq-question:hover{padding-left:.4rem}
        .faq-question:hover .faq-q-text{color:var(--apero)}
        .faq-q-text{font-family:'Bebas Neue',sans-serif;font-size:clamp(1rem,1.5vw,1.2rem);letter-spacing:.06em;color:var(--noir);transition:color .2s ease;flex:1}
        .faq-icon{width:24px;height:24px;flex-shrink:0;color:var(--apero);transition:transform .3s ease;display:flex;align-items:center;justify-content:center}
        .faq-icon svg{width:16px;height:16px}
        .faq-item[open] .faq-icon{transform:rotate(45deg)}
        .faq-item[open] .faq-q-text{color:var(--apero)}
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
customElements.define('apero-faq', AperoFaq);
