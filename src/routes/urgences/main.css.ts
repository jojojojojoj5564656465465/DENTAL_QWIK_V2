import { globalStyle, style, styleVariants } from "@vanilla-extract/css";
import { flex } from "~/styles/recipe/flex.css";
import { grid } from "~/styles/recipe/grid.css";
import { textRecipe } from "~/styles/recipe/textRecipe.css";
import { theme, color } from "~/styles/utils/themeNew.css";
import { textSprinkles } from "~/styles/recipe/textSprinkles.css";

// Layouts
export const container = flex({
  direction: "column",
  size: "medium",
  gap: "lg",
  theme: "blueLightBg",
  paddingBlock: "lg",

});

export const _section = flex({
  direction: "column",
  gap: "md",
  marginBlock: "lg",
  size:"large"
});

export const section = style({
display: 'flex',
flexDirection: 'column',
gap: '1rem',
inlineSize: '100%',
backgroundColor:'pink'
},'debug-section')


export const headerSection = flex({
  direction: "column",
  side: 5, // center center
  gap: "md",
  marginBlockEnd: "lg",
});

export const gridContainer = grid({
  size: "full",
  gap: "md",
  numberColumn: 2,
});


export const preparationGrid = style({
  display: 'grid',
  width: '100%',
  gap: '1rem',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
},'debug-preparation-grid')



// Typography
export const mainTitle = textRecipe({
  font: "title",
  textAlign: "center",
  marginBlock: "sm",
});

export const subTitle = textRecipe({
  font: "text",
  textAlign: "center",
  marginBlock: "sm",
  lineHeight: "relaxed",
});

export const sectionTitle = textRecipe({
  font: "title",
  textAlign: "left",
  marginBlock: "md",
});

// New Card Style inspired by Specialisation/Card.tsx
export const emergencyCardStyle = styleVariants({
  icon: {
    aspectRatio: "1",
    blockSize: 55,
    inlineSize: 55,
    transition: "transform 0.3s ease, fill 0.3s ease",
    
  },
  wrapper: [
    flex({
      direction: "column",
      gap: "xxs",
      side: 1, // start start
      background: true,
      hover: true,
      theme: "whiteBg",
      size: "full"
    }),
    textSprinkles({
      cursor: "pointer",
      padding: "1.75rem",
      overflow: "hidden",
      borderColor: "accent",
    }),
    {
      borderRadius: 10,
      borderWidth: "1.2px",
      borderStyle: "solid",
      position: "relative",
      zIndex: 1,
      isolation: "isolate", // Ensure pseudo-element stays behind content

      ":before": {
        backgroundColor: color.variable.accent,
        blockSize: "100%",
        bottom: "-100%",
        content: "",
        inlineSize: "100%",
        left: 0,
        maskImage: "linear-gradient(to bottom, transparent 20%, black 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent 20%, black 100%)", // Cross-browser support
        position: "absolute",
        transition: "bottom 0.4s ease-out",
        zIndex: -1,
      },

      selectors: {
        "&:hover::before": {
          bottom: "0",
        },
      },
    },
  ],
});

// Global styles for interactions within the card
globalStyle(`${emergencyCardStyle.wrapper}:hover ${emergencyCardStyle.icon}`, {
  transform: "rotate(15deg) scale(1.1)", // Slightly less rotation than 40deg, maybe cleaner
});

// Handle icon color change on hover. 
// Assuming the Icon component renders SVG/paths that inherit fill.
globalStyle(`${emergencyCardStyle.wrapper}:hover ${emergencyCardStyle.icon} path`, {
  fill: theme.textHover,
});

globalStyle(`${emergencyCardStyle.wrapper}:hover ${emergencyCardStyle.icon}`, {
  fill: theme.textHover,
});


// Other styles
export const faqContainer = flex({
  direction: "column",
  gap: "sm",
  theme: "whiteLD",
  paddingBlock: "md",
  size: "medium",
});

export const faqItem = style({
  borderBottom: `1px solid ${theme.divider}`,
  paddingBlock: "0.75rem",
  selectors: {
    "&:last-child": {
      borderBottom: "none"
    }
  }
});

export const ctaSection = flex({
  side: 5,
  marginBlock: "md",
  gap: "md",
  wrap: true
});

export const callButton = style({
  backgroundColor: theme.primary,
  color: theme.background,
  padding: "0.875rem 2rem",
  borderRadius: "9999px",
  fontWeight: "600",
  border: "none",
  cursor: "pointer",
  fontSize: "1.125rem",
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.75rem",
  transition: "all 0.2s ease",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  selectors: {
    "&:hover": {
      backgroundColor: theme.accent,
      transform: "scale(1.05)",
    },
    "&:active": {
      transform: "scale(0.95)",
    },
  },
});

export const listStyle = style({
  listStyleType: "none",
  padding: 0,
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  inlineSize: "100%",
});

export const listItem = flex({
  direction: "row",
  gap: "sm",
  side: 4, // start center
});