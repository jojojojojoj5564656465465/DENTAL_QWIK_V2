import { component$ } from "@builder.io/qwik";
import { flex, textRecipe, textSprinkles } from "~/styles/index.css";

// Données pour les cartes d'urgence
const emergencies = [
    {
        emoji: "🦷",
        title: "Dent cassée ou fissurée",
        items: [
            { text: "Rincez-vous la bouche à l'eau tiède." },
            { text: "Si possible, récupérez le fragment de dent." },
            { text: "Appliquez une compresse de gaze froide sur la joue pour réduire le gonflement." },
            { text: "Prenez un antalgique (sauf contre-indication)." },
        ],
    },
    {
        emoji: "😱",
        title: "Dent arrachée (avulsion)",
        items: [
            { text: "Agissez vite, c'est une urgence absolue !" },
            { text: "Tenez la dent par la couronne (la partie blanche), jamais par la racine." },
            { text: "Rincez-la délicatement 10 sec sous l'eau froide, sans la frotter." },
            { text: "Essayez de la remettre dans son alvéole (sans forcer) ou gardez-la dans un verre de lait ou votre salive." },
        ],
    },
    {
        emoji: "🤕",
        title: "Mal de dents intense",
        items: [
            { text: "Rincez-vous la bouche avec de l'eau tiède salée." },
            { text: "Utilisez délicatement du fil dentaire pour enlever tout débris coincé." },
            { text: "Appliquez une compresse froide à l'extérieur de la joue." },
            { text: "Évitez de mettre de l'aspirine directement sur la gencive." },
        ],
    },
    {
        emoji: "👑",
        title: "Perte d'une couronne ou d'un plombage",
        items: [
            { text: "Gardez la couronne ou le plombage si vous le trouvez." },
            { text: "Vous pouvez appliquer un coton-tige imbibé de clou de girofle sur la dent sensible pour calmer la douleur." },
            { text: "Prenez rendez-vous rapidement pour éviter d'abîmer la dent." },
        ],
    },
    {
        emoji: "😷",
        title: "Abcès ou gonflement important",
        items: [
            { text: "C'est une infection, ne tardez pas.", isWarning: true },
            { text: "Rincez-vous plusieurs fois par jour avec de l'eau tiède et salée." },
            { text: "Ne percez jamais l'abcès vous-même !", isWarning: true },
            { text: "Si le gonflement s'étend ou que vous avez de la fièvre, consultez sans attendre." },
        ],
    },
    {
        emoji: "🩸",
        title: "Saignement important des gencives",
        items: [
            { text: "Après un choc, appliquez une compresse de gaze propre sur la zone et maintenez une pression ferme pendant 10-15 minutes." },
            { text: "Si le saignement ne s'arrête pas, c'est une urgence." },
            { text: "Rincez-vous doucement à l'eau froide." },
        ],
    },
];

// Données pour la section "Quand appeler ?"
const reasons = [
    "Douleur insupportable",
    "Dent cassée ou arrachée",
    "Saignement qui ne s'arrête pas",
    "Gonflement du visage ou de la bouche",
    "Traumatisme facial",
];

// Composant pour les cartes d'urgence
const EmergencyCard = component$(({ emoji, title, items }: { emoji: string; title: string; items: { text: string; isWarning?: boolean }[] }) => (
    <div class={["rounded-xl shadow-lg  hover:shadow-xl transition-shadow duration-300", flex({ theme: "whiteBg", direction: 'column', background: true })]}>
        <div class="mb-4">{emoji}</div>
        <h3 class={[textRecipe({ font: 'span', textAlign: 'left', })]}>{title}</h3>
        <ul class="gap-y-2 text-gray-700">
            {items.map((item, index) => (
                <li key={index} class="flex items-start">
                    <span class={`mr-2 ${item.isWarning ? "text-red-500 font-bold" : "text-blue-500"}`}>
                        {item.isWarning ? "!" : "•"}
                    </span>
                    {item.isWarning ? <strong>{item.text}</strong> : item.text}
                </li>
            ))}
        </ul>
    </div>
));

export default component$(() => {
    return (
        <>
            {/* Section Hero */}
            <section class="w-full bg-gradient-to-br from-blue-600 to-blue-800 text-white">
                <div class={[flex({ theme: "accent", direction: 'column', background: true, paddingInline: 'medium', side: 5, gap: 'lg', paddingBlock: 'lg' })]}>
                    <h1 class="text-4xl md:text-5xl font-extrabold mb-4">Urgence Dentaire ?</h1>
                    <p class="text-xl md:text-2xl mb-8 font-light">
                        Ne paniquez pas. Une aide professionnelle est disponible 24h/24 et 7j/7.
                    </p>

                    <div class={[flex({ direction: 'column', side: 5, gap: 'md', theme: "whiteBg", background: true }), "p-10 rounded-xl"]}>
                        <p class={textRecipe({ textAlign: 'center', font: 'title' })}>Appelez-nous immédiatement</p>
                        <a href="tel:+33612345678" class="block">
                            <span class={[textSprinkles({
                                fontSize: ["lg", "xl", "3xl"],
                                color: 'accent',
                                fontFamily: 'numito',
                                textAlign: 'center',
                                marginInline: 'auto',
                                cursor: 'pointer'
                            })]}>06 12 34 56 78</span>
                        </a>
                        <p class={textRecipe({ textAlign: 'center', font: 'span' })}>Ligne d'urgence dédiée - disponible jour et nuit</p>
                    </div>
                </div>
            </section>

            {/* Section principale */}
            <div class="w-full container mx-auto px-4 py-12 md:py-20">
                {/* Section : Que faire en attendant ? */}
                <section class={flex({ direction: 'column', side: 5, gap: '2rem', theme: "whiteBg", background: false, paddingBlock: 'md' })}>
                    <h2 class="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
                        Les bons réflexes en attendant le dentiste
                    </h2>
                    <p class={textRecipe({ textAlign: 'center', font: 'text',display:'block',marginBlock:'md' })}>
                        Voici les gestes de premier secours à adopter selon votre situation. Ces conseils sont temporaires ; un rendez-vous en urgence reste indispensable.
                    </p>

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {emergencies.map((emergency, index) => (
                            <EmergencyCard key={index} {...emergency} />
                        ))}
                    </div>
                </section>

                {/* Section : Quand appeler ? */}
                <section class="bg-blue-50 rounded-2xl md:p-12 text-center ">
                    <h2 class="text-2xl md:text-3xl font-bold mb-4">Quand appeler le numéro d'urgence ?</h2>
                    <p class={textRecipe({ textAlign: 'center', font: 'text', display: 'block', marginBlock: 'md' })}>
                        Contactez-nous sans délai si vous êtes confronté à l'une de ces situations :
                    </p>
                    <div class={[flex({ direction: 'row', wrap: true, side: 5, theme: "whiteBg", background: false, gap: '1.75rem' })]}>
                        {reasons.map((reason, index) => (
                            <span key={index} class={["rounded-full shadow", textSprinkles({
                                bc: "secondary",
                                px: '1.75rem',
                                py: 'xs',
                                fontStyle: 'inherit',

                            }),
                                textRecipe({
                                    textAlign: 'center',
                                    font: 'text',
                                    hover: true
                                })]}>
                                {reason}
                            </span>
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
});
