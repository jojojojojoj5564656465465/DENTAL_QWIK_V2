import { component$ } from "@builder.io/qwik";
import { containerGridMaxColumn } from "@recipe";
import Content from "../../Content";
import HowItWorksComponent from "./Accordeon.tsx";
import { bgImage, leftBoxWrapper } from "./content.css";

export default component$(() => {
  return (
    <section
      class={[
        bgImage,
        containerGridMaxColumn({
          theme: "darkBlueBanner",
          sizeOfBox: 300,
          background: false,
          size: "medium",
          gap: "sm",
          maxColumn: 2,
          marginBlock: "lg",
          paddingBlock: "lg",
          hover: false,
        }),
      ]}
    >
      <div class={leftBoxWrapper}>
        <Content
          subtitle="Comment ça marche ?"
          PreTitle="Ce que nous faisons"
          title="Pour votre sourire"
          description="Notre cabinet simplifie vos démarches administratives, vous permettant de vous concentrer sur votre santé et votre bien-être."
          textAlign="left"
        />
      </div>
      <div class="w-full">
        <HowItWorksComponent />
      </div>
    </section>
  );
});
