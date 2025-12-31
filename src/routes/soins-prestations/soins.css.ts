import { style, styleVariants } from "@vanilla-extract/css";
import { space } from "../../styles/token";

// Page container
export const pageContainer = style({
  minHeight: "100vh",
});

// Hero section
export const heroImagePlaceholder = style({
  width: "100%",
  height: "300px",
  backgroundColor: "oklch(97.44% 0.0134 240.95)",
  border: "2px dashed oklch(0.67 0.1 207.53)",
  borderRadius: "12px",
  marginBottom: space.lg,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "oklch(53.36% 0.0445 230.26)",
  fontStyle: "italic",
});

// Service cards
export const serviceCard = style({
  backgroundColor: "#ffffff",
  padding: space.lg,
  borderRadius: "12px",
  boxShadow:
    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  transition: "transform 0.3s ease",
  borderLeft: "4px solid oklch(58.09% 0.1151 235.69)",
});

export const serviceCardHover = style({
  ":hover": {
    transform: "translateY(-4px)",
    boxShadow:
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  },
});

export const serviceImagePlaceholder = style({
  width: "100%",
  height: "200px",
  backgroundColor: "oklch(97.44% 0.0134 240.95)",
  border: "2px dashed oklch(0.67 0.1 207.53)",
  borderRadius: "8px",
  marginBottom: space.md,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "oklch(53.36% 0.0445 230.26)",
  fontStyle: "italic",
});

// Technology cards
export const technologyCard = style({
  textAlign: "center",
  padding: space.lg,
});

export const technologyIcon = style({
  fontSize: "3rem",
  marginBottom: space.md,
  color: "oklch(58.09% 0.1151 235.69)",
});

export const technologyImagePlaceholder = style({
  width: "120px",
  height: "120px",
  backgroundColor: "oklch(97.44% 0.0134 240.95)",
  border: "2px dashed oklch(0.67 0.1 207.53)",
  borderRadius: "50%",
  margin: "0 auto " + space.md + " auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "oklch(53.36% 0.0445 230.26)",
  fontStyle: "italic",
});

// Pricing table
export const pricingTable = style({
  width: "100%",
  borderCollapse: "collapse",
  backgroundColor: "white",
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
});

export const tableHeader = style({
  backgroundColor: "oklch(32.25% 0.0573 233.51)",
  color: "white",
  fontWeight: "bold",
  padding: space.md,
  textAlign: "left",
});



export const tableRowHover = style({
  ":hover": {
    backgroundColor: "oklch(97.44% 0.0134 240.95)",
  },
  ":focus": {
    backgroundColor: "oklch(97.44% 0.0134 240.95)",
  },
});
export const tableCell = style({
  padding: space.md,
  borderBottom: "1px solid oklch(0.67 0.1 207.53)",
  color: "oklch(53.36% 0.0445 230.26)",
  selectors: {
    [`${tableRowHover}:hover &`]: {
      color: "black",
    },
  },
});
// CTA section
export const ctaButton = style({
  display: "inline-block",
  backgroundColor: "#ffffff",
  color: "oklch(25.88% 0.037 240.95)",
  padding: `${space.md} ${space.xl}`,
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "1.125rem",
  transition: "all 0.3s ease",
  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
});

export const ctaButtonHover = style({
  ":hover": {
    transform: "scale(1.05)",
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
  },
});

// Responsive variants
export const gridVariants = styleVariants({
  one: {
    display: "grid",
    gap: space.lg,
  },
  two: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: space.lg,
  },
  three: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: space.lg,
  },
});

// Text styles
export const sectionTitle = style({
  marginBottom: space.lg,
  textAlign: "center",
});

export const sectionDescription = style({
  textAlign: "center",
  maxWidth: "800px",
  margin: "0 auto " + space.xl + " auto",
  lineHeight: "1.6",
});

// List styles
export const serviceList = style({
  listStyle: "none",
  padding: 0,
});

export const serviceListItem = style({
  padding: space.sm + " 0",
  borderBottom: "1px solid #e5e7eb",
});

export const serviceListItemLast = style({
  borderBottom: "none",
});

// Payment methods
export const paymentMethod = style({
  display: "inline-block",
  padding: space.xs + " " + space.md,
  backgroundColor: "oklch(97.44% 0.0134 240.95)",
  border: "1px solid oklch(58.09% 0.1151 235.69)",
  borderRadius: "6px",
  margin: space.xs,
  fontSize: "0.875rem",
  color: "oklch(53.36% 0.0445 230.26)",
});

// Image placeholder utility
export const imagePlaceholder = style({
  backgroundColor: "oklch(97.44% 0.0134 240.95)",
  border: "2px dashed oklch(0.67 0.1 207.53)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "oklch(53.36% 0.0445 230.26)",
  fontSize: "0.875rem",
  fontStyle: "italic",
});

// Feature highlight
export const featureHighlight = style({
  border: "2px solid oklch(58.09% 0.1151 235.69)",
  borderRadius: "8px",
  padding: space.lg,
  backgroundColor: "oklch(97.44% 0.0134 240.95)",
});

export const featureIcon = style({
  fontSize: "2rem",
  marginBottom: space.md,
  color: "oklch(58.09% 0.1151 235.69)",
});
