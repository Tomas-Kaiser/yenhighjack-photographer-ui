import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "cz",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    returnObjects: true,
    resources: {
      en: {
        translation: {
          // Title
          app_title: "Jan Hajek | Photographer",
          // General
          albums: "Albums",

          // Navbar:
          home: "Home",
          about: "About",
          contact: "Contact",
          name: "Jan Hajek",

          // Landing Page
          welcomeSlogan: "Photography is a poetry for an eye",
          ctaBtn: "Explore My Art",
          subHeading: "A FEW TOP PHOTOS",

          // Albums Menu
          albumSubText: "Explore more of my work",
          wedding: "Wedding 2025",
          portraits: "Portraits",

          // Album Page
          subHeadingAlbumPage: "Explore my work",

          // Contact Page
          contactMe: "Contact Me",
          contactMeSubText:
            "Send me a message by filling out the form below or clicking on the instagram icon",
          yourName: "Your Name:",
          yourEmail: "Your Email:",
          message: "Message:",
          successSubmitMessage:
            "Your message has been sent successfully! Jan will be in touch with you shortly.",
          errorSubmitMessage:
            "There was an error sending your message. Please try again later.",

          // About Page
          aboutMe: "About Me",
          aboutMeText: {
            line1: `Hello! I am a photographer with a passion for capturing the beauty of people and fashion.
                        My name is Jan Hajek, and my heart beats for the art that can be expressed through photography.
                        From the moment I first picked up a camera, I realized that my mission is to convey the uniqueness
                        of each individual through my lens. I specialize in portrait and fashion photography,
                        where I strive to capture not only physical beauty but also the personality and emotions of my
                        subjects. My goal is not just to create an image but to tell a story. Each photograph is
                        an opportunity for me to express creativity and originality, whether I’m working with professional
                        models or people from the streets. As a young and creative artist, I love what I do,
                        and I aim to convey this love through every shot. My photos are not just static images;
                        they are a living expression of my view of the world.`,
            line2: `If you’re looking for photographs that will not only captivate you but also inspire you,
                        you’re in the right place. I would be delighted to help you express your uniqueness through my lens.
                        Be a part of my art, and let’s create something unforgettable together.`,
            line3: `Looking forward to meeting you and collaborating on your story!`,
            line4: `With love, Jan Hajek`,
          },

          // Footer
          created: "created by",
        },
      },
      cz: {
        translation: {
          // Title
          app_title: "Jan Hajek | Fotograf",

          // General
          albums: "Alba",

          // Navbar:
          home: "Domů",
          about: "O mně",
          contact: "Kontakt",
          name: "Jan Hájek",

          // Landing Page
          welcomeSlogan: "Fotografie je poezie pro oko",
          ctaBtn: "Prozkoumejte mé umění",
          subHeading: "Pár top fotek k nahlédnutí",

          // Albums Menu
          albumSubText: "Prozkoumejte mé alba",
          wedding: "Svatba 2025",
          portraits: "Portréty",

          // Album Page
          subHeadingAlbumPage: "Prozkoumejte moji práci",

          // Contact Page
          contactMe: "Kontaktujte mě",
          contactMeSubText:
            "Pošlete mi zprávu vyplněním formuláře níže nebo kliknutím na ikonu instagramu",
          yourName: "Vaše jméno:",
          yourEmail: "Váš email:",
          message: "Zpráva:",
          successSubmitMessage:
            "Vaše zpráva byla úspěšně odeslána! Jan se s vámi brzy spojí.",
          errorSubmitMessage:
            "Při odesílání zprávy došlo k chybě. Zkuste to prosím později.",

          // About page
          aboutMe: "O mně",
          aboutMeText: {
            line1: `Ahoj! Jsem fotograf s vášní pro zachycování krásy lidí a módy. 
                        Mé jméno je Jan Hajek, a mé srdce bije pro umění, které lze vyjádřit prostřednictvím fotografií.
                        Od chvíle, kdy jsem poprvé uchopil fotoaparát, jsem si uvědomil, že mé poslání je přenášet
                        jedinečnost každého jednotlivce do mého objektivu. Specializuji se na portrétní a fashion fotografii,
                        kde se snažím zachytit nejen fyzickou krásu, ale i osobnost a emoce mého subjektu.
                        Mým cílem není pouze vytvořit obraz, ale vyprávět příběh. Každý snímek je pro mě příležitostí
                        vyjádřit kreativitu a originalitu, ať už pracuji s profesionálními modely nebo s lidmi z ulice.
                        Mladý a kreativní, srdcem jsem vášnivý umělec. Miluji to, co dělám, a snažím se tuto lásku přenášet
                        do každého snímku. Mé fotografie nejsou jen statické obrazy, jsou to živé vyjádření mého pohledu na svět.`,
            line2: `Pokud hledáte fotografie, které vás nejenom zaujmou, ale i nadchnou, jste na správném místě.
                        Rád bych vám pomohl vyjádřit vaši jedinečnost skrze mou objektivu.
                        Buďte součástí mého umění a pojďme společně vytvořit něco nezapomenutelného.`,
            line3: `Těším se na setkání s vámi a na spolupráci na vašem příběhu!`,
            line4: `S láskou, Jan Hajek`,
          },

          // Footer
          created: "vytvořil",
        },
      },
    },
  });

export default i18n;
