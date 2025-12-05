import {
  component$,
  type SVGProps,
  useSignal,
  useStylesScoped$,
  useTask$,
} from "@builder.io/qwik";

const iconModules = import.meta.glob("../../assets/icons/*.svg", {
  query: "?raw",
  import: "default",
});

export default component$<SVGProps<SVGSVGElement>>((props) => {
  useStylesScoped$(`
    span > svg {
      width: 100%;
      height: 100%;
      display: inline;
    }
  `);

  // Extraire les valeurs sérialisables avant le useTask$
  const name = props.name;
  const width = props.width ?? 24;
  const height = props.height ?? 24;
  const svgContent = useSignal<string>("? No icon Found");

  useTask$(async ({ track }) => {
    // Track uniquement les valeurs sérialisables
    track(() => name);

    const iconPath = `../../assets/icons/${name}.svg`;
    if (iconModules[iconPath]) {
      try {
        let content = (await iconModules[iconPath]()) as string;
        content = content.replace(
          /<svg([^>]*)width="[^"]*"([^>]*)>/g,
          "<svg$1$2>",
        );
        content = content.replace(
          /<svg([^>]*)height="[^"]*"([^>]*)>/g,
          "<svg$1$2>",
        );

        if (!content.includes("viewBox")) {
          const widthMatch = /width="(\d+)"/.exec(content);
          const heightMatch = /height="(\d+)"/.exec(content);
          const inferredWidth = widthMatch ? widthMatch[1] : null;
          const inferredHeight = heightMatch ? heightMatch[1] : null;

          if (inferredWidth && inferredHeight) {
            content = content.replace(
              "<svg",
              `<svg viewBox="0 0 ${inferredWidth} ${inferredHeight}"`,
            );
          } else {
            content = content.replace("<svg", '<svg viewBox="0 0 24 24"');
          }
        }

        svgContent.value = content;
      } catch (error) {
        console.error(
          `[Qwik Icon] Erreur lors du chargement de l'icône "${name}":`,
          error,
        );
      }
    } else {
      console.warn(`[Qwik Icon] Icône "${name}" introuvable.`);
      if (import.meta.env.DEV) {
        console.log(
          "Icônes disponibles:",
          Object.keys(iconModules).map((p) =>
            p.split("/").pop()?.replace(".svg", ""),
          ),
        );
      }
    }
  });

  return (
    <span
      class="inline-flex items-center justify-center"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        minWidth: `${width}px`,
        minHeight: `${height}px`,
      }}
      dangerouslySetInnerHTML={svgContent.value}
      role="img"
      aria-label={name}
    />
  );
});
