import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";
import { container } from "@/styles/recipe";
import { article } from "./main.css.ts";
import style from "./style.css?inline";
export default component$(() => {
  // useStylesScoped$(style);
  //useStyles$(article);
  return (
    <article class={[article]}>
      <h1 class="bg-red-900">Counter</h1>

      <Slot />
    </article>
  );
});
