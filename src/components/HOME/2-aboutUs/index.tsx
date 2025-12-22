import { component$ } from "@builder.io/qwik";
import { index_section } from "./aboutUs.css";
import Content from "./content.tsx";
import ImageSide from "./ImageSide";

// Composant principal
export default component$(() => {
  return (
    <section class={index_section}>
      <ImageSide />
      <Content />
    </section>
  );
});
