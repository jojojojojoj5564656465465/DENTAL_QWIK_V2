#!/bin/bash

# Vérifie si un message de commit a été fourni
if [ -z "$1" ]; then
    echo "Usage: $0 \"message de commit\""
    exit 1
fi

# Exécute biome format
echo "Formatting code with Biome..."
bunx prettier . --write
biome format --write ./src

# Ajoute les changements
echo "Adding changes to Git..."
git add .

# Commit avec le message fourni
echo "Committing changes..."
git commit -m "$1"

# Pousse les changements
echo "Pushing to remote repository..."
git push

echo "Done!"