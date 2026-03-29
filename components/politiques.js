// @ts-nocheck
class CocktailPolitiques extends HTMLElement {
  constructor() { super(); this.attachShadow({ mode: 'open' }); }
  connectedCallback() {

    const sections = [
      {
        id: 'delais',
        num: '01',
        title: 'D\u00c9LAIS DE LIVRAISON',
        content: `
          <h4>D\u00e9lais standards par service</h4>
          <div class="delai-grid">
            <div class="delai-row"><span class="delai-cat">L\u2019Ap\u00e9ro (Infographie)</span><span class="delai-val">7 jours ouvrables</span></div>
            <div class="delai-row"><span class="delai-cat">Les Ros\u00e9s (Graphisme)</span><span class="delai-val">10 jours ouvrables</span></div>
            <div class="delai-row"><span class="delai-cat">Les Rouges (Photographie)</span><span class="delai-val">10 jours ouvrables apr\u00e8s la s\u00e9ance</span></div>
            <div class="delai-row"><span class="delai-cat">Les Blancs (Vid\u00e9ographie)</span><span class="delai-val">14 jours ouvrables</span></div>
            <div class="delai-row"><span class="delai-cat">Les Digestifs (Sites web)</span><span class="delai-val">21 jours ouvrables</span></div>
            <div class="delai-row"><span class="delai-cat">Plans d\u2019affaires (Ap\u00e9ro)</span><span class="delai-val">21 jours ouvrables</span></div>
          </div>

          <h4>Livraison express (suppl\u00e9ment)</h4>
          <div class="delai-grid">
            <div class="delai-row"><span class="delai-cat">Infographie express</span><span class="delai-val">48 heures</span></div>
            <div class="delai-row"><span class="delai-cat">Graphisme express</span><span class="delai-val">3 jours ouvrables</span></div>
            <div class="delai-row"><span class="delai-cat">Photos retouch\u00e9es express</span><span class="delai-val">3 jours ouvrables</span></div>
            <div class="delai-row"><span class="delai-cat">Montage vid\u00e9o express</span><span class="delai-val">7 jours ouvrables</span></div>
            <div class="delai-row"><span class="delai-cat">Site web express</span><span class="delai-val">10 jours ouvrables</span></div>
          </div>

          <p>Les d\u00e9lais commencent d\u00e8s la r\u00e9ception du paiement complet et de tous les \u00e9l\u00e9ments requis (brief, textes, visuels, acc\u00e8s, etc.). La livraison express d\u00e9pend de la disponibilit\u00e9 et doit \u00eatre confirm\u00e9e \u00e0 la commande.</p>
        `
      },
      {
        id: 'retards',
        num: '02',
        title: 'RETARDS DE LIVRAISON',
        content: `
          <h4>Retard de notre c\u00f4t\u00e9</h4>
          <p>Si un retard survient de notre c\u00f4t\u00e9, on te communique la situation rapidement avec un nouveau d\u00e9lai propos\u00e9.</p>
          <p><strong>Compensations\u00a0:</strong></p>
          <p>Retard de plus de 3 jours ouvrables\u00a0: remise de 10 \u00e0 20\u00a0%, extra gratuit, ou priorit\u00e9 sur tes futurs projets.</p>
          <p>Retard de plus de 10 jours ouvrables\u00a0: remboursement partiel ou total, r\u00e9allocation du montant pay\u00e9, ou compensation \u00e9quivalente.</p>

          <h4>Retard de ton c\u00f4t\u00e9</h4>
          <p>Si tu tardes \u00e0 fournir le contenu n\u00e9cessaire (textes, photos, acc\u00e8s, approbations), les d\u00e9lais de livraison sont automatiquement report\u00e9s d\u2019autant. On ne peut pas produire sans les \u00e9l\u00e9ments requis.</p>
          <p>Si le contenu n\u2019est pas re\u00e7u dans les 30 jours suivant la commande, le projet est consid\u00e9r\u00e9 comme abandonn\u00e9 et aucun remboursement n\u2019est offert.</p>

          <h4>Exceptions</h4>
          <p>Aucun d\u00e9dommagement n\u2019est accord\u00e9 si le retard est caus\u00e9 par\u00a0: l\u2019absence ou le retard de tes \u00e9l\u00e9ments, des demandes de modifications majeures en cours de projet, ou des \u00e9v\u00e9nements de force majeure (panne, maladie, etc.).</p>
        `
      },
      {
        id: 'annulation',
        num: '03',
        title: 'ANNULATION',
        content: `
          <h4>Avant le d\u00e9marrage du projet</h4>
          <p>Annulation sans frais. Le remboursement complet est effectu\u00e9 dans un d\u00e9lai de 5 \u00e0 10 jours ouvrables, selon le mode de paiement initial.</p>

          <h4>Apr\u00e8s le d\u00e9marrage</h4>
          <p>Une fois le projet amorc\u00e9, aucun remboursement n\u2019est offert \u2014 le temps et les ressources ont d\u00e9j\u00e0 \u00e9t\u00e9 mobilis\u00e9s. En cas de circonstances exceptionnelles ou de force majeure, on s\u2019engage \u00e0 discuter avec toi pour \u00e9valuer les options possibles (ajustement, suspension, cr\u00e9dit).</p>

          <h4>Projet termin\u00e9 ou livr\u00e9</h4>
          <p>Aucun remboursement, sauf en cas de non-conformit\u00e9 grave document\u00e9e.</p>

          <h4>Annulation par Cocktail M\u00e9dia</h4>
          <p>Annulation possible en cas de contraintes internes majeures. Remboursement int\u00e9gral offert avec pr\u00e9avis raisonnable.</p>

          <h4>Modification de commande</h4>
          <p>Avant le d\u00e9but\u00a0: ajustement possible (ex.\u00a0: \u00e9change de service). Apr\u00e8s le d\u00e9but\u00a0: aucun changement ni remboursement.</p>
        `
      },
      {
        id: 'remboursement',
        num: '04',
        title: 'REMBOURSEMENT',
        content: `
          <p>Tous les services sont payables en amont.</p>

          <h4>Cas admissibles</h4>
          <p><strong>Produits num\u00e9riques (graphisme, infographie)\u00a0:</strong> Oui, en cas de non-conformit\u00e9 majeure. Une r\u00e9vision gratuite est d\u2019abord propos\u00e9e.</p>
          <p><strong>Photographie / Vid\u00e9ographie\u00a0:</strong> Non, une fois la s\u00e9ance ou le tournage amorc\u00e9. En cas de circonstances exceptionnelles, on \u00e9value les options ensemble.</p>
          <p><strong>Sites web (Digestifs)\u00a0:</strong> Non, une fois la cr\u00e9ation commenc\u00e9e. Ajustements offerts si le site ne respecte pas les \u00e9l\u00e9ments valid\u00e9s.</p>

          <h4>Processus</h4>
          <p>Demande \u00e9crite requise par courriel. Trait\u00e9e dans un d\u00e9lai de 5 jours ouvrables. Remboursement \u00e9mis sous 10 jours ouvrables, par le m\u00eame mode de paiement que celui utilis\u00e9 \u00e0 la commande.</p>
        `
      },
      {
        id: 'revisions',
        num: '05',
        title: 'R\u00c9VISIONS ET AJUSTEMENTS',
        content: `
          <p>Chaque service inclut <strong>1 ronde de r\u00e9vision</strong> apr\u00e8s la livraison initiale. Tu regardes le r\u00e9sultat, tu envoies tes commentaires, on ajuste.</p>
          <p>Les r\u00e9visions suppl\u00e9mentaires sont factur\u00e9es selon la grille tarifaire des extras.</p>
          <p>Une r\u00e9vision, c\u2019est un ajustement sur le travail livr\u00e9 (corrections, modifications mineures). Ce n\u2019est pas une refonte compl\u00e8te ni un changement de direction cr\u00e9ative \u2014 \u00e7a, c\u2019est un nouveau mandat.</p>
        `
      },
      {
        id: 'propriete',
        num: '06',
        title: 'PROPRI\u00c9T\u00c9 INTELLECTUELLE',
        content: `
          <h4>Droits d\u2019utilisation</h4>
          <p>Une fois le projet pay\u00e9 en totalit\u00e9, tu re\u00e7ois les droits d\u2019utilisation complets pour un usage commercial\u00a0: site web, r\u00e9seaux sociaux, imprim\u00e9s, publicit\u00e9. Les cr\u00e9ations sont \u00e0 toi.</p>

          <h4>Fichiers sources et rushes</h4>
          <p>Les fichiers finaux sont toujours inclus dans la livraison. Les fichiers sources (AI, PSD, fichiers projet) et les fichiers bruts (rushes vid\u00e9o, RAW photo) ne sont pas inclus par d\u00e9faut, mais peuvent \u00eatre ajout\u00e9s en extra sur demande.</p>

          <h4>Revente et sous-licence</h4>
          <p>Les cr\u00e9ations livr\u00e9es sont destin\u00e9es \u00e0 ton usage commercial personnel ou celui de ton entreprise. La revente, la redistribution ou la sous-licence \u00e0 des tiers n\u2019est pas autoris\u00e9e sans entente \u00e9crite pr\u00e9alable.</p>

          <h4>Portfolio et cr\u00e9dits</h4>
          <p>Cocktail M\u00e9dia se r\u00e9serve le droit d\u2019inclure les cr\u00e9ations dans son portfolio et sa promotion, sauf demande contraire \u00e9crite de ta part.</p>
        `
      },
      {
        id: 'logistique',
        num: '07',
        title: 'LOGISTIQUE ET D\u00c9PLACEMENTS',
        content: `
          <p><strong>En Mauricie\u00a0:</strong> Frais de d\u00e9placement inclus dans tous les services.</p>
          <p><strong>Hors Mauricie\u00a0:</strong> Frais applicables selon la distance. D\u00e9placement gratuit offert pour toute commande de 500$ et plus.</p>
        `
      },
      {
        id: 'confidentialite',
        num: '08',
        title: 'CONFIDENTIALIT\u00c9 ET VIE PRIV\u00c9E',
        content: `
          <h4>Confidentialit\u00e9 des \u00e9changes</h4>
          <p>Toutes les informations partag\u00e9es dans le cadre d\u2019un projet sont trait\u00e9es de mani\u00e8re confidentielle. Aucune donn\u00e9e, image ou strat\u00e9gie n\u2019est utilis\u00e9e en dehors du mandat sans ton consentement.</p>

          <h4>Consentement</h4>
          <p>En proc\u00e9dant \u00e0 l\u2019achat d\u2019un service, tu confirmes avoir pris connaissance de ces conditions et les accepter. Ton consentement est donn\u00e9 de mani\u00e8re manifeste, libre et \u00e9clair\u00e9e, conform\u00e9ment \u00e0 la Loi 25.</p>

          <h4>Donn\u00e9es personnelles (Loi 25)</h4>
          <p>Les renseignements personnels collect\u00e9s sont limit\u00e9s \u00e0 ce qui est n\u00e9cessaire et utilis\u00e9s uniquement pour\u00a0: communiquer avec toi, g\u00e9rer ta commande, ton projet et ta facturation. Aucune donn\u00e9e n\u2019est vendue, lou\u00e9e ni partag\u00e9e \u00e0 des tiers, sauf si requis par la loi.</p>

          <h4>T\u00e9moins de connexion (cookies)</h4>
          <p>Notre site utilise les outils d\u2019analyse int\u00e9gr\u00e9s de Wix pour mesurer la fr\u00e9quentation et am\u00e9liorer l\u2019exp\u00e9rience de navigation. Ces outils peuvent d\u00e9poser des t\u00e9moins de connexion (cookies) sur ton appareil. Aucune donn\u00e9e personnelle identifiable n\u2019est collect\u00e9e \u00e0 des fins publicitaires. Tu peux g\u00e9rer tes pr\u00e9f\u00e9rences de t\u00e9moins via les param\u00e8tres de ton navigateur.</p>

          <h4>Transfert hors Qu\u00e9bec</h4>
          <p>Certaines donn\u00e9es sont h\u00e9berg\u00e9es sur des plateformes dont les serveurs se trouvent \u00e0 l\u2019ext\u00e9rieur du Qu\u00e9bec (Wix, Google Drive). Conform\u00e9ment \u00e0 la Loi 25, une \u00e9valuation des facteurs relatifs \u00e0 la vie priv\u00e9e a \u00e9t\u00e9 r\u00e9alis\u00e9e pour s\u2019assurer que ces plateformes offrent un niveau de protection ad\u00e9quat.</p>

          <h4>Responsable de la protection des renseignements</h4>
          <p>F\u00e9lix Dumont est d\u00e9sign\u00e9 responsable de la protection des renseignements personnels chez Cocktail M\u00e9dia, conform\u00e9ment \u00e0 la Loi 25. Pour toute question\u00a0: <a href="mailto:felix.dumont@cocktailmedia.ca">felix.dumont@cocktailmedia.ca</a></p>

          <h4>Stockage et s\u00e9curit\u00e9</h4>
          <p>Les fichiers sont h\u00e9berg\u00e9s sur des plateformes s\u00e9curis\u00e9es et conserv\u00e9s pour une dur\u00e9e maximale de 12 mois, sauf obligation l\u00e9gale contraire. Tu peux en demander la suppression en tout temps.</p>

          <h4>Registre des incidents</h4>
          <p>Cocktail M\u00e9dia tient un registre des incidents de confidentialit\u00e9 conform\u00e9ment \u00e0 la Loi 25. En cas d\u2019incident pr\u00e9sentant un risque de pr\u00e9judice s\u00e9rieux, la Commission d\u2019acc\u00e8s \u00e0 l\u2019information du Qu\u00e9bec et les personnes concern\u00e9es seront avis\u00e9es dans les meilleurs d\u00e9lais.</p>

          <h4>Tes droits</h4>
          <p>Tu as le droit d\u2019acc\u00e9der \u00e0 tes donn\u00e9es personnelles, de les faire corriger, de demander leur suppression ou d\u2019en obtenir une copie dans un format structur\u00e9 et couramment utilis\u00e9 (droit \u00e0 la portabilit\u00e9). Il suffit d\u2019en faire la demande par \u00e9crit \u00e0 l\u2019adresse mentionn\u00e9e ci-dessus.</p>

          <h4>Utilisation promotionnelle</h4>
          <p>Cocktail M\u00e9dia se r\u00e9serve le droit d\u2019utiliser certains extraits visuels \u00e0 des fins de portfolio ou de publication sur les r\u00e9seaux sociaux, uniquement si le projet est public. Tu peux refuser cette utilisation au moment de la commande.</p>

          <h4>Accord de non-divulgation (NDA)</h4>
          <p>Un accord de non-divulgation peut \u00eatre sign\u00e9 sur demande pour tout projet jug\u00e9 confidentiel ou strat\u00e9gique.</p>
        `
      },
      {
        id: 'responsabilite',
        num: '09',
        title: 'RESPONSABILIT\u00c9 ET JURIDICTION',
        content: `
          <h4>Limitation de responsabilit\u00e9</h4>
          <p>Cocktail M\u00e9dia s\u2019engage \u00e0 livrer un travail professionnel conforme \u00e0 ce qui a \u00e9t\u00e9 convenu. Cependant, notre responsabilit\u00e9 totale ne peut en aucun cas exc\u00e9der le montant pay\u00e9 pour le service concern\u00e9.</p>

          <h4>Contenu fourni par le client</h4>
          <p>Tu es responsable du contenu que tu nous fournis (textes, images, logos, vid\u00e9os, musique). En nous transmettant du mat\u00e9riel, tu confirmes en d\u00e9tenir les droits d\u2019utilisation n\u00e9cessaires. Cocktail M\u00e9dia ne peut \u00eatre tenu responsable de toute r\u00e9clamation li\u00e9e \u00e0 des droits d\u2019auteur ou de propri\u00e9t\u00e9 intellectuelle sur le contenu fourni par le client.</p>

          <h4>Usage des livrables</h4>
          <p>Une fois les fichiers livr\u00e9s, tu es responsable de l\u2019usage que tu en fais. Cocktail M\u00e9dia ne peut \u00eatre tenu responsable des cons\u00e9quences li\u00e9es \u00e0 l\u2019utilisation, la modification ou la diffusion des livrables apr\u00e8s la livraison.</p>

          <h4>Juridiction</h4>
          <p>Les pr\u00e9sentes conditions sont r\u00e9gies par les lois du Qu\u00e9bec et les lois f\u00e9d\u00e9rales du Canada applicables. Tout litige sera soumis \u00e0 la comp\u00e9tence exclusive des tribunaux du district judiciaire de Trois-Rivi\u00e8res.</p>
        `
      }
    ];

    const tocHTML = sections.map(s =>
      `<a href="#${s.id}" class="toc-link"><span class="toc-num">${s.num}</span>${s.title}</a>`
    ).join('');

    const sectionsHTML = sections.map(s => `
      <div class="pol-section" id="${s.id}">
        <div class="pol-section-header">
          <span class="pol-num">${s.num}</span>
          <h3 class="pol-section-title">${s.title}</h3>
        </div>
        <div class="pol-section-body">${s.content}</div>
      </div>
    `).join('');

    this.shadowRoot.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&display=swap');
        *,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
        :host{
          display:block;
          --creme:#FFF4E9;--fond:#FAF9F6;--noir:#2B2B2B;--rouge:#E83B14;--gris:#8a8580;--gris-clair:#c4beb6;--ligne:rgba(43,43,43,.08);
          font-family:'Montserrat',system-ui,sans-serif;-webkit-font-smoothing:antialiased;background:var(--fond);color:var(--noir);
        }

        /* HERO */
        .hero{background:var(--creme);padding:4rem 2rem 3rem;text-align:center;position:relative;overflow:hidden}
        .hero-label{font-family:'Bebas Neue',sans-serif;font-size:.75rem;letter-spacing:.4em;color:var(--rouge);margin-bottom:.8rem}
        .hero-title{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.5rem,6vw,5rem);letter-spacing:.02em;line-height:.9;color:var(--noir);margin-bottom:1rem}
        .hero-title .accent{color:var(--rouge)}
        .hero-subtitle{font-size:.9rem;font-weight:400;color:var(--gris);line-height:1.7;max-width:560px;margin:0 auto 1.5rem}
        .hero-date{font-size:.72rem;color:var(--gris-clair);font-style:italic}
        .hero-divider{width:60px;height:3px;background:linear-gradient(90deg,var(--rouge),rgba(232,59,20,.3));border:none;margin:1.5rem auto 0}

        /* TOC */
        .toc{max-width:800px;margin:0 auto;padding:2.5rem 2rem;display:flex;flex-wrap:wrap;gap:.5rem .8rem;justify-content:center}
        .toc-link{
          font-family:'Bebas Neue',sans-serif;font-size:.75rem;letter-spacing:.08em;
          color:var(--gris);text-decoration:none;
          padding:.4rem .8rem;border:1px solid var(--ligne);border-radius:100px;
          transition:all .2s ease;display:inline-flex;align-items:center;gap:.4rem;
        }
        .toc-link:hover{color:var(--rouge);border-color:var(--rouge);background:rgba(232,59,20,.03)}
        .toc-num{color:var(--rouge);font-size:.65rem}

        /* SECTIONS */
        .pol-content{max-width:800px;margin:0 auto;padding:0 2rem 4rem}

        .pol-section{
          border-bottom:1px solid var(--ligne);
          padding:2.5rem 0;
        }
        .pol-section:first-child{border-top:1px solid var(--ligne)}

        .pol-section-header{display:flex;align-items:baseline;gap:.8rem;margin-bottom:1.2rem}
        .pol-num{
          font-family:'Bebas Neue',sans-serif;font-size:.7rem;letter-spacing:.1em;
          color:var(--rouge);flex-shrink:0;
          width:28px;height:28px;border-radius:50%;
          border:1.5px solid var(--rouge);
          display:flex;align-items:center;justify-content:center;
        }
        .pol-section-title{
          font-family:'Bebas Neue',sans-serif;font-size:clamp(1.2rem,2vw,1.5rem);
          letter-spacing:.06em;color:var(--noir);
        }

        .pol-section-body{padding-left:calc(28px + .8rem)}
        .pol-section-body p{font-size:.85rem;font-weight:400;color:var(--gris);line-height:1.7;margin-bottom:.8rem}
        .pol-section-body p:last-child{margin-bottom:0}
        .pol-section-body strong{color:var(--noir);font-weight:600}
        .pol-section-body a{color:var(--rouge);text-decoration:none;border-bottom:1px solid rgba(232,59,20,.3);transition:border-color .2s ease}
        .pol-section-body a:hover{border-color:var(--rouge)}

        .pol-section-body h4{
          font-family:'Bebas Neue',sans-serif;font-size:.85rem;letter-spacing:.1em;
          color:var(--noir);margin:1.5rem 0 .5rem;
        }
        .pol-section-body h4:first-child{margin-top:0}

        /* Delai grid */
        .delai-grid{margin:.8rem 0 1.2rem}
        .delai-row{
          display:flex;justify-content:space-between;align-items:baseline;
          padding:.5rem 0;border-bottom:1px solid var(--ligne);
          font-size:.83rem;
        }
        .delai-cat{color:var(--noir);font-weight:500}
        .delai-val{
          font-family:'Bebas Neue',sans-serif;font-size:.85rem;
          letter-spacing:.05em;color:var(--rouge);white-space:nowrap;
        }

        /* CONTACT */
        .pol-footer{
          max-width:800px;margin:0 auto;padding:2rem 2rem 3rem;text-align:center;
        }
        .pol-footer-text{font-size:.82rem;color:var(--gris);line-height:1.6;margin-bottom:.3rem}
        .pol-footer-email{
          font-family:'Bebas Neue',sans-serif;font-size:1rem;letter-spacing:.1em;
          color:var(--rouge);text-decoration:none;
          border-bottom:1.5px solid rgba(232,59,20,.3);padding-bottom:2px;
          transition:border-color .2s ease;
        }
        .pol-footer-email:hover{border-color:var(--rouge)}

        @media(max-width:640px){
          .hero{padding:3rem 1.5rem 2.5rem}
          .toc{padding:2rem 1.5rem}
          .pol-content{padding:0 1.5rem 3rem}
          .pol-section-body{padding-left:0}
          .delai-row{flex-direction:column;gap:.1rem}
          .delai-val{align-self:flex-end}
        }
      </style>

      <section class="hero">
        <p class="hero-label">COCKTAIL M\u00c9DIA</p>
        <h1 class="hero-title">POLITIQUES <span class="accent">&</span> CONDITIONS</h1>
        <p class="hero-subtitle">Un bon service repose sur une entente claire. Ici, tout est expliqu\u00e9 simplement\u00a0: d\u00e9lais, r\u00e9visions, remboursements, confidentialit\u00e9. Pas de jargon, pas de pi\u00e8ge.</p>
        <p class="hero-date">Derni\u00e8re mise \u00e0 jour\u00a0: mars 2026</p>
        <hr class="hero-divider">
      </section>

      <nav class="toc">${tocHTML}</nav>

      <div class="pol-content">${sectionsHTML}</div>

      <div class="pol-footer">
        <p class="pol-footer-text">Une question sur nos politiques\u00a0?</p>
        <a href="mailto:info@cocktailmedia.ca" class="pol-footer-email" target="_top">INFO@COCKTAILMEDIA.CA</a>
      </div>
    `;

    // Smooth scroll for TOC links
    this.shadowRoot.querySelectorAll('.toc-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const id = link.getAttribute('href').slice(1);
        const target = this.shadowRoot.getElementById(id);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }
}
customElements.define('cocktail-politiques', CocktailPolitiques);
