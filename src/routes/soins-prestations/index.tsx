import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { flex, grid, textRecipe, textSprinkles } from "~/styles/index.css";
import * as s from "./soins.css";
import Table from "./table";
export default component$(() => {
  return (
    <main class={s.pageContainer}>
      {/* Hero Section */}
      <section>
        <div
          class={[grid({background: false, numberColumn: 3, gap: "lg", paddingBlock: "lg",theme: "blueLightBg", })]}
        >
          {/* Placeholder pour l'image d'en-tête */}
          <div class={s.heroImagePlaceholder}>Image du Cabinet Hayat</div>

          <h1
            class={textRecipe({
              font: "title",
              textAlign: "center",
              marginBlock: "lg",
            })}
          >
            Nos Soins et Prestations
          </h1>
          <p
            class={[
              textRecipe({
                font: "text",
                textAlign: "center",
                lineHeight: "relaxed",
              }),
              textSprinkles({ fontSize: ["lg", "xl"] }),
            ]}
          >
            Chez <strong>Cabinet Hayat</strong>, nous mettons tout en œuvre pour
            vous offrir des soins dentaires de qualité, adaptés à vos besoins et
            à ceux de toute votre famille. Notre équipe de professionnels
            qualifiés utilise des technologies modernes pour garantir des
            traitements efficaces, indolores et personnalisés.
          </p>
        </div>
      </section>

      {/* Soins Courants */}
      <section>
        <div
          class={flex({
            direction: "column",
            theme: "whiteBg",
            background: true,
            paddingInline: "medium",
            side: 5,
            gap: "xl",
            paddingBlock: "xl",
          })}
        >
          <h2
            class={[
              s.sectionTitle,
              textRecipe({
                font: "title",
                textAlign: "center",
              }),
            ]}
          >
            Soins Courants
          </h2>
          <p class={s.sectionDescription}>
            Pour maintenir une hygiène bucco-dentaire optimale et prévenir les
            problèmes dentaires, nous proposons :
          </p>

          <div
            class={grid({
              theme: "whiteBg",
              background: false,
              numberColumn: 2,
              gap: "xl",
              paddingBlock: "lg",
              size:'large'
            })}
          >
            <div class={[s.serviceCard, s.serviceCardHover]}>
              <div class={s.serviceImagePlaceholder}>Image Détartrage</div>
              <h3
                class={textRecipe({
                  font: "span",
                  marginBlock: "sm",
                })}
              >
                Détartrage et nettoyage
              </h3>
              <p
                class={textRecipe({
                  font: "text",
                  lineHeight: "relaxed",
                })}
              >
                Élimination de la plaque dentaire et du tartre pour prévenir les
                caries et les maladies des gencives.
              </p>
            </div>

            <div class={[s.serviceCard, s.serviceCardHover]}>
              <div class={s.serviceImagePlaceholder}>Image Caries</div>
              <h3
                class={textRecipe({
                  font: "span",
                  marginBlock: "sm",
                })}
              >
                Traitement des caries
              </h3>
              <p
                class={textRecipe({
                  font: "text",
                  lineHeight: "relaxed",
                })}
              >
                Soins conservateurs pour préserver vos dents naturelles.
              </p>
            </div>

            <div class={[s.serviceCard, s.serviceCardHover]}>
              <div class={s.serviceImagePlaceholder}>Image Extractions</div>
              <h3
                class={textRecipe({
                  font: "span",
                  marginBlock: "sm",
                })}
              >
                Extractions dentaires
              </h3>
              <p
                class={textRecipe({
                  font: "text",
                  lineHeight: "relaxed",
                })}
              >
                Retrait des dents de sagesse ou des dents endommagées, dans le
                respect de votre confort.
              </p>
            </div>

            <div class={[s.serviceCard, s.serviceCardHover]}>
              <div class={s.serviceImagePlaceholder}>Image Gencives</div>
              <h3
                class={textRecipe({
                  font: "span",
                  marginBlock: "sm",
                })}
              >
                Soins des gencives
              </h3>
              <p
                class={textRecipe({
                  font: "text",
                  lineHeight: "relaxed",
                })}
              >
                Prévention et traitement des gingivites et parodontites.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Soins Spécialisés */}
      <section>
        <div
          class={flex({
            direction: "column",
            theme: "whiteLD",
            background: true,
            paddingInline: "medium",
            side: 5,
            gap: "xl",
            paddingBlock: "xl",
          })}
        >
          <h2
            class={[
              s.sectionTitle,
              textRecipe({
                font: "title",
                textAlign: "center",
              }),
            ]}
          >
            Soins Spécialisés
          </h2>
          <p class={s.sectionDescription}>
            Pour des besoins plus spécifiques, notre cabinet propose :
          </p>

          <div
            class={grid({
              theme: "whiteLD",
              background: false,
              numberColumn: 2,
              gap: "lg",
              paddingBlock: "lg",
            })}
          >
            <div class={[s.serviceCard, s.serviceCardHover]}>
              <div class={s.serviceImagePlaceholder}>Image Orthodontie</div>
              <h3
                class={textRecipe({
                  font: "span",
                  marginBlock: "sm",
                })}
              >
                Orthodontie
              </h3>
              <p
                class={textRecipe({
                  font: "text",
                  lineHeight: "relaxed",
                })}
              >
                Alignement des dents pour un sourire harmonieux, avec des
                solutions adaptées aux adultes et aux enfants (appareils fixes,
                aligneurs invisibles).
              </p>
            </div>

            <div class={[s.serviceCard, s.serviceCardHover]}>
              <div class={s.serviceImagePlaceholder}>Image Implants</div>
              <h3
                class={textRecipe({
                  font: "span",
                  marginBlock: "sm",
                })}
              >
                Implantologie
              </h3>
              <p
                class={textRecipe({
                  font: "text",
                  lineHeight: "relaxed",
                })}
              >
                Remplacement des dents manquantes par des implants dentaires,
                pour un résultat naturel et durable.
              </p>
            </div>

            <div class={[s.serviceCard, s.serviceCardHover]}>
              <div class={s.serviceImagePlaceholder}>Image Blanchiment</div>
              <h3
                class={textRecipe({
                  font: "span",
                  marginBlock: "sm",
                })}
              >
                Blanchiment dentaire
              </h3>
              <p
                class={textRecipe({
                  font: "text",
                  lineHeight: "relaxed",
                })}
              >
                Éclaircissement professionnel pour un sourire plus éclatant.
              </p>
            </div>

            <div class={[s.serviceCard, s.serviceCardHover]}>
              <div class={s.serviceImagePlaceholder}>Image Prothèses</div>
              <h3
                class={textRecipe({
                  font: "span",
                  marginBlock: "sm",
                })}
              >
                Prothèses dentaires
              </h3>
              <p
                class={textRecipe({
                  font: "text",
                  lineHeight: "relaxed",
                })}
              >
                Couronnes, bridges et prothèses amovibles pour restaurer la
                fonction et l'esthétique de vos dents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Soins Pédiatriques */}
      <section>
        <div
          class={flex({
            direction: "column",
            theme: "whiteBg",
            background: true,
            paddingInline: "medium",
            side: 5,
            gap: "xl",
            paddingBlock: "xl",
          })}
        >
          <h2
            class={[
              s.sectionTitle,
              textRecipe({
                font: "title",
                textAlign: "center",
              }),
            ]}
          >
            Soins Pédiatriques
          </h2>
          <p class={s.sectionDescription}>
            Nous accueillons les enfants dans un environnement rassurant et
            adapté, avec des soins spécialement conçus pour leur santé
            bucco-dentaire :
          </p>

          <div
            class={grid({
              theme: "whiteBg",
              background: false,
              numberColumn: 3,
              gap: "lg",
              paddingBlock: "lg",
            })}
          >
            <div class={s.featureHighlight}>
              <div class={s.featureIcon}>👶</div>
              <h3
                class={textRecipe({
                  font: "span",
                  marginBlock: "sm",
                })}
              >
                Premières visites
              </h3>
              <p
                class={textRecipe({
                  font: "text",
                  lineHeight: "relaxed",
                })}
              >
                Bilan complet pour habituer les enfants aux soins dentaires.
              </p>
            </div>

            <div class={s.featureHighlight}>
              <div class={s.featureIcon}>🛡️</div>
              <h3
                class={textRecipe({
                  font: "span",
                  marginBlock: "sm",
                })}
              >
                Scellements de sillons
              </h3>
              <p
                class={textRecipe({
                  font: "text",
                  lineHeight: "relaxed",
                })}
              >
                Protection des dents définitives contre les caries.
              </p>
            </div>

            <div class={s.featureHighlight}>
              <div class={s.featureIcon}>📚</div>
              <h3
                class={textRecipe({
                  font: "span",
                  marginBlock: "sm",
                })}
              >
                Éducation à l'hygiène dentaire
              </h3>
              <p
                class={textRecipe({
                  font: "text",
                  lineHeight: "relaxed",
                })}
              >
                Conseils pour un brossage efficace et une alimentation saine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Utilisées */}
      <section>
        <div
          class={flex({
            direction: "column",
            theme: "whiteLD",
            background: true,
            paddingInline: "medium",
            side: 5,
            gap: "xl",
            paddingBlock: "xl",
          })}
        >
          <h2
            class={[
              s.sectionTitle,
              textRecipe({
                font: "title",
                textAlign: "center",
              }),
            ]}
          >
            Technologies Utilisées
          </h2>
          <p class={s.sectionDescription}>
            Pour vous offrir les meilleurs soins, nous utilisons des équipements
            modernes et innovants :
          </p>

          <div
            class={grid({
              theme: "whiteLD",
              background: false,
              numberColumn: 3,
              gap: "lg",
              paddingBlock: "lg",
            })}
          >
            <div class={s.technologyCard}>
              <div class={s.technologyImagePlaceholder}>Image Laser</div>
              <div class={s.technologyIcon}>🔬</div>
              <h3
                class={textRecipe({
                  font: "span",
                  marginBlock: "sm",
                })}
              >
                Laser dentaire
              </h3>
              <p
                class={textRecipe({
                  font: "text",
                  textAlign: "center",
                  lineHeight: "relaxed",
                })}
              >
                Pour des traitements précis et indolores.
              </p>
            </div>

            <div class={s.technologyCard}>
              <div class={s.technologyImagePlaceholder}>Image Radiologie</div>
              <div class={s.technologyIcon}>📷</div>
              <h3
                class={textRecipe({
                  font: "span",
                  marginBlock: "sm",
                })}
              >
                Radiologie numérique
              </h3>
              <p
                class={textRecipe({
                  font: "text",
                  textAlign: "center",
                  lineHeight: "relaxed",
                })}
              >
                Images haute résolution avec une exposition réduite aux rayons
                X.
              </p>
            </div>

            <div class={s.technologyCard}>
              <div class={s.technologyImagePlaceholder}>Image Caméra</div>
              <div class={s.technologyIcon}>📹</div>
              <h3
                class={textRecipe({
                  font: "span",
                  marginBlock: "sm",
                })}
              >
                Caméra intra-orale
              </h3>
              <p
                class={textRecipe({
                  font: "text",
                  textAlign: "center",
                  lineHeight: "relaxed",
                })}
              >
                Visualisation détaillée de votre bouche pour un diagnostic
                précis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tarifs et Remboursements */}
      <section>
        <div
          class={flex({
            direction: "column",
            theme: "whiteBg",
            background: true,
            paddingInline: "medium",
            side: 5,
            gap: "xl",
            paddingBlock: "xl",
          })}
        >
          <h2
            class={[
              s.sectionTitle,
              textRecipe({
                font: "title",
                textAlign: "center",
              }),
            ]}
          >
            Tarifs et Remboursements
          </h2>
          <p class={s.sectionDescription}>
            Nous croyons en la transparence tarifaire. Voici quelques exemples
            de nos tarifs (les prix peuvent varier selon la complexité des
            soins) :
          </p>

<Table />

          <div
            class={flex({
              direction: "column",
              gap: "md",
              alignItems: "safeCenter",
            })}
          >
            <p
              class={textRecipe({
                font: "text",
                textAlign: "center",
              })}
            >
              Nous acceptons les paiements par :
            </p>
            <div
              class={flex({
                direction: "row",
                wrap: true,
                gap: "xs",
                justifyContent: "around",
              })}
            >
              <span class={s.paymentMethod}>Carte bancaire</span>
              <span class={s.paymentMethod}>Chèque</span>
              <span class={s.paymentMethod}>Espèces</span>
            </div>
            <p
              class={textRecipe({
                font: "text",
                textAlign: "center",
                marginBlock: "md",
              })}
            >
              Nous proposons des facilités de paiement pour les soins
              importants. N'hésitez pas à nous demander un devis personnalisé.
            </p>
          </div>
        </div>
      </section>

      {/* Prise en Charge */}
      <section>
        <div
          class={flex({
            direction: "column",
            theme: "whiteLD",
            background: true,
            paddingInline: "medium",
            side: 5,
            gap: "xl",
            paddingBlock: "xl",
          })}
        >
          <h2
            class={[
              s.sectionTitle,
              textRecipe({
                font: "title",
                textAlign: "center",
              }),
            ]}
          >
            Prise en Charge
          </h2>

          <div
            class={grid({
              theme: "whiteLD",
              background: false,
              numberColumn: 2,
              gap: "lg",
              paddingBlock: "lg",
            })}
          >
            <div class={s.featureHighlight}>
              <div class={s.featureIcon}>🏥</div>
              <h3
                class={textRecipe({
                  font: "span",
                  marginBlock: "sm",
                })}
              >
                Sécurité Sociale
              </h3>
              <p
                class={textRecipe({
                  font: "text",
                  lineHeight: "relaxed",
                })}
              >
                Nos soins sont conventionnés, ce qui permet un remboursement
                partiel ou total selon les actes.
              </p>
            </div>

            <div class={s.featureHighlight}>
              <div class={s.featureIcon}>📄</div>
              <h3
                class={textRecipe({
                  font: "span",
                  marginBlock: "sm",
                })}
              >
                Mutuelles
              </h3>
              <p
                class={textRecipe({
                  font: "text",
                  lineHeight: "relaxed",
                })}
              >
                Nous établissons des devis détaillés pour faciliter vos demandes
                de remboursement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div
          class={flex({
            direction: "column",
            theme: "darkBlueBanner",
            background: true,
            paddingInline: "medium",
            side: 5,
            gap: "lg",
            alignItems: "safeCenter",
            paddingBlock: "xl",
          })}
        >
          <h2
            class={[
              textRecipe({
                font: "title",
                textAlign: "center",
              }),
              textSprinkles({ color: "primary" }),
            ]}
          >
            Prêt à prendre soin de votre sourire ?
          </h2>
          <p
            class={[
              textRecipe({
                font: "text",
                textAlign: "center",
                lineHeight: "relaxed",
              }),
              textSprinkles({ fontSize: ["lg", "xl"] }),
              textSprinkles({ color: "primary" }),
            ]}
          >
            Prenez rendez-vous dès maintenant en ligne ou par téléphone au
            <strong style={{ color: "#60a5fa", fontWeight: "bold" }}>
              {" "}
              (+33) 1 43 33 21 21
            </strong>
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "evenly",
            }}
          >
            <a
              href="http://www.doctolib.fr"
              class={[s.ctaButton, s.ctaButtonHover]}
            >
              Réserver sur Doctolib
            </a>
            <a href="/contact" class={[s.ctaButton, s.ctaButtonHover]}>
              Nous contacter
            </a>
          </div>
        </div>
      </section>
    </main>
  );
});

export const head: DocumentHead = {
  title: "Nos Soins et Prestations - Cabinet Hayat",
  meta: [
    {
      name: "description",
      content:
        "Découvrez tous les soins dentaires proposés par le Cabinet Hayat à Courbevoie : détartrage, caries, implants, orthodontie, blanchiment. Tarifs transparents et remboursements.",
    },
    {
      name: "keywords",
      content:
        "soins dentaires, cabinet hayat, courbevoie, dentiste, tarifs dentaires, remboursement mutuelle, orthodontie, implants dentaires, blanchiment dentaire",
    },
  ],
};
