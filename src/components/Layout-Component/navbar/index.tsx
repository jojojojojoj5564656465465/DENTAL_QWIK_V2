// Fichier: src/components/navbar/navbar.tsx

import {
  $,
  component$,
  createContextId,
  type QRL,
  type Signal,
  useComputed$,
  useContext,
  useContextProvider,
  useOnWindow,
  useSignal,
  useStore,
  useTask$,
  // useVisibleTask$,
} from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

// --- 1. Données et Types ---
type Base = {
  readonly name: string;
};

export type LinkItem = Base & {
  readonly type: "link";
  readonly link: string;
};

export type SubmenuItem = Base & {
  readonly type: "submenu";
  readonly submenu: readonly LinkItem[];
};

export const menu: readonly (SubmenuItem | LinkItem)[] = [
  { type: "link", name: "Accueil", link: "/" },
  { type: "link", name: "Urgences", link: "/urgences" },
  {
    type: "submenu",
    name: "Services",
    submenu: [
      { type: "link", name: "Soins préventifs", link: "/services/preventifs" },
      { type: "link", name: "Implants dentaires", link: "/services/implants" },
      { type: "link", name: "Orthodontie", link: "/services/orthodontie" },
    ],
  },
  {
    type: "submenu",
    name: "Le Cabinet",
    submenu: [
      { type: "link", name: "Notre équipe", link: "/cabinet/equipe" },
      { type: "link", name: "Équipements", link: "/cabinet/equipements" },
      { type: "link", name: "Horaires & Accès", link: "/cabinet/horaires" },
    ],
  },
  { type: "link", name: "Contact", link: "/contact" },
];

// --- 2. Contexte ---
// ID de contexte pour suivre le sous-menu actif sur le bureau.
export const ActiveDesktopSubmenuContext = createContextId<Signal<number>>(
  "com.dentacare.desktop-active-submenu-index",
);

// --- 3. Icônes SVG (Composants Inline) ---
const LogoIcon = () => (
  <svg class="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
    <title>DentaCare Logo</title>
    <path d="M12 2C8.13 2 5 5.13 5 9c0 1.74.5 3.37 1.41 4.84.95 1.54 2.2 2.86 3.72 3.9C10.74 18.45 11.35 19 12 19s1.26-.55 1.87-1.26c1.52-1.04 2.77-2.36 3.72-3.9C18.5 12.37 19 10.74 19 9c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);

const ChevronIcon = component$<{ isOpen?: boolean }>(({ isOpen = false }) => (
  <svg
    class={`ml-1 h-4 w-4 transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
    fill="currentColor"
    viewBox="0 0 20 20"
    aria-hidden="true"
  >
    <path
      fill-rule="evenodd"
      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
      clip-rule="evenodd"
    />
  </svg>
));

const MenuIcon = () => (
  <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <title>Ouvrir le menu</title>
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const CloseIcon = () => (
  <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <title>Fermer le menu</title>
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

// --- 4. Hook Personnalisé pour la Logique Mobile ---
export function useMobileMenuToggler(
  navBarRef: Signal<HTMLElement | undefined>,
) {
  const isOpen = useSignal(false);

  useOnWindow(
    "resize",
    $(() => {
      if (window.innerWidth >= 768) {
        isOpen.value = false;
      }
    }),
  );

  useTask$(({ track, cleanup }) => {
    track(() => isOpen.value);
    if (!isOpen.value) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (navBarRef.value && !navBarRef.value.contains(event.target as Node)) {
        isOpen.value &&= false;
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    cleanup(() =>
      document.removeEventListener("mousedown", handleClickOutside),
    );
  });

  // useOnWindow(
  //   "mousedown",
  //   $((event) => {
  //     if (
  //       isOpen.value &&
  //       navBarRef.value &&
  //       !navBarRef.value.contains(event.target as Node)
  //     ) {
  //       isOpen.value &&= false;
  //       console.log("clicked outside");
  //     }
  //   }),
  // );

  const toggle$ = $(() => {
    isOpen.value = !isOpen.value;
  });

  return { isOpen, toggle$ };
}

// --- 5. Sous-Composants de la Navbar ---

// 5.1 Lien de Navigation Simple
interface DentalNavLinkProps extends LinkItem {
  isMobile?: boolean;
  onClick$?: QRL<() => void>;
}
const DentalNavLink = component$<DentalNavLinkProps>((props) => {
  return (
    <li>
      <a
        href={props.link}
        class={[
          "transition-colors duration-200",
          props.isMobile
            ? "block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-sky-500"
            : "px-3 py-2 text-sm font-medium text-gray-700 hover:text-sky-500",
        ]}
        onClick$={props.onClick$}
      >
        {props.name}
      </a>
    </li>
  );
});

// 5.2 Élément de Sous-Menu pour le Bureau
interface DesktopSubmenuItemProps extends SubmenuItem {
  idx: number;
}
const DesktopSubmenuItem = component$<DesktopSubmenuItemProps>((props) => {
  const activeSubmenuIndex = useContext(ActiveDesktopSubmenuContext);
  const isActive = useComputed$(() => activeSubmenuIndex.value === props.idx);

  return (
    <li
      class="group relative"
      onMouseEnter$={() => {
        activeSubmenuIndex.value = props.idx;
      }}
      onMouseLeave$={() => {
        activeSubmenuIndex.value = -1;
      }}
    >
      <button
        type="button"
        class="flex items-center px-3 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-sky-500 focus:text-sky-500"
        aria-expanded={isActive.value}
        aria-controls={`desktop-submenu-${props.idx}`}
        onClick$={() => {
          activeSubmenuIndex.value = isActive.value ? -1 : props.idx;
        }}
      >
        {props.name}
        <ChevronIcon isOpen={isActive.value} />
      </button>
      <div
        id={`desktop-submenu-${props.idx}`}
        class={[
          "ring-opacity-5 absolute left-0 z-30 mt-0 w-56 origin-top-left transform rounded-lg bg-white pt-2 shadow-lg ring-1 ring-black transition-all duration-200",
          isActive.value
            ? "visible scale-100 opacity-100"
            : "invisible scale-95 opacity-0",
        ]}
      >
        <ul class="py-2">
          {props.submenu.map((subItem, subIndex) => (
            <DentalNavLink
              key={`${subItem.name}-${subIndex}`}
              {...subItem}
              onClick$={() => {
                activeSubmenuIndex.value = -1;
              }}
            />
          ))}
        </ul>
      </div>
    </li>
  );
});

// 5.3 Élément de Sous-Menu pour le Mobile
interface MobileSubmenuItemProps extends SubmenuItem {
  openStore: { [key: string]: boolean };
  toggleSubmenu$: QRL<(name: string) => void>;
  closeMobileMenu$?: QRL<() => void>;
}
const MobileSubmenuItem = component$<MobileSubmenuItemProps>((props) => {
  const isOpen = useComputed$(() => props.openStore[props.name] || false);

  return (
    <li class="relative">
      <button
        type="button"
        onClick$={() => props.toggleSubmenu$(props.name)}
        class={[
          "flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium transition-colors duration-200",
          isOpen.value
            ? "bg-sky-50 text-sky-600"
            : "text-gray-700 hover:bg-gray-50 hover:text-sky-500",
        ]}
        aria-expanded={isOpen.value}
        aria-controls={`mobile-submenu-content-${props.name}`}
      >
        {props.name}
        <ChevronIcon isOpen={isOpen.value} />
      </button>
      <div
        id={`mobile-submenu-content-${props.name}`}
        class={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen.value ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul class="space-y-1 pt-1 pb-2 pl-6">
          {props.submenu.map((subItem, subIndex) => (
            <DentalNavLink
              key={`${subItem.name}-${subIndex}`}
              {...subItem}
              isMobile
              onClick$={props.closeMobileMenu$}
            />
          ))}
        </ul>
      </div>
    </li>
  );
});

// --- 6. Composant Principal de la Navbar ---
export const Navbar = component$(() => {
  const navBarRef = useSignal<HTMLElement>();
  const { isOpen: isMobileMenuOpen, toggle$: toggleMobileMenu$ } =
    useMobileMenuToggler(navBarRef);

  const activeDesktopSubmenuIndex = useSignal(-1);
  useContextProvider(ActiveDesktopSubmenuContext, activeDesktopSubmenuIndex);

  const mobileSubmenuStates = useStore<{ [key: string]: boolean }>({});

  useTask$(() => {
    menu.forEach((item) => {
      if (item.type === "submenu") {
        mobileSubmenuStates[item.name] = false;
      }
    });
  });

  useTask$(({ track }) => {
    track(() => isMobileMenuOpen.value);
    if (!isMobileMenuOpen.value) {
      Object.keys(mobileSubmenuStates).forEach((key) => {
        mobileSubmenuStates[key] = false;
      });
    }
  });

  const toggleMobileSubmenu$ = $((submenuName: string) => {
    const currentState = mobileSubmenuStates[submenuName];
    Object.keys(mobileSubmenuStates).forEach((key) => {
      mobileSubmenuStates[key] = false;
    });
    mobileSubmenuStates[submenuName] = !currentState;
  });

  const closeMobileMenu$ = $(() => {
    isMobileMenuOpen.value &&= false;
  });

  return (
    <nav ref={navBarRef} class="sticky top-0 z-50 bg-white shadow-lg">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 justify-between">
          <Link
            href="/"
            class="flex shrink-0 items-center"
            aria-label="DentaCare Homepage"
          >
            <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-blue-800">
              <LogoIcon />
            </div>
            <span class="ml-3 text-xl font-bold text-blue-800">DentaCare</span>
          </Link>

          <ul class="hidden items-center space-x-1 md:flex">
            {menu.map((item, index) =>
              item.type === "link" ? (
                <DentalNavLink key={`${item.name}-${index}`} {...item} />
              ) : (
                <DesktopSubmenuItem
                  key={`${item.name}-${index}`}
                  {...(item as SubmenuItem)}
                  idx={index}
                />
              ),
            )}
            <li>
              <Link
                href="/rdv"
                class="ml-4 transform rounded-full bg-gradient-to-r from-sky-500 to-blue-800 px-6 py-2 text-sm font-medium text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                Prendre RDV
              </Link>
            </li>
          </ul>

          <div class="flex items-center md:hidden">
            <button
              type="button"
              onClick$={toggleMobileMenu$}
              class="p-2 text-gray-700 transition-colors duration-200 hover:text-sky-500 focus:text-sky-500 focus:outline-none"
              aria-label={
                isMobileMenuOpen.value ? "Fermer le menu" : "Ouvrir le menu"
              }
              aria-expanded={isMobileMenuOpen.value}
              aria-controls="mobile-menu-content"
            >
              {isMobileMenuOpen.value ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu-content"
        class={`overflow-hidden border-t border-gray-200 bg-white transition-all duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen.value
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <ul class="space-y-1 px-2 pt-2 pb-3">
          {menu.map((item, index) =>
            item.type === "link" ? (
              <DentalNavLink
                key={`${item.name}-${index}-mobile`}
                {...item}
                isMobile
                onClick$={closeMobileMenu$}
              />
            ) : (
              <MobileSubmenuItem
                key={`${item.name}-${index}-mobile`}
                {...(item as SubmenuItem)}
                openStore={mobileSubmenuStates}
                toggleSubmenu$={toggleMobileSubmenu$}
                closeMobileMenu$={closeMobileMenu$}
              />
            ),
          )}
          <li class="pt-3">
            <a
              href="/rdv"
              class="mx-4 my-2 block rounded-full bg-gradient-to-r from-sky-500 to-blue-800 px-4 py-2 text-center font-medium text-white transition-all duration-200 hover:shadow-lg"
              onClick$={closeMobileMenu$}
            >
              Prendre RDV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
});
