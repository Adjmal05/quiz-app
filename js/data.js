// data.js - Questions du quiz - développé par Adjmal

const QUIZ_DATA = {
  culture: {
    id: "culture",
    name: "Culture Générale",
    icon: "🌍",
    color: "#7c5cfc",
    desc: "Histoire, géographie, arts et littérature",
    questions: [
      {
        id: "c1",
        question: "Quel est le plus long fleuve du monde ?",
        answers: ["Le Nil", "L'Amazone", "Le Yangtsé", "Le Mississippi"],
        correct: 1,
        explanation: "L'Amazone est reconnu comme le plus long fleuve du monde avec ~7 062 km selon les mesures récentes."
      },
      {
        id: "c2",
        question: "En quelle année a eu lieu la Révolution française ?",
        answers: ["1776", "1789", "1804", "1815"],
        correct: 1,
        explanation: "La Révolution française débuta en 1789 avec la prise de la Bastille le 14 juillet."
      },
      {
        id: "c3",
        question: "Qui a peint la Joconde ?",
        answers: ["Michel-Ange", "Raphaël", "Léonard de Vinci", "Botticelli"],
        correct: 2,
        explanation: "Léonard de Vinci a peint la Joconde (La Gioconda) entre 1503 et 1519."
      },
      {
        id: "c4",
        question: "Quelle est la capitale de l'Australie ?",
        answers: ["Sydney", "Melbourne", "Brisbane", "Canberra"],
        correct: 3,
        explanation: "Canberra est la capitale de l'Australie depuis 1913, et non Sydney comme beaucoup le croient."
      },
      {
        id: "c5",
        question: "Combien de continents y a-t-il sur Terre ?",
        answers: ["5", "6", "7", "8"],
        correct: 2,
        explanation: "Il y a 7 continents : Afrique, Antarctique, Asie, Europe, Amérique du Nord, Amérique du Sud, Océanie."
      },
      {
        id: "c6",
        question: "Quel auteur a écrit 'Les Misérables' ?",
        answers: ["Honoré de Balzac", "Émile Zola", "Victor Hugo", "Alexandre Dumas"],
        correct: 2,
        explanation: "Victor Hugo a publié Les Misérables en 1862, une œuvre majeure de la littérature française."
      },
      {
        id: "c7",
        question: "Combien de pays composent l'Union Européenne (2024) ?",
        answers: ["25", "27", "28", "30"],
        correct: 1,
        explanation: "L'Union Européenne compte 27 membres depuis le retrait du Royaume-Uni (Brexit) en 2020."
      },
      {
        id: "c8",
        question: "Quel est le symbole chimique de l'or ?",
        answers: ["Go", "Ag", "Au", "Or"],
        correct: 2,
        explanation: "Au vient du latin 'Aurum', qui signifie or."
      },
      {
        id: "c9",
        question: "Qui a rédigé la Déclaration d'Indépendance américaine ?",
        answers: ["George Washington", "Benjamin Franklin", "John Adams", "Thomas Jefferson"],
        correct: 3,
        explanation: "Thomas Jefferson est le principal rédacteur de la Déclaration d'Indépendance de 1776."
      },
      {
        id: "c10",
        question: "Quelle montagne est la plus haute du monde ?",
        answers: ["K2", "Mont Blanc", "L'Everest", "Kilimandjaro"],
        correct: 2,
        explanation: "L'Everest culmine à 8 849 mètres d'altitude, situé dans l'Himalaya entre le Népal et la Chine."
      }
    ]
  },

  science: {
    id: "science",
    name: "Sciences",
    icon: "🔬",
    color: "#43e8a0",
    desc: "Physique, biologie, chimie et astronomie",
    questions: [
      {
        id: "s1",
        question: "Quelle est la formule chimique de l'eau ?",
        answers: ["H3O", "H2O", "HO2", "H2O2"],
        correct: 1,
        explanation: "H₂O : deux atomes d'hydrogène liés à un atome d'oxygène."
      },
      {
        id: "s2",
        question: "Combien y a-t-il d'os dans le corps humain adulte ?",
        answers: ["186", "206", "226", "256"],
        correct: 1,
        explanation: "Le squelette humain adulte est composé de 206 os. Les bébés en ont environ 270."
      },
      {
        id: "s3",
        question: "Quelle planète est la plus grande du système solaire ?",
        answers: ["Saturne", "Uranus", "Neptune", "Jupiter"],
        correct: 3,
        explanation: "Jupiter est la plus grande planète du système solaire, avec un diamètre de ~140 000 km."
      },
      {
        id: "s4",
        question: "À quelle vitesse voyage la lumière (en km/s) ?",
        answers: ["200 000 km/s", "300 000 km/s", "400 000 km/s", "500 000 km/s"],
        correct: 1,
        explanation: "La lumière voyage à 299 792 km/s dans le vide, soit environ 300 000 km/s."
      },
      {
        id: "s5",
        question: "Quel est le numéro atomique du carbone ?",
        answers: ["4", "6", "8", "12"],
        correct: 1,
        explanation: "Le carbone a le numéro atomique 6, ce qui signifie qu'il possède 6 protons."
      },
      {
        id: "s6",
        question: "Quelle théorie explique l'origine de l'univers ?",
        answers: ["Théorie des cordes", "Big Bang", "Relativité générale", "Modèle standard"],
        correct: 1,
        explanation: "La théorie du Big Bang décrit la naissance de l'univers il y a environ 13,8 milliards d'années."
      },
      {
        id: "s7",
        question: "Qui a découvert la pénicilline ?",
        answers: ["Louis Pasteur", "Marie Curie", "Alexander Fleming", "Robert Koch"],
        correct: 2,
        explanation: "Alexander Fleming a découvert la pénicilline en 1928 en observant une moisissure sur une culture."
      },
      {
        id: "s8",
        question: "Quelle est l'unité de mesure de la fréquence ?",
        answers: ["Volt", "Watt", "Hertz", "Joule"],
        correct: 2,
        explanation: "Le Hertz (Hz) mesure la fréquence, c'est-à-dire le nombre de cycles par seconde."
      },
      {
        id: "s9",
        question: "Combien de chromosomes possède l'être humain ?",
        answers: ["23", "44", "46", "48"],
        correct: 2,
        explanation: "L'être humain possède 46 chromosomes (23 paires), dont une paire de chromosomes sexuels."
      },
      {
        id: "s10",
        question: "Quel gaz est essentiel à la respiration humaine ?",
        answers: ["Azote", "Dioxyde de carbone", "Oxygène", "Argon"],
        correct: 2,
        explanation: "L'oxygène (O₂) est indispensable à la respiration cellulaire pour produire de l'énergie."
      }
    ]
  },

  sport: {
    id: "sport",
    name: "Sport",
    icon: "⚽",
    color: "#ff6b6b",
    desc: "Football, tennis, JO et champions du monde",
    questions: [
      {
        id: "sp1",
        question: "Combien de fois le Brésil a-t-il remporté la Coupe du Monde de football ?",
        answers: ["3", "4", "5", "6"],
        correct: 2,
        explanation: "Le Brésil est le pays le plus titré avec 5 Coupes du Monde (1958, 1962, 1970, 1994, 2002)."
      },
      {
        id: "sp2",
        question: "Dans quel sport utilise-t-on un volant ?",
        answers: ["Tennis de table", "Squash", "Badminton", "Padel"],
        correct: 2,
        explanation: "Le volant (shuttlecock) est utilisé au badminton. Il peut atteindre plus de 400 km/h en smash."
      },
      {
        id: "sp3",
        question: "Quelle ville a accueilli les JO d'été de 2020 (2021) ?",
        answers: ["Pékin", "Paris", "Londres", "Tokyo"],
        correct: 3,
        explanation: "Les JO de Tokyo 2020 ont été reportés en 2021 en raison de la pandémie de COVID-19."
      },
      {
        id: "sp4",
        question: "Combien de joueurs compose une équipe de basketball ?",
        answers: ["4", "5", "6", "7"],
        correct: 1,
        explanation: "Un équipe de basketball joue avec 5 joueurs sur le terrain, avec des remplaçants sur le banc."
      },
      {
        id: "sp5",
        question: "Quel est le record du monde du 100m sprint ?",
        answers: ["9.58s", "9.63s", "9.69s", "9.74s"],
        correct: 0,
        explanation: "Usain Bolt a établi le record du monde du 100m à 9.58 secondes le 16 août 2009 à Berlin."
      },
      {
        id: "sp6",
        question: "Combien de sets faut-il gagner pour remporter un match de tennis en Grand Chelem (hommes) ?",
        answers: ["2", "3", "4", "5"],
        correct: 1,
        explanation: "En Grand Chelem masculin, il faut gagner 3 sets sur 5 pour remporter le match."
      },
      {
        id: "sp7",
        question: "Quel pays a inventé le judo ?",
        answers: ["Chine", "Corée", "Japon", "Thaïlande"],
        correct: 2,
        explanation: "Le judo a été créé au Japon en 1882 par Jigoro Kano, qui synthétisa plusieurs arts martiaux."
      },
      {
        id: "sp8",
        question: "Combien de points vaut un essai au rugby à XV ?",
        answers: ["3", "4", "5", "6"],
        correct: 2,
        explanation: "Un essai vaut 5 points au rugby à XV. La transformation réussie rapporte 2 points supplémentaires."
      },
      {
        id: "sp9",
        question: "Quel est le tour cycliste le plus célèbre au monde ?",
        answers: ["Tour d'Italie", "Tour d'Espagne", "Tour de France", "Tour de Suisse"],
        correct: 2,
        explanation: "Le Tour de France, créé en 1903, est la course cycliste la plus connue avec 21 étapes."
      },
      {
        id: "sp10",
        question: "Dans quel sport pratique-t-on le 'slam dunk' ?",
        answers: ["Volleyball", "Basketball", "Handball", "Rugby"],
        correct: 1,
        explanation: "Le slam dunk au basketball consiste à enfoncer le ballon directement dans le panier en sautant."
      }
    ]
  },

  tech: {
    id: "tech",
    name: "Technologie",
    icon: "💻",
    color: "#ffcc44",
    desc: "Informatique, IA, internet et innovations",
    questions: [
      {
        id: "t1",
        question: "Qui est le fondateur de Microsoft ?",
        answers: ["Steve Jobs", "Bill Gates", "Elon Musk", "Jeff Bezos"],
        correct: 1,
        explanation: "Bill Gates a cofondé Microsoft avec Paul Allen en 1975. Il en fut PDG jusqu'en 2000."
      },
      {
        id: "t2",
        question: "Que signifie l'acronyme 'URL' ?",
        answers: ["Universal Resource Link", "Uniform Resource Locator", "Unified Reference Lookup", "Universal Route Label"],
        correct: 1,
        explanation: "URL = Uniform Resource Locator. C'est l'adresse qui identifie une ressource sur internet."
      },
      {
        id: "t3",
        question: "En quelle année a été créé internet (ARPANET) ?",
        answers: ["1959", "1969", "1979", "1989"],
        correct: 1,
        explanation: "ARPANET, le précurseur d'internet, a été créé en 1969 par le département américain de la Défense."
      },
      {
        id: "t4",
        question: "Quel langage de programmation a été créé par Guido van Rossum ?",
        answers: ["Java", "Ruby", "Python", "Go"],
        correct: 2,
        explanation: "Python a été créé par Guido van Rossum et publié en 1991. Son nom vient des Monty Python."
      },
      {
        id: "t5",
        question: "Combien de bits y a-t-il dans un octet ?",
        answers: ["4", "8", "16", "32"],
        correct: 1,
        explanation: "Un octet (byte) est composé de 8 bits. C'est l'unité de base en informatique."
      },
      {
        id: "t6",
        question: "Quel est le système d'exploitation le plus utilisé sur mobile ?",
        answers: ["iOS", "Android", "Windows Mobile", "Symbian"],
        correct: 1,
        explanation: "Android détient environ 72% des parts de marché mondial des smartphones (2024)."
      },
      {
        id: "t7",
        question: "Qu'est-ce que l'IA générative ?",
        answers: ["Une IA qui joue aux jeux vidéo", "Une IA qui génère du contenu (texte, images…)", "Une IA robotique", "Une IA médicale"],
        correct: 1,
        explanation: "L'IA générative crée du nouveau contenu (texte, image, son, code) à partir de données d'entraînement."
      },
      {
        id: "t8",
        question: "Quel protocole sécurise les communications web ?",
        answers: ["HTTP", "FTP", "HTTPS", "SMTP"],
        correct: 2,
        explanation: "HTTPS (HTTP Secure) utilise le chiffrement TLS/SSL pour sécuriser les échanges sur internet."
      },
      {
        id: "t9",
        question: "Quelle entreprise a développé le processeur M1 ?",
        answers: ["Intel", "AMD", "Qualcomm", "Apple"],
        correct: 3,
        explanation: "Apple a lancé le chip M1 en novembre 2020, marquant la transition des Mac vers l'architecture ARM."
      },
      {
        id: "t10",
        question: "Combien de milliards d'utilisateurs actifs Facebook a-t-il (2024) ?",
        answers: ["1 milliard", "2 milliards", "3 milliards", "4 milliards"],
        correct: 2,
        explanation: "Meta (Facebook) revendique environ 3 milliards d'utilisateurs actifs mensuels en 2024."
      }
    ]
  },

  geo: {
    id: "geo",
    name: "Géographie",
    icon: "🗺️",
    color: "#4cc9f0",
    desc: "Capitales, pays, reliefs et océans du monde",
    questions: [
      {
        id: "g1",
        question: "Quelle est la capitale du Japon ?",
        answers: ["Osaka", "Kyoto", "Tokyo", "Hiroshima"],
        correct: 2,
        explanation: "Tokyo est la capitale du Japon depuis 1869. C'est l'une des villes les plus peuplées au monde."
      },
      {
        id: "g2",
        question: "Quel est le plus grand pays du monde par superficie ?",
        answers: ["Canada", "Chine", "Russie", "États-Unis"],
        correct: 2,
        explanation: "La Russie est le plus grand pays au monde avec 17,1 millions de km², soit 11% des terres émergées."
      },
      {
        id: "g3",
        question: "Sur quel continent se trouve le Sahara ?",
        answers: ["Asie", "Amérique du Sud", "Afrique", "Australie"],
        correct: 2,
        explanation: "Le Sahara est le plus grand désert chaud du monde, situé en Afrique du Nord."
      },
      {
        id: "g4",
        question: "Combien d'océans y a-t-il sur Terre ?",
        answers: ["3", "4", "5", "6"],
        correct: 2,
        explanation: "Il y a 5 océans : Pacifique, Atlantique, Indien, Arctique et Austral (reconnu officiellement en 2021)."
      },
      {
        id: "g5",
        question: "Quelle est la capitale du Brésil ?",
        answers: ["Rio de Janeiro", "São Paulo", "Salvador", "Brasília"],
        correct: 3,
        explanation: "Brasília est la capitale du Brésil depuis 1960, construite spécialement pour ce rôle."
      },
      {
        id: "g6",
        question: "Quelle mer sépare l'Europe de l'Afrique à l'ouest ?",
        answers: ["Mer Rouge", "Mer Noire", "Mer Méditerranée", "Mer Caspienne"],
        correct: 2,
        explanation: "La Méditerranée sépare l'Europe de l'Afrique. Le détroit de Gibraltar est son point le plus étroit."
      },
      {
        id: "g7",
        question: "Dans quel pays se trouve le Machu Picchu ?",
        answers: ["Chili", "Bolivie", "Colombie", "Pérou"],
        correct: 3,
        explanation: "Le Machu Picchu est une citadelle inca du XVe siècle située dans les Andes du Pérou."
      },
      {
        id: "g8",
        question: "Quelle est la plus grande île du monde ?",
        answers: ["Bornéo", "Groenland", "Nouvelle-Guinée", "Madagascar"],
        correct: 1,
        explanation: "Le Groenland, avec 2,17 millions de km², est la plus grande île (hors continent) du monde."
      },
      {
        id: "g9",
        question: "Quel pays a la plus longue frontière terrestre ?",
        answers: ["Chine", "Russie", "Canada", "États-Unis"],
        correct: 1,
        explanation: "La Russie possède la plus longue frontière terrestre avec ~22 000 km, touchant 14 pays."
      },
      {
        id: "g10",
        question: "Quelle est la capitale de l'Afrique du Sud ?",
        answers: ["Johannesburg", "Le Cap", "Pretoria", "Durban"],
        correct: 2,
        explanation: "Pretoria est la capitale administrative. L'Afrique du Sud a 3 capitales pour ses 3 pouvoirs."
      }
    ]
  },

  cinema: {
    id: "cinema",
    name: "Cinéma",
    icon: "🎬",
    color: "#f72585",
    desc: "Films cultes, réalisateurs et récompenses",
    questions: [
      {
        id: "ci1",
        question: "Qui a réalisé Titanic (1997) ?",
        answers: ["Steven Spielberg", "James Cameron", "Ridley Scott", "Christopher Nolan"],
        correct: 1,
        explanation: "James Cameron a réalisé Titanic en 1997. Le film remporta 11 Oscars dont Meilleur Film."
      },
      {
        id: "ci2",
        question: "Quel film a remporté le plus d'Oscars dans l'histoire ?",
        answers: ["Gone with the Wind", "Ben-Hur", "Titanic", "The Lord of the Rings: Return of the King"],
        correct: 3,
        explanation: "Titanic, Ben-Hur et Return of the King détiennent ex-aequo le record avec 11 Oscars chacun."
      },
      {
        id: "ci3",
        question: "Dans quel film entend-on 'May the Force be with you' ?",
        answers: ["Avatar", "Star Trek", "Star Wars", "Interstellar"],
        correct: 2,
        explanation: "Cette réplique iconique est tirée de la saga Star Wars, créée par George Lucas en 1977."
      },
      {
        id: "ci4",
        question: "Quel acteur joue Iron Man dans le MCU ?",
        answers: ["Chris Evans", "Chris Hemsworth", "Mark Ruffalo", "Robert Downey Jr."],
        correct: 3,
        explanation: "Robert Downey Jr. incarne Tony Stark / Iron Man dans le Marvel Cinematic Universe depuis 2008."
      },
      {
        id: "ci5",
        question: "En quelle année est sorti le premier film Jurassic Park ?",
        answers: ["1990", "1991", "1993", "1995"],
        correct: 2,
        explanation: "Jurassic Park de Steven Spielberg est sorti en 1993, basé sur le roman de Michael Crichton."
      },
      {
        id: "ci6",
        question: "Qui a réalisé Inception (2010) ?",
        answers: ["David Fincher", "Denis Villeneuve", "Christopher Nolan", "Darren Aronofsky"],
        correct: 2,
        explanation: "Christopher Nolan a réalisé et écrit Inception, sorti en 2010 avec Leonardo DiCaprio."
      },
      {
        id: "ci7",
        question: "Quel studio a produit le film 'Le Roi Lion' (1994) ?",
        answers: ["DreamWorks", "Pixar", "Universal", "Disney"],
        correct: 3,
        explanation: "Le Roi Lion est une production Walt Disney Pictures, sortie en 1994 et devenue un classique."
      },
      {
        id: "ci8",
        question: "Quel film a généré le plus de recettes au box-office mondial ?",
        answers: ["Avengers: Endgame", "Titanic", "Avatar", "Star Wars VII"],
        correct: 2,
        explanation: "Avatar (2009) de James Cameron détient le record avec plus de 2,9 milliards de $ de recettes."
      },
      {
        id: "ci9",
        question: "Quelle actrice joue Hermione Granger dans Harry Potter ?",
        answers: ["Keira Knightley", "Emma Watson", "Natalie Portman", "Emily Blunt"],
        correct: 1,
        explanation: "Emma Watson joue Hermione Granger dans les 8 films Harry Potter de 2001 à 2011."
      },
      {
        id: "ci10",
        question: "Quel est le film d'animation Pixar sorti en 2001 ?",
        answers: ["Ratatouille", "WALL-E", "Monsters, Inc.", "Brave"],
        correct: 2,
        explanation: "Monsters, Inc. est sorti en novembre 2001, réalisé par Pete Docter et David Silverman."
      }
    ]
  }
};
