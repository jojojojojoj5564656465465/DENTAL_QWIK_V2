import { component$ } from "@builder.io/qwik";
import { container } from "~/styles/container/index.css.ts";
import { wrapperIndex } from "./aboutUs.css";
import Content from "./content.tsx";
import ImageSide from "./ImageSide";

// Composant principal
export default component$(() => {
  return (
    <section
      class={container({ theme: "blueLightBg", hover: false, size: "medium" })}
    >
      <section class={wrapperIndex}>
        <ImageSide />
        <Content />
      </section>
    </section>
  );
});
