import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="p-8">
      <h1 class="mb-6 text-2xl font-bold">
        Test des utilitaires de padding personnalisés
      </h1>

      <div class="space-y-4">
        <div class="rounded border-2 border-blue-300 p-4">
          <p class="font-semibold">p-4 (standard)</p>
          <p>Padding standard avec toutes les directions</p>
        </div>

        <div class="px-dual-4-8 rounded border-2 border-green-300">
          <p class="font-semibold">px-dual-4-8 (horizontal différent)</p>
          <p>Padding-left: 1rem, Padding-right: 2rem</p>
        </div>

        <div class="px-dual-9-1 rounded border-2 border-purple-300">
          <p class="font-semibold">px-dual-9-1 (horizontal personnalisé)</p>
          <p>Padding-left: 2.25rem, Padding-right: 0.25rem</p>
        </div>

        <div class="py-dual-2-4 rounded border-2 border-red-300">
          <p class="font-semibold">py-dual-2-4 (vertical différent)</p>
          <p>Padding-top: 0.5rem, Padding-bottom: 1rem</p>
        </div>

        <div class="py-dual-8-3 rounded border-2 border-indigo-300">
          <p class="font-semibold">py-dual-8-3 (vertical personnalisé)</p>
          <p>Padding-top: 2rem, Padding-bottom: 0.75rem</p>
        </div>

        <div class="p-dual-4-2 rounded border-2 border-blue-300">
          <p class="font-semibold">p-dual-4-2 (global)</p>
          <p>Padding: 1rem 0.5rem</p>
        </div>

        <div class="px-dual-[20px]-[40px] rounded border-2 border-yellow-300">
          <p class="font-semibold">
            px-dual-[20px]-[40px] (valeurs arbitraires)
          </p>
          <p>Padding-left: 20px, Padding-right: 40px</p>
        </div>

        <div class="py-dual-[1rem]-[2rem] rounded border-2 border-pink-300">
          <p class="font-semibold">
            py-dual-[1rem]-[2rem] (valeurs arbitraires)
          </p>
          <p>Padding-top: 1rem, Padding-bottom: 2rem</p>
        </div>

        <div class="p-dual-[8px]-[16px] rounded border-2 border-teal-300">
          <p class="font-semibold">p-dual-[8px]-[16px] (valeurs arbitraires)</p>
          <p>Padding: 8px 16px</p>
        </div>

        <div class="px-[20px]-[40px] rounded border-2 border-purple-300">
          <p class="font-semibold">px-[20px]-[40px] (valeurs arbitraires)</p>
          <p>Padding-left: 20px, Padding-right: 40px</p>
        </div>

        <div class="py-[1rem]-[2rem] rounded border-2 border-yellow-300">
          <p class="font-semibold">py-[1rem]-[2rem] (valeurs arbitraires)</p>
          <p>Padding-top: 1rem, Padding-bottom: 2rem</p>
        </div>

        <div class="px-custom-4-custom-8 rounded border-2 border-indigo-300">
          <p class="font-semibold">
            px-custom-4-custom-8 (valeurs personnalisées)
          </p>
          <p>Padding-left: 1rem, Padding-right: 2rem</p>
        </div>

        <div class="p-[10%]-[20%] rounded border-2 border-pink-300">
          <p class="font-semibold">
            p-[10%]-[20%] (valeurs arbitraires en pourcentage)
          </p>
          <p>Padding: 10% 20%</p>
        </div>

        <div class="px-4-8 py-2-4 rounded border-2 border-teal-300">
          <p class="font-semibold">Combinaison complexe</p>
          <p>px-4-8 + py-2-4</p>
        </div>

        <div class="hover:px-4-8 rounded border-2 border-orange-300 transition-colors hover:bg-gray-100">
          <p class="font-semibold">Hover variant</p>
          <p>Survol pour voir l'effet</p>
        </div>
      </div>
    </div>
  );
});
