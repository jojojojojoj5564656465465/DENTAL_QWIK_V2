import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import {
  Hero,
  AboutUs,
  Specialisation,
  ImageFilter,
  Avis,
  DentistCard,
  How3,
  Diagnosis,
  VanityMetrics,
  Location,
} from "@/components/HOME";

export default component$(() => {
  return (
    <section>
      <Hero />
      <AboutUs />
      <Specialisation />
      <ImageFilter />
      <Avis />
      <DentistCard />
      <How3 />

      <Diagnosis />
      <Location />
      <VanityMetrics />
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
