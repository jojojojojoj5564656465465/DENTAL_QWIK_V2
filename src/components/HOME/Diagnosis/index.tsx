import { component$ } from "@builder.io/qwik";
import ImageMiddle from "~/assets/why-choose-us-img.avif?jsx";
import {
  sectionContainerIndex,
  sectionContainer__Text,
} from "./diagnostic.css";
import * as G from "./grid.css.ts";

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
      "Problèmes d'alignement des dents diagnostiqués par examen clinique et radiographies.",
  },
  {
    title: "Maladies des tissus mous",
    description:
      "Lésions des tissus mous diagnostiquées par examen visuel et biopsies si nécessaire.",
  },
  {
    title: "Bruxisme",
    description:
      "Grincement des dents diagnostiqué par examen des signes d'usure et questions sur les habitudes de sommeil.",
  },
];

const ItemDiagnostic = component$<Service & { class?: string }>((props) => {
  return (
    <dl class={`${G.elementVariants.parent} ${props.class || ""}`}>
      <dt class={G.elementVariants.title}>{props.title}</dt>
      <dd class={G.elementVariants.description}>{props.description}</dd>
    </dl>
  );
});

export default component$(() => {
  const cardClasses = [
    G.gridVariants.card1,
    G.gridVariants.card2,
    G.gridVariants.card3,
    G.gridVariants.card4,
    G.gridVariants.card5,
    G.gridVariants.card6,
  ];

  return (
    <section class={sectionContainerIndex}>
      <div class={sectionContainer__Text.wrapper}>
        <h6 class={sectionContainer__Text.h6}>Nos métiers</h6>
        <h2 class={sectionContainer__Text.h2}>
          <span>Diagnostics des</span> maladies dentaires
        </h2>
        <p>Nous avons une vaste palette d'expertises pour votre santé</p>
      </div>

      <section class={G.gridVariants.child}>
        {services.map((service, index) => (
          <ItemDiagnostic
            {...service}
            key={service.title}
            class={cardClasses[index]}
          />
        ))}
        <ImageMiddle class={G.gridVariants.img} alt="Image illustrative" />
      </section>
    </section>
  );
});
