import { component$, useSignal, useStylesScoped$ } from "@builder.io/qwik";
import style from "./style.css?inline";
export const Counter = component$(() => {
  const count = useSignal(0);
  useStylesScoped$(style);

  return (
    <button
      class="counter bg-red-100 py-custom-dual-2-3"
      type="button"
      onClick$={() => count.value++}
    >
      Increment {count.value}
    </button>
  );
});
