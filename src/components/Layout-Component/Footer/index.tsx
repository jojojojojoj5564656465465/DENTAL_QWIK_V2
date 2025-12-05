import { component$, useSignal, useTask$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

const quickLinks = [
  { label: "Accueil", href: "/" },
  { label: "Nos Services", href: "/services" },
  { label: "Notre Équipe", href: "/equipe" },
  { label: "Contact", href: "/contact" },
  { label: "Prendre rendez-vous", href: "/rdv" },
];

const contactInfos = [
  {
    label: "Adresse",
    icon: "📍",
    value: "123 Avenue du Sourire, 75000 Paris",
  },
  {
    label: "Téléphone",
    icon: "📞",
    value: (
      <a href="tel:0123456789" class="hover:underline">
        01 23 45 67 89
      </a>
    ),
  },
  {
    label: "Email",
    icon: "✉️",
    value: (
      <a href="mailto:contact@dentistepro.fr" class="hover:underline">
        contact@dentistepro.fr
      </a>
    ),
  },
  {
    label: "Horaires",
    icon: "⏰",
    value: "Lun - Ven : 9h - 19h",
  },
];

export const Footer = component$(() => {
  const currentYear = useSignal<number>(2025);

  useTask$(() => {
    currentYear.value = new Date().getFullYear();
  });

  return (
    <footer class="mt-xxl border-t border-sky-100 bg-sky-500/50 px-4 py-5 text-sm text-white">
      <div class="mx-auto grid max-w-6xl grid-cols-1 items-start gap-8 sm:grid-cols-3">
        {/* Logo & Description */}
        <div>
          <div class="mb-2 flex items-center">
            <span class="mr-2 flex h-8 w-8 items-center justify-center rounded-full border border-sky-300 bg-sky-50 text-xl text-sky-600">
              🦷
            </span>
            <span class="text-lg font-semibold tracking-wide">DentistePro</span>
          </div>
          <p class="text-xs leading-snug text-sky-700/80">
            Votre sourire, notre priorité.
            <br />
            Soins personnalisés et équipements de pointe.
          </p>
        </div>

        {/* Liens rapides */}
        <div>
          <h5 class="mb-2 text-base font-semibold text-sky-800">
            Liens rapides
          </h5>
          <ul class="space-y-1">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  class="transition-colors hover:text-sky-600 hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h5 class="mb-2 text-base font-semibold text-sky-800">Contact</h5>
          <ul class="space-y-1">
            {contactInfos.map((info) => (
              <li key={info.label} class="flex items-start gap-1">
                <span class="text-lg">{info.icon}</span>
                <span>
                  <span class="font-medium">{info.label} :</span> {info.value}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div class="mt-6 border-t border-sky-100 pt-4 text-center text-xs text-blue-950">
        &copy; {currentYear.value} DentistePro. Tous droits réservés.
      </div>
    </footer>
  );
});
