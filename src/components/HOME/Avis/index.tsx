import {
  $,
  component$,
  useOn,
  useSignal,
  useStylesScoped$,
} from "@builder.io/qwik";
import { Image } from "@unpic/qwik";
import { container } from "~/styles/container/index.css";
import styles from "./Testimonial-section.css?inline";

interface Testimonial {
  id: number;
  quote: string;
  authorName: string;
  authorTitle: string;
  authorImage: string;
}
// men.avif?jsx
const testimonialData: Testimonial[] = [
  {
    id: 1,
    quote:
      "Le docteur Bartoli est très gentille bienveillante et douce dans son travail merci au docteur Bartoli",
    authorName: "Corinne Delrieu",
    authorTitle: "AVIS GOOGLE",
    authorImage: "https://i.pravatar.cc/50?img=1",
  },
  {
    id: 2,
    quote:
      "Une expérience dentaire au top chez la Dr. Alexandra Bartoli ! Le détartrage était super bien fait, la prise de la panoramique dentaire s'est déroulée sans souci. Tout s'est passé sans accroc, avec une équipe sympa, y compris son assistante. Si vous cherchez une bonne adresse pour des soins dentaires, je recommande vivement le cabinet de la Dr. Bartoli. Efficace et sans chichis, une valeur sûre !",
    authorName: "Jane Doe",
    authorTitle: "AVIS GOOGLE",
    authorImage: "https://i.pravatar.cc/50?img=2",
  },
  {
    id: 3,
    quote:
      "Le Dr Bartoli est très professionnelle et soucieuse du bien-être de ses patients. Elle prend le temps d'expliquer les choses et elle prodigue les soins avec beaucoup de douceur. Le cabinet est moderne et propre et le rendez-vous se déroule en musique, ce qui est propice à plus de détente. Rien à redire, que du positif !",
    authorName: "Marie Dupont",
    authorTitle: "AVIS GOOGLE",
    authorImage: "https://i.pravatar.cc/50?img=3",
  },
];
interface TestimonialLeftProps {
  note: number;
}
const Testimonialleft = component$<TestimonialLeftProps>((props) => {
  useStylesScoped$(styles);
  return (
    <div class="testimonial-left">
      <div class="image-container">
        <div class="testimonial-image" />
        <div class="rating-overlay">
          <div class="rating-score">{props.note}/5</div>
          <div class="rating-details">
            <p class="rating-description">
              Note donnée par nos patients après leur visite
            </p>
            <div class="rating-stars">
              {Array.from({ length: 5 }).map((_, index) => (
                <span key={`star-${index}`}>
                  {index < props.note ? "★" : "☆"}
                </span>
              ))}
              <span class="rating-reason">Pour un service excellent</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
const TestimonialSection = component$(() => {
  useStylesScoped$(styles);

  const currentIndex = useSignal<number>(0);
  const note = useSignal<number>(5);

  if (note.value > 5) {
    throw new Error("La note maximale est de 5 étoiles.");
  }

  const goToPrevious = $(() => {
    if (currentIndex && currentIndex.value > 0) {
      currentIndex.value--;
    }
  });

  const goToNext = $(() => {
    if (currentIndex && currentIndex.value < testimonialData.length - 1) {
      currentIndex.value++;
    }
  });

  useOn(
    "keydown",
    $((event) => {
      if (!currentIndex) return;

      switch (event.key) {
        case "ArrowLeft":
          if (currentIndex.value > 0) {
            currentIndex.value--;
          }
          break;
        case "ArrowRight":
          if (currentIndex.value < testimonialData.length - 1) {
            currentIndex.value++;
          }
          break;
      }
    }),
  );
  return (
    <section
      class={[container.child({ size: "medium" }), "testimonial-section"]}
    >
      {/* Partie gauche - Image et Note */}
      <Testimonialleft note={note.value} />

      {/* Partie droite - Témoignages */}
      <div class="testimonial-right">
        <p class="testimonial-pre-title">+ TÉMOIGNAGES</p>
        <h2 class="testimonial-title">
          Ce que disent nos <span class="highlight">patients</span>
        </h2>
        <p class="testimonial-subtitle">
          Nous mettons un point d'honneur à vous offrir des soins de qualité
          dans un environnement chaleureux.
        </p>

        <div class="carousel-container">
          {testimonialData.map((testimonial, index) => (
            <div
              key={testimonial.id}
              class={{
                "carousel-slide": true,
                active: index === currentIndex.value,
              }}
            >
              <span class="quote-icon"> </span>
              <blockquote class="quote-text">{testimonial.quote}</blockquote>
              <div class="author-info">
                <Image
                  src={testimonial.authorImage}
                  alt={testimonial.authorName}
                  class="author-image rounded-3xl"
                  width={50}
                  height={50}
                />
                <div class="author-details">
                  <p class="author-name">{testimonial.authorName}</p>
                  <p class="author-title">{testimonial.authorTitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation du Carousel */}
        <div class="carousel-nav">
          <button
            type="button"
            class="nav-button prev"
            aria-label="Témoignage précédent"
            onClick$={goToPrevious}
            disabled={currentIndex.value === 0}
          >
            ←
          </button>
          <button
            type="button"
            class="nav-button next"
            aria-label="Témoignage suivant"
            onClick$={goToNext}
            disabled={currentIndex.value === testimonialData.length - 1}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
});

export default component$(() => {
  return (
    <section
      class={container.parent({
        theme: "darkBlueBanner",
        paddingBlock: "md",
        marginBlock: "md",
        background: false,
      })}
    >
      <TestimonialSection />
    </section>
  );
});
