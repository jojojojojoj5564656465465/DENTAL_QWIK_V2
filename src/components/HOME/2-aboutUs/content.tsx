import { component$ } from "@builder.io/qwik";
import { flex } from "@recipe";
import MonIconeSVG from "~/assets/icons/check.svg?jsx"; // Qwik gère les SVG avec le suffixe ?jsx
import Title from "../../Content"; // Chemin relatif à adapter selon ta structure
// import { textRecipe, textSprinkles } from '@recipe'; // Assure-toi que cette bibliothèque est compatible avec Qwik
import { content__wrapper, text } from "./aboutUs.css"; // Assure-toi que le fichier CSS est compatible avec Qwik
export default component$(() => {
  return (
    <section class={content__wrapper}>
      <Title
        subtitle="À propos de nous"
        PreTitle="Votre santé, notre priorité"
        title="Pour un sourire éclatant et une hygiène bucco-dentaire optimale."
        description="Notre cabinet dentaire s'engage à offrir des soins attentifs, adaptés à vos besoins, et à garantir un service de qualité en dentisterie générale, esthétique et spécialisée. Nous mettons tout en œuvre pour améliorer votre quotidien et préserver votre bien-être."
        textAlign="left"
      />
      <ul class={text.ul}>
        {["Stérisation", "Expertise", "qualité", "prix"].map((el, index) => (
          <li
            key={el + index}
            class={flex({ direction: "row", side: 5, gap: "xxs" })}
          >
            <MonIconeSVG width={16} height={16} />
            <p class={text.li}>{el}</p>
          </li>
        ))}
      </ul>
    </section>
  );
});
