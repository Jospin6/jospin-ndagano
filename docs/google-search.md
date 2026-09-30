# Faire apparaître le portfolio dans Google

L'adresse de production actuellement configurée est **https://jospin-ndagano.vercel.app/**. Le code prépare le site à l'exploration et à l'indexation ; Google décide ensuite des pages indexées et de leur position dans les résultats. Aucun réglage ne garantit la première place sur une recherche du nom.

## Ce que l'application fournit

- Un titre d'accueil « Jospin Ndagano | AI Engineer », une description et un nom visible cohérents.
- Des titres, descriptions et URL canoniques propres aux quatre pages de projets.
- Le contenu principal dans le HTML généré, consultable sans exécuter JavaScript.
- Un `robots.txt` qui autorise l'exploration et indique le sitemap.
- Un `sitemap.xml` contenant l'accueil et les quatre projets, actualisé à partir de `lib/content.ts`.
- Des données structurées `WebSite`, `Person` et `ProfilePage` pour relier le site, le nom et les profils publics ; des données de projet et de navigation sur chaque page de projet.
- Une balise de validation Google optionnelle, configurée par variable d'environnement.

Le balisage `WebSite` indique à Google le nom souhaité du site, mais son affichage reste automatique. [Documentation Google sur les noms de sites](https://developers.google.com/search/docs/appearance/site-names).

## 1. Déployer la version actuelle

Publier ces changements sur le projet Vercel associé à cette adresse. La version en ligne vérifiée pendant cette intervention affichait encore l'ancien portfolio et un sitemap limité à l'accueil.

Les variables sont décrites dans `.env.example`. Pour un essai local, copier ce fichier vers `.env.local`. Sur Vercel, les renseigner dans les variables d'environnement du projet pour l'environnement **Production** :

```dotenv
NEXT_PUBLIC_SITE_URL=https://jospin-ndagano.vercel.app
GOOGLE_SITE_VERIFICATION=
```

`NEXT_PUBLIC_SITE_URL` doit rester l'adresse publique stable, avec `https://`, sans chemin, paramètres ou fragment. La valeur actuelle est également la valeur par défaut si la variable est absente. Ne pas y mettre une adresse temporaire de prévisualisation.

La variable de validation reste vide jusqu'à l'étape suivante. Les deux valeurs sont utilisées à la compilation : il faut un nouveau déploiement après chaque modification. [Variables d’environnement Vercel](https://vercel.com/docs/environment-variables).

Le build est `npm run build` et l'export statique est produit dans `out/`. Après publication, vérifier que l'accueil, une page comme `/work/doc-chat`, `/robots.txt` et `/sitemap.xml` sont accessibles sans connexion. Les routes de projet sans extension doivent servir leurs fichiers HTML, et une URL inexistante doit renvoyer une vraie erreur 404.

## 2. Valider le site dans Google Search Console

1. Ouvrir [Google Search Console](https://search.google.com/search-console/) avec ton compte Google.
2. Ajouter une propriété de type **Préfixe de l'URL**, avec exactement `https://jospin-ndagano.vercel.app/`.
3. Choisir la méthode **Balise HTML**. Google fournit une balise de ce type :

   ```html
   <meta name="google-site-verification" content="TON_CODE_FOURNI_PAR_GOOGLE" />
   ```

4. Copier uniquement la valeur entre guillemets de `content` dans la variable Vercel `GOOGLE_SITE_VERIFICATION`. Ne pas copier toute la balise ni utiliser le texte d'exemple.
5. Redéployer le site. Dans le code source de l'accueil en ligne, chercher `google-site-verification` pour confirmer sa présence dans `<head>`.
6. Revenir dans Search Console et cliquer sur **Valider**. Garder la variable après validation : Google peut vérifier à nouveau sa présence.

Cette méthode s'applique à une propriété avec préfixe d'URL. Il n'est pas nécessaire de posséder le domaine parent `vercel.app`. [Instructions officielles de validation](https://support.google.com/webmasters/answer/9008080?hl=fr).

## 3. Signaler les pages à Google

Dans **Sitemaps**, soumettre :

```text
https://jospin-ndagano.vercel.app/sitemap.xml
```

Dans **Inspection de l'URL**, saisir l'adresse de l'accueil, utiliser **Tester l'URL en direct**, puis **Demander une indexation** si la page est accessible et indexable. Les quatre projets figurent dans le sitemap ; ils peuvent également être inspectés individuellement.

Google annonce que l'exploration peut prendre de quelques jours à quelques semaines. Une demande ne garantit pas l'indexation, et répéter la même demande n'accélère pas le traitement. [Demander une nouvelle exploration](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl).

## 4. Relier tes profils au portfolio

Ajouter cette même URL dans le champ site web de GitHub, sur LinkedIn et dans tes profils d'auteur existants. Utiliser le même nom public, **Jospin Ndagano**, lorsque cela correspond à ton identité. Vérifier aussi que les adresses de `sameAs` dans `lib/site.ts` désignent bien tes propres profils.

Des liens accessibles depuis tes profils et tes articles peuvent aider Google à découvrir le portfolio et permettent aux visiteurs de retrouver ton travail. Inutile de multiplier artificiellement les mots-clés ou d'acheter des liens. [Guide SEO de Google](https://developers.google.com/search/docs/fundamentals/seo-starter-guide).

## 5. Suivre le résultat

Dans Search Console, consulter le rapport d'indexation des pages et l'inspection de l'accueil. S'il y a un blocage, lire la raison précise : accès refusé, directive `noindex`, erreur serveur, redirection ou autre URL canonique retenue. Le rapport **Performances** permettra ensuite de voir les impressions et clics sur des recherches comme « Jospin Ndagano ».

Une recherche `site:jospin-ndagano.vercel.app` peut servir de contrôle rapide, mais elle ne remplace pas l'inspection d'URL pour connaître l'état d'une page. [Limites de l'opérateur site:](https://developers.google.com/search/docs/monitor-debug/search-operators/all-search-site).

Un domaine personnel est facultatif. Si tu en adoptes un, le connecter d'abord à Vercel, rediriger l'ancienne adresse vers le nouveau domaine, mettre à jour `NEXT_PUBLIC_SITE_URL`, redéployer, puis valider la nouvelle propriété Search Console et y soumettre le nouveau sitemap. Conserver une seule adresse de référence.
