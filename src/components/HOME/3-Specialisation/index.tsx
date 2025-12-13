import { component$ } from "@builder.io/qwik";
import Card from "./Card";
import * as s from "./Specialisation.css";

export default component$(() => {
  return (
    <section class={s.parent}>
      <div class={s.child}>
        <Card
          title="Soins dentaires"
          text="Prévention des caries et du tartre pour une bonne santé bucco-dentaire."
          icon="icon-services-1"
        />
        <Card
          title="Urgences dentaires"
          text="Traitement rapide pour douleurs, abcès ou accidents."
          icon="icon-services-2"
        />
        <Card
          title="Prothèses dentaires"
          text="Solutions pour restaurer votre sourire et confort."
          icon="icon-services-3"
        />
        <Card
          title="Implants dentaires"
          text="Remplacement durable pour dents manquantes."
          icon="icon-services-4"
        />
      </div>
    </section>
  );
});
