import {
  $,
  component$,
  createContextId,
  type QRL,
  type Signal,
  useComputed$,
  useContext,
  useContextProvider,
  useSignal,
  useStylesScoped$,
} from "@builder.io/qwik";
import { li_content, liHeader, liWrapper, ul } from "./content.css";
import styles from "./main.css?inline";

export interface ItemProps {
  title: string;
  description: string;
  icon: string;
  id: number;
  toggleItem: QRL<(id: number) => void>;
}

// Créer le contexte pour l'accordéon
const AccordionContext =
  createContextId<Signal<number | null>>("accordion-context");

// Composant principal Accordéon
const Accordion = component$(() => {
  const data: Omit<ItemProps, "toggleItem">[] = [
    {
      id: 0,
      title: "Prendre rendez-vous",
      icon: "/svg/How/icon-how-it-work-1.svg", // Chemin relatif
      description: "Prenez rendez-vous facilement en ligne ou par téléphone.",
    },
    {
      id: 1,
      title: "Tiers Payant",
      icon: "/svg/How/icon-how-it-work-2.svg", // Chemin relatif
      description: "Bénéficiez du tiers payant pour la plupart des soins.",
    },
    {
      id: 2,
      title: "Soins experts",
      icon: "/svg/How/icon-how-it-work-3.svg", // Chemin relatif
      description:
        "Recevez des soins dentaires experts dans un environnement moderne.",
    },
  ];

  const activeId = useSignal<number | null>(null);

  // Fonction pour basculer l'état d'un élément
  const toggleItem = $((id: number): void => {
    // console.log('Toggling item:', id, 'Current activeId:', activeId.value)
    activeId.value = activeId.value === id ? null : id;
  });

  // Fournir le contexte aux composants enfants
  useContextProvider(AccordionContext, activeId);

  return (
    <ul class={ul}>
      {data.map((item) => (
        <AccordionItem key={item.title} item={{ ...item, toggleItem }} />
      ))}
    </ul>
  );
});

// Composant Item de l'accordéon
const AccordionItem = component$<{ item: ItemProps }>(({ item }) => {
  const context = useContext(AccordionContext);
  useStylesScoped$(styles);

  const isOpen = useComputed$(() => context.value === item.id);

  return (
    <li class={liWrapper}>
      {/* Utilise la balise img avec item.icon comme src */}

      <button
        type="button"
        class={liHeader}
        onClick$={() => item.toggleItem(item.id)}
        aria-expanded={!!isOpen.value}
        aria-controls={`accordion-content-${item.id}`}
      >
        <img
          src={item.icon}
          width={40}
          height={40}
          alt={`Icône pour ${item.title}`}
          class="accordion-icon"
        />
        <h4 class={li_content.txt1}>{item.title}</h4>
        <i
          class={[
            "notificationBaseCss",
            isOpen.value ? "notificationOpenCss" : "notificationClosedCss",
          ]}
          aria-hidden="true"
        />
      </button>

      <div
        class="description"
        aria-hidden={!isOpen.value}
        style={`--show-description: ${isOpen.value ? "true" : "false"}`}
      >
        <p class={isOpen.value ? "openDescription" : "closeDescription"}>
          {item.description}
        </p>
      </div>
    </li>
  );
});

// Composant réutilisable générique pour d'autres cas d'usage
export const GenericAccordion = component$<{
  items: ItemProps[];
}>(({ items }) => {
  return (
    <div>
      <div class="image-wrapper"></div>
      <ul class={ul}>
        {items.map((item) => (
          <AccordionItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
});

export default Accordion;
