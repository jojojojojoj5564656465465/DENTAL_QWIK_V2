#!/bin/bash

# Script: Advanced File & Folder Copier & Concatenator
# Version: 6.0 (fzf Integration)
# Date: 2025-10-25
# Description:
# Script interactif utilisant 'fzf' pour la sélection et 'gum' pour l'esthétique.
# Il permet de sélectionner, filtrer et copier le contenu de fichiers/dossiers
# dans le presse-papiers.
#
# Améliorations v6.0:
#   - Remplacement de 'gum filter' par 'fzf' pour la sélection de fichiers/dossiers.
#   - Menu principal piloté par 'fzf' pour une navigation plus rapide.
#   - Sélection multiple de fichiers dans les dossiers avec 'fzf -m'.

# --- Configuration ---
BLUE="#87CEEB"
GREEN="#98FB98"
PURPLE="#DDA0DD"
YELLOW="#FFD700"
RED="#FF6B6B"
CYAN="#00FFFF"
VERSION="6.0"
DATE="25/10/2025"
DEBUG_MODE=false
LOG_FILE=""

# --- Vérifications initiales ---

# Vérifier gum
if ! command -v gum >/dev/null 2>&1; then
    echo "❌ Erreur: Gum n'est pas installé." >&2
    echo "Installez-le avec: brew install gum" >&2
    exit 1
fi

# Vérifier fd
if ! command -v fd >/dev/null 2>&1; then
    echo "❌ Erreur: fd n'est pas installé." >&2
    echo "Installez-le avec: brew install fd (macOS) ou apt install fd-find (Ubuntu)" >&2
    exit 1
fi

# Vérifier fzf
if ! command -v fzf >/dev/null 2>&1; then
    echo "❌ Erreur: fzf n'est pas installé." >&2
    echo "Installez-le avec: brew install fzf" >&2
    exit 1
fi

# Détection du gestionnaire de presse-papiers
CLIPBOARD_CMD=""
if command -v wl-copy >/dev/null 2>&1; then
    CLIPBOARD_CMD="wl-copy"
elif command -v xclip >/dev/null 2>&1; then
    CLIPBOARD_CMD="xclip -selection clipboard"
elif command -v pbcopy >/dev/null 2>&1; then
    CLIPBOARD_CMD="pbcopy"
elif command -v clip.exe >/dev/null 2>&1; then
    CLIPBOARD_CMD="clip.exe"
else
    echo "❌ Aucun utilitaire de presse-papiers trouvé." >&2
    exit 1
fi

# --- Fonctions de log (inchangées) ---
log_to_file() {
    if [ -n "$LOG_FILE" ]; then
        echo "[$(date '+%Y-%m-%d %H:%M:%S')] $*" >> "$LOG_FILE"
    fi
}
log_info() { gum log --level info -- "$@" >&2; log_to_file "INFO: $*"; }
log_warn() { gum log --level warn -- "$@" >&2; log_to_file "WARN: $*"; }
log_error() { gum log --level error -- "$@" >&2; log_to_file "ERROR: $*"; }
log_success() { gum log --level info -- "✅ $@" >&2; log_to_file "SUCCESS: $*"; }
log_debug() { 
    if [ "$DEBUG_MODE" = true ]; then
        gum style --foreground "$CYAN" "🔍 DEBUG: $*" >&2
        log_to_file "DEBUG: $*"
    fi
}
log_separator() {
    if [ "$DEBUG_MODE" = true ]; then
        gum style --foreground "$PURPLE" "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" >&2
    fi
}

# --- Splash Screen (inchangé) ---
show_splash() {
    clear
    gum style \
        --foreground "$PURPLE" \
        --border double \
        --align center \
        --width 70 \
        --margin "2 2" \
        --padding "2 4" \
        "🗂️  Advanced Content Copier ✨" \
        "" \
        "$(gum style --foreground "$BLUE" "Version $VERSION - $DATE")" \
        "" \
        "$(gum style --foreground "$GREEN" --faint "Sélection interactive avec fd + fzf")" \
        "$(gum style --foreground "$GREEN" --faint "Interface stylisée avec gum")" \
        "$(gum style --foreground "$GREEN" --faint "Copie automatique dans le presse-papiers")" \
        "" \
        "$(gum style --foreground "$YELLOW" --bold "Appuyez sur Entrée pour continuer...")"
    
    read -r
    clear
}

# --- Fonctions Utilitaires (inchangées) ---

add_unique_item() {
    local item_to_add="$1"
    local -n items_array_ref="$2"
    log_debug "add_unique_item: Traitement de '$item_to_add'"
    local abs_path_to_add
    abs_path_to_add=$(realpath "$item_to_add" 2>/dev/null || echo "$item_to_add")
    log_debug "add_unique_item: Chemin absolu = '$abs_path_to_add'"
    if [ ! -e "$abs_path_to_add" ]; then
        log_error "Élément inexistant: $abs_path_to_add"
        return 1
    fi
    for existing_item in "${items_array_ref[@]}"; do
        local existing_abs_path
        existing_abs_path=$(realpath "$existing_item" 2>/dev/null || echo "$existing_item")
        if [ "$abs_path_to_add" = "$existing_abs_path" ]; then
            log_warn "Élément déjà sélectionné: $(basename "$item_to_add")"
            return 1
        fi
    done
    items_array_ref+=("$abs_path_to_add")
    log_success "Ajouté: $(basename "$abs_path_to_add") [$abs_path_to_add]"
    return 0
}

process_one_file() {
    local file_path="$1"
    local temp_file="$2"
    local format_type="$3"
    if [ ! -f "$file_path" ] || [ ! -r "$file_path" ]; then
        log_warn "Fichier ignoré (non trouvé ou illisible): $file_path"
        return
    fi
    local filename
    filename=$(basename "$file_path")
    case $format_type in
        1) # Markdown
            local extension="${filename##*.}"
            if [[ "$extension" == "$filename" ]] || [[ -z "$extension" ]]; then
                extension="text"
            fi
            echo "\`\`\`${extension}" >> "$temp_file"
            echo "// Fichier: $file_path" >> "$temp_file"
            cat "$file_path" >> "$temp_file"
            [[ $(tail -c1 "$file_path" 2>/dev/null) ]] && echo >> "$temp_file"
            echo "\`\`\`" >> "$temp_file"
            echo "" >> "$temp_file"
            ;;
        0 | *) # Simple
            echo "=== FICHIER: $file_path ===" >> "$temp_file"
            echo "" >> "$temp_file"
            cat "$file_path" >> "$temp_file"
            echo "" >> "$temp_file"
            echo "----------------------------------------" >> "$temp_file"
            echo "" >> "$temp_file"
            ;;
    esac
}

# --- Fonctions de sélection avec fzf (MODIFIÉES) ---

select_file_with_fd() {
    local base_dir="$1"
    log_separator
    log_debug "select_file_with_fd: Répertoire de base = '$base_dir'"
    
    gum style --foreground "$PURPLE" --bold "📄 Sélection d'un fichier" >&2
    gum style --faint "Recherche dans: $base_dir" >&2
    
    local fd_cmd="fd --type f --hidden --exclude .git --exclude node_modules --exclude dist --exclude build --exclude .next --exclude .astro --exclude __pycache__ --exclude tmp --exclude '*.lock' --exclude '*.log' --exclude '.DS_Store' . '$base_dir'"
    log_debug "Commande fd: $fd_cmd"
    
    local selected_file
    selected_file=$(eval "$fd_cmd" | fzf --height 40% --reverse --border \
        --prompt="Fichier > " \
        --header="Naviguez et appuyez sur Entrée pour sélectionner un fichier")
    
    log_debug "Fichier sélectionné: '$selected_file'"
    
    if [ -n "$selected_file" ]; then
        echo "$selected_file"
        return 0
    else
        log_warn "Aucun fichier sélectionné"
        return 1
    fi
}

select_directory_with_fd() {
    local base_dir="$1"
    log_separator
    log_debug "select_directory_with_fd: Répertoire de base = '$base_dir'"
    
    gum style --foreground "$PURPLE" --bold "📁 Sélection d'un dossier" >&2
    gum style --faint "Recherche dans: $base_dir" >&2
    
    local fd_cmd="fd --type d --hidden --exclude .git --exclude node_modules --exclude dist --exclude build --exclude .next --exclude .astro --exclude __pycache__ --exclude tmp . '$base_dir'"
    log_debug "Commande fd: $fd_cmd"
    
    # Ajouter le répertoire de base à la liste pour pouvoir le sélectionner
    local selected_dir
    selected_dir=$( (echo "$base_dir"; eval "$fd_cmd") | fzf --height 40% --reverse --border \
        --prompt="Dossier > " \
        --header="Naviguez et appuyez sur Entrée pour sélectionner un dossier")
        
    log_debug "Dossier sélectionné: '$selected_dir'"
    
    if [ -n "$selected_dir" ]; then
        echo "$selected_dir"
        return 0
    else
        log_warn "Aucun dossier sélectionné"
        return 1
    fi
}

# --- Fonctions de menu (inchangées ou légèrement adaptées) ---

choose_base_directory() {
    log_debug "choose_base_directory: Début de la sélection"
    local BASE_DIR
    BASE_DIR=$(gum choose \
        --header "Choisir le répertoire de départ:" \
        --cursor.foreground="$PURPLE" \
        "Répertoire courant (.)" "Répertoire parent (..)" "Répertoire personnel (~)" "Racine (/)" "Chemin personnalisé")
    log_debug "Choix de base: '$BASE_DIR'"
    case "$BASE_DIR" in
        "Répertoire courant"*) echo "$(pwd)" ;;
        "Répertoire parent"*) echo "$(dirname "$(pwd)")" ;;
        "Répertoire personnel"*) echo "$HOME" ;;
        "Racine"*) echo "/" ;;
        "Chemin personnalisé")
            local custom_path
            custom_path=$(gum input --placeholder "Entrez le chemin (ex: /home/user/projects)")
            if [ -d "$custom_path" ]; then
                realpath "$custom_path" 2>/dev/null || echo "$custom_path"
            else
                log_error "Chemin invalide: $custom_path"
                echo "$(pwd)"
            fi
            ;;
        *) echo "$(pwd)" ;;
    esac
}

select_items() {
    local items=()
    log_separator
    log_debug "select_items: Début de la sélection"

    # Traitement des arguments (inchangé)
    if [ $# -gt 0 ]; then
        log_info "Éléments fournis en arguments:"
        local initial_items_from_args=()
        for arg in "$@"; do
            if [ -e "$arg" ]; then
                add_unique_item "$arg" initial_items_from_args
            else
                log_error "Argument non trouvé: $arg"
            fi
        done
        if [ ${#initial_items_from_args[@]} -gt 0 ]; then
            if gum confirm "Utiliser ces ${#initial_items_from_args[@]} élément(s) valide(s) ?"; then
                items=("${initial_items_from_args[@]}")
                printf '%s\n' "${items[@]}"
                return
            else
                log_warn "Les éléments des arguments sont ignorés."
            fi
        fi
    fi

    # Boucle de sélection interactive avec fzf (MODIFIÉ)
    log_info "Lancement de la sélection interactive..."
    while true; do
        local num_items=${#items[@]}
        local header_text="Éléments sélectionnés: $num_items"
        
        local ACTION
        ACTION=$(echo -e "➕ Ajouter un fichier\n📁 Ajouter un dossier\n❌ Supprimer un élément\n👀 Voir la sélection actuelle\n✅ Terminer la sélection\n🚪 Annuler et quitter" | \
            fzf --height 40% --reverse --border \
                --prompt="Action > " \
                --header="$header_text")
        
        log_debug "Action choisie: '$ACTION'"
        
        # Si l'utilisateur appuie sur Echap dans fzf, ACTION est vide
        if [ -z "$ACTION" ]; then
            if gum confirm "Quitter sans sauvegarder ?"; then
                log_info "Annulation par l'utilisateur"
                exit 0
            else
                continue
            fi
        fi
        
        case "$ACTION" in
            "➕ Ajouter un fichier")
                local base_dir=$(choose_base_directory)
                if [ -d "$base_dir" ]; then
                    if selected_path=$(select_file_with_fd "$base_dir"); then
                        add_unique_item "$selected_path" items
                    fi
                else
                    log_error "Le répertoire de base n'existe pas: $base_dir"
                fi
                ;;
            
            "📁 Ajouter un dossier")
                local base_dir=$(choose_base_directory)
                if [ -d "$base_dir" ]; then
                    if selected_path=$(select_directory_with_fd "$base_dir"); then
                        add_unique_item "$selected_path" items
                    fi
                else
                    log_error "Le répertoire de base n'existe pas: $base_dir"
                fi
                ;;
            
            "❌ Supprimer un élément")
                if [ ${#items[@]} -eq 0 ]; then
                    log_warn "Aucun élément à supprimer."
                else
                    local items_display=()
                    for item in "${items[@]}"; do
                        local type_icon=$([ -d "$item" ] && echo "📁" || echo "📄")
                        items_display+=("$type_icon $(basename "$item") [$item]")
                    done
                    
                    local to_remove
                    # Utilisation de fzf pour la suppression aussi
                    to_remove=$(printf '%s\n' "${items_display[@]}" | fzf --height 30% --reverse --border --prompt="Supprimer > ")
                    
                    if [ -n "$to_remove" ]; then
                        local path_to_remove=$(echo "$to_remove" | sed 's/.*\[\(.*\)\]/\1/')
                        local new_items=()
                        for item in "${items[@]}"; do
                            [ "$item" != "$path_to_remove" ] && new_items+=("$item")
                        done
                        items=("${new_items[@]}")
                        log_success "Élément supprimé: $(basename "$path_to_remove")"
                    fi
                fi
                ;;
            
            "👀 Voir la sélection actuelle")
                if [ ${#items[@]} -eq 0 ]; then
                    log_info "Aucun élément sélectionné pour le moment."
                else
                    gum style --foreground "$PURPLE" --bold "📋 Sélection actuelle ($num_items éléments):"
                    for item in "${items[@]}"; do
                        local type_icon=$([ -d "$item" ] && echo "📁" || echo "📄")
                        gum style --foreground "$BLUE" "  $type_icon $item"
                    done
                fi
                gum style --faint "Appuyez sur Entrée pour continuer..."
                read -r
                ;;
            
            "✅ Terminer la sélection")
                if [ ${#items[@]} -eq 0 ]; then
                    gum confirm "Terminer sans aucune sélection ?" && break
                else
                    break
                fi
                ;;
            
            "🚪 Annuler et quitter")
                if gum confirm "Voulez-vous vraiment quitter ?"; then
                    log_info "Annulation par l'utilisateur"
                    exit 0
                fi
                ;;
        esac
    done
    
    if [ ${#items[@]} -gt 0 ]; then
        log_debug "Sélection terminée: ${#items[@]} éléments"
        printf '%s\n' "${items[@]}"
    fi
}

format_content() {
    log_debug "format_content: Choix du format"
    local FORMAT
    FORMAT=$(gum choose --header "Choisissez le format de sortie:" --cursor.foreground="$PURPLE" \
        "Simple (avec séparateurs)" "Markdown (avec blocs de code)" "Retour")
    log_debug "Format choisi: '$FORMAT'"
    case "$FORMAT" in
        "Markdown"*) return 1 ;;
        "Retour") return 2 ;;
        *) return 0 ;;
    esac
}

# --- Fonction Principale (MODIFIÉE pour fzf --multi) ---
main() {
    if [ "$1" = "--debug" ] || [ "$1" = "-d" ]; then
        DEBUG_MODE=true
        LOG_FILE="/tmp/file_copier_$(date +%Y%m%d_%H%M%S).log"
        shift
        log_info "Mode debug activé. Log: $LOG_FILE"
        log_separator
    fi
    log_debug "Début du script - Version $VERSION"
    
    show_splash
    
    local selected_items=()
    mapfile -t selected_items < <(select_items "$@")
    
    if [ ${#selected_items[@]} -eq 0 ]; then
        log_info "Aucun élément sélectionné. Arrêt du script."
        exit 0
    fi
    
    log_separator
    log_info "Collecte des fichiers à traiter..."
    local files_to_process=()
    
    for item_path in "${selected_items[@]}"; do
        log_debug "Traitement de l'élément: $item_path"
        if [ -d "$item_path" ]; then
            log_info "Analyse du dossier: $item_path..."
            local fd_find_cmd="fd --type f --hidden --exclude .git --exclude node_modules --exclude dist --exclude build --exclude .next --exclude .astro --exclude __pycache__ --exclude '*.lock' --exclude '*.log' --exclude '.DS_Store' . '$item_path'"
            
            local files_in_dir=()
            mapfile -t files_in_dir < <(eval "$fd_find_cmd" | sort)
            
            if [ ${#files_in_dir[@]} -gt 0 ]; then
                gum style --bold --foreground "$PURPLE" "Filtrez les fichiers à inclure pour '$(basename "$item_path")'"
                gum style --faint "(<Tab> pour sélectionner/désélectionner, <Entrée> pour valider)"
                
                local confirmed_files=()
                # Utilisation de fzf --multi pour la sélection multiple (MODIFIÉ)
                mapfile -t confirmed_files < <(printf '%s\n' "${files_in_dir[@]}" | \
                    fzf --multi --height=40% --reverse --border \
                        --prompt="Fichiers > " \
                        --header="Utilisez TAB pour sélectionner plusieurs fichiers")
                
                if [ ${#confirmed_files[@]} -gt 0 ]; then
                    files_to_process+=("${confirmed_files[@]}")
                    log_info "${#confirmed_files[@]} fichier(s) confirmé(s) pour le dossier '$item_path'."
                else
                    log_warn "Aucun fichier sélectionné pour le dossier '$item_path'."
                fi
            else
                log_warn "Aucun fichier pertinent trouvé dans '$item_path'."
            fi
        elif [ -f "$item_path" ]; then
            files_to_process+=("$item_path")
            log_debug "Fichier ajouté: $item_path"
        fi
    done

    if [ ${#files_to_process[@]} -eq 0 ]; then
        log_error "Aucun fichier final à traiter. Arrêt."
        exit 1
    fi
    
    format_content
    local FORMAT_RESULT=$?
    
    if [ $FORMAT_RESULT -eq 2 ]; then
        log_info "Retour au menu principal..."
        main "$@"
        return
    fi
    
    log_separator
    log_info "Préparation du contenu..."
    local TEMP_FILE
    TEMP_FILE=$(mktemp)
    trap 'rm -f "$TEMP_FILE"' EXIT
    
    gum spin --spinner dot --title "Préparation du contenu..." -- sleep 0.2

    for file_path in "${files_to_process[@]}"; do
        process_one_file "$file_path" "$TEMP_FILE" "$FORMAT_RESULT"
    done
    
    local FILES_PROCESSED=${#files_to_process[@]}
    
    if gum spin --spinner globe --title "Copie dans le presse-papiers..." -- \
        bash -c "cat '$TEMP_FILE' | $CLIPBOARD_CMD"; then
        
        log_success "Contenu de $FILES_PROCESSED fichier(s) copié avec succès !"
        if gum confirm --default=false "Voir le contenu copié ?"; then
            gum pager < "$TEMP_FILE"
        fi
        
        local TOTAL_LINES=$(wc -l < "$TEMP_FILE" | tr -d ' ')
        local CHAR_COUNT=$(wc -c < "$TEMP_FILE" | tr -d ' ')
        local WORD_COUNT=$(wc -w < "$TEMP_FILE" | tr -d ' ')

        gum join --vertical --align left \
            "$(gum style --foreground "$PURPLE" --bold "📊 STATISTIQUES")" \
            "$(gum style --foreground "$BLUE" "Fichiers traités: $FILES_PROCESSED")" \
            "$(gum style --foreground "$BLUE" "Lignes totales: $TOTAL_LINES")" \
            "$(gum style --foreground "$BLUE" "Mots totaux: $WORD_COUNT")" \
            "$(gum style --foreground "$BLUE" "Caractères totaux: $CHAR_COUNT")" >&2
    else
        log_error "Erreur lors de la copie dans le presse-papiers."
        log_warn "Le contenu agrégé se trouve dans: $TEMP_FILE"
        trap - EXIT
        exit 1
    fi
}

main "$@"