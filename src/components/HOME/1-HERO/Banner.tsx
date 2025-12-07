import Icon from "@Icon"; // Vérifie la compatibilité avec Qwik ou utilise @qwikest/icons
import { component$ } from "@builder.io/qwik";
import { container } from "~/styles/container/index.css"; // Assure-toi que cette bibliothèque est compatible avec Qwik
import * as s from "./hero.css";

// Sous-composant pour chaque élément du banner
const BannerItem = component$<{
  iconName: string;
  title: string;
  description: string;
}>(({ iconName, title, description }) => {
  return (
    <div class={s.banner__element}>
      <Icon class={s.banner__element_icon} name={iconName} />
      <h6 class={s.banner__element_title}>{title}</h6>
      <p class={s.banner__element_description}>{description}</p>
    </div>
  );
});

// Composant principal
export default component$(() => {
  return (
    <section
      class={container({
        theme: "darkBlueBanner",
        background: true,
        size: "full",
        marginInline: "auto",
        display: "grid",
      })}
    >
      <div class={s.bannerWrapper}>
        {/* Besoin d'aide */}
        <BannerItem
          iconName="phone"
          title="Besoin d'aide"
          description="Applez : (+33) 1 43 33 21 21"
        />

        <hr class={s.banner_hr} />

        {/* Heures */}
        <BannerItem
          iconName="watch"
          title="Heures"
          description="Lundi au Vendredi 09:00 - 18:30"
        />

        {/* Email */}
        <BannerItem
          iconName="enveloppe"
          title="Email"
          description="hayat-stephane@wanadoo.fr"
        />
      </div>
    </section>
  );
});
