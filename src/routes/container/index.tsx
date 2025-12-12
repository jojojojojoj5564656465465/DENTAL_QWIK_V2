import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { container } from "@/styles/container/containerNew.css.ts";

export default component$(() => {
  return (
    <section class={container.parent({ background: false, theme: "accent" })}>
      <div
        class={[
          container.child({ size: "small", display: "grid" }),
          "text-red-800",
        ]}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        neque omnis natus, culpa possimus minima ab saepe. Voluptatem sit
        voluptate assumenda, cupiditate quidem optio aliquid voluptatibus iste
        excepturi cumque doloribus quis, ea ducimus quo. Nisi obcaecati laborum
        deleniti animi tempora adipisci harum exercitationem placeat ipsa a
        voluptate porro, unde in maxime dolore ducimus fugiat ipsum esse
        veritatis voluptates perferendis quaerat dignissimos consequatur cum!
        Accusamus optio laborum pariatur explicabo doloremque officia est non,
        sunt itaque temporibus molestiae? Reiciendis eveniet sed a natus
        consectetur eius ea in ab quidem magnam. Quasi alias dolor, quae soluta
        autem fugit sapiente id omnis illo. Asperiores?
      </div>
      <div
        class={[
          container.child({
            size: "small",
            marginBlock: "md",
            background: false,
          }),
          "text-green-800",
        ]}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit eos dolore
        quae eveniet velit error dolor quaerat quibusdam commodi soluta ducimus
        id assumenda rerum labore laborum, cum suscipit corrupti nostrum
        repudiandae? Aliquid ipsa assumenda quibusdam odio sunt quaerat
        asperiores aliquam, laudantium totam quia voluptatum iste alias ex id
        modi blanditiis?{" "}
      </div>
      <div class={[container.child({ size: "large" }), "text-blue-800"]}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta incidunt
        aliquid id velit ad reprehenderit recusandae facere, expedita vel, odio
        illum atque laudantium voluptatibus beatae eligendi consequuntur
        veritatis itaque animi sapiente. Laborum nihil, et aperiam, iure dolorum
        omnis eveniet nulla maxime numquam vel fugiat sunt, expedita doloribus
        quod neque consectetur minima odit vero. Ipsa expedita optio molestiae
        sapiente necessitatibus obcaecati?{" "}
      </div>
    </section>
  );
});

export const head: DocumentHead = {
  title: "QwikHome",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
