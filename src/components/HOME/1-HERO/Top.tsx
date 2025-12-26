import { component$ } from "@builder.io/qwik";
import Button from "@components/Button";
import { flex, textRecipe, textSprinkles } from "@recipe";

import * as s from "./hero.css";

export default component$(() => {
  return (
    <section class={s.wrapper_top}>
      {/* <h1 class="bg-red-500">dsfsfds</h1> */}
      <h3
        class={textRecipe({
          font: "preTitle",
          textAlign: "center",
        })}
      >
        HAYAT & BARTOLI & TIMERA
      </h3>
      <h1
        class={textSprinkles({
          color: "primary",
          fontSize: ["xl", "3xl", "4xl"],
          fontFamily: "dancingScript",
          textAlign: "center",
          fontWeight: ["normal", "bold"],
          lineHeight: "snug",
        })}
      >
        Dentiste à Courbevoie depuis 1996
      </h1>

      <p
        class={textRecipe({
          font: "text",
          textAlign: "center",
          lineHeight: "loose",
        })}
      >
        Le meilleure centre Dentaire de Courbevoie pour vous rendre le sourire
        que vous avez toujours rêvé.
      </p>
      <span class="grid w-2xl place-items-center text-white">
        <Button
          btnStyle="Big"
          href="http://www.doctolib.fr"
          type="button"
          ariaLabel="Prendre rendez-vous sur Doctolib"
        />
      </span>

      <hr class={s.hr} />
      <div
        class={flex({
          direction: "row",
          gap: "md",
          side: 2,
          wrap: true,
        })}
      >
        <span>Avis Google Maps</span>
        <span>4.3</span>
        <span>basé sur 120 avis</span>
      </div>
    </section>
  );
});
