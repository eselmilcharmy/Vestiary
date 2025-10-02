# Vestiary

# Welcome to our project

## Project info

**GIT-URL**: https://github.com/eselmilcharmy/Vestiary.git

## How can I edit this code?

**With a Feature-Branch**

First`

```
# Step 1: Pull Main Branch from Github
git pull origin main

# Step 2: Create a new Branch
git checkout -b feature/whatever_feature_u_want_to_edit_or_create

# Step 3: Commit changes
git add .
git commit -m "little description for commit"

# Step 4: Push changes
git push -u origin feature/whatever_feature_u_want_to_edit_or_create
```

At github u can create a pull request for your committed changes in your branch.

**Requirements**

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

First in Github Pages

```sh
# Step 1: this command creates a dist directory
nvm run build

# Step 2: if u dont already have it to deploy your dist
npm install gh-pages --save-dev

# Step 3: deploy it babygirl
npm run deploy
```

## What's next?

We'll see :D

## First Start

# nvm installieren (falls nicht vorhanden)

```sh

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# dann Terminal neu starten oder:
source ~/.nvm/nvm.sh

# Node LTS Version installieren (z. B. 20.x)
nvm install --lts
nvm use --lts

# Dependencies installieren (im Projektordner):
npm install

# Projekt starten (lokal entwickeln):
npm run dev
`
# oder manchmal:
npm start
```
