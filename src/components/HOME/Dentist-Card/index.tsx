import { component$ } from "@builder.io/qwik";
import { grid } from "@recipe";

import { Image } from "@unpic/qwik";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import Button from "../../Button/index.tsx";
import {
  ButtonStyle,
  clippy,
  imgUrl,
  photoPortraitDoctor,
} from "./index.css.ts";

interface DentistCardProps {
  name: string;
  specialty: string;
  description: string;
  imageUrl: string;
  appointmentLink: string;
  buttonText?: string;
  imagePortrait: string;
}

const dentists: DentistCardProps[] = [
  {
    name: "Hawa TIMERA",
    specialty: "Endodontiste",
    description:
      "Spécialiste des traitements de canal et de la préservation dentaire. Technologies de pointe pour votre confort.",
    imageUrl: "cov-doc1.webp",
    appointmentLink:
      "https://www.doctolib.fr/dentiste/courbevoie/hawa-timera-paris",

    imagePortrait: "doc1.webp",
  },
  {
    name: "Alexandra Bartoli",
    specialty: "Dentiste Esthétique",
    description:
      "Passionnée par l'esthétique dentaire : facettes, blanchiment, smile design. Révélez votre plus beau sourire.",
    imageUrl: "cov-doc2.avif",
    appointmentLink:
      "https://www.doctolib.fr/dentiste/courbevoie/alexandra-bartoli?utm_campaign=google-maps&utm_content=courbevoie&utm_medium=organic&utm_source=google&utm_term=dentiste",

    imagePortrait: "doc2.webp",
  },
  {
    name: "Stéphane Hayat",
    specialty: "Dentiste Généraliste",
    description:
      "Soins dentaires complets pour toute la famille. Prévention, soins et urgences avec une approche bienveillante.",
    imageUrl: "cov-doc3.webp",
    appointmentLink:
      "https://www.doctolib.fr/dentiste/courbevoie/stephane-hayat",

    imagePortrait: "doc3.webp",
  },
];
const createPath = (x: string) => `/assets/Doctors/${x}`;

const ItemDentistsCard = component$<DentistCardProps>((props) => {
  //useStyles$(styles);

  return (
    <div
      class={[
        "flex h-full w-full flex-col overflow-hidden rounded font-sans shadow-lg",
      ]}
    >
      <div class={["relative shrink-0"]}>
        <Image
          class={[clippy, "h-48 w-full object-cover"]}
          src={createPath(props.imageUrl)}
          alt={`img de ${props.name}`}
          layout="constrained"
          sizes="(min-width: 400px) 400px, 100vw"
        />

        <div
          class={[photoPortraitDoctor]}
          style={assignInlineVars({
            [imgUrl]: `url(${createPath(props.imagePortrait)})`,
          })}
        ></div>
      </div>

      <div class="flex grow flex-col items-center justify-between px-5 pt-3 pb-5">
        <div class="flex flex-col items-center text-center">
          <p class="text-3xl font-bold">{props.name}</p>
          <p class="mb-8 pb-3 text-gray-500 md:pb-9">{props.specialty}</p>
          <p class="mb-4 grow text-center">{props.description}</p>
        </div>

        <Button
          text="Doctolib"
          href={props.appointmentLink}
          btnStyle="Small"
          ariaLabel={`rendez-vous avec ${props.name}`}
          type="button"
          class={ButtonStyle}
        />
      </div>
    </div>
  );
});

export default component$(() => {
  return (
    <section
      class={grid({
        size: "medium",
        numberColumn: 3,
        background: true,
        gap: "sm",
        paddingBlock: "md",
      })}
    >
      {dentists.map((dentist) => (
        <ItemDentistsCard key={dentist.name} {...dentist} />
      ))}
    </section>
  );
});
