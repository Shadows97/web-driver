# WebAdmin


Ce projet a été généré avec Angular CLI. Il s'agit d'une brève description de ce que fait ton projet et comment le lancer.

## Prérequis

Assure-toi d'avoir les éléments suivants installés sur ton système :

- [Node.js](https://nodejs.org/) (v14.x ou supérieure recommandée)
- [Angular CLI](https://angular.io/cli) (installé de manière globale)

## Installation

Clone ce dépôt de code source dans ton répertoire local :
   ```sh
   git clone https://github.com/Shadows97/web-driver.git

   cd web-driver 

   npm install

   ```

## Configuration de la Clé API Google

1. Allez sur le [Google Cloud Console](https://console.cloud.google.com/).
2. Créez un nouveau projet ou sélectionnez un projet existant.
3. Accédez à l'onglet "Identifiants".
4. Créez une nouvelle clé API.
5. Copiez la clé API générée.

## Ajouter la Clé API à index.html

1. Ouvrez le fichier `src/index.html`.
2. Cherchez la balise `<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places"></script>`.
3. Remplacez `YOUR_API_KEY` par la clé API Google que vous avez copiée précédemment.

## Lancer le Serveur de Développement

Exécute la commande suivante pour lancer le serveur de développement :

```sh
ng serve

```

