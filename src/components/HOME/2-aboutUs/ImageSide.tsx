// aboutUsImageGrid.tsx
import { component$ } from "@builder.io/qwik";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import CarreImage from "@/assets/2_section/2021-04POI-HAYAT-19-AVRIL-_MG_1196.webp?jsx";
import RectangleImage from "@/assets/2_section/CABINET-STEPHANE-HAYAT-IPHONE3.jpeg?jsx";
import {
  newImageGrid,
  newImageGrid_Wrapper,
  rectangleImage,
  carreImage as VAR,
} from "./aboutUs.css";

export default component$(() => {
  return (
    <section class={newImageGrid_Wrapper}>
      <div
        class={newImageGrid.square}
        style={assignInlineVars({
          [VAR]: `url(${CarreImage})`,
        })}
      />
      <div
        class={newImageGrid.vertical}
        style={assignInlineVars({
          [rectangleImage]: `url(${RectangleImage})`,
        })}
      />
    </section>
  );
});
