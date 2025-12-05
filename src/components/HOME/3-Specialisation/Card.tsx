import Icon from "@Icon"; // Assure-toi que cette bibliothèque est compatible avec Qwik ou utilise une alternative comme @qwikest/icons
import { component$ } from "@builder.io/qwik";
import { textRecipe } from "@styles/recipe/textRecipe.css";
import { CardStyle } from "./Specialisation.css";

export default component$<Record<"icon" | "title" | "text", string>>(
  ({ icon, title, text }) => {
    return (
      <div class={CardStyle.wrapper}>
        <Icon name={icon} class={CardStyle.icon} height={24} width={24} />
        <h3
          class={textRecipe({
            font: "highLight",
            hoverDiv: true,
            display: "block",
          })}
        >
          {title}
        </h3>
        <p
          class={textRecipe({
            font: "text",
            hoverDiv: true,
            textAlign: "left",
          })}
        >
          {text}
        </p>
      </div>
    );
  },
);
