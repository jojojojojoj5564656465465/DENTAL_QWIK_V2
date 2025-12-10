import { component$ } from "@builder.io/qwik";
// Import statique de l'image (Qwik City gère l'optimisation via Vite)
//import menImage from "@/assets/men.avif?jsx";
import { textRecipe, textSprinkles } from "@recipe";
import { assignInlineVars } from "@vanilla-extract/dynamic";

//export {  } from "./src/styles/recipe/sprinkles/textSprinkles.css";

import * as imageStyles from "./image.css"; // contient menBG, sectionWrapper, wrapper

const publicImageBackgroundImage =
  (dossier: string | null) => (fichier: `${string}.${string}`) => {
    if (dossier === null) {
      return `url(/assets/${fichier})`;
    }
    return `url(/assets/${dossier}/${fichier})`;
  };

const imageFilterUrl = publicImageBackgroundImage(null);

export default component$(() => {
  return (
    <section class={imageStyles.sectionWrapper}>
      <div
        class={imageStyles.wrapper}
        style={assignInlineVars({
          [imageStyles.menBG]: imageFilterUrl("men.avif"),
        })}
      >
        <p class={textRecipe({ font: "preTitle", textAlign: "center" })}>
          Visiter La clinique
        </p>
        <h5
          class={textSprinkles({
            fontSize: "lg",
            paddingInline: "lg",
            fontWeight: "bold",
            color: "primary",
            letterSpacing: "wide",
            textAlign: "center",
            fontFamily: "dancingScript",
          })}
        >
          Une clinique moderne avec les derniers équipements pour des soins de
          qualité et moins invasifs.
        </h5>
      </div>
    </section>
  );
});
