import { component$ } from "@builder.io/qwik";

import { grid } from "@recipe";
export default component$(() => {
  return (
    <section
      class={[
        grid({
          size: "medium",
          numberColumn: 4,
          theme: "darkBlueBanner",
          background: true,
          gap: "1rem",
        }),
        "text-red-800",
      ]}
    >
      <div class="col-start-2 col-end-12 bg-red-100">hello1</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
    </section>
  );
});
