// src/components/VisitClinic/VisitClinic.tsx
import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import * as v from "valibot";
import ToothBrushSVG from "@/assets/icons/toothbrush.svg?jsx";
// Import statique de l'image (Qwik City gère l'optimisation via Vite)
//import menImage from "@/assets/men.avif?jsx";
import { textRecipe } from "~/styles/recipe/textRecipe.css";
import { textSprinkles } from "~/styles/recipe/textSprinkles.css";
import * as imageStyles from "./image.css"; // contient menBG, sectionWrapper, wrapper

const _ImageSchema = v.pipe(
  v.file("Please select an image file."),
  v.mimeType(
    ["image/jpeg", "image/png", "image/webp", "image/avif"],
    "Please select Image file.",
  ),
);
const publicImageBackgroundImage =
  (dossier: string | null) => (fichier: `${string}.${string}`) => {
    if (dossier === null) {
      return `url(/assets/${fichier})`;
    }
    return `url(/assets/${dossier}/${fichier})`;
  };

const imageFilterUrl = publicImageBackgroundImage(null);

export default component$(() => {
  useStylesScoped$(`
		.yo{
		background: orange;}`);
  return (
    <section class={imageStyles.sectionWrapper}>
      <div
        class={imageStyles.wrapper}
        style={assignInlineVars({
          [imageStyles.menBG]: imageFilterUrl("men.avif"),
        })}
      >
        <ToothBrushSVG class={imageStyles.brossADentSvg.right} />
        <ToothBrushSVG class={imageStyles.brossADentSvg.left} />
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
