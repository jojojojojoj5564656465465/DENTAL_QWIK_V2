import { component$ } from "@builder.io/qwik";
import { containerGridMaxColumn } from "@recipe";
import Title from "@/components/Content";
import Button from "../../Button";

const contactInfo = [
  {
    id: "address",
    text: "20 Rue de l'Abreuvoir, 92400 Courbevoie",
    iconPaths: [
      { d: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" },
      {
        d: "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z",
      },
    ],
    ariaLabel: "Adresse",
  },
  {
    id: "phone",
    text: "+(33) 01 43 33 21 21",
    iconPaths: [
      {
        d: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z",
      },
    ],
    ariaLabel: "Téléphone",
  },
  {
    id: "email",
    text: "info@dentiste-paris.com",
    iconPaths: [
      {
        d: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75",
      },
    ],
    ariaLabel: "Email",
  },
  {
    id: "hours",
    text: "lun to vend 9:00 à 18:00",
    iconPaths: [{ d: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" }],
    ariaLabel: "Heures d'ouverture",
  },
];

export default component$(() => {
  return (
    <section
      class={containerGridMaxColumn({
        theme: "blueLightBg",
        size: "medium",
        maxColumn: 2,
        sizeOfBox: 300,
      })}
    >
      <div class="grid min-h-full grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
        {/* Colonne Gauche: Carte */}
        <div class="h-full w-full overflow-hidden rounded-lg shadow-md">
          <div class="relative h-full w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1909.252626467542!2d2.253638568086615!3d48.89205816090465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6650c677f09b9%3A0xa442b8d32866bcdf!2s20%20Rue%20de%20l'Abreuvoir%2C%2092400%20Courbevoie!5e0!3m2!1sfr!2sfr!4v1759225034118!5m2!1sfr!2sfr"
              class="absolute top-0 left-0 h-full w-full"
              style="border:0;"
              allowFullscreen={true}
              title="Google Maps - 20 Rue de l'Abreuvoir, 92400 Courbevoie"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Colonne Droite: Informations de Contact */}
        <div class="align-items-start grid gap-4 md:gap-6">
          <div>
            <Title
              subtitle="Trouvez-nous"
              PreTitle="Notre Localisation"
              title=" à Courbevoie"
            >
              <div class="mt-4 grid gap-3 md:gap-4">
                {contactInfo.map((item) => (
                  <div key={item.id} class="flex items-center gap-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-6 w-6 shrink-0 text-teal-500"
                      aria-labelledby={`contact-icon-title-${item.id}`}
                      role="img"
                    >
                      <title id={`contact-icon-title-${item.id}`}>
                        {item.ariaLabel}
                      </title>
                      {item.iconPaths.map((path) => (
                        <path
                          key={path.d}
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d={path.d}
                        />
                      ))}
                    </svg>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
              <span class="mt-5 grid w-full justify-items-start text-white">
                <Button
                  text="Doctolib"
                  href="https://www.doctolib.fr/"
                  btnStyle="Big"
                  ariaLabel="Prendre rendez-vous"
                />
              </span>
            </Title>
          </div>
        </div>
      </div>
    </section>
  );
});
