import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { flex, grid, textRecipe, textSprinkles } from "~/styles/index.css";

const conseilsDentaires = [
  {
    icon: "🦷",
    title: "Hygiène Quotidienne",
    category: "hygiene" as const,
    content:
      "Un brossage efficace deux fois par jour est la base d'une excellente santé bucco-dentaire. Utilisez une brosse à dents à poils souples et un dentifrice fluoré. Adoptez la technique du brossage circulaire en insistant sur la jonction gencive-dent pendant 2-3 minutes.",
    keywords: ["brossage", "fluor", "technique", "2 minutes", "poils souples"],
  },
  {
    icon: "🪥",
    title: "Choix du Matériel",
    category: "hygiene" as const,
    content:
      "Sélectionnez une brosse à dents adaptée à votre morphologie. Privilégiez les têtes petites pour un meilleur accès aux zones difficiles. Changez votre brosse tous les 3 mois ou dès que les poils s'usent. Le fil dentaire complète le brossage en éliminant la plaque interdentaire.",
    keywords: [
      "brosse",
      "fil dentaire",
      "changement",
      "tête petite",
      "accessibilité",
    ],
  },
  {
    icon: "🍎",
    title: "Alimentation Saine",
    category: "nutrition" as const,
    content:
      "Limitez les sucres rapides et les boissons acides. Privilégiez les aliments riches en calcium, phosphore et vitamines D. Les fruits et légumes croquant stimulent la salivation qui protège naturellement vos dents. Évitez les grignotages entre les repas.",
    keywords: ["sucres", "calcium", "vitamine D", "salivation", "grignotage"],
  },
  {
    icon: "🥛",
    title: "Prévention des Caries",
    category: "prevention" as const,
    content:
      "Le fluor renforce l'émail dentaire et prévient les caries. Les applications de fluor professionnelles complètent l'hygiène quotidienne. Les scellants des fissures protègent les molaires des enfants. Une alimentation équilibrée et une bonne hydratation sont essentielles.",
    keywords: ["fluor", "émail", "scellants", "protection", "hydratation"],
  },
  {
    icon: "🌿",
    title: "Santé Parodontale",
    category: "prevention" as const,
    content:
      "Des gencives saines sont le fondement de dents saines. Un détartrage professionnel tous les 6-12 mois élimine le tartre. Le massage des gencives stimule la circulation sanguine. Surveillez les saignements qui peuvent indiquer une gingivite.",
    keywords: ["gencives", "détartrage", "tartre", "massage", "gingivite"],
  },
  {
    icon: "📅",
    title: "Visites Régulières",
    category: "prevention" as const,
    content:
      "Un contrôle tous les 6 mois permet de détecter précocement les problèmes. Le dentiste effectuera un détartrage, un examen clinique et des radiographies si nécessaire. La prévention reste le meilleur traitement pour maintenir votre sourire en pleine santé.",
    keywords: [
      "contrôle",
      "dépistage",
      "radiographies",
      "prévention",
      "sourire",
    ],
  },
  {
    icon: "🚨",
    title: "Urgences Dentaires",
    category: "urgent" as const,
    content:
      "En cas de douleur intense, de dent cassée ou d'avulsion, contactez immédiatement votre dentiste. Conservez la dent dans du lait ou votre salive. Appliquez du froid pour réduire le gonflement. Ne prenez pas d'anti-inflammatoires avant le diagnostic.",
    keywords: ["douleur", "urgence", "avulsion", "lait", "froid"],
  },
  {
    icon: "💡",
    title: "Mythes et Réalités",
    category: "prevention" as const,
    content:
      "Le sucre ne cause pas directement les caries, c'est la plaque bactérienne qui le fait. Les enfants peuvent avoir des caries même sur leurs dents de lait. Le brossage après chaque repas n'est pas toujours nécessaire. Un bon brossage du soir est plus important.",
    keywords: ["mythes", "plaque", "dents de lait", "fréquence", "soir"],
  },
];

const ConseilCard = component$(
  ({
    icon,
    title,
    content,
    keywords,
    category,
  }: {
    icon: string;
    title: string;
    content: string;
    keywords: string[];
    category: "hygiene" | "prevention" | "nutrition" | "urgent";
  }) => (
    <div
      class={[
        "rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl",
        flex({ theme: "whiteBg", direction: "column", background: true }),
        "border-l-4",
        category === "hygiene" || category === "nutrition"
          ? "border-blue-600"
          : "border-blue-400",
        "hover:-translate-y-1 hover:transform",
      ]}
    >
      <div class="mb-4 text-center text-4xl">{icon}</div>
      <h3
        class={textRecipe({
          font: "span",
          textAlign: "center",
          marginBlock: "sm",
        })}
      >
        {title}
      </h3>
      <p
        class={textRecipe({
          font: "text",
          textAlign: "justify",
          lineHeight: "relaxed",
          marginBlock: "md",
        })}
      >
        {content}
      </p>
      <div
        class={flex({
          direction: "row",
          wrap: true,
          gap: "xs",
          marginBlock: "md",
        })}
      >
        {keywords.map((keyword, index) => (
          <span
            key={index}
            class={[
              "rounded-full px-3 py-1 text-sm font-medium",
              category === "hygiene" || category === "nutrition"
                ? "bg-blue-100 text-blue-800"
                : "bg-blue-50 text-blue-600",
            ]}
          >
            {keyword}
          </span>
        ))}
      </div>
    </div>
  ),
);

export default component$(() => {
  return (
    <>
      <section class="w-full bg-gradient-to-br from-blue-50 to-white">
        <div
          class={flex({
            theme: "whiteLD",
            direction: "column",
            background: true,
            paddingInline: "medium",
            side: 5,
            gap: "lg",
            paddingBlock: "xl",
          })}
        >
          <h1
            class={textRecipe({
              font: "title",
              textAlign: "center",
              marginBlock: "lg",
            })}
          >
            Conseils d'Hygiène Dentaire Professionnels
          </h1>
          <p
            class={[
              textRecipe({
                font: "text",
                textAlign: "center",
                display: "block",
              }),
              textSprinkles({ fontSize: ["lg", "xl"] }),
            ]}
          >
            Des recommandations expertes pour maintenir votre sourire en
            parfaite santé. Votre dentiste vous guide à travers les meilleures
            pratiques de soins bucco-dentaires.
          </p>
        </div>
      </section>

      <div
        class={flex({
          theme: "whiteBg",
          direction: "column",
          background: true,
          paddingBlock: "xl",
        })}
      >
        <section
          class={flex({
            direction: "column",
            side: 5,
            gap: "xl",
            theme: "whiteBg",
            background: false,
            paddingBlock: "lg",
          })}
        >
          <h2
            class={textRecipe({
              font: "title",
              textAlign: "center",
              marginBlock: "lg",
            })}
          >
            Les Fondamentaux des Soins Dentaires
          </h2>

          <p
            class={textRecipe({
              font: "text",
              textAlign: "center",
              display: "block",
              marginBlock: "md",
              lineHeight: "relaxed",
            })}
          >
            Une hygiène bucco-dentaire rigoureuse est la clé d'une santé
            optimale. Suivez ces conseils professionnels pour prévenir les
            caries, les maladies parodontales et conserver un sourire éclatant
            tout au long de votre vie.
          </p>

          <div
            class={grid({
              numberColumn: 3,
              gap: "lg",
              theme: "whiteBg",
              background: false,
            })}
          >
            {conseilsDentaires.map((conseil, index) => (
              <ConseilCard key={index} {...conseil} />
            ))}
          </div>
        </section>
      </div>

      <section class="w-full bg-blue-800 text-white">
        <div
          class={flex({
            theme: "accent",
            direction: "column",
            background: true,
            paddingInline: "medium",
            side: 5,
            gap: "lg",
            paddingBlock: "xl",
          })}
        >
          <h2
            class={textRecipe({
              font: "title",
              textAlign: "center",
              marginBlock: "lg",
            })}
          >
            Prenez Rendez-vous Aujourd'hui
          </h2>
          <p
            class={[
              textRecipe({
                font: "text",
                textAlign: "center",
                display: "block",
              }),
              textSprinkles({ fontSize: ["lg", "xl"] }),
            ]}
          >
            Un contrôle régulier est le meilleur investissement pour votre santé
            dentaire. Notre cabinet vous accueille pour des examens complets et
            des conseils personnalisés.
          </p>
          <a
            href="/contact"
            class={[
              "inline-block rounded-lg bg-white px-8 py-4 text-lg font-bold text-blue-800 shadow-lg transition-all duration-300 hover:scale-105 hover:transform hover:shadow-xl",
            ]}
          >
            Réserver mon consultation
          </a>
        </div>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "Conseils Soins Dentaires - Guide Expert par votre Dentiste",
  meta: [
    {
      name: "description",
      content:
        "Conseils professionnels d'hygiène dentaire : brossage, prévention des caries, santé parodontale. Guide complet par votre dentiste pour un sourire sain.",
    },
    {
      name: "keywords",
      content:
        "conseils dentaires, hygiène bucco-dentaire, brossage, prévention caries, santé gencives, dentiste professionnel",
    },
  ],
};
