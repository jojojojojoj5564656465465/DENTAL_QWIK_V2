//import Icon from "@Icon"; // Assure-toi que cette bibliothèque est compatible avec Qwik ou utilise une alternative comme @qwikest/icons
import { component$ } from "@builder.io/qwik";
//import Toothbrush from "@/assets/icons/toothbrush.svg?jsx";
import ImageMiddle from "~/assets/why-choose-us-img.avif?jsx";
import {
  description,
  element,
  gridContainer,
  image,
  sectionContainer__Text,
  sectionContainerIndex,
  title,
} from "./diagnostic.css";

interface Service {
  title: string;
  description: string;
}

const services: Service[] = [
  {
    title: "Caries dentaires",
    description:
      "Les caries sont des lésions de la structure dentaire causées par les bactéries, diagnostiquées par examen visuel et radiographies.",
  },
  {
    title: "Maladies des gencives (gingivite et parodontite)",
    description:
      "Inflammation des gencives diagnostiquée par examen visuel et sondes parodontales.",
  },
  {
    title: "Maladies de la pulpe dentaire",
    description:
      "Inflammation de la pulpe dentaire diagnostiquée par tests de sensibilité.",
  },
  {
    title: "Malocclusion",
    description:
      "Problèmes d’alignement des dents diagnostiqués par examen clinique et radiographies.",
  },
  {
    title: "Maladies des tissus mous",
    description:
      "Lésions des tissus mous diagnostiquées par examen visuel et biopsies si nécessaire.",
  },
  {
    title: "Bruxisme",
    description:
      "Grincement des dents diagnostiqué par examen des signes d’usure et questions sur les habitudes de sommeil.",
  },
];

const ItemDiagnostic = component$<Service>((props) => {
  return (
    <dl class={element}>
      <dt class={title}>{props.title}</dt>
      <dd class={description}>{props.description}</dd>
    </dl>
  );
});

export default component$(() => {
  return (
    <section class={sectionContainerIndex}>
      <div class={sectionContainer__Text.wrapper}>
        <h6 class={sectionContainer__Text.h6}>Nos métiers</h6>
        <h2 class={sectionContainer__Text.h2}>
          <span>Diagnostics des</span> maladies dentaires
        </h2>
        <p>Nous avons une vaste palette d'expertises pour votre santé</p>
      </div>
      <section class={gridContainer}>
        <ImageMiddle class={image} alt="Image illustrative" />
        {services.map((service) => (
          <ItemDiagnostic {...service} key={service.title} />
        ))}
      </section>
    </section>
  );
});
