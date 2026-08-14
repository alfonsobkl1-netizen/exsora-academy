export const filieres = [
  {
    id: 'fondamentaux',
    slug: 'fondamentaux',
    name: 'Fondamentaux du recrutement',
    description: 'Les bases du recrutement : cycle complet, analyse de besoin, entretien structuré.',
    order: 1,
  },
  {
    id: 'executive-search',
    slug: 'executive-search',
    name: 'Executive Search',
    description: 'Chercher et placer des dirigeants : mandats retained, approche, négociation.',
    order: 2,
  },
  {
    id: 'sourcing',
    slug: 'sourcing',
    name: 'Sourcing et recherche de talents',
    description: 'Boolean search, X-Ray, LinkedIn Recruiter, construction de viviers.',
    order: 3,
  },
  {
    id: 'talent-acquisition',
    slug: 'talent-acquisition',
    name: 'Talent Acquisition',
    description: 'Stratégie de recrutement multicanale, parcours candidat, expérience.',
    order: 4,
  },
  {
    id: 'rh',
    slug: 'rh',
    name: 'Ressources humaines',
    description: 'Gestion RH : stratégie, mobilité, QVCT, formation, relations sociales.',
    order: 5,
  },
];

export const modules = [
  {
    id: 'mod-fond-01',
    filiere_id: 'fondamentaux',
    slug: 'role-responsabilites-recruteur',
    title: 'Rôle et responsabilités du recruteur',
    description: 'Comprendre le métier de recruteur : responsabilités, éthique, impact métier.',
    level: 'fondations',
    duration_minutes: 120,
    order: 1,
    lecons: [
      {
        id: 'lecon-1-1',
        order: 1,
        title: 'Les trois rôles du recruteur',
        content: `<h2>Les trois rôles du recruteur</h2>
<p>Le recruteur moderne exerce trois rôles distincts mais liés :</p>
<h3>1. Consultant interne auprès du management</h3>
<p>Vous êtes un <strong>conseiller</strong> auprès des managers et de la direction. Votre rôle :</p>
<ul>
<li>Clarifier le besoin réel (au-delà de la demande initiale)</li>
<li>Proposer des alternatives de sourcing</li>
<li>Challenger les critères discriminants</li>
<li>Recommander les meilleures pratiques de sélection</li>
<li>Gérer les attentes sur les délais et la qualité</li>
</ul>
<p><em>Exemple :</em> Un manager demande un candidat avec "10 ans d'expérience exactement". Vous analysez le besoin réel : piloter une équipe de 8 personnes, implémenter un processus. Ces compétences existent aussi chez quelqu'un avec 6 ans en startup haute responsabilité.</p>

<h3>2. Sourceur et expert du marché</h3>
<p>Vous avez une <strong>connaissance intime du marché</strong> :</p>
<ul>
<li>Identifier les viviers de candidats (où sont les bons profils ?)</li>
<li>Comprendre les tendances de marché et salaires</li>
<li>Entretenir un réseau (passif et actif)</li>
<li>Construire une stratégie de recherche adaptée</li>
<li>Évaluer la compétitivité d'une offre</li>
</ul>
<p><em>Exemple :</em> Les développeurs React à Paris en CDI coûtent 55-65k brut. Les startups les paient 50k, les groupes 60k, les SSII 45k. Vous savez où sont les meilleurs, ce qu'ils cherchent, ce qui les retient chez leur employeur actuel.</p>

<h3>3. Gestionnaire d'expérience candidat</h3>
<p>Vous orchestrez un <strong>parcours candidat irréprochable</strong> :</p>
<ul>
<li>Assurer la fluidité du process (pas d'attentes vaines)</li>
<li>Communiquer clairement à chaque étape</li>
<li>Justifier les refus professionnellement</li>
<li>Garder les excellents refusés dans votre vivier</li>
<li>Assurer l'intégration réussie du nouvel embauché</li>
</ul>
<p><em>Exemple :</em> Une candidate excellente attend depuis 8 jours. Le manager n'a pas encore lu le CV. Vous rappelez au manager, vous communiquez à la candidate, vous gardez son contact pour les 3 prochains postes.</p>`,
      },
      {
        id: 'lecon-1-2',
        order: 2,
        title: 'Éthique et responsabilités légales',
        content: `<h2>Éthique et responsabilités légales du recruteur</h2>
<h3>Cadre légal français et européen</h3>
<p>En tant que recruteur, vous êtes responsable du respect de :</p>
<ul>
<li><strong>Code du travail</strong> (non-discrimination, égalité professionnelle)</li>
<li><strong>RGPD</strong> (traitement des données personnelles de candidats)</li>
<li><strong>Loi Travail 2016</strong> (portabilité des contrats, droits du candidat)</li>
<li><strong>Directives EU 2000/78 et 2000/43</strong> (égalité de traitement)</li>
<li><strong>AI Act européen</strong> (si vous utilisez des outils IA pour la sélection)</li>
</ul>

<h3>Discriminations interdites en France</h3>
<p>Vous <strong>ne pouvez pas</strong> rejeter un candidat sur la base de :</p>
<ul>
<li>Sexe, identité de genre, orientation sexuelle</li>
<li>Âge (légalement, 50 ans c'est une force, pas un frein)</li>
<li>Origine, nationalité, apparence physique</li>
<li>Situation familiale (mariée ? enfants ? vie privée)</li>
<li>État de santé, handicap (obligation d'accessibilité)</li>
<li>Activités syndicales, opinions politiques, religieuses</li>
<li>Données génétiques</li>
<li>Potentiel maternité (JAMAIS légal de demander)</li>
</ul>

<h3>Votre responsabilité de recruteur</h3>
<p><strong>Vous êtes responsable de :</strong></p>
<ul>
<li>Éviter les critères discriminants dans la fiche de poste</li>
<li>Documenter la non-discrimination (grille d'évaluation objective)</li>
<li>Protéger les données des candidats</li>
<li>Obtenir un consentement explicite pour chaque usage</li>
<li>Respecter les droits d'accès et suppression</li>
<li>Auditer les outils IA si vous en utilisez</li>
</ul>

<h3>Cas pratique : discrimination indirecte</h3>
<p><em>Vous écrivez : "Excellente présentation orale indispensable, au moins 2 expériences internationales, école de commerce requise"</em></p>
<p><strong>Problème :</strong> Ces critères excluent indirectement les personnes sourdes (présentation orale), les immigrés (accès à international limité), les carrières non-académiques (école commerce).</p>
<p><strong>Mieux :</strong> "Communication claire en français et anglais (oral ou écrit). Expérience multiculturelle ou travail en environnement international. Formation supérieure ou équivalent expérience."</p>`,
      },
      {
        id: 'lecon-1-3',
        order: 3,
        title: 'Impact métier : de la décision de recruter au succès au poste',
        content: `<h2>Pourquoi le recrutement compte vraiment</h2>
<h3>Les coûts d'un mauvais recrutement</h3>
<p>Une mauvaise embauche coûte <strong>50 à 200% du salaire annuel</strong> selon les études :</p>
<ul>
<li>Coûts directs : salaire, charges pendant la période d'essai (30-40%)</li>
<li>Coûts cachés : formation, perte de productivité, intégration (30-60%)</li>
<li>Coûts de départ : turnover, recrutement de remplacement (20-100%)</li>
<li>Impact business : délai de remplacement, qualité produit, climat équipe</li>
</ul>

<h3>Les bénéfices d'un bon recrutement</h3>
<p>Un bon candidat, bien intégré :</p>
<ul>
<li>Génère +25% de productivité au bout de 6 mois (études Harvard Business Review)</li>
<li>Réduit le turnover (si bien "culturellement matching")</li>
<li>Apporte de la stabilité et du savoir-faire</li>
<li>Améliore l'engagement équipe (une bonne arrivée = excellent signal)</li>
<li>Crée un référent pour futur recrutement</li>
</ul>

<h3>Votre responsabilité envers trois acteurs</h3>
<p><strong>Envers l'entreprise :</strong> recruter quelqu'un qui réussira = créateur de valeur direkt</p>
<p><strong>Envers le candidat :</strong> transparence, respect, parcours fluide. Vous influencez sa prochaine période de 2-3 ans</p>
<p><strong>Envers l'équipe :</strong> une bonne arrivée crée un sentiment positif. Un mauvais recrutement peut "pourrir" toute une équipe</p>`,
      },
    ],
    quiz: {
      id: 'quiz-fond-01',
      title: 'Quiz : Rôle et responsabilités',
      passing_score: 70,
      questions: [
        {
          id: 'q-1',
          text: 'Quel est le premier rôle du recruteur mentionné dans ce module ?',
          type: 'multichoice',
          options: ['Sourceur technique', 'Consultant auprès du management', 'Responsable paie', 'Manager de ventes'],
          correct_answer: 1,
          explanation: 'Le recruteur est d\'abord consultant auprès du management, il clarifie le besoin réel au-delà de la demande initiale.',
        },
        {
          id: 'q-2',
          text: 'La discrimination basée sur l\'âge est interdite en France.',
          type: 'truefalse',
          correct_answer: true,
          explanation: 'Vrai. Le Code du travail français interdit toute discrimination basée sur l\'âge. 50 ans est une force, pas un critère d\'exclusion.',
        },
      ],
    },
  },
  {
    id: 'mod-fond-02',
    filiere_id: 'fondamentaux',
    slug: 'analyser-besoin-fiche-poste',
    title: 'Analyser un besoin et écrire une fiche de poste',
    description: 'De la demande floue à une fiche de poste criante de clarté.',
    level: 'fondations',
    duration_minutes: 150,
    order: 2,
    lecons: [
      {
        id: 'lecon-2-1',
        order: 1,
        title: 'Au-delà du "on a besoin d\'un dev"',
        content: `<h2>Décoder le besoin réel</h2>
<p>Quand un manager arrive en disant "on a besoin d'un développeur", il exprime une <strong>demande surface</strong>.</p>
<p>Votre job : trouver le <strong>besoin réel</strong>.</p>

<h3>Les questions qui décalent</h3>
<ul>
<li><strong>"Pourquoi maintenant ?"</strong> Croissance ? Remplacement ? Nouveau projet ? — chaque contexte change la stratégie</li>
<li><strong>"Qui va manager cette personne ?"</strong> Un tech lead ? Un manager RH ? Un CTO ? — les attentes diffèrent</li>
<li><strong>"Quel est le problème qu'on essaie de résoudre ?"</strong> Code legacy ? Scaling ? Manque d'expertise ? — chaque réponse change le profil idéal</li>
<li><strong>"Combien de temps peut on attendre ?"</strong> 1 mois ? 3 mois ? — urgence = critères moins rigides</li>
<li><strong>"Quel est le salaire réaliste ?"</strong> 40k ? 55k ? 80k ? — budget = marché accessible</li>
<li><strong>"Qui va former cette personne ?"</strong> Senior disponible ? Processus formalisé ? — impact sur profil junior vs confirmé</li>
</ul>

<h3>Exemple : de demande à besoin</h3>
<p><strong>Demande initiale :</strong> "On a besoin d'un responsable commercial avec 10 ans d'expérience en SaaS B2B."</p>
<p><strong>Après questionnement :</strong></p>
<ul>
<li>Contexte : startup Serie A, cherche accélération chiffre d'affaires</li>
<li>Réalité : actuellement 1 commercial (surchargé). Besoin = quelqu'un pour démultiplier, pas pour manager</li>
<li>Budget : 45k année 1 (sans commission) — "10 ans SaaS B2B" à ce prix n'existe que en reconversion</li>
<li>Vrai besoin : quelqu'un en croissance (5-7 ans possible), qui comprend le SaaS, capable d'apprendre vite</li>
</ul>
<p><strong>Résultat :</strong> Au lieu de chercher 1 unicorne, on ouvre le vivier à 15x candidats viables et on trouve en 6 semaines au lieu de 6 mois.</p>`,
      },
      {
        id: 'lecon-2-2',
        order: 2,
        title: 'Écrire une fiche de poste efficace',
        content: `<h2>La fiche de poste : ce qu'elle est, ce qu'elle n'est pas</h2>
<p><strong>Ce qu'elle est :</strong> Un document qui clarifie les attentes. Elle attire les bons, repousse les mauvais.</p>
<p><strong>Ce qu'elle n'est pas :</strong> Une liste à cocher de 47 critères. Une fiche interminable tue la candidature.</p>

<h3>Structure recommandée d'une fiche (max 1 page)</h3>

<h4>1. Contexte (3 lignes)</h4>
<p><em>Exemple :</em> "Scaleup de 45 salariés, spécialisée en logiciels de gestion RH cloud. Cherche Chief Technical Officer pour piloter l'évolution produit et l'équipe engineering (7 personnes)."</p>

<h4>2. Responsabilités principales (5-7 bullets)</h4>
<ul>
<li>Piloter la roadmap produit avec le PDG et VP Product</li>
<li>Manager et développer une équipe de 7 ingénieurs</li>
<li>Assurer la qualité de code et architecture évolutive</li>
<li>Définir les standards techniques et processus CI/CD</li>
<li>Représenter l'équipe en comité de direction</li>
</ul>

<h4>3. Profil recherché : ce qui compte vraiment (3 catégories)</h4>
<p><strong>Compétences techniques critiques :</strong></p>
<ul>
<li>Architecture logiciel (au moins 3 ansavec responsabilité)</li>
<li>Gestion d'équipe technique (au moins 2 ans)</li>
<li>Expérience startup ou scale-up</li>
</ul>

<p><strong>Soft skills clés :</strong></p>
<ul>
<li>Communication fluide (français, anglais)</li>
<li>Leadership collaboratif (pas de commandement militaire)</li>
<li>Vision à long terme + pragmatisme court terme</li>
</ul>

<p><strong>Bonus (pas d'élimination) :</strong></p>
<ul>
<li>Expérience en SaaS B2B</li>
<li>Agile / Scrum</li>
<li>Cloud (AWS, GCP, Azure)</li>
</ul>

<h4>4. Environnement et bénéfices (4-5 lignes)</h4>
<p>Lieu : bureau Paris (3j/semaine), remote ok. Équipe : 7 devs bienveillants. Contexte : produit en forte croissance (3x ARR en 18 mois). Salaire : 75-95k selon expérience. Equity : 0.5-1% (à discuter).</p>

<h3>Ce qu'il faut ÉVITER</h3>
<ul>
<li>❌ "Passionné" (vague, élimine sans raison)</li>
<li>❌ "Native" pour une langue (discriminatoire)</li>
<li>❌ "Excélent relationnel" (tout le monde dit ça)</li>
<li>❌ "Âge minimum/maximum"</li>
<li>❌ "Parfait" ou "Unicorne" (personne n'existe)</li>
<li>❌ 25 critères (scares les candidats)</li>
</ul>`,
      },
    ],
    quiz: {
      id: 'quiz-fond-02',
      title: 'Quiz : Analyse de besoin',
      passing_score: 70,
      questions: [
        {
          id: 'q-1',
          text: 'Quelle est la première question à poser pour décoder le besoin réel ?',
          type: 'multichoice',
          options: ['Combien de salaire ?', 'Pourquoi maintenant ?', 'Quelle école ?', 'Quel âge ?'],
          correct_answer: 1,
          explanation: 'Comprendre le contexte (croissance, remplacement, nouveau projet) change complètement la stratégie.',
        },
      ],
    },
  },
  {
    id: 'mod-fond-03',
    filiere_id: 'fondamentaux',
    slug: 'strategie-recherche-presslection',
    title: 'Stratégie de recherche et présélection',
    description: 'Où chercher ? Comment qualifier ? Construire un vivier.',
    level: 'professionnel',
    duration_minutes: 120,
    order: 3,
    lecons: [
      {
        id: 'lecon-3-1',
        order: 1,
        title: 'Les sources de candidats : où les trouver',
        content: `<h2>Cartographie des sources de talents</h2>
<p>Pour chaque profil, les candidats ne sont pas au même endroit.</p>

<h3>Sourcing interne et CVthèque</h3>
<ul>
<li><strong>Candidatures spontanées :</strong> Souvent oubliées. Dépoussiérez la CVthèque régulièrement</li>
<li><strong>Réseaux passés :</strong> Anciens candidats refusés (mais excellents). Relancez-les 6 mois après</li>
<li><strong>Référencés :</strong> Quelqu'un de votre équipe connaît la personne ? Priorité absolue</li>
<li><strong>Turnover interne :</strong> Quelqu'un cherche à bouger en interne ? Facilitez</li>
</ul>

<h3>LinkedIn et réseaux professionnels</h3>
<ul>
<li><strong>LinkedIn Recruiter (payant) :</strong> X-Ray, recherche booléenne, meilleur pour chasse</li>
<li><strong>LinkedIn gratuit :</strong> Limité, mais suffisant pour 80% des cas</li>
<li><strong>Recherche booléenne :</strong> site:linkedin.com/in + critères = filtrage efficace</li>
<li><strong>Groupes spécialisés :</strong> Groupes RH, groupes métier (Python France, etc.)</li>
</ul>

<h3>Sources spécialisées par métier</h3>
<ul>
<li><strong>Tech :</strong> GitHub, Stack Overflow, Hacker News, Product Hunt</li>
<li><strong>Data :</strong> Kaggle, Towards Data Science</li>
<li><strong>Design :</strong> Dribbble, Behance</li>
<li><strong>Marketing :</strong> Twitter, newsletter communauté</li>
<li><strong>Ventes/RH :</strong> Associations professionnelles (ANDRH, ARF, etc.)</li>
</ul>

<h3>Événements et communautés</h3>
<ul>
<li>Meetups métier (gratuit, excellente vivier)</li>
<li>Conférences (plus cher, mais meilleure concentration)</li>
<li>Formations (certificantes ou non) = vivier futur</li>
<li>Bootcamps (formation intensive = candidats motivés)</li>
</ul>

<h3>Agences et cabinets</h3>
<ul>
<li><strong>Avantages :</strong> Pré-qualification, gestion administrative, urgence couverte</li>
<li><strong>Inconvénients :</strong> Coûteux (15-25% salaire annuel), moins de contrôle</li>
<li><strong>Quand :</strong> Urgence, profils rares, volume élevé</li>
</ul>`,
      },
      {
        id: 'lecon-3-2',
        order: 2,
        title: 'La présélection : dire oui, dire non avec clarté',
        content: `<h2>Présélection : la qualification par CV et profil</h2>

<h3>Lire un CV en 60 secondes (efficacité)</h3>
<p>Vous allez recevoir 50-200 CV. Un temps moyen de lecture : 6 secondes. Soyez réaliste.</p>

<h4>Scan rapide (6 sec) :</h4>
<ul>
<li>Expérience récente = matches-t-elle le besoin ? (Titre, entreprise, durée)</li>
<li>Localisation : compatible avec le lieu ?</li>
<li>Timeline : pas de gros trous expliqués ?</li>
</ul>

<h4>Lecture complète (60 sec, si prometteur) :</h4>
<ul>
<li>Responsabilités principales : font-elles sens pour le besoin ?</li>
<li>Évolution : stagnation 5 ans ou progression ?</li>
<li>Soft skills indiqués : leadership, adaptabilité, etc. ?</li>
<li>Réalisations quantifiées : "+30% CA", "+40% productivité" = sérieux</li>
</ul>

<h3>Les critères de qualification</h3>
<p><strong>Critères d'élimination (KO automatique) :</strong></p>
<ul>
<li>Absent du marché du travail (retraite, études sans fin)</li>
<li>Préavis contractuel trop long (dans 12 mois seulement)</li>
<li>Localisation impossible (vit au Japon, poste Paris obligatoire)</li>
<li>Langue requise non parlée (poste multilangue, candidat unilingue)</li>
</ul>

<p><strong>Critères de sélection (bonus) :</strong></p>
<ul>
<li>Expérience directement applicable</li>
<li>Formation supérieure (école, master)</li>
<li>Progression de carrière visible</li>
<li>Entreprises références (Google, Amazon, startup connue)</li>
</ul>

<h3>Les tailles de shortlist par étape</h3>
<ul>
<li><strong>Pool initial :</strong> 50-200 candidats (tous les CVs reçus/trouvés)</li>
<li><strong>Après présélection CV :</strong> 15-25 candidats (qualification objective)</li>
<li><strong>Après appel téléphonique :</strong> 5-8 candidats (fit culture, attentes, disponibilité)</li>
<li><strong>Après entretien 1 :</strong> 3-4 candidats (compétences validées)</li>
<li><strong>Après entretien 2 :</strong> 1-2 candidats (finalistes)</li>
</ul>`,
      },
    ],
    quiz: {
      id: 'quiz-fond-03',
      title: 'Quiz : Stratégie et présélection',
      passing_score: 70,
      questions: [
        {
          id: 'q-1',
          text: 'Combien de temps en moyenne pour lire un CV lors d\'un scan rapide ?',
          type: 'multichoice',
          options: ['6 secondes', '1 minute', '5 minutes', 'Je lis tous attentivement'],
          correct_answer: 0,
          explanation: 'Réaliste : vous recevez 50-200 CV, il faut être efficace. Scan rapide = 6 sec, lecture complète = 60 sec si prometteur.',
        },
      ],
    },
  },
  {
    id: 'mod-fond-04',
    filiere_id: 'fondamentaux',
    slug: 'entretien-structure',
    title: 'Conduire un entretien structuré',
    description: 'Au-delà du feeling : une grille objective, des questions qui prédisent.',
    level: 'professionnel',
    duration_minutes: 150,
    order: 4,
    lecons: [
      {
        id: 'lecon-4-1',
        order: 1,
        title: 'Pourquoi l\'entretien structuré prédit mieux',
        content: `<h2>L'entretien structuré vs le "feeling"</h2>

<h3>Le problème avec le feeling</h3>
<p>Vous interviewez 5 candidats. À la fin, vous dites "je sens une bonne énergie avec le candidat 3". Mais :</p>
<ul>
<li><strong>Biais de similarité :</strong> Vous aimez les gens qui vous ressemblent (même âge, même école, même hobby)</li>
<li><strong>Effet de halo :</strong> Un candidat charismatique paraît compétent. Un candidat stressé paraît moins bon</li>
<li><strong>Récence :</strong> Le dernier entretien influence votre mémoire des précédents</li>
<li><strong>Prédiction ? 0.</strong> Votre "feeling" prédit mieux qu'une pièce de monnaie dans 50% des cas</li>
</ul>

<h3>L'entretien structuré : qu'est-ce que c'est ?</h3>
<p>Même grille pour tous les candidats :</p>
<ul>
<li>Mêmes questions (posées dans le même ordre)</li>
<li>Même format d'évaluation (notation 1-5 sur des critères explicites)</li>
<li>Même durée (~45 min)</li>
<li>Même context (appel, visio, ou bureau — identique pour tous)</li>
</ul>

<h3>L'evidence scientifique</h3>
<p><strong>Étude OPM (Office of Personnel Management) :</strong> L'entretien structuré a une <strong>corrélation 0.63 avec la performance au poste</strong>. L'entretien non-structuré : 0.20.</p>
<p>Traduction : vous êtes 3x meilleur à prédire qui réussira.</p>

<h3>Les 4 piliers de l'entretien structuré</h3>
<ol>
<li><strong>Grille de compétences claires :</strong> 5-7 compétences à évaluer (ex: leadership, adaptabilité, expertise technique)</li>
<li><strong>Questions comportementales :</strong> "Décris une situation où tu as dû..." (pas "comment vas-tu si...")</li>
<li><strong>Notation objective :</strong> Barème 1-5 par compétence (pas d'appréciation vague)</li>
<li><strong>Débrief structuré :</strong> Pas "j'ai aimé" mais "leadership : 4/5 parce que (preuves)"</li>
</ol>`,
      },
      {
        id: 'lecon-4-2',
        order: 2,
        title: 'Construire votre grille d\'entretien',
        content: `<h2>Créer une grille d'entretien efficace</h2>

<h3>Étape 1 : Lister les 5-7 compétences clés</h3>
<p>D'où elles viennent ?</p>
<ul>
<li>Les 2-3 compétences techniques du poste (ex: architecture logiciel)</li>
<li>Les 2-3 soft skills critiques pour votre culture (ex: collaboration)</li>
<li>Les 1-2 traits de mentalité (ex: adaptabilité)</li>
</ul>

<p><strong>Exemple pour CTO :</strong></p>
<ul>
<li>Architecture logiciel (technique)</li>
<li>Gestion d'équipe (technique + soft)</li>
<li>Communic ation produit (soft)</li>
<li>Vision stratégique (mentalité)</li>
<li>Apprentissage continu (mentalité)</li>
</ul>

<h3>Étape 2 : Écrire 2-3 questions par compétence</h3>
<p><strong>Format : la méthode STAR (Situation, Task, Action, Result)</strong></p>
<p>"Décris une situation où tu as dû [compétence]. Quelle était ta mission ? Qu'as-tu fait ? Quel a été le résultat ?"</p>

<p><strong>Exemple pour "Gestion d'équipe" :</strong></p>
<ul>
<li>"Parle-moi de ta plus grande victoire managériale. Équipe ? Situation ? Défi ? Action ? Résultat ?"</li>
<li>"Décris un moment où un membre d'équipe était en difficulté. Comment l'as-tu supporté ?"</li>
<li>"Raconte un conflit que tu as dû gérer. Protagonistes ? Enjeu ? Comment tu l'as résolu ?"</li>
</ul>

<h3>Étape 3 : Barème de notation</h3>
<p>Pour chaque compétence, définir ce que chaque note signifie :</p>

<table border="1" cellpadding="8">
<tr><th>Note</th><th>Signification</th><th>Exemple (Gestion d'équipe)</th></tr>
<tr><td>1</td><td>Absence de preuve</td><td>"Jamais managé" / "Pas capable de citer un exemple"</td></tr>
<tr><td>2</td><td>Preuve faible</td><td>"1 expérience, courte, pas claire sur l'impact"</td></tr>
<tr><td>3</td><td>Préparé pour le poste</td><td>"3+ ans manager, plusieurs exemples, impact visible"</td></tr>
<tr><td>4</td><td>Fort pour le poste</td><td>"5+ ans, équipe 10+, développé des talents, résultats mesurés"</td></tr>
<tr><td>5</td><td>Exception (rare)</td><td>"Leader reconnu, impact stratégique, rétention équipe 95%+"</td></tr>
</table>

<h3>Étape 4 : Le seuil de réussite</h3>
<p>Exemple de grille finalisée :</p>
<ul>
<li>Architecture : 4+ (critique)</li>
<li>Gestion d'équipe : 3+ (on peut former un peu)</li>
<li>Communication : 3+ (soft skill)</li>
<li>Vision : 3+ (elle s'apprend)</li>
<li>Apprentissage : 2+ (tout le monde peut)</li>
<li><strong>Moyenne minimum : 3.2/5</strong></li>
</ul>
<p>Un candidat avec 4, 2, 4, 3, 3 = 3.2 = validation. Un candidat avec 4, 1, 4, 3, 3 = 3.0 = refusé (gestion d'équipe manquante).</p>`,
      },
    ],
    quiz: {
      id: 'quiz-fond-04',
      title: 'Quiz : Entretien structuré',
      passing_score: 70,
      questions: [
        {
          id: 'q-1',
          text: 'Quelle est la corrélation entre entretien structuré et performance au poste selon l\'OPM ?',
          type: 'multichoice',
          options: ['0.20 (comme entretien classique)', '0.63 (3x meilleur)', '0.95 (quasi-parfait)', 'Zéro, c\'est du blabla'],
          correct_answer: 1,
          explanation: '0.63 de corrélation : vous êtes 3x meilleur à prédire qui réussira qu\'avec un entretien non-structuré.',
        },
      ],
    },
  },
  {
    id: 'mod-fond-05',
    filiere_id: 'fondamentaux',
    slug: 'decision-offre-integration',
    title: 'De la décision à l\'offre et l\'intégration',
    description: 'Clore le recrutement et commencer l\'histoire réussie.',
    level: 'professionnel',
    duration_minutes: 120,
    order: 5,
    lecons: [
      {
        id: 'lecon-5-1',
        order: 1,
        title: 'La décision et l\'offre',
        content: `<h2>Passer du "oui" à l'embauche réelle</h2>

<h3>La décision : calibrée, documentée</h3>
<p>Vous avez 3 finalistes. Comment choisir ?</p>
<ul>
<li><strong>Reprendre la grille :</strong> Not le feeling. Les notes de chaque entretien</li>
<li><strong>Ajouter les retours manager :</strong> Impression après entretien</li>
<li><strong>Checker les références :</strong> Appels rapides aux anciens managers</li>
<li><strong>Documenter :</strong> "Candidat A choisi parce que : architecture 4.5, gestion d'équipe 4, vision 4. Meilleur profil technique + humain pour l'équipe."</li>
</ul>

<h3>L'offre : claire, engageante</h3>
<p><strong>Contenu de l'offre formelle :</strong></p>
<ul>
<li>Poste : titre exact</li>
<li>Lieu : bureau / remote / hybride (avec détails)</li>
<li>Salaire brut annuel : chiffre exact (pas de plage vague)</li>
<li>Date de démarrage : clair</li>
<li>Statut : CDI, CDD durée, stage (rare), freelance</li>
<li>Variables (si applicable) : bonus, commission, ESOP</li>
<li>Bénéfices : mutuelle, tickets resto, formations, etc.</li>
<li>Délai de réponse : "réponse souhaitée avant jeudi 17h"</li>
<li>Conditions : visite médicale, check références, vérification antécédents (le cas échéant)</li>
</ul>

<h3>Les pièges lors de la négociation</h3>
<ul>
<li><strong>Plage salariale large :</strong> "70-90k" = le candidat demande 90k, vous perdez crédibilité</li>
<li><strong>Promesses vagues :</strong> "Potentiel d'augmentation" = non dit</li>
<li><strong>Délai long :</strong> "Vous aurez la réponse dans 2 semaines" = le candidat reçoit d'autres offres</li>
<li><strong>Conditions molles :</strong> Ne pas mentionner la durée d'essai, les attentes = surprise à J1</li>
</ul>

<h3>Gérer les contre-propositions</h3>
<p><strong>Scénario :</strong> Vous proposez 50k, le candidat demande 60k.</p>
<p><strong>Erreur :</strong> Dire "c'est non" sans explication</p>
<p><strong>Mieux :</strong> "Je comprends. Marché IT à Paris : 45-55k pour ce poste. Je peux aller à 52k + 2k bonus. Équitable ?"</p>
<p>Si toujours 60k : "C'est au-delà de notre budget. J'understand tu as d'autres options. Si tu veux, on peut l'revisiter dans 6 mois après proof of impact."</p>`,
      },
      {
        id: 'lecon-5-2',
        order: 2,
        title: 'L\'intégration : les 90 premiers jours',
        content: `<h2>Onboarding : d'embauché à contribuant</h2>

<h3>Pourquoi l'intégration détermine le succès</h3>
<p>Les 90 premiers jours = prédicteur de succès à long terme.</p>
<ul>
<li>Mauvaise intégration = décision de quitter prise avant 6 mois</li>
<li>Bonne intégration = sentiment d'appartenance, rétention augmente</li>
<li>Excellente intégration = candidate "ambassadeur" dès mois 2</li>
</ul>

<h3>L'architecture des 90 jours</h3>

<h4>Semaine 1 : Installation et accueil</h4>
<ul>
<li><strong>J-1 :</strong> Matériel prêt (laptop, accès bureaux, email actif)</li>
<li><strong>J1 matin :</strong> Accueil sympa, présentation équipe, first coffee avec le manager</li>
<li><strong>J1 après-midi :</strong> Visite bureau, les essentiels (frigo, toilettes, wifi, bla bla)</li>
<li><strong>Semaine 1 :</strong> 1:1 quotidien manager (15 min, check ça va ?)</li>
<li><strong>Fin sem 1 :</strong> Reunion groupe, présentations, contexte entreprise</li>
</ul>

<h4>Semaines 2-4 : Compréhension</h4>
<ul>
<li>Slides onboarding + contexte métier (2-3h)</li>
<li>Rencontres 1:1 avec chaque senior / pairs (30 min chacun)</li>
<li>Premières tâches : faciles, visibles, utiles (pas de tâches chieuses)</li>
<li>Lectures clés : code, doco, produit (4-5h)</li>
<li>First code review ou tâche soumise (validée)</li>
</ul>

<h4>Semaines 5-12 : Contribution croissante</h4>
<ul>
<li>Tâches de complexité croissante</li>
<li>Mentorat clair (quelqu'un disponible pour questions)</li>
<li>1:1 biweekly manager (check feedback, blocages)</li>
<li>Fin semaine 12 : débrief "comment ça va ?" — retour utile ou correction rapide</li>
</ul>

<h3>Checklist d'intégration (à adapter)</h3>
<ul>
<li>☐ Matériel IT livré, accès configurés</li>
<li>☐ Accord + avantages expliqués (pas de surprises)</li>
<li>☐ Manager disponible = "je suis accessible pour tes questions"</li>
<li>☐ Mentor ou "buddy" nommé (pas juste l'équipe)</li>
<li>☐ Plan d'apprentissage (lecture + projet + rencontres)</li>
<li>☐ Tâches J1-J10 : faciles, visibles (confiance boost)</li>
<li>☐ Feedback régulier : pas le silence jusqu'à la fin d'essai</li>
<li>☐ Implication dans réunions : visible, écouté</li>
</ul>

<h3>Pièges courants</h3>
<ul>
<li>❌ "Vas-y, explore" = candidat paumé en J3</li>
<li>❌ Grosse tâche le jour 1 = panique</li>
<li>❌ Silence du manager = inscécurité</li>
<li>❌ Pas d'intégration sociale = isolation</li>
<li>❌ "On verra en fin d'essai" = suspense stressant</li>
</ul>`,
      },
    ],
    quiz: {
      id: 'quiz-fond-05',
      title: 'Quiz : Décision et intégration',
      passing_score: 70,
      questions: [
        {
          id: 'q-1',
          text: 'Quelle est la période la plus critique pour l\'intégration ?',
          type: 'multichoice',
          options: ['Les 30 premiers jours', 'Les 90 premiers jours', 'La première semaine', 'Le premier mois'],
          correct_answer: 1,
          explanation: 'Les 90 premiers jours déterminent le succès long terme. Mauvaise intégration = décision de quitter prise avant 6 mois.',
        },
      ],
    },
  },

  // Executive Search modules
  {
    id: 'mod-exec-01',
    filiere_id: 'executive-search',
    slug: 'mandat-retained-search-cevel',
    title: 'Le mandat retained search et les spécificités du C-level',
    description: 'Comprendre le modèle retained, les enjeux du C-level, la confidentialité.',
    level: 'fondations',
    duration_minutes: 120,
    order: 1,
    lecons: [
      {
        id: 'lecon-exec-1-1',
        order: 1,
        title: 'Retained vs Contingency : deux mondes',
        content: `<h2>Les deux modèles d'Executive Search</h2>

<h3>Contingency (recherche classique)</h3>
<p><strong>Fonctionnement :</strong> Vous recrutez gratis. Vous ne payez que si embauche réussie (commission 15-25%).</p>
<ul>
<li>💰 Économique à court terme (sauf si placement)</li>
<li>🏃 Rapide (plusieurs cabinets concurrents)</li>
<li>❌ Manque de confiance client (on engage tout le monde)</li>
<li>❌ Confidentialité limitée (candidats parlent à 5 cabinets)</li>
<li>❌ Pas de vraie stratégie de recherche</li>
</ul>

<h3>Retained search (Executive Search premium)</h3>
<p><strong>Fonctionnement :</strong> Le client paie 33% du salaire annuel estimé. En 3 tranches.</p>
<ul>
<li>1️⃣ <strong>À la signature :</strong> 1/3 (engagement, démarrage recherche)</li>
<li>2️⃣ <strong>À la présentation shortlist :</strong> 1/3 (shortlist prête)</li>
<li>3️⃣ <strong>À la prise de poste :</strong> 1/3 (closing réussi)</li>
</ul>

<p><strong>Avantages pour le client :</strong></p>
<ul>
<li>✅ Exclusivité (on ne travaille qu'avec toi)</li>
<li>✅ Discrétion totale (pas de fuites, pas de concurrent qui te chasse)</li>
<li>✅ Engagement cabinet = tu vas trouver (responsabilité 100%)</li>
<li>✅ Stratégie = qu'est-ce qui marche vraiment ? (pas juste cvs)</li>
<li>✅ Négociation = cabinet aide au closing</li>
</ul>

<p><strong>Exemple chiffré :</strong> Recherche DG, salaire estimé 150k.
<ul>
<li>Commission retained = 150k × 33% = 49.5k (vs 30k contingency à réussite)</li>
<li>Mais : cabinet va chercher agressivement, propriétaire chéfrise le poste, vraie stratégie</li>
</ul>

<h3>Pourquoi retained pour le C-level ?</h3>
<p>Parce que les dirigeants sont :</p>
<ul>
<li><strong>Rares</strong> : Il n'y a pas 10 PDGs disponibles sur LinkedIn</li>
<li><strong>Passifs</strong> : Les bons ne postulent jamais seuls</li>
<li><strong>Confidentiels</strong> : PDG actuel sait pas que c'est cherché</li>
<li><strong>Complexes</strong> : Ce n'est pas juste "je veux un dev avec 5 ans", c'est "je cherche quelqu'un qui incarne notre vision"</li>
<li><strong>Décisionnels</strong> : Négociation / package fine-tuned / conditions spéciales</li>
</ul>`,
      },
      {
        id: 'lecon-exec-1-2',
        order: 2,
        title: 'Le briefe avec le client : au-delà du poste',
        content: `<h2>Débriefing client pour Executive Search</h2>

<h3>Ce qu'un briefe classique oublie</h3>
<p>Un briefe standard demande : titre, salaire, expérience. Insufficient pour le C-level.</p>

<h3>Les vraies questions</h3>

<h4>Sur le contexte stratégique</h4>
<ul>
<li>"Pourquoi cette recherche maintenant ? Croissance ? Remplacement ? Succession planifiée ?"</li>
<li>"Quelle est la priorité stratégique du PDG pour les 3 prochaines années ?"</li>
<li>"Qui a déjà échoué à ce poste ? Pourquoi ? Qu'avez-vous appris ?"</li>
<li>"Quel est l'état de l'équipe qu'on va créer ? Stable ? En tension ? À restructurer ?"</li>
</ul>

<h4>Sur le rôle réel</h4>
<ul>
<li>"C'est qui le vrai patron de ce poste ? PDG ? Board ? Actionnaires ?"</li>
<li>"Quel serait le succès au bout de 18 mois ? Business ?" (financier, organisationnel, culturel)</li>
<li>"Quels sont les 3 défis que va affronter cette personne dans les 6 premiers mois ?"</li>
<li>"Quelles décisions pourra-t-elle prendre seule ? Où doit-elle consulter ?"</li>
</ul>

<h4>Sur le profil</h4>
<ul>
<li>"C'est vraiment 'leadership' que tu cherches, ou tu cherches quelqu'un d'opérationnel ?"</li>
<li>"Industrie experience requise ou tu accueilles de l'extérieur ?"</li>
<li>"Quel est le type de personnalité qui match ta culture ?"</li>
<li>"Y a des individus que tu exclurais ? (Ex : quelqu'un de trop extérieur, de l'ancien concurrent, etc.)"</li>
</ul>

<h4>Sur la gouvernance</h4>
<ul>
<li>"Qui doit valider ? PDG ? Board ? Shareholdsers ?"</li>
<li>"Quel est le vrai process de décision ? Timeframe ?"</li>
<li>"Quel est le prestige/rivalité interne ? (Quelque-un appuie plus qu'on ne le dit)"</li>
</ul>

<h3>Outcome du briefe</h3>
<p>Vous partez avec un profil searchable. Pas une fiche de poste générique, mais :
<ul>
<li>CEO âge 55-62, 15+ ans manufacturing, chiffre d'affaires > 100M, a managé 500+ personnes</li>
<li>Culture : leadership bienveillant (pas militaire), vision long terme, engagement développement talent</li>
<li>Backgrounds à considérer : manufacturing, pharma, aéronautique (processus similaires)</li>
<li>Exclusions : quelqu'un de L'oréal (concurrent trop direct), quelqu'un trop financier (on a besoin de vision)</li>
<li>Succès = on double le EBITDA en 3 ans, on stabilise l'équipe</li>
</ul>`,
      },
    ],
    quiz: {
      id: 'quiz-exec-01',
      title: 'Quiz : Modèle retained',
      passing_score: 70,
      questions: [
        {
          id: 'q-1',
          text: 'Quel est le modèle économique du retained search ?',
          type: 'multichoice',
          options: ['Gratuit, commission à l\'embauche', '33% du salaire en 3 tranches', 'Fixe mensuel', 'Pourcentage du salaire une seule fois'],
          correct_answer: 1,
          explanation: 'Retained : 1/3 à la signature, 1/3 à la shortlist, 1/3 à la prise de poste. Exclusif et confidentiel.',
        },
      ],
    },
  },
  {
    id: 'mod-exec-02',
    filiere_id: 'executive-search',
    slug: 'cartographie-marche-approche',
    title: 'Cartographie du marché et approche de dirigeants',
    description: 'Où sont les PDGs ? Comment les approcher sans brûler des ponts.',
    level: 'professionnel',
    duration_minutes: 150,
    order: 2,
    lecons: [
      {
        id: 'lecon-exec-2-1',
        order: 1,
        title: 'Cartographier un marché de dirigeants',
        content: `<h2>Mapping : d'où viendront vos candidats ?</h2>

<h3>Catégories de sources</h3>

<h4>1. Les cadres en place (passifs)</h4>
<ul>
<li>PDGs d'autres groupes (même taille ou grande taille)</li>
<li>Directeurs généraux délégués</li>
<li>Numéro 2 en croissance rapide</li>
</ul>
<p><strong>Caractéristique :</strong> Excellents candidats, 0% chance ils postulent seuls. Ils changent si le projet les passionne.</p>

<h4>2. Les turnaround experts</h4>
<ul>
<li>Qui a sauvé une boîte en difficulté ?</li>
<li>Qui a optimisé, restructuré avec succès ?</li>
<li>Les consultants senior qui veulent du terrain</li>
</ul>

<h4>3. Les entrepreneurs / anciens miens</h4>
<ul>
<li>Fondateur qui a vendu sa boîte (cash + disponibilité)</li>
<li>Ancien PDG qui veut un nouvel enjeu</li>
<li>Consultant devenu entrepreneur</li>
</ul>

<h4>4. Les étoiles montantes (35-45 ans)</h4>
<ul>
<li>CFO en attente de PDG depuis 2-3 ans</li>
<li>COO dans une grosse entreprise</li>
<li>VP dans une startup qui scalen (next generation)</li>
</ul>

<h3>Où les trouver (concrètement)</h3>

<h4>LinkedIn + X-ray avancée</h4>
<pre>
site:linkedin.com/in + "PDG" OR "Directeur General" OR "CEO" + industrie + région
site:linkedin.com/in + "Directeur général délégué" + manufacturing
site:linkedin.com/in + "COO" OR "Directeur operationnel" + 45-55 ans
</pre>

<h4>Boards et associations</h4>
<ul>
<li>MEDEF, UGCGA (gestionnaires), DG Forum</li>
<li>Boards de PME, conseils d'administration</li>
<li>Associations sectorielles (syndicats industrie, etc.)</li>
</ul>

<h4>Base de données interne</h4>
<ul>
<li>Candidats refusés excellents (mais timing pas bon)</li>
<li>Contacts anciens clients (on les recontacte)</li>
<li>Réseau cabinet (consultants qui connaissent des gens)</li>
</ul>

<h4>Recommandations de tiers</h4>
<ul>
<li>Appeler les 5 derniers PDGs qu'on a placés : "Hey, vous connaissez quelqu'un ?"</li>
<li>Contacteurs recherche exécutive concurrents (échange de contacts, normal du métier)</li>
<li>Consultants qui travaillent avec des PDGs</li>
</ul>

<h3>Exemple de cartographie réelle</h3>
<p><strong>Cherche :</strong> DG aéronautique, 50-60 ans, 150k-200k, France</p>
<p><strong>Mapping :</strong></p>
<ul>
<li>20 PDGs en place : Airbus suppliers (Lisi, Mecachrome, Esco), Safran sous-traitants, PME aéro régionales</li>
<li>10 "ex-PDGs" : Safran anciens, Thalès retraités, consultants aéronautique</li>
<li>8 turnarounds : CFOs en attente de PDG, COOs en gros groupes</li>
<li>6 entrepreneurs : sold their startup, looking for next</li>
<li><strong>Total sourcing : 44 prospects viables</strong></li>
</ul>`,
      },
      {
        id: 'lecon-exec-2-2',
        order: 2,
        title: 'L\'approche : l\'art de contactez un PDG',
        content: `<h2>Comment approcher un dirigeant sans brûler des ponts</h2>

<h3>Règle #1 : La discrétion absolue</h3>
<p>Vous approchez un PDG en fonction. Son patron, son board, son PDG ne doivent PAS le savoir.</p>
<p><strong>Risque :</strong> Si l'approche est découverte, c'est une trahison percue. Vous avez brûlé un pont.</p>

<h3>Règle #2 : L'intermédiaire</h3>
<p><strong>Jamais :</strong> "Hey, t'as reçu mon appel ? Je te propose un poste de PDG."</p>
<p><strong>Mieux :</strong> "Quelqu'un d'influent dans ton réseau m'a dit du bien de toi. On discute 15 min ?"</p>

<p><strong>Options d'introduction :</strong></p>
<ul>
<li>Ancien collègue / ami : idéal (le PDG prend l'appel)</li>
<li>Consultant / conseiller qu'il connaît : bon (moins personnel mais crédible)</li>
<li>Non-introduction :</strong> "Je te connais de réputation" (fonctionnne pas, arrêtez)</li>
</ul>

<h3>Règle #3 : L'approche au téléphone</h3>

<p><strong>Script type (adapté à vous) :</strong></p>
<p>"Bonjour X, je suis Y, consultant en recherche executive chez [Cabinet]. J'ai parlé à [Intermédiaire] qui m'a fortement recommandé de te contacter. On aide actuellement un groupe important (industrie) à chercher un DG. Le projet m'a dit : "Il faut quelqu'un qui a réussi en environnement complexe, avec vision". Ton profil m'est venu à l'esprit. Peux-tu accorder 20 min pour discuter (pas d'engagement, juste explorer) ?"</p>

<p><strong>Points clés :</strong></p>
<ul>
<li>✅ Qui m'a recommandé ? (Crédibilité)</li>
<li>✅ Pourquoi toi ? (Tu peux me dire les vraies raisons :  "leadership en croissance", "turnaround réussi", "vision produit")</li>
<li>✅ Quoi exactement ? (Titre, secteur, approche)</li>
<li>✅ Pas d'engagement ? (Relax, juste explorer)</li>
<li>✅ 20 min, pas 1h ? (Respecte son temps)</li>
</ul>

<h3>Règle #4 : Gérer l'objection "J'ai pas intérêt"</h3>

<p><strong>"J'suis pas intéressé, je suis bien où je suis"</strong> (réponse classique)</p>

<p><strong>Réponse magique :</strong></p>
<p>"Je comprends. La plupart des PDGs que je place disent pareil au départ. C'est juste : quand quelque chose d'exciting arrive, ca change la conversation. Là, c'est un groupe sérieux, projet ambitieux. Si ça t'intéresse pas, pas grave. Mais je me dirais "au moins j'ai écouté". Ca prend 20 min, non ?"</p>

<h3>Règle #5 : La confidentialité absolue</h3>
<ul>
<li>❌ Jamais demander au PDG si on peut appeler son boss pour vérifier ses skills</li>
<li>❌ Jamais mentionner le PDG à quelqu'un d'autre sans sa permission explicite</li>
<li>❌ Jamais se plaint "c'est compliqué de trouver quelqu'un"</li>
<li>✅ Si il dit non : "Bien sûr. Et merci d'avoir écouté. Qui pourrait être intéressé ?"</li>
<li>✅ Si il dit peut-être : "Bien. Je reste discret. Je vais pas appeler ton boss ou tes collègues."</li>
</ul>`,
      },
    ],
    quiz: {
      id: 'quiz-exec-02',
      title: 'Quiz : Cartographie et approche',
      passing_score: 70,
      questions: [
        {
          id: 'q-1',
          text: 'Quel est le canal d\'approche recommandé pour un PDG ?',
          type: 'multichoice',
          options: ['Email LinkedIn direct', 'Appel direct (cold call)', 'Référence d\'une personne de confiance', 'Poster sur les réseaux'],
          correct_answer: 2,
          explanation: 'Une approche par intermédiaire (ami, consultant connu) = crédibilité. Cold call = ignoré 99% du temps.',
        },
      ],
    },
  },
  {
    id: 'mod-exec-03',
    filiere_id: 'executive-search',
    slug: 'assessment-postes-direction',
    title: 'Assessment pour postes de direction',
    description: 'Évaluer vraiment un candidat C-level : leadership, vision, validité.',
    level: 'senior',
    duration_minutes: 120,
    order: 3,
    lecons: [
      {
        id: 'lecon-exec-3-1',
        order: 1,
        title: 'L\'assessment structuré pour dirigeants',
        content: `<h2>Assessment de candidats C-level</h2>

<h3>Différences avec un entretien classique</h3>

<table border="1" cellpadding="8">
<tr><th>Entretien classique</th><th>Assessment C-level</th></tr>
<tr><td>45 min, recruteur seul</td><td>90 min+ (+ interviews avec board, PDG)</td></tr>
<tr><td>Questions comportementales</td><td>Cas pratiques, scénarios de crise</td></tr>
<tr><td>CV-driven</td><td>Références indépendantes vérifiées</td></tr>
<tr><td>Notation subjective</td><td>Grille points précis, due diligence</td></tr>
</table>

<h3>Les 4 piliers d'un assessment C-level</h3>

<h4>1. Compétences techniques du rôle</h4>
<ul>
<li><strong>Pour DG :</strong> Finance, stratégie, gestion opérationnelle</li>
<li><strong>Pour CFO :</strong> Comptabilité, audit, transformations financières, M&A</li>
<li><strong>Pour CTO :</strong> Architecture, leadership technique, gestion roadmap produit</li>
<li>Évaluation : Cas pratique (15-20 min)</li>
</ul>

<h4>2. Leadership et gestion d'équipe</h4>
<ul>
<li>Qui a managé ? Combien de personnes ? Quel impact ?</li>
<li>Comment crée-t-on de la culture ?</li>
<li>Comment on restructure une équipe "toxique" ?</li>
<li>Évaluation : Entretien comportemental (20 min) + interview avec DG (qui va valider le "fit")</li>
</ul>

<h4>3. Vision stratégique et prise de décision</h3>
<ul>
<li>Avez-vous une vision ? Comment on la communique ?</li>
<li>Cas de crise : vous êtes nommé PDG. Usine qui ferme dans 3 mois. Qu'est-ce que tu fais ?</li>
<li>Vous prenez une décision difficile (licencier quelqu'un de senior). Comment vous l'annoncez ?</li>
<li>Évaluation : Cas/questions ouvertes (20 min)</li>
</ul>

<h4>4. Intégrité et gouvernance</h4>
<ul>
<li>Avez-vous enfreint un processus ou une légalité ? (Honnêteté attendue)</li>
<li>Comment vous gérez un conflit d'intérêts ?</li>
<li>Vérification références : appels indépendants auprès d'anciens boards, collègues</li>
<li>Évaluation : Références + questionnaire intégrité</li>
</ul>`,
      },
      {
        id: 'lecon-exec-3-2',
        order: 2,
        title: 'Cas pratiques et scénarios de crise',
        content: `<h2>Les cas pratiques révélateurs</h2>

<h3>Cas #1 : La usine qui ferme</h3>
<p><strong>Scénario :</strong> Vous venez d'être nommé PDG. Usine de 400 personnes, pertes depuis 2 ans. Board dit : "Il faut fermer dans 6 mois. Ça va coûter 30 millions en licenciements + décommissioning."</p>

<p><strong>Questions :</strong></p>
<ul>
<li>"Qu'est-ce que tu fais les 2 premières semaines ?"</li>
<li>"Comment tu communiques ça à qui ? Et quand ?"</li>
<li>"Quel est le risque social que tu anticipez ?"</li>
<li>"Comment tu protèges l'emploi ailleurs dans le groupe ?"</li>
</ul>

<p><strong>Ce que tu cherches :</strong></p>
<ul>
<li>✅ Diagnostic d'abord (pas fermeture précipitée)</li>
<li>✅ Communication transparente (pas de rumeur)</li>
<li>✅ Respect des gens (aide à la reconversion)</li>
<li>✅ Réalisme financier</li>
<li>❌ "Juste fermer" (inhumain)</li>
<li>❌ Aucune plan B (naïf)</li>
</ul>

<h3>Cas #2 : La due diligence catastrophe</h3>
<p><strong>Scénario :</strong> Tu mènes une acquisition importante (50M). À J-2 avant signature, tu découvres : comptabilité fausse, dettes cachées, procès en cours non déclaré.</p>

<p><strong>Questions :</strong></p>
<ul>
<li>"Qu'est-ce que tu fais ?"</li>
<li>"Comment tu le communiques au board ?"</li>
<li>"Tu signes ou tu te rétracts ? Pourquoi ?"</li>
<li>"Comment tu gères le vendeur qui a menti ?"</li>
</ul>

<p><strong>Ce que tu cherches :</strong></p>
<ul>
<li>✅ Pause pour vérifier (pas décision hâtive)</li>
<li>✅ Conseil juridique (pas d'improvisation)</li>
<li>✅ Integrity first (pas "on ferme les yeux si le prix baisse")</li>
<li>❌ "Je signe quand même" (illégal + stupide)</li>
<li>❌ "Je fais un procès" (coûteux, distrait du business)</li>
</ul>`,
      },
    ],
    quiz: {
      id: 'quiz-exec-03',
      title: 'Quiz : Assessment C-level',
      passing_score: 70,
      questions: [
        {
          id: 'q-1',
          text: 'Combien de temps prévois-tu pour un assessment de PDG ?',
          type: 'multichoice',
          options: ['45 minutes comme un entretien classique', '90+ minutes avec interviews multiples', '30 minutes téléphone', 'Pas de format standard'],
          correct_answer: 1,
          explanation: 'Assessment C-level = 90+ min avec plusieurs interlocuteurs (PDG, board), cas pratiques, références.',
        },
      ],
    },
  },
  {
    id: 'mod-exec-04',
    filiere_id: 'executive-search',
    slug: 'references-due-diligence',
    title: 'Gestion des références et due diligence',
    description: 'Vérifier l\'intégrité, appeler les anciens patrons, éviter les surprises.',
    level: 'senior',
    duration_minutes: 100,
    order: 4,
    lecons: [
      {
        id: 'lecon-exec-4-1',
        order: 1,
        title: 'La vérification de références',
        content: `<h2>Appeler les références : l'art de bien faire</h2>

<h3>Pourquoi c'est critique au C-level</h3>
<p>Avec un DG, une erreur coûte cher. Une seule mauvaise embauche = 1-2 ans de dégât, coûts massifs en restructuration.</p>
<ul>
<li>60% des CV contiennent au moins une exagération (études OPM)</li>
<li>Plus le poste est senior, plus on oublie les détails "gênants"</li>
<li>Les références appellent l'intégrité réelle</li>
</ul>

<h3>Quelles références demander</h3>

<p><strong>Ne pas :</strong></p>
<ul>
<li>❌ Amis qui vont dire du bien (biaisé)</li>
<li>❌ PDG actuel (confidentialité, il va bloquer)</li>
<li>❌ Collègues du même niveau (ont intérêt à le garder)</li>
</ul>

<p><strong>Oui :</strong></p>
<ul>
<li>✅ Ancien PDG / board chair (qui l'a managé)</li>
<li>✅ Ancien directeur qui rapportait à lui (qui l'a vu en manager)</li>
<li>✅ CFO / responsable adjacent (qui a collaborated)</li>
<li>✅ Board member si applicable</li>
<li>✅ Client importan s'il a piloté partenariat</li>
</ul>

<p><strong>Idéalement :</strong> 3-4 références. 1 ancien patron, 1 collaborateur, 1 qui rapportait à lui, 1 concurrent/client.</p>

<h3>Les questions qui révèlent</h3>

<p><strong>Basiques (vérification):</strong></p>
<ul>
<li>"Vous avez travailler ensemble pendant combien de temps ?"</li>
<li>"Quel était exactement son rôle ? Reporting ? Responsabilités ?"</li>
<li>"Quand l'avez-vous vu pour la dernière fois ?"</li>
</ul>

<p><strong>Leadership :</strong></p>
<ul>
<li>"Quel était son plus grand force comme leader ?"</li>
<li>"Où a-t-il dû progresser ?"</li>
<li>"Comment il gérait les conflits ?"</li>
<li>"Comment il prenait les décisions difficiles ?"</li>
</ul>

<p><strong>Résultats business :</strong></p>
<ul>
<li>"Quel était l'impact direct de X sur la business ?"</li>
<li>"Y a-t-il un achievement dont vous êtes fier ?"</li>
<li>"Pourquoi il a quitté ? (Si applicable)"</li>
</ul>

<p><strong>Intégrité :</strong></p>
<ul>
<li>"Avez-vous jamais vu des comportements éthiquement questionnables ?"</li>
<li>"Comment il gérait les pressions politiques / conflits d'intérêts ?"</li>
<li>"Le recommanderiez-vous pour un poste au board ?"</li>
</ul>

<h3>Red flags</h3>
<ul>
<li>🚩 "Oui, excellent candidate... mais on voudrait le garder" (méfiance)</li>
<li>🚩 "Brillant mais difficile à manager" (orgueil problématique)</li>
<li>🚩 "Pas franchement compatible avec notre culture" (fit négatif)</li>
<li>🚩 "Il a quitté de manière... abrupte" (conflit caché)</li>
<li>🚩 Pause / hésitations (doutes qu'on ne dit pas)</li>
</ul>`,
      },
      {
        id: 'lecon-exec-4-2',
        order: 2,
        title: 'Due diligence : vérifications additionnelles',
        content: `<h2>Au-delà des références : les vérifications</h2>

<h3>Vérifications simples (toujours faire)</h3>

<ul>
<li><strong>LinkedIn audit :</strong> CV matches LinkedIn ? Pas de discrepancies ?</li>
<li><strong>Timeline :</strong> Pas de "trous" non-expliqués ?</li>
<li><strong>Confirmations entreprises :</strong> "Ouais, X a travaillé chez nous 2010-2013"</li>
<li><strong>Diplômes :</strong> "X a bien obtenu son HEC ?" (vérification rapide auprès école)</li>
<li><strong>Certifications :</strong> Si mentionnées (CPA, EMBA) = vérifier</li>
</ul>

<h3>Vérifications approfondies (selon contexte)</h3>

<ul>
<li><strong>Antécédents publics :</strong> Google le nom + résultats. Y a-t-il des scandales ? Des affaires ?</li>
<li><strong>Registres judiciaires :</strong> Condamnations ? (notamment financières / blanchiment / fraude)</li>
<li><strong>Media/presse :</strong> Articles sur lui ? Sont-ils positifs ou controversés ?</li>
<li><strong>Insolvencies :</strong> Faillites personnelles ? Pourquoi ?</li>
<li><strong>Déclaration d'intérêts :</strong> Si board/public roles, des déclarations ?</li>
</ul>

<h3>Cas où tu approfondis vraiment</h3>

<p><strong>Si :</strong></p>
<ul>
<li>Poste au board / gouvernance (must-do)</li>
<li>Accès à données sensibles / finances</li>
<li>Référence "mitigée" lors des appels</li>
<li>Timeline suspect (pourquoi a-t-il quitté après 2 mois ?)</li>
<li>Salaire antérieur anormalement élevé (pour vérifier légalité salaire proposé)</li>
</ul>

<h3>Qui paie la due diligence ?</h3>

<p><strong>Coûts typiques :</strong></p>
<ul>
<li>Basic (LinkedIn + Google) : gratuit</li>
<li>Appels références : gratuit (cabinet)</li>
<li>Vérification diplômes : 50-100€</li>
<li>Rapport de due diligence complet (externe) : 500-2000€</li>
</ul>

<p><strong>Qui paie ?</strong> Usuellement le client (celui qui engage). Cabinet assume les coûts de base (appels). Client assume les vérifications tierces si demandées.</p>`,
      },
    ],
    quiz: {
      id: 'quiz-exec-04',
      title: 'Quiz : Références et due diligence',
      passing_score: 70,
      questions: [
        {
          id: 'q-1',
          text: 'Quel type de référence NE pas demander pour un PDG ?',
          type: 'multichoice',
          options: ['Ancien PDG qui l\'a managé', 'Ami personnel', 'Ancien directeur qui rapportait à lui', 'Board member'],
          correct_answer: 1,
          explanation: 'Les amis personnels sont biaisés. Préférer : ancien patron, collaborateurs, gens qui l\'ont vu en manager.',
        },
      ],
    },
  },
  {
    id: 'mod-exec-05',
    filiere_id: 'executive-search',
    slug: 'closing-negotiation-integration',
    title: 'Closing, négociation et intégration du dirigeant',
    description: 'Finaliser le deal : négociation, package, intégration du DG.',
    level: 'senior',
    duration_minutes: 120,
    order: 5,
    lecons: [
      {
        id: 'lecon-exec-5-1',
        order: 1,
        title: 'La négociation C-level',
        content: `<h2>Négocier un poste de direction</h2>

<h3>Les différentes composantes du package</h3>

<table border="1" cellpadding="8">
<tr><th>Composant</th><th>Typique</th><th>Notes</th></tr>
<tr><td>Salaire fixe</td><td>100-300k (DG)</td><td>Principal, déclaré, cotisations</td></tr>
<tr><td>Bonus</td><td>20-50% du fixe</td><td>Annuel, sur objectifs (CA, EBITDA, etc.)</td></tr>
<tr><td>Equity</td><td>0.5-2%</td><td>Vesting souvent sur 3-4 ans</td></tr>
<tr><td>Voiture</td><td>Fonction ou allowance</td><td>Moins courant = allowance cash mieux</td></tr>
<tr><td>ESOP / Bénéfices actions</td><td>Selon entreprise</td><td>Enjeu motivationnel</td></tr>
<tr><td>Mutuelle</td><td>Premium</td><td>Famille + forfait dentaire/optique</td></tr>
<tr><td>Télétravail</td><td>Selon rôle</td><td>DG rarement 100% remote</td></tr>
<tr><td>Durée essai</td><td>3-6 mois</td><td>Rarement plus pour DG</td></tr>
<tr><td>Préavis</td><td>3 mois</td><td>Symétrique : il peut partir aussi</td></tr>
</table>

<h3>La stratégie de négociation</h3>

<p><strong>Jamais :</strong> "Voilà le package, tu le prends ou pas"</p>
<p><strong>Mieux :</strong> Discuter, comprendre les priorités du candidat.</p>

<p><strong>Ses priorités peuvent être :</strong></p>
<ul>
<li>Sécurité financière (après une vente, capital suffisant)</li>
<li>Equity (vision long terme, vouloir "part du gateau")</li>
<li>Autonomie (pas de micromanagement du board)</li>
<li>Équipe déjà en place vs libre de construire</li>
<li>Budget de transformation (pour mettre en place sa vision)</li>
</ul>

<p><strong>Script de négociation :</strong></p>
<p>"Avant de fixer le package, parlons de ce qui compte pour toi. Financier ? Equity ? Autonomie décisionnelle ? Équipe ? Budget d'invest ?"</p>
<p>Puis : "Voilà ce qu'on peut offrir..." (Et c'est un dialogue, pas un édit.)</p>

<h3>Les pièges</h3>

<ul>
<li>🚩 Promettre equity qu'on ne peut pas livrer</li>
<li>🚩 Package irréaliste (vs comparable marché)</li>
<li>🚩 Salarié mais "rarement travail les mardis" (clarifier les attentes)</li>
<li>🚩 "Autonomie totale" mais board = micro-management (faux sens)</li>
</ul>`,
      },
      {
        id: 'lecon-exec-5-2',
        order: 2,
        title: 'Intégration d\'un DG : les 100 jours',
        content: `<h2>L'intégration d'un PDG = différente d'un salarié</h2>

<h3>Pourquoi c'est critique</h3>
<p>Un PDG qui échoue dans les 100 premiers jours = 6+ mois de perte de momentum. La confiance du board se bâtit en 90 jours, se perd aussi vite.</p>

<h3>Les phases</h3>

<h4>Semaines 1-2 : Écoute</h4>
<ul>
<li>Rencontres 1:1 avec chaque directeur (20 min chacun)</li>
<li>Visite des opérations (usines, bureaux, clients)</li>
<li>Lecture intensive : financiers, contrats clés, stratégie</li>
<li>Pas de "grand discours" encore = on écoute</li>
</ul>

<h4>Semaines 3-4 : Audit rapide</h4>
<ul>
<li>Quels sont les 3 vrais problèmes ?</li>
<li>Qui sont les people key ? Qui garder, qui remplacer ?</li>
<li>Quelle est la vraie culture vs la culture rêvée ?</li>
<li>Réunion board : "Voici mes observations, mes 30/60/90 jours plan"</li>
</ul>

<h4>Semaines 5-12 : Action rapide (mais réfléchie)</h4>
<ul>
<li>Premiers changements (si nécessaires et justifiés)</li>
<li>Définir et communiquer la direction (où on va en 3 ans)</li>
<li>Alignment board sur priorités</li>
<li>Quick wins : projets qui montrent une action (ex: process optimisé, client regagné)</li>
</ul>

<h3>What NOT to do</h3>

<ul>
<li>❌ Licenciements massifs "pour montrer l'autorité"</li>
<li>❌ Ignorer le board / stakeholders</li>
<li>❌ Essayer de tout changer en même temps</li>
<li>❌ Pas communiquer les plans (équipe paumée)</li>
<li>❌ Garder des people incompétentes "pour la continuité"</li>
</ul>

<h3>Les 30/60/90 jours plan</h4>

<p><strong>Jours 1-30 : Écoute & diagnostic</strong></p>
<ul>
<li>Réunions, audit, compréhension</li>
<li>Objectif : "J'ai la vraie photo"</li>
</ul>

<p><strong>Jours 31-60 : Planification & premiers changements</strong></p>
<ul>
<li>Direction définie</li>
<li>Première vague de changements si needed</li>
<li>Objectif : "Je sais où on va"</li>
</ul>

<p><strong>Jours 61-90 : Traction</strong></p>
<ul>
<li>Équipe alignée sur priorités</li>
<li>Quick wins réalisés</li>
<li>Objectif : "On est en route"</li>
</ul>`,
      },
    ],
    quiz: {
      id: 'quiz-exec-05',
      title: 'Quiz : Closing et intégration',
      passing_score: 70,
      questions: [
        {
          id: 'q-1',
          text: 'Quelle est la priorité absolue lors de l\'intégration d\'un PDG ?',
          type: 'multichoice',
          options: ['Licencier rapidement pour montrer l\'autorité', 'Écouter et diagnostiquer avant d\'agir', 'Faire des changements massifs immédiatement', 'Ignorer le board et agir seul'],
          correct_answer: 1,
          explanation: 'Les 30 premiers jours = écoute et diagnostic. Les 100 jours premiers = décisions rapides mais réfléchies, pas du chaos.',
        },
      ],
    },
  },
];
