#!/bin/bash

# =========================================================
# Guide d'aide interactif pour Jujutsu (jj)
# =========================================================

# Fonction pour afficher le menu principal
show_menu() {
    echo "
=========================================================
  MENU D'AIDE JUJUTSU (jj)
=========================================================
1) jj log (Historique des révisions)
2) jj commit (Créer/Mettre à jour une description) [alias: jj ci]
3) jj describe (Mettre à jour la description/metadata) [alias: jj desc]
4) jj squash (Déplacer des changements dans le parent)
5) jj rebase (Déplacer des révisions vers de nouveaux parents)
0) Quitter
"
    read -p "Choisissez une option : " choice
}

# 1. Gérer jj log
handle_log() {
    echo "
--- jj log ---
Afficher l'historique des révisions. Par défaut, montre les commits locaux [2].
"
    read -p "Voulez-vous afficher le patch (diff) pour chaque commit? (y/N): " show_patch
    read -p "Voulez-vous spécifier un revset? (ex: @- ou 'all()') (Laissez vide pour le défaut): " revset

    if [[ "$show_patch" == "y" || "$show_patch" == "Y" ]]; then
        PATCH_FLAG="-p" # Drapeau pour afficher le patch [3]
    fi

    if [[ -n "$revset" ]]; then
        REVSET_FLAG="-r '$revset'" # Drapeau pour spécifier les révisions [3]
    fi

    echo "Exécution de : jj log ${REVSET_FLAG} ${PATCH_FLAG}"
    jj log ${REVSET_FLAG} ${PATCH_FLAG}
}

# 2. Gérer jj commit
handle_commit() {
    echo "
--- jj commit ---
Mettre à jour la description et créer un nouveau changement au-dessus du commit courant [4].
"
    read -p "Voulez-vous entrer un message directement (-m) ou ouvrir l'éditeur interactif (-i)? (m/i): " commit_mode

    if [[ "$commit_mode" == "m" || "$commit_mode" == "M" ]]; then
        read -p "Entrez votre message de commit : " message
        echo "Exécution de : jj ci -m \"$message\""
        jj commit -m "$message" # Utilise -m, --message pour la description [5]
    elif [[ "$commit_mode" == "i" || "$commit_mode" == "I" ]]; then
        echo "Exécution de : jj ci -i (ouverture de l'éditeur diff interactif)"
        jj commit -i # Utilise -i, --interactive pour choisir les changements [5]
    else
        echo "Exécution de : jj ci (ouvrira l'éditeur par défaut pour la description)"
        jj commit
    fi
}

# 3. Gérer jj describe
handle_describe() {
    echo "
--- jj describe ---
Mettre à jour la description ou d'autres métadonnées d'une révision existante [6].
"
    read -p "Révision à décrire (Défaut: @, commit courant): " revision
    revision=${revision:-@}

    read -p "Voulez-vous entrer un message directement (-m) ou forcer l'ouverture de l'éditeur (--editor)? (m/e): " desc_mode

    if [[ "$desc_mode" == "m" || "$desc_mode" == "M" ]]; then
        read -p "Entrez la nouvelle description : " message
        echo "Exécution de : jj desc -m \"$message\" $revision"
        jj describe -m "$message" "$revision" # Utilise -m pour éviter l'éditeur [6]
    elif [[ "$desc_mode" == "e" || "$desc_mode" == "E" ]]; then
        echo "Exécution de : jj desc --editor $revision (forcer l'ouverture de l'éditeur)"
        jj describe --editor "$revision" # Force l'ouverture de l'éditeur [7]
    else
        echo "Exécution de : jj desc $revision (ouvrira l'éditeur par défaut)"
        jj describe "$revision"
    fi
}

# 4. Gérer jj squash
handle_squash() {
    echo "
--- jj squash ---
Déplacer les changements d'une révision source dans une révision de destination (par défaut, la source est @ et la destination est le parent @-) [8, 9].
"
    read -p "Voulez-vous exécuter en mode interactif pour sélectionner des parties du changement? (y/N): " interactive_mode

    if [[ "$interactive_mode" == "y" || "$interactive_mode" == "Y" ]]; then
        echo "Exécution de : jj squash -i (ouverture de l'éditeur diff interactif) [10]"
        jj squash -i
    else
        read -p "Révision(s) source à écraser (-f/--from) (Défaut: @, commit courant) : " from_rev
        from_rev=${from_rev:-@}

        read -p "Révision de destination dans laquelle écraser (-t/--into) (Défaut: parent @-) : " into_rev

        if [[ -n "$into_rev" ]]; then
            echo "Exécution de : jj squash --from $from_rev --into $into_rev"
            jj squash -f "$from_rev" -t "$into_rev" # Utilise -f/--from et -t/--into [9]
        else
            echo "Exécution de : jj squash $from_rev (écraser dans le parent)"
            jj squash "$from_rev"
        fi
    fi
}

# 5. Gérer jj rebase
handle_rebase() {
    echo "
--- jj rebase ---
Déplacer des révisions vers un ou plusieurs nouveaux parents.
Les descendants sont automatiquement rebasés [11, 12].
"
    read -p "Révision(s) source à rebaser (-s/--source) (e.g. @, feature): " source_rev
    if [[ -z "$source_rev" ]]; then
        echo "La révision source est obligatoire pour un rebase explicite. Annulation."
        return
    fi

    read -p "Révision(s) de destination sur laquelle rebaser (-o/--onto) (e.g. main): " onto_rev
    if [[ -z "$onto_rev" ]]; then
        echo "La révision de destination est obligatoire. Annulation."
        return
    fi

    echo "Exécution de : jj rebase --source $source_rev --onto $onto_rev"
    jj rebase -s "$source_rev" -o "$onto_rev" # Utilise -s/--source et -o/--onto [11]
}


# Boucle principale du menu
while true; do
    show_menu
    case $choice in
        1) handle_log ;;
        2) handle_commit ;;
        3) handle_describe ;;
        4) handle_squash ;;
        5) handle_rebase ;;
        0) echo "Au revoir!"; break ;;
        *) echo "Option invalide. Veuillez réessayer." ;;
    esac
    echo "
Appuyez sur Entrée pour revenir au menu..."
    read
done