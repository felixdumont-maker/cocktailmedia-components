// @ts-nocheck
class RougesFaq extends HTMLElement {
  constructor() { super(); this.attachShadow({ mode: 'open' }); }
  connectedCallback() {
    const faqs = [
      { q: "Combien de photos je re\u00e7ois par s\u00e9ance\u00a0?", a: "Le nombre varie selon le service. Pour des photos de produits, on livre g\u00e9n\u00e9ralement entre 10 et 20 images retouch\u00e9es. Pour une couverture d\u2019\u00e9v\u00e8nement de 3 heures, tu peux t\u2019attendre \u00e0 50\u2013100+ photos. Le d\u00e9tail est confirm\u00e9 avant chaque r\u00e9servation." },
      { q: "Est-ce que les photos sont retouch\u00e9es\u00a0?", a: "Oui, chaque photo livr\u00e9e passe par un processus de retouche professionnelle\u00a0: correction des couleurs, exposition, balance des blancs et recadrage. Les retouches avanc\u00e9es (suppression d\u2019objets, compositing) sont un service s\u00e9par\u00e9." },
      { q: "Dans quel format sont livr\u00e9es les photos\u00a0?", a: "Tu re\u00e7ois des fichiers JPEG haute r\u00e9solution (print-ready) et des versions optimis\u00e9es pour le web et les r\u00e9seaux sociaux. Si tu as besoin de formats sp\u00e9cifiques, on s\u2019adapte." },
      { q: "Est-ce que vous vous d\u00e9placez partout en Mauricie\u00a0?", a: "Oui. Le d\u00e9placement est inclus dans tous nos services photo en Mauricie \u2014 Trois-Rivi\u00e8res, Shawinigan, Louiseville, B\u00e9cancour, Victoriaville et environs. Pour les s\u00e9ances \u00e0 l\u2019ext\u00e9rieur de la r\u00e9gion, on s\u2019entend sur les frais \u00e0 l\u2019avance." },
      { q: "C\u2019est quoi le d\u00e9lai de livraison\u00a0?", a: "Le d\u00e9lai standard est de 7 jours ouvrables apr\u00e8s la s\u00e9ance. Si t\u2019es press\u00e9, on offre une option de livraison express moyennant un suppl\u00e9ment." },
      { q: "Est-ce que je peux utiliser les photos pour mes r\u00e9seaux sociaux\u00a0?", a: "Absolument. Tu re\u00e7ois les droits d\u2019utilisation complets pour un usage commercial\u00a0: site web, r\u00e9seaux sociaux, imprim\u00e9s, publicit\u00e9. Les photos sont \u00e0 toi." }
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
        :host{display:block;--fond:#FAF9F6;--noir:#2B2B2B;--rouges:#8a2020;--gris:#8a8580;--gris-clair:#c4beb6;--ligne:rgba(43,43,43,.08);font-family:'Montserrat',system-ui,sans-serif;-webkit-font-smoothing:antialiased;background:var(--fond);color:var(--noir)}
        .faq-section{max-width:800px;margin:0 auto;padding:4.5rem 2rem}
        .faq-header{text-align:center;margin-bottom:2.5rem}
        .faq-label{font-family:'Bebas Neue',sans-serif;font-size:.7rem;letter-spacing:.4em;color:var(--rouges);margin-bottom:.8rem}
        .faq-title{font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,4.5vw,3.2rem);letter-spacing:.03em;line-height:.95;color:var(--noir)}
        .faq-item{border-bottom:1px solid var(--ligne);overflow:hidden}
        .faq-item:first-of-type{border-top:1px solid var(--ligne)}
        .faq-question{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:1.2rem 0;cursor:pointer;list-style:none;transition:all .2s ease}
        .faq-question::-webkit-details-marker{display:none}
        .faq-question::marker{display:none;content:''}
        .faq-question:hover{padding-left:.4rem}
        .faq-question:hover .faq-q-text{color:var(--rouges)}
        .faq-q-text{font-family:'Bebas Neue',sans-serif;font-size:clamp(1rem,1.5vw,1.2rem);letter-spacing:.06em;color:var(--noir);transition:color .2s ease;flex:1}
        .faq-icon{width:24px;height:24px;flex-shrink:0;color:var(--rouges);transition:transform .3s ease;display:flex;align-items:center;justify-content:center}
        .faq-icon svg{width:16px;height:16px}
        .faq-item[open] .faq-icon{transform:rotate(45deg)}
        .faq-item[open] .faq-q-text{color:var(--rouges)}
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
customElements.define('rouges-faq', RougesFaq);
