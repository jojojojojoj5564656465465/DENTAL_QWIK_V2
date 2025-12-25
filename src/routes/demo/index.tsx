import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Avis, Diagnosis } from "@/components/HOME";

export default component$(() => {
  return (
    <section>
      <Avis />
      <Diagnosis />
    </section>
  );
});

export const head: DocumentHead = {
  title: "QwikHome",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
