import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import IconDoctolib from "../../assets/icons/Logo-doctolib.svg?w=32&h=16&jsx"; // Augmenté la taille pour meilleure visibilité
import * as style from "./Btn.css.ts";

// Définition des props attendues par le composant
interface ButtonProps {
  href?: string; // Prop optionnelle pour le lien
  text?: string; // Prop optionnelle pour le texte du bouton
  type?: "button" | "submit" | "reset"; // Prop optionnelle pour le type du bouton
  ariaLabel?: string; // Prop optionnelle pour l'accessibilité
  btnStyle: style.Content; // Prop optionnelle pour le style du bouton
  class?: string; // Prop optionnelle pour les classes CSS supplémentaires
}

/**
 * Composant bouton réutilisable et stylisé pour les applications Qwik.
 * Ce bouton peut agir comme un lien si une propriété `href` est fournie,
 * ou comme un bouton interactif.
 *
 * @param {ButtonProps} props - Les propriétés du composant.
 * @param {string} [props.href] - L'URL de destination si le bouton agit comme un lien.
 * @param {string} [props.text] - Le texte affiché à l'intérieur du bouton.
 * @param {"button" | "submit" | "reset"} [props.type="button"] - Le type du bouton HTML.
 * @param {string} [props.ariaLabel] - Un label ARIA pour améliorer l'accessibilité, utile si le texte est absent ou ambigu.
 * @param {style.Content} props.btnStyle - Le style visuel du bouton, défini par les styles importés (`Small` ou `Big`).
 *
 * @example
 * // Utilisation d'un bouton de petite taille avec un lien
 * <Button href="/ma-page" text="Voir plus" btnStyle="Small" />
 *
 * @example
 * // Utilisation d'un bouton de grande taille avec une icône et un label ARIA
 * <Button href="/doctolib" text="Prendre RDV" btnStyle="Big" ariaLabel="Prendre rendez-vous sur Doctolib" />
 */
export default component$<ButtonProps>((props) => {
  const renderButtonContent = () => {
    switch (props.btnStyle) {
      case "Small":
        return <p class={style.text}>{props.text}</p>;
      case "Big":
        return <IconDoctolib class={style.icon} />;
      default:
        return <p class={style.text}>Rendez-vous</p>; // Gestion par défaut si `btnStyle` n'est ni "Small" ni "Big"
    }
  };
  if (props.href) {
    return (
      <div
        class={[
          props.class,
          props.btnStyle === "Small" ? style.content.Small : style.content.Big,
        ]}
      >
        <Link
          href={props.href}
          // class={props.btnStyle}
          aria-label={props.ariaLabel || props.text}
          role={props.type}
        >
          {renderButtonContent()}
        </Link>
      </div>
    );
  }
});
