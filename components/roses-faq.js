// @ts-nocheck
class RosesFaq extends HTMLElement {
  constructor() { super(); this.attachShadow({ mode: 'open' }); }
  connectedCallback() {
    const faqs = [
      { q: "Combien de propositions de logo je re\u00e7ois\u00a0?", a: "Tu re\u00e7ois 2 \u00e0 3 propositions de directions cr\u00e9atives diff\u00e9rentes. \u00c0 partir de l\u00e0, on raffine ta pr\u00e9f\u00e9r\u00e9e ensemble avec une ronde de modifications incluse." },
      { q: "Est-ce que je re\u00e7ois les fichiers sources\u00a0?", a: "Oui. Tu re\u00e7ois les fichiers modifiables (AI, PSD) en plus des formats finaux (PNG, JPG, PDF). Tout est \u00e0 toi." },
      { q: "C\u2019est quoi la diff\u00e9rence entre supports imprim\u00e9s et num\u00e9riques\u00a0?", a: "Les supports imprim\u00e9s sont con\u00e7us pour l\u2019impression\u00a0: cartes d\u2019affaires, d\u00e9pliants, affiches, menus. Les supports num\u00e9riques sont optimis\u00e9s pour les \u00e9crans\u00a0: banni\u00e8res web, publications r\u00e9seaux sociaux, visuels publicitaires." },
      { q: "Est-ce que vous pouvez travailler \u00e0 partir de mon logo existant\u00a0?", a: "Absolument. La refonte d\u2019identit\u00e9 visuelle part de ton image actuelle pour la moderniser et la rendre coh\u00e9rente sur tous tes supports." },
      { q: "C\u2019est quoi le d\u00e9lai de livraison\u00a0?", a: "Le d\u00e9lai standard est de 7 jours ouvrables. Si t\u2019es press\u00e9, on offre une option de livraison express moyennant un suppl\u00e9ment." },
      { q: "Est-ce que je peux commander juste un seul visuel\u00a0?", a: "Oui. Les supports imprim\u00e9s et num\u00e9riques commencent \u00e0 75$ pour un seul visuel. Le forfait de 4 visuels \u00e0 200$ est l\u00e0 si tu as besoin de plus." }
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
        :host{display:block;--fond:#FAF9F6;--noir:#2B2B2B;--roses:#d4728c;--gris:#8a8580;--gris-clair:#c4beb6;--ligne:rgba(43,43,43,.08);font-family:'Montserrat',system-ui,sans-serif;-webkit-font-smoothing:antialiased;background:var(--fond);color:var(--noir)}
        .faq-section{max-width:800px;margin:0 auto;padding:4.5rem 2rem}
        .faq-header{text-align:center;margin-bottom:2.5rem}
        .faq-label{font-family:'Bebas Neue',sans-serif;font-size:.7rem;letter-spacing:.4em;color:var(--roses);margin-bottom:.8rem}
        .faq-title{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4.5vw,3.2rem);letter-spacing:.03em;line-height:.95;color:var(--noir)}
        .faq-item{border-bottom:1px solid var(--ligne);overflow:hidden}
        .faq-item:first-of-type{border-top:1px solid var(--ligne)}
        .faq-question{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:1.2rem 0;cursor:pointer;list-style:none;transition:all .2s ease}
        .faq-question::-webkit-details-marker{display:none}
        .faq-question::marker{display:none;content:''}
        .faq-question:hover{padding-left:.4rem}
        .faq-question:hover .faq-q-text{color:var(--roses)}
        .faq-q-text{font-family:'Bebas Neue',sans-serif;font-size:clamp(1rem,1.5vw,1.2rem);letter-spacing:.06em;color:var(--noir);transition:color .2s ease;flex:1}
        .faq-icon{width:24px;height:24px;flex-shrink:0;color:var(--roses);transition:transform .3s ease;display:flex;align-items:center;justify-content:center}
        .faq-icon svg{width:16px;height:16px}
        .faq-item[open] .faq-icon{transform:rotate(45deg)}
        .faq-item[open] .faq-q-text{color:var(--roses)}
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
customElements.define('roses-faq', RosesFaq);
