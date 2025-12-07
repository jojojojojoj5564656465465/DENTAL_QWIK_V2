import { component$, Slot } from "@builder.io/qwik";

import { article } from "./main.css.ts";
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
