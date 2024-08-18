import sneakosimg from "../assets/projects/sneakosimg.jpg"
import portfolioimg from "../assets/projects/portfolioimg.jpg"
import img2048 from "../assets/projects/img2048.jpg" 
import MOVEIN from "../assets/projects/MOVEIN.jpg"

export const HERO_CONTENT = `I am a passionate web  developer with a knack for crafting robust and scalable web 
applications.  I have honed my skills in front-end technologies like ReactJS
a, as well as a fair knowledge in back-end technologies like  MySQL and PostgreSQL. My goal is to leverage my 
expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile web  developer with a passion for creating
 efficient and user-friendly web applications. 
  I have worked with a variety of technologies, including ReactJS, , MySQL, PostgreSQL.
   My journey in web development began with a deep curiosity for how things work, and it has evolved into a career 
   where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and 
   enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active,leetcoding and
   exploring new technologies.`;



export const PROJECTS = [
  {
    title: "Sneakers landing page",
    image: sneakosimg,
    description:
      "Created a landing page for a hypothetical company named sneakos, with sleek UI and animation",
    technologies: ["HTML", "CSS","JS", "ReactJS", "Tailwind CSS"],
    link: "https://sameer-s-patil18.github.io/sneakos/",
  },
  {
    title: "Portfolio website",
    image: portfolioimg,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information",
    technologies: ["HTML", "CSS", "JS", "ReactJS","Tailwind CSS","EmailJS","Framer Motion"],
    link:"#"
  },
  {
    title: "Transport co. landing page",
    image: MOVEIN,
    description:
      "Created a landing page for a hypothetical company MOVEIN with simple UI ",
    technologies: ["HTML", "CSS", "Bootstrap"],
    link:"https://sameer-s-patil18.github.io/MoveIn/",
  },
  {
    title: "Automate 2048",
    image: img2048,
    description:
      "Wrote a simple python script that automates the 2048 game using chrome Drivers",
    technologies: ["Python", "Jupyter Notebook"],
    link:"https://github.com/Sameer-s-patil18/Automate-2048-gameplay",
  },
  
];


