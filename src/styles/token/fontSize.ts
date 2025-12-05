export const fontSize: Record<string, string> = {
  "2xl": "clamp(2.33rem, calc(2.08rem + 1.25vw), 3.05rem)",
  "3xl": "clamp(2.80rem, calc(2.45rem + 1.77vw), 3.82rem)",
  "4xl": "clamp(3.36rem, calc(2.87rem + 2.45vw), 4.77rem)",
  "5xl": "clamp(4.03rem, calc(3.36rem + 3.36vw), 5.96rem)",
  "6xl": "clamp(4.84rem, calc(3.93rem + 4.54vw), 7.45rem)",
  base: "clamp(1.13rem, calc(1.08rem + 0.22vw), 1.25rem)",
  cqi: "clamp(0.60rem, .65cqi, .9cqi)",
  lg: "clamp(1.62rem, calc(1.50rem + 0.58vw), 1.95rem)",
  md: "clamp(1.35rem, calc(1.28rem + 0.37vw), 1.56rem)",
  sm: "clamp(0.94rem, calc(0.92rem + 0.11vw), 1.00rem)",
  xl: "clamp(1.94rem, calc(1.77rem + 0.87vw), 2.44rem)",
  xs: "clamp(0.78rem, calc(0.77rem + 0.03vw), 0.80rem)",
} as const;
