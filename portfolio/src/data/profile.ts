import type { Profile, StoryParagraph } from "./types";

/**
 * ─────────────────────────────────────────────────────────────
 * EDIT ME: This is the main place to update your personal info.
 * ─────────────────────────────────────────────────────────────
 */
export const profile: Profile = {
  name: "Nwabuisi Ikechukwu Emmanuel",
  nickname: "Ikebobo",
  title: "Front-End Developer",
  // Short list of core skill areas shown under the title in the hero.
  taglineSkills: [
    "HTML & CSS",
    "Front-End Development",
    "Responsive Web Design",
    "Problem Solving",
  ],
  shortBio:
    "I'm a software developer building a web development and conversion agency. I create high-converting websites and digital systems that help service businesses generate more qualified leads and customers. I'm focused on web development, UI/UX, AI and automation, sales, marketing, client acquisition, and scaling my business internationally.",
  location: "Enugu, Nigeria",
  email: "nwabuisiikechukwu66@gmail.com",
  phone: "08109619626",
  // Replace with an imported image, e.g. import avatar from "../assets/avatar.jpg"
  profileImage: null,
  // Add your CV/resume link (Google Drive, PDF host, etc.) when ready.
  cvUrl: null,
  availability: "Available for freelance / open to work",
  isAvailable: true,
};

/**
 * Personal story shown in the About section.
 * Edit each paragraph freely — order is preserved as written.
 */
export const storyParagraphs: StoryParagraph[] = [
  {
    heading: "Who I am",
    body: "I'm Nwabuisi Ikechukwu Emmanuel, also known as Ikebobo, a Computer Engineering student at Caritas University and an aspiring software developer. I'm passionate about technology, creativity, and using my skills to build things that are useful and meaningful.",
  },
  {
    heading: "How I got into technology",
    body: "My interest in technology grew from my curiosity about how websites, applications, and digital systems work. I started with HTML, CSS, and basic web design, and that curiosity has continued to push me toward programming and software development.",
  },
  {
    heading: "What I enjoy building",
    body: "I enjoy building modern websites, responsive user interfaces, digital experiences, and practical web projects. I especially enjoy taking an idea and turning it into something people can actually interact with and use.",
  },
  {
    heading: "What I specialize in",
    body: "My current strengths are HTML, CSS, basic web design, front-end development, problem solving, teamwork, and communication. I'm also developing my skills in JavaScript, React, Next.js, UI/UX, AI, automation, and web performance.",
  },
  {
    heading: "What motivates me",
    body: "I'm motivated by learning, growth, creativity, and the desire to build something bigger than myself. Seeing an idea become a working product motivates me to keep improving. I also want to use technology to create opportunities for myself and eventually help others.",
  },
  {
    heading: "Problems I like solving",
    body: "I enjoy solving problems where technology can make something simpler, faster, more accessible, or more effective. This includes improving websites, creating better user experiences, automating repetitive tasks, and developing digital solutions that can help businesses grow.",
  },
  {
    heading: "Where I'm heading",
    body: "My goal is to grow into a highly skilled software developer and technology entrepreneur. I'm working toward building a web development and conversion-focused digital agency that creates high-quality websites and digital systems for businesses. In the long term, I want to build scalable technology products, work with international clients, and create a successful technology company.",
  },
];

/**
 * Longer-form personal story, used as an optional pull-quote / intro
 * above the story paragraphs.
 */
export const storyIntro =
  "At 20, I'm a Computer Engineering student at Caritas University with a simple belief: technology can change the way people live and do business. My journey started with curiosity — learning HTML, CSS, web design, and programming. What began as learning how to create websites gradually became something bigger. I discovered that I didn't just want to write code; I wanted to build things that solve real problems. Today, I am developing skills as a software developer, exploring JavaScript, modern web technologies, AI, automation, and business, while working toward a bigger dream: building a web development and digital agency that helps businesses grow. I know I still have a lot to learn — but that's what makes the journey exciting. I am not at the destination yet. I'm building the way there. And this is only the beginning.";
