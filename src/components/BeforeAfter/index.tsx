import { component$ } from "@builder.io/qwik";
import type * as v from "valibot";
import imageBefore from "~/assets/about-us-img-1.avif";
import imageAfter from "~/assets/about-us-img-2.avif";

import {
  BeforeAfterSlider,
  type beforeAfterSliderSchema,
} from "./BeforeAfterSlider";
import type { containerPersoVariants } from "./style.css";

type SliderProps = v.InferInput<typeof beforeAfterSliderSchema>;

export default component$(() => {
  const sliderProps: SliderProps & containerPersoVariants = {
    beforeImage: imageBefore,
    afterImage: imageAfter,
    beforeAlt:
      "Sourire d'un patient avant un traitement de blanchiment dentaire.",
    afterAlt:
      "Même sourire, visiblement plus blanc et éclatant, après le traitement.",
    aspectRatio: "1/1",
    maxWidth: "600px",
  };

  return (
    <section class="mx-auto my-12 max-w-4xl p-4">
      <BeforeAfterSlider {...sliderProps} />
    </section>
  );
});
