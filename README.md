# Exercice Strapi : Intégration de Swagger et Gestion d'Articles

## Objectif du Jour
- Installer et configurer Swagger UI pour la documentation API sur Strapi.
- Configurer Strapi pour permettre l'ajout d'articles en public sans authentification.
- Créer et tester des requêtes pour ajouter et supprimer des articles via l'API.

## Prérequis
- Avoir un environnement Strapi configuré et prêt à l'emploi.
- Être familiarisé avec l'utilisation de l'interface d'administration Strapi.
- Avoir des connaissances de base sur l'utilisation de Postman pour tester les requêtes API.

## Partie 1 : Installation de Swagger UI sur Strapi
### Objectif
Installer et configurer la documentation API Swagger UI pour votre projet Strapi.

### Étapes
1. **Installation de Swagger**
   - Suivez [ce guide](https://docs.strapi.io/dev-docs/plugins/documentation) pour installer et configurer Swagger dans votre projet Strapi.
   - Assurez-vous que la documentation est accessible à [http://localhost:1337/documentation](http://localhost:1337/documentation).

## Partie 2 : Configuration de l'API pour Ajout Public
### Objectif
Configurer les paramètres de sécurité pour permettre l'ajout d'articles en public sans authentification.

### Étapes
1. **Permissions Publiques**
   - Rendez-vous dans l'interface d'administration Strapi.
   - Allez dans "Settings" > "Users & Permissions Plugin" > "Roles".
   - Sélectionnez le rôle "Public".
   - Accordez les permissions d’ajout ("create") et de suppression ("delete") pour "Article" et sauvegardez.


## Partie 3 : Requêtes pour Ajouter/Supprimer des Articles avec Postman
### Objectif
Créer et tester des requêtes pour ajouter et supprimer des articles via l'API Strapi en utilisant l'outil Postman.

### Prérequis
- Télécharger et installer [Postman](https://www.postman.com/downloads/).

### Explication
Postman est un outil qui permet de tester des requêtes HTTP. Vous pouvez créer des requêtes pour tester les opérations CRUD (Create, Read, Update, Delete) sur votre API sans avoir à créer un frontend.

### Étapes Détaillées
1. **Configuration de Postman**
   - Ouvrez Postman et créez un nouveau "Workspace" en cliquant sur le bouton "New" puis "HTTP".
   - Donnez un nom à votre requête et cliquez sur "Save to My Workspace".

2. **Ajouter un Article**
   - Sélectionnez "POST" comme méthode de requête dans le menu déroulant.
   - Entrez l'URL de votre API pour ajouter un article : `http://localhost:1337/api/articles`.
   - Allez dans l'onglet "Body".
   - Sélectionnez "raw" et "JSON (application/json)".
   - Ajoutez les données de l'article à envoyer en JSON, par exemple :
     ```json
    {
      "data" :
      {
         "title": "My New Article",
         "content": "This is the content of the new article."
      }
    }
     ```
   - Cliquez sur "Send".
   - Vous devriez voir un retour de l'API dans la partie inférieure de la fenêtre avec les détails de l'article créé.

3. **Supprimer un Article**
   - Trouvez l'ID de l'article que vous voulez supprimer (vous pouvez le trouver dans la réponse de l'étape précédente ou via votre interface d'administration Strapi).
   - Créez une nouvelle requête ou modifiez celle existante en sélectionnant "DELETE" comme méthode.
   - Mettez à jour l'URL pour cibler l'article spécifique avec son ID : `http://localhost:1337/articles/{id}` (remplacez `{id}` par l'ID réel de l'article).
   - Cliquez sur "Send".
   - Si la suppression est réussie, l'API devrait renvoyer un statut de 200 et les détails de l'article supprimé. Vous pouvez vérifier cela en allant voir dans votre interface d'administration Strapi et vérifiant que l'article n'est plus là.

### Notes Supplémentaires
- Prenez le temps d'explorer les réponses de l'API dans Postman pour mieux comprendre le format des données.
- Considérez l'utilisation de variables d'environnement dans Postman pour éviter de répéter l'URL de base de l'API.

### Ressources
- [Documentation Officielle de Postman](https://learning.postman.com/docs/getting-started/introduction/)
- [Tutoriel Vidéo sur l'Utilisation de Base de Postman](https://www.youtube.com/watch?v=VywxIQ2ZXw4)

---

