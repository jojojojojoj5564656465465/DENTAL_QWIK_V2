import { component$ } from "@builder.io/qwik";
import Banner from "./Banner.tsx";
import Hero from "./Top.tsx";

export default component$(() => {
  return (
    <section>
      <Hero />
      <Banner />
    </section>
  );
});
