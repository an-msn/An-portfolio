import publications1 from "../../assets/publications1.webp";
import portfolio from "../../assets/portfolio.webp";
import bank from "../../assets/Bank app.webp";
import blank from "../../assets/blank.webp";
import frep from "../../assets/frep.webp";
import int_av from "../../assets/int avatar.webp";

export const projectsData = [
  {
    id: 1,
    image: portfolio,
    title: "Portfolio website",
    originalTitle: ["Minimalist developer portfolio using ReactJS"],
    description: [
      "A minimalist ReactJS portfolio showcasing development projects. Features a clean, responsive design and subtle interactions.",
    ],
  },
  {
    id: 2,
    image: frep,
    title: "Frep",
    originalTitle: ["Filtering and Comment Interface - Browser Extension"],
    description: [
      "Browser extension that filters out mature images on websites according to user preferences. ",
      "Provides a user-friendly comment interface for any webpage. ",
      "Utilizes NSFW JS models to detect and block sensitive images. ",
      "Users can train or customize the model by marking specific images. ",
      "Technologies used: JS/TS, React, GraphQL, TensorFlow. ",
    ],
  },
  {
    id: 3,
    image: publications1,
    title: "Publications",
    originalTitle: ["Image Filtering and Universal Comment System"],
    description: [
      "In today’s digital age, the internet connects users to vast amounts of content, some of which may be unsuitable for children.",
      "To address this, the article introduces a sensitive content filtering system using TensorFlow, ensuring safer browsing with up to 99% accuracy.",
      "It also proposes a universal comment box where users can share feedback, upvote or downvote comments, and report misleading information.",
    ],
  },
  {
    id: 4,
    image: bank,
    title: "Banking application",
    originalTitle: ["Banking Application"],
    description: [
      "Implemented a CRUD operations sample project using JSP, Spring, and Spring Boot. ",
      "Employee Registration System (Spring Boot). ",
      "Utilized Postman for rigorous testing and validation of the REST services.",
    ],
  },
  {
    id: 5,
    image: int_av,
    title: "Interactive avatar",
    originalTitle: ["Lightweight SVG avatars"],
    description: [
      `Always interested in creating engaging user interfaces, the interactive avatar experiment is one such project.
      The goal was to make the SVG avatar on the home screen interactive with minimal user input.
      It responds to simple actions: pressing the spacebar makes the eyes pop out, and moving the mouse causes the face, including the eyes and lips, to follow the cursor.
      A minimalist version of this experiment is live on the home screen. Try it out and have fun.`,
    ],
  },
  {
    id: 6,
    image: blank,
    title: "Go guide AI",
    originalTitle: [
      "Your personal planner for any weather, ",
      "Enhanced by OpenAI GPT-4 Intelligence",
    ],
    description: [
      "Your intelligent companion for personalized activity suggestions based on real-time weather conditions. " +
        "The project aims to enhance your daily planning by providing context-aware recommendations, ensuring you make the most of your day, come rain or shine. " +
        "At its core, Go Guide generates intelligent activity suggestions tailored to the current weather, helping you find the perfect thing to do. " +
        "Whether it's a sunny day perfect for outdoor adventures or a rainy afternoon best spent indoors, our AI has you covered. " +
        "Plus, with integrated Google Maps API, GoGuide provide location-based suggestions, helping you discover nearby venues and activities with ease. ",
    ],
  },
];

export const ButtonConfig = {
  1: { type: "view", label: "View Website", url: "#" },
  2: {
    type: "git",
    label: "View Repository",
    url: "https://www.github.com/an-msn/",
  },
  3: {
    type: "read",
    label: "Read Article",
    url: "https://www.ijert.org/research/image-filtering-and-universal-comment-system-IJERTCONV9IS13028.pdf",
  },
  4: {
    type: "git",
    label: "View Repository",
    url: "https://www.github.com/an-msn/",
  },
  5: {
    type: "view",
    label: "Home",
    url: "#home",
  },
  6: { type: "soon", label: "In Development", url: null },
  // 7
};
