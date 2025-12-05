import { $, component$, useOnDocument, useSignal } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";
import * as v from "valibot";
import * as s from "./style.css";

// ÉTAPE 1: EXPORTATION NOMMÉE DU SCHÉMA
export const beforeAfterSliderSchema = v.object({
  beforeImage: v.pipe(v.string(), v.nonEmpty("L'image 'avant' est requise.")),
  afterImage: v.pipe(v.string(), v.nonEmpty("L'image 'après' est requise.")),
  beforeAlt: v.pipe(
    v.string(),
    v.nonEmpty("Le texte alternatif pour l'image 'avant' est requis."),
  ),
  afterAlt: v.pipe(
    v.string(),
    v.nonEmpty("Le texte alternatif pour l'image 'après' est requis."),
  ),
});

type BeforeAfterSliderInput = v.InferInput<typeof beforeAfterSliderSchema>;

// ÉTAPE 2: EXPORTATION NOMMÉE DU COMPOSANT
// La ligne ci-dessous est cruciale. "export const" et non "export default".
export const BeforeAfterSlider = component$<
  BeforeAfterSliderInput & s.containerPersoVariants
>((props) => {
  const { beforeImage, afterImage, beforeAlt, afterAlt } = v.parse(
    beforeAfterSliderSchema,
    props,
  );

  const sliderPosition = useSignal(50);
  const containerRef = useSignal<HTMLDivElement>();
  const isDragging = useSignal(false);

  const handleMove = $((event: MouseEvent | TouchEvent) => {
    if (!isDragging.value || !containerRef.value) return;
    const rect = containerRef.value.getBoundingClientRect();
    const x = "touches" in event ? event.touches[0].clientX : event.clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    sliderPosition.value = Math.max(0, Math.min(100, position));
  });

  const startMove = $(() => {
    isDragging.value = true;
  });
  const stopMove = $(() => {
    isDragging.value = false;
  });

  useOnDocument("mousemove", handleMove);
  useOnDocument("touchmove", handleMove);
  useOnDocument("mouseup", stopMove);
  useOnDocument("touchend", stopMove);

  const handleKeyDown = $((event: KeyboardEvent) => {
    const { key } = event;
    const step = 5;
    let newPosition = sliderPosition.value;
    switch (key) {
      case "ArrowLeft":
        newPosition -= step;
        break;
      case "ArrowRight":
        newPosition += step;
        break;
      case "Home":
        newPosition = 0;
        break;
      case "End":
        newPosition = 100;
        break;
      default:
        return;
    }
    event.preventDefault();
    sliderPosition.value = Math.max(0, Math.min(100, newPosition));
  });

  return (
    <div
      class={s.containerPerso({
        aspectRatio: props.aspectRatio,
        maxWidth: props.maxWidth,
      })}
      ref={containerRef}
      onMouseDown$={startMove}
      onTouchStart$={startMove}
    >
      <Image
        src={beforeImage}
        alt={beforeAlt}
        layout="constrained"
        class={s.beforeImage}
        draggable={false}
      />
      <Image
        src={afterImage}
        alt={afterAlt}
        layout="constrained"
        class={s.afterImage}
        style={{ clipPath: `inset(0 ${100 - sliderPosition.value}% 0 0)` }}
        draggable={false}
      />
      <div
        class={s.sliderHandle}
        style={{ left: `${sliderPosition.value}%` }}
        role="slider"
        tabIndex={0}
        aria-valuenow={sliderPosition.value}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Comparer les images avant et après"
        onKeyDown$={handleKeyDown}
      >
        <div class={s.sliderArrow}>{"<>"}</div>
      </div>
    </div>
  );
});
