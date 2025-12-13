import { component$ } from "@builder.io/qwik";
import { container } from "~/styles/container/index.css.ts";
import { childWrapper } from "./aboutUs.css";
import Content from "./content.tsx";
import ImageSide from "./ImageSide";

// Composant principal
export default component$(() => {
  return (
    <section class={container.parent({ theme: "blueLightBg" })}>
      <div class={childWrapper}>
        <ImageSide />
        <Content />
      </div>
    </section>
  );
});
