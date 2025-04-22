import one from "../assets/svg/projects/movie.png";
import two from "../assets/svg/projects/user.png";
import three from "../assets/svg/projects/hotel.jpg";
import four from "../assets/svg/projects/url.png";
import five from "../assets/svg/projects/pokedex.png";
import six from "../assets/svg/projects/wordle.jpg";
import seven from "../assets/svg/projects/algorithm.png";

export const projectsData = [
  {
    id: 1,
    projectName: "Movie Booking",
    projectDesc:
      "This project aims to build a movie booking system that allow user to search cinemas around them on a map and book movie in a seamless manner",
    tags: ["Nextjs", "Postgres", "Shadcn"],
    code: "https://github.com/Devansh1741/movie-booking",
    demo: "https://github.com/Devansh1741/movie-booking",
    image: one,
  },
  {
    id: 2,
    projectName: "The Wild Oasis (User Side)",
    projectDesc:
      "A user-facing resort booking website that offers a smooth booking experience with real-time availability",
    tags: ["Nextjs", "Supabase", "Styled CSS"],
    code: "https://github.com/Devansh1741/The-Wild-Oasis-User",
    demo: "https://the-wild-oasis-user-devansh.vercel.app/",
    image: two,
  },
  {
    id: 3,
    projectName: "The Wild Oasis (Staff Side)",
    projectDesc:
      "An internal staff management platform for a resort, built to streamline operations, handle bookings, and visualize key performance metrics for better decision-making.",
    tags: ["Reactjs", "Supabase", "Recharts"],
    code: "https://github.com/Devansh1741/the-wild-oasis",
    demo: "https://thewildoasis-devansh.netlify.app",
    image: three,
  },
  {
    id: 4,
    projectName: "URL shortener",
    projectDesc:
      "This project involves the development of an URL shortener using a base64 encoding.",
    tags: ["Express", "redis", "Tailwind"],
    code: "https://github.com/Devansh1741/URL_Shortener_Microservice",
    demo: "https://github.com/Devansh1741/URL_Shortener_Microservice",
    image: four,
  },
  {
    id: 5,
    projectName: "Pokedex",
    projectDesc:
      "A sleek Pokédex app that lets true Pokémon masters search, compare stats, and favorite their top picks for battle-ready decisions.",
    tags: ["React", "Redux", "Firebase"],
    code: "https://github.com/Devansh1741/Pokedex",
    demo: "https://devansh-pokedex.netlify.app/",
    image: five,
  },
  {
    id: 6,
    projectName: "Wordle",
    projectDesc: "Worlde clone",
    tags: ["React", "Firebase"],
    code: "https://github.com/Devansh1741/Wordle",
    demo: "https://github.com/Devansh1741/Wordle",
    image: six,
  },
  {
    id: 7,
    projectName: "Algorithm Visualizer",
    projectDesc:
      "An application to visualize time complexity of different searching and sorting algorithms",
    tags: ["React", "Tailwind"],
    code: "https://github.com/Devansh1741/algorithm_visualizer",
    demo: "https://github.com/Devansh1741/algorithm_visualizer",
    image: seven,
  },
  //   {
  //     id: 8,
  //     projectName: "",
  //     projectDesc: "",
  //     tags: ["Flutter", "React"],
  //     code: "",
  //     demo: "",
  //     image: eight,
  //   },
];

// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/
