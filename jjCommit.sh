#!/bin/bash

# Demander le texte du commit à l'utilisateur
echo "Entrez le texte du commit :"
read -r commit_message

# 1. Ajouter la description au commit actuel (working copy)
# Le symbole @ représente le commit de la copie de travail[cite: 13].
jj describe -m "$commit_message"

# 2. Déplacer le bookmark 'main' vers le commit actuel
# Dans Jujutsu, les bookmarks doivent être déplacés manuellement avec 'move'.
jj bookmark move main --to @

# 3. Créer un nouveau commit vide au-dessus pour continuer à travailler
# 'jj new' crée un nouveau commit enfant du commit actuel.
jj new

echo "Terminé : Message ajouté, bookmark 'main' déplacé et nouveau commit créé."