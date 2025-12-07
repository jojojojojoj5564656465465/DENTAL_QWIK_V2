import { component$, Slot } from "@builder.io/qwik";
import { containerGrid } from "@container";
import { textRecipe as R } from "@recipe";

interface Props {
  subtitle: string;
  PreTitle: string;
  title: string;
  description?: string;
  textAlign?: "left" | "center" | "right";
}

export default component$<Props>(
  ({ subtitle, PreTitle, title, description, textAlign = "left" }) => {
    return (
      <div
        class={[containerGrid({ size: "small", background: false, gap: true })]}
      >
        <h5 class={R({ font: "preTitle", textAlign })}>{subtitle}</h5>
        <h2 class={R({ font: "title", textAlign, lineHeight: "snug" })}>
          <br />
          <span class={R({ font: "span", display: "inline" })}>
            {PreTitle}&nbsp;
          </span>
          {title}
        </h2>
        {description && (
          <p class={[R({ font: "text", textAlign })]}>{description}</p>
        )}
        <Slot />
      </div>
    );
  },
);
