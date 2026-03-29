// @ts-nocheck
class BlancsFaq extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {

    const faqs = [
      {
        q: "Combien de temps dure un tournage vid\u00e9o\u00a0?",
        a: "La dur\u00e9e varie selon le service. Un vid\u00e9o corporatif prend g\u00e9n\u00e9ralement entre 1h et 3h de tournage sur place. Une couverture d\u2019\u00e9v\u00e8nement couvre un bloc de 3 heures. On s\u2019organise \u00e0 l\u2019avance pour maximiser chaque minute."
      },
      {
        q: "Est-ce que je re\u00e7ois les fichiers bruts (rushs)\u00a0?",
        a: "Non, la livraison inclut le montage final en haute d\u00e9finition, optimis\u00e9 pour le web et les r\u00e9seaux sociaux. Les fichiers bruts ne sont pas inclus, mais peuvent \u00eatre ajout\u00e9s en extra sur demande."
      },
      {
        q: "Quel type de vid\u00e9o est le mieux pour mon entreprise\u00a0?",
        a: "Le vid\u00e9o corporatif est id\u00e9al pour pr\u00e9senter ton entreprise et tes services. Si tu veux alimenter tes r\u00e9seaux sociaux, le forfait Short/Reel est con\u00e7u pour \u00e7a. Pour l\u2019immobilier, on a un service d\u00e9di\u00e9 avec visite guid\u00e9e. On t\u2019aide \u00e0 choisir lors de l\u2019appel de 15 minutes."
      },
      {
        q: "Est-ce que vous vous d\u00e9placez partout en Mauricie\u00a0?",
        a: "Oui. Le d\u00e9placement est inclus dans tous nos services vid\u00e9o en Mauricie \u2014 Trois-Rivi\u00e8res, Shawinigan, Louiseville, B\u00e9cancour, Victoriaville et environs. Pour les tournages \u00e0 l\u2019ext\u00e9rieur de la r\u00e9gion, on s\u2019entend sur les frais \u00e0 l\u2019avance."
      },
      {
        q: "C\u2019est quoi le d\u00e9lai de livraison\u00a0?",
        a: "Le d\u00e9lai standard est de 10 jours ouvrables apr\u00e8s le tournage. Si t\u2019es press\u00e9, on offre une option de livraison express moyennant un suppl\u00e9ment. Le d\u00e9lai exact est confirm\u00e9 avant la r\u00e9servation."
      },
      {
        q: "Est-ce que je peux demander des modifications apr\u00e8s le montage\u00a0?",
        a: "Absolument. Une ronde de modifications (revisite) est incluse dans chaque service. Tu regardes le montage, tu nous envoies tes commentaires, et on ajuste. Des revisites suppl\u00e9mentaires sont disponibles en extra."
      }
    ];

    // Build FAQ schema for SEO
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.a
        }
      }))
    };

    const faqHTML = faqs.map((f, i) => `
      <details class="faq-item" ${i === 0 ? 'open' : ''}>
        <summary class="faq-question">
          <span class="faq-q-text">${f.q}</span>
          <span class="faq-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          </span>
        </summary>
        <div class="faq-answer">
          <p>${f.a}</p>
        </div>
      </details>
    `).join('');

    this.shadowRoot.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&display=swap');
        *,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
        :host{
          display:block;
          --creme:#FFF4E9;
          --fond:#FAF9F6;
          --noir:#2B2B2B;
          --blancs:#c9a84c;
          --blancs-pale:rgba(201,168,76,.08);
          --gris:#8a8580;
          --gris-clair:#c4beb6;
          --ligne:rgba(43,43,43,.08);
          font-family:'Montserrat',system-ui,sans-serif;
          -webkit-font-smoothing:antialiased;
          background:var(--fond);
          color:var(--noir);
        }

        .faq-section{
          max-width:800px;
          margin:0 auto;
          padding:4.5rem 2rem;
        }

        /* Header */
        .faq-header{
          text-align:center;
          margin-bottom:2.5rem;
        }
        .faq-label{
          font-family:'Bebas Neue',sans-serif;
          font-size:.7rem;letter-spacing:.4em;
          color:var(--blancs);margin-bottom:.8rem;
        }
        .faq-title{
          font-family:'Bebas Neue',sans-serif;
          font-size:clamp(2rem,4.5vw,3.2rem);
          letter-spacing:.03em;line-height:.95;
          color:var(--noir);
        }

        /* Accordion */
        .faq-item{
          border-bottom:1px solid var(--ligne);
          overflow:hidden;
        }
        .faq-item:first-of-type{
          border-top:1px solid var(--ligne);
        }

        .faq-question{
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:1rem;
          padding:1.2rem 0;
          cursor:pointer;
          list-style:none;
          transition:all .2s ease;
        }
        .faq-question::-webkit-details-marker{display:none}
        .faq-question::marker{display:none;content:''}

        .faq-question:hover{
          padding-left:.4rem;
        }
        .faq-question:hover .faq-q-text{
          color:var(--blancs);
        }

        .faq-q-text{
          font-family:'Bebas Neue',sans-serif;
          font-size:clamp(1rem,1.5vw,1.2rem);
          letter-spacing:.06em;
          color:var(--noir);
          transition:color .2s ease;
          flex:1;
        }

        .faq-icon{
          width:24px;height:24px;
          flex-shrink:0;
          color:var(--blancs);
          transition:transform .3s ease;
          display:flex;align-items:center;justify-content:center;
        }
        .faq-icon svg{
          width:16px;height:16px;
        }

        /* Open state */
        .faq-item[open] .faq-icon{
          transform:rotate(45deg);
        }
        .faq-item[open] .faq-q-text{
          color:var(--blancs);
        }

        .faq-answer{
          padding:0 0 1.2rem;
          animation:fadeIn .3s ease;
        }
        .faq-answer p{
          font-size:.85rem;font-weight:400;
          color:var(--gris);line-height:1.7;
          max-width:680px;
        }

        @keyframes fadeIn{
          from{opacity:0;transform:translateY(-6px)}
          to{opacity:1;transform:translateY(0)}
        }

        @media(max-width:480px){
          .faq-section{padding:3rem 1.2rem}
          .faq-question{padding:1rem 0}
        }
      </style>
      <script type="application/ld+json">${JSON.stringify(schemaData)}</script>
      <section class="faq-section">
        <div class="faq-header">
          <p class="faq-label">QUESTIONS FR\u00c9QUENTES</p>
          <h2 class="faq-title">BON \u00c0 SAVOIR</h2>
        </div>
        ${faqHTML}
      </section>
    `;
  }
}
customElements.define('blancs-faq', BlancsFaq);
