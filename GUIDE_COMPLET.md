# EXSORA — Guide Complet de Déploiement

## 🎯 Ce que tu as reçu

Une **plateforme LMS complète** avec :
- ✅ 10 modules réels (5 Fondamentaux + 5 Executive Search)
- ✅ Pages de cours avec contenu HTML riche
- ✅ Quiz avec correction expliquée
- ✅ Authentification Supabase
- ✅ Dashboard apprenant
- ✅ Admin pour ajouter des modules
- ✅ Design EXSORA (bleu, vert foncé, lime)

## 📋 Étapes de déploiement (Facile)

### Étape 1️⃣ : Installer Node.js sur ta machine

🔴 **TOI** :
1. Va sur **nodejs.org**
2. Télécharge la version LTS (la verte)
3. Double-clique, installe (suivant, suivant, terminer)
4. Ouvre une ligne de commande (cmd Windows / Terminal Mac)
5. Tape : `node --version` → tu dois voir une version (ex: v20.10.0)

**Pourquoi :** Node est le moteur qui fait tourner le code JavaScript/React.

---

### Étape 2️⃣ : Créer un compte GitHub

🔴 **TOI** :
1. Va sur **github.com**
2. Clique "Sign up"
3. Email, mot de passe, nom d'utilisateur (ex: tonnom123)
4. Vérifie ton email
5. Tu es connecté

**Pourquoi :** GitHub est où tu envoies ton code. Netlify va le lire de là.

---

### Étape 3️⃣ : Créer un repository GitHub

🔴 **TOI** :
1. Une fois connecté sur GitHub, clique le "+" en haut à droite
2. "New repository"
3. Nom : `exsora`
4. Description : "Plateforme LMS de formation en recrutement"
5. ☑️ Public (gratuit)
6. Clique "Create repository"

**Tu vas voir une page avec des codes. Ne fais rien pour l'instant.**

---

### Étape 4️⃣ : Uploader le code sur GitHub

🔴 **TOI** :
1. Télécharge le fichier `exsora-code.zip` (c'est ton projet)
2. Fais clic droit → "Extraire tout" (Windows) ou double-clique (Mac)
3. Un dossier `exsora` apparaît
4. Reviens sur la page GitHub que tu as créée
5. Clique le bouton "uploading an existing file"
6. **Glisse tout le contenu du dossier exsora** dans la zone (pas le dossier lui-même, ce qu'il y a dedans)
7. En bas : "Commit changes"

**Attends 30 sec que ça finisse.**

---

### Étape 5️⃣ : Créer un compte Supabase (gratuit)

Supabase = ta base de données + authentification gratuite

🔴 **TOI** :
1. Va sur **supabase.com**
2. Clique "Start your project"
3. Connecte-toi avec GitHub (clique le bouton GitHub)
4. Une fois connecté, clique "New Project"
5. Donne un nom : `exsora`
6. Région : Europe (Paris si dispo) ou us-east-1
7. Mot de passe base de données : **copie un truc aléatoire** (ex: `A3k9pL2mQ8x!`)
8. Clique "Create new project"

**Ça va prendre ~1 min. Une fois fait :**

🔴 **TOI** :
1. Clique sur "Settings" en bas à gauche
2. Puis "API"
3. Tu vas voir `Project URL` et `anon public key`
4. **Copie ces deux valeurs quelque part** (bloc-notes, Word, etc.)

**Exemple :**
```
URL: https://abcdefg.supabase.co
Key: eyJhbGc...xyz
```

---

### Étape 6️⃣ : Configurer les variables d'environnement

🔴 **TOI** :
1. Dans le dossier `exsora` que tu as téléchargé, tu dois créer un fichier `.env.local`
2. Ouvre un bloc-notes
3. Copie ça:

```
NEXT_PUBLIC_SUPABASE_URL=https://COPIE_TON_URL_SUPABASE
NEXT_PUBLIC_SUPABASE_ANON_KEY=COPIE_TA_CLE_SUPABASE
```

4. Remplace :
   - `https://COPIE_TON_URL_SUPABASE` par l'URL que tu as copié (ex: `https://abcdefg.supabase.co`)
   - `COPIE_TA_CLE_SUPABASE` par la clé (ex: `eyJhbGc...xyz`)

5. **Sauvegarde le fichier sous le nom `.env.local`** (attention au point au début)
6. Place-le **à la racine du dossier `exsora`**

---

### Étape 7️⃣ : Tester en local (optionnel mais recommandé)

🔴 **TOI** :
1. Ouvre une ligne de commande (cmd Windows / Terminal Mac)
2. Navigue jusqu'au dossier exsora: `cd chemin/vers/exsora`
3. Installe les dépendances: `npm install` (ça va prendre 2-3 min)
4. Lance le serveur de développement: `npm run dev`
5. Une ligne va s'afficher: `Local: http://localhost:3000`
6. Ouvre ton navigateur et va sur **http://localhost:3000**

**Tu devrais voir EXSORA qui s'affiche !**

🟢 **C'est bon ?** Appuie sur **Ctrl+C** pour arrêter le serveur.

---

### Étape 8️⃣ : Uploader le `.env.local` sur GitHub

🔴 **TOI** :
1. Reviens sur ton repository GitHub (exsora)
2. Clique "Add file" → "Create new file"
3. Nom du fichier: `.env.local`
4. Copie le contenu que tu as créé (ton URL et clé Supabase)
5. Clique "Commit new file"

**Cet fichier sera PRIVÉ sur GitHub — personne ne verra tes clés.**

---

### Étape 9️⃣ : Créer un compte Netlify

Netlify = où ton site va vivre en ligne

🔴 **TOI** :
1. Va sur **netlify.com**
2. Clique "Sign up"
3. Choisis "GitHub" (relie ton compte GitHub)
4. Autorise Netlify à accéder à tes repositories

---

### Étape 🔟 : Déployer ton site sur Netlify

🔴 **TOI** :
1. Une fois connecté sur Netlify, tu vas sur le dashboard
2. Clique "Add new site" → "Import an existing project"
3. Sélectionne "GitHub"
4. Cherche `exsora`
5. Clique sur le repository

**Une nouvelle page s'ouvre :**

🔴 **TOI** :
1. **Build command:** `npm run build`
2. **Publish directory:** `.next`
3. Clique "Deploy site"

**Netlify va maintenant :**
- ✅ Cloner ton code de GitHub
- ✅ Installer les dépendances
- ✅ Compiler ton app
- ✅ La mettre en ligne

**Attends 3-5 min...**

Une fois terminer, tu vas voir un lien: `https://exsora-xyz.netlify.app` (le `xyz` sera différent).

🎉 **TON SITE EST EN LIGNE!**

---

## 🔗 Comptes de test

**Apprenant (test):**
- Email: `test@example.com`
- Mot de passe: `password123`

**Admin (test):**
- À créer: Va sur `/auth/signup`, utilise ce email: `admin@exsora.io`
- Une fois inscrit, tu dois modifier manuellement son rôle dans Supabase
  - Va dans Supabase dashboard
  - Table `auth.users`
  - Cherche le user
  - Clique "raw_user_meta_data" et ajoute `"role": "admin"`

---

## 🛠️ Les choses à savoir

### Ce qui marche déjà:
✅ Pages publiques (accueil, catalogue)
✅ Authentification (signup/login)
✅ Dashboard apprenant
✅ Lecteur de modules avec leçons en HTML riche
✅ Quiz avec correction
✅ Admin basique

### Ce qui demande du setup Supabase:
- Créer les tables (users, modules, progress, etc.)
- L'app va créer automatiquement les bonnes tables la première fois si tu lances un script `./scripts/setup-db.sh`
- **OU** tu peux ajouter les données manuellement dans Supabase dashboard

### Ce qui demande plus de travail plus tard:
- Paiement Stripe (il est intégré mais en mode test)
- Stockage de fichiers (vidéos, PDFs)
- Emails (notifications, réinitialisation mot de passe)
- Analytics

---

## 🚨 En cas de problème

### "Build error on Netlify"
→ Vérifier que `.env.local` est bien sur GitHub avec les bonnes clés Supabase

### "Blank page"
→ Ouvrir la console (F12 → Console) et regarder les erreurs

### "Impossible de se connecter"
→ Vérifier que Supabase est bien configuré et les clés sont bonnes

### Questions générales?
→ Vérifier GUIDE_DEPLOYMENT.md

---

## 📊 Les 10 modules disponibles

**Fondamentaux (5 modules):**
1. Rôle et responsabilités du recruteur
2. Analyser un besoin et écrire une fiche de poste
3. Stratégie de recherche et présélection
4. Conduire un entretien structuré
5. De la décision à l'offre et l'intégration

**Executive Search (5 modules):**
1. Le mandat retained search et les spécificités du C-level
2. Cartographie du marché et approche de dirigeants
3. Assessment pour postes de direction
4. Gestion des références et due diligence
5. Closing, négociation et intégration du dirigeant

---

## 🎓 Prochaines étapes (après test)

1. **Ajouter tes propres modules**: Va dans l'admin et ajoute du contenu
2. **Intégrer des vidéos**: Les leçons supportent HTML, tu peux ajouter `<video>` tags
3. **Setup Stripe réel**: Pour les abonnements payants
4. **Analytics**: Tracker qui fait quoi sur la plateforme
5. **Email**: Notifications, réinitialisation mot de passe

---

**Bon testage!** 🚀
