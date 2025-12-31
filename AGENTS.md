# Agent Instructions for Dental-Qwik V2

## Build & Development Commands

### Core Commands

- `npm run dev` - Start development server (SSR mode)
- `npm run build` - Build for production
- `npm run build.cloudflare` - Build for Cloudflare Pages
- `npm run build.types` - Run TypeScript type checking (no emit)

### Code Quality

- `npm run lint` - Run ESLint on TypeScript files
- `npm run lint:biome` - Run Biome lint, format, check, and TypeScript
- `npm run fmt` - Format code with Prettier
- `npm run fmt.check` - Check code formatting

### Testing

**No test framework is currently configured.** When adding tests, choose a framework compatible with Qwik (Vitest with Qwik testing utilities) and update this file with test commands.

---

## Code Style Guidelines

### Framework & Stack

- **Framework**: Qwik (@builder.io/qwik)
- **Routing**: Qwik City (@builder.io/qwik-city)
- **Styling**: Vanilla Extract (@vanilla-extract/css) with Tailwind CSS v4
- **Validation**: Valibot for runtime schema validation
- **Deployment**: Cloudflare Pages (adapter included)

### Component Patterns

#### Component Definition

```tsx
import { component$ } from "@builder.io/qwik";

// Use default export for components
export default component$<PropsType>((props) => {
  return <div>{/* JSX content */}</div>;
});

// Or named export for reusable components
export const ComponentName = component$<PropsType>((props) => {
  return <div>{/* JSX content */}</div>;
});
```

#### Props & Types

- Define interfaces for component props
- Use TypeScript types consistently
- Export named components when they need schema validation
- Use Valibot for runtime validation when needed:

```tsx
import * as v from "valibot";

export const schema = v.object({
  name: v.string(),
  age: v.optional(v.number()),
});

type Props = v.InferInput<typeof schema>;
```

### Import Organization

#### Path Aliases (defined in tsconfig.json)

- `@/*` or `~/*` - Root of src directory
- `@styles/*` - src/styles/
- `@recipe` - src/styles/recipe/index.css.ts
- `@img/*` - src/assets/img/
- `@theme` - src/styles/utils/themeNew.css
- `@fonts` - src/assets/fonts/\*
- `@images` - public/images/\*
- `@s` - src/styles/index.ts
- `~assets/*` - src/assets/\*
- `@components/*` - src/components/\*
- `@Icon` - src/components/utils/Icon.tsx

#### Import Order

1. External libraries (@builder.io/qwik, valibot, vanilla-extract)
2. Path alias imports (@components/_, @styles/_)
3. Relative imports (./, ../)

Example:

```tsx
import { component$, useSignal } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { style } from "@vanilla-extract/css";
import { Button } from "@components/Button";
import * as localStyle from "./local.css.ts";
```

### Styling with Vanilla Extract

#### Import Styles

```tsx
import * as style from "./component.css.ts";
import { flex } from "@recipe";
```

#### Style File Structure

```tsx
import { style, styleVariants } from "@vanilla-extract/css";
import { color, space } from "@styles/token";

// Simple style
export const container = style({
  display: "flex",
  padding: space.md,
});

// Variants
export const buttonVariants = styleVariants({
  primary: { backgroundColor: color.primary },
  secondary: { backgroundColor: color.secondary },
});

export type ButtonVariant = keyof typeof buttonVariants;
```

### TypeScript Configuration

- **Strict mode**: Enabled
- **Target**: ES2020
- **Module**: ES2022 with Bundler resolution
- **Type imports**: Use `import type { ... }` for type-only imports
- **No explicit any**: Allowed in ESLint rules (`@typescript-eslint/no-explicit-any: "off"`)

### Formatting Rules

- **Quotes**: Double quotes (`"`)
- **Indentation**: 2 spaces
- **Semicolons**: Required
- **Trailing commas**: Where applicable
- **Prettier**: Uses `prettier-plugin-tailwindcss` for Tailwind class sorting

### Qwik Specific Patterns

#### Signals and State

```tsx
import { useSignal, useStore, component$ } from "@builder.io/qwik";

export default component$(() => {
  const count = useSignal(0); // Primitive values
  const user = useStore({ name: "", age: 0 }); // Objects

  const handleClick = $(() => {
    count.value++;
    user.name = "Updated";
  });

  return <button onClick$={handleClick}>{count.value}</button>;
});
```

#### Dollar Sign ($) Suffix

- Use `$` suffix for Qwik-specific functions: `component$`, `useSignal`, `onClick$`, `$(...)`
- Always wrap callbacks passed to Qwik handlers with `$()`:

```tsx
const handler = $((event: Event) => {
  // Handle event
});

return <button onClick$={handler}>Click</button>;
```

#### Event Handlers

- Use native event types: `MouseEvent`, `TouchEvent`, `KeyboardEvent`, etc.
- Destructure needed properties from events

### CSS Module Patterns

#### Responsive Styles

```tsx
import { media } from "@styles/token";

export const responsive = style({
  padding: "1rem",
  "@media": {
    [media.mobile]: {
      padding: "0.5rem",
    },
    [media.tablet]: {
      padding: "0.75rem",
    },
  },
});
```

#### Theme Integration

```tsx
import { color, fontFamily } from "@styles/utils/themeNew.css";

export const themed = style({
  color: color.variable.primary,
  fontFamily: fontFamily.numito,
});
```

### Error Handling & Validation

#### Runtime Validation

```tsx
import * as v from "valibot";

export const validateProps = (props: unknown) => {
  const schema = v.object({
    requiredField: v.pipe(v.string(), v.nonEmpty()),
    optionalField: v.optional(v.number()),
  });

  return v.parse(schema, props);
};
```

### Accessibility (A11y)

- Always include `aria-label` for buttons without text
- Use semantic HTML (nav, main, section, article, etc.)
- Implement keyboard navigation where appropriate
- Include alt text for images
- Use proper heading hierarchy

### File Naming Conventions

- Components: PascalCase (`Button/index.tsx`, `Hero/index.tsx`)
- Styles: camelCase or kebab-case (`component.css.ts`)
- Utilities: camelCase (`utils.ts`, `helper.ts`)
- Routes: lowercase (`index.tsx`, `urgences/index.tsx`)

### Linting Rules

- ESLint with Qwik plugin (eslint-plugin-qwik)
- Biome for additional linting
- Rules disabled: `@typescript-eslint/no-explicit-any`, `@typescript-eslint/no-unused-vars`, `noQwikUseVisibleTask`

### Documentation

- Add JSDoc comments for complex components
- Include usage examples in comments
- Document props interfaces with clear descriptions

### Git Ignore

- Build artifacts: /dist, /lib, /lib-types
- Cache: .cache, .rollup.cache, tsconfig.tsbuildinfo
- Logs: \*.log, logs/
- Editor: .idea, .DS_Store
- Environment: .env, \*.local

### Deployment

- **Target**: Cloudflare Pages
- **Build command**: `bun run build.cloudflare`
- **Deploy command**: `bun run deploy` (uses wrangler)
- **Preview**: `bun run preview`

---

## Important Notes

1. **No tests configured**: Add test framework (Vitest + Qwik testing utils) and update this file
2. **Language**: Comments in codebase are in French - maintain consistency or switch to English with clear justification
3. **Images**: Use `@unpic/qwik` for optimized images with proper alt text
4. **Icons**: Import SVGs with `?jsx` suffix: `import Icon from "./icon.svg?jsx"`
5. **CSS Modules**: Enabled with typescript-plugin-css-modules - type-check CSS imports
