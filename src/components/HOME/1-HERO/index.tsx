import { component$ } from "@builder.io/qwik";
import Hero from "./Top.tsx";
import Banner from "./Banner.tsx";

export default component$(() => {
  return (
    <section>
      <Hero />
      <Banner />
    </section>
  );
});
