import {
  component$,
  useComputed$,
  useSignal,
  useVisibleTask$,
} from "@builder.io/qwik";
import { grid, textRecipe as R, textSprinkles as S } from "@recipe";

import D from "./data.ts";
import { hr } from "./vanity.css.ts";

interface Props {
  title: number;
  symbol: string;
  subtitle: string;
  text: string;
}

const CardEl = component$<Props>(({ title, symbol, subtitle, text }) => {
  const numberSignal = useSignal<number>(0);
  const duration = 2000; // Durée totale de l'animation en ms
  const startValue = 0;
  const endValue = title;
  const startTime = useSignal<number | null>(null);
  const formattedValue = useComputed$(() => {
    return numberSignal.value.toLocaleString();
  });

  useVisibleTask$(({ cleanup }) => {
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime.value) startTime.value = timestamp;
      const progress = timestamp - startTime.value;
      const progressRatio = Math.min(progress / duration, 1); // Limite to 1 element
      numberSignal.value = Math.floor(
        progressRatio * (endValue - startValue) + startValue,
      );

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    cleanup(() => {
      cancelAnimationFrame(animationFrameId);
    });
  });

  return (
    <div class={S({ padding: "xs" })}>
      <h3 class={R({ font: "title" })}>
        {formattedValue.value}
        {symbol}
      </h3>
      <h6
        class={S({
          color: "primary",
          fontSize: "md",
          letterSpacing: ["normal", "wide", "widest"],
        })}
      >
        {subtitle}
      </h6>
      <hr class={hr} />
      <p class={R({ font: "text" })}>{text}</p>
    </div>
  );
});

export default component$(() => {
  return (
    <section
      class={grid({
        theme: "whiteBg",
        numberColumn: 4,
        size: "large",
        background: true,
        marginBlock: "sm",
        gap: "lg",
      })}
    >
      {D.map((e) => (
        <CardEl
          key={e.title}
          text={e.text}
          symbol={e.symbol}
          subtitle={e.subtitle}
          title={e.title}
        />
      ))}
    </section>
  );
});
