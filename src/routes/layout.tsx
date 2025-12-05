import { component$, Slot } from "@builder.io/qwik";
import { Footer, Navbar } from "@/components/Layout-Component";

export default component$(() => {
  return (
    <section>
      <Navbar />
      <Slot />
      <Footer />
    </section>
  );
});
