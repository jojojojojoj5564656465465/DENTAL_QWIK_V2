import plugin from 'tailwindcss/plugin';
// (plus besoin d'une interface globale; on type localement la valeur reçue)

interface DynamicPaddingOptions {
  // Tu peux ajouter des options personnalisables ici si besoin
  prefix?: string;
}

const defaultOptions: Required<DynamicPaddingOptions> = {
  prefix: '',
};
const {withOptions} = plugin;

export default plugin.withOptions<DynamicPaddingOptions>((options) => {
  return (pluginApi: unknown) => {
    const api = pluginApi as {
      addUtilities: (utils: Record<string, Record<string, string>>, options?: unknown) => void;
      theme: (path: string) => unknown;
      e?: (className: string) => string;
    };
    const { addUtilities, theme } = api;
    const e = api.e ?? ((className: string) => className);
    const optionsWithDefaults = { ...defaultOptions, ...(options || {}) };
    const spacing = (theme('spacing') as Record<string, string>) || {};

    const newUtilities: Record<string, Record<string, string>> = {};

    Object.entries(spacing).forEach(([xKey, xVal]) => {
      Object.entries(spacing).forEach(([yKey, yVal]) => {
        const x = String(xVal);
        const y = String(yVal);
        // p-X-Y
        newUtilities[`.${e(`${optionsWithDefaults.prefix}p-${xKey}-${yKey}`)}`] = {
          padding: `${y} ${x}`,
        };
        // px-X-Y
        newUtilities[`.${e(`${optionsWithDefaults.prefix}px-dual-${xKey}-${yKey}`)}`] = {
          paddingLeft: x,
          paddingRight: y,
        };
        // py-X-Y
        newUtilities[`.${e(`${optionsWithDefaults.prefix}py-${xKey}-${yKey}`)}`] = {
          paddingTop: y,
          paddingBottom: y,
        };
      });
    });

    addUtilities(newUtilities);
  };
}) as ReturnType<typeof plugin.withOptions<DynamicPaddingOptions>>;
