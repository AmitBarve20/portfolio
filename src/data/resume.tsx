import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Amit Barve",
  initials: "AB",
  url: "https://amitbarve.vercel.app/",
  location: "Chhatrapati Sambhajinagar",
  description:
    "I turn caffeine into creativity, because who needs sleep when you can design something awesome instead?",
  summary:
    "I am a versatile UI/UX designer, web developer, and graphic designer dedicated to creating seamless digital experiences. With over a year of experience in Figma, UI/UX design, and web development, I specialize in crafting user-friendly interfaces and dynamic websites that balance aesthetics and functionality.",
  avatarUrl: "/profile.jpg",
  skills: [
    "Figma",
    "Sketch",
    "Wireframing",
    "Adobe tools",
    "Prototyping",
    "canva",
    "Node",
    "User research",
    "User interface",
    "ReactJS",
    "Nodejs",
    "JavaScript",
    "Java",
    "C language",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    
  ],
  contact: {
    email: "amitbarve2003@gmail.com",
    tel: "+91 8275404175",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/AmitBarve20",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/amit-barve-582365261/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/amitbarve93",
        icon: Icons.x,

        navbar: true,
      },
      Behance: {
        name: "Behance",
        url: "https://www.behance.net/amitbarve",
        icon: Icons.Behance,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:amitbarve2003@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Tech Mahindra",
      href: ".",
      badges: [],
      location: "In Office",
      title: "UI/Ux designer - Intern",
      logoUrl: "/techM.webp",
      start: "January 2025",
      end: "Present",
      description:
        "Designing intuitive UI for various Tech Mahindra products,ensuring a seamless user experience.Leading the concept design for an upcoming game, focusing onuser engagement and interaction.",
    },
    {
      company: "WORO Media",
      badges: [],
      href: ".",
      location: "Remote",
      title: "UI/Ux designer - Intern",
      logoUrl: "/woro.png",
      start: "November 2024",
      end: "January 2025",
      description:
        `Designed multiple websites and developed an interactive dashboard prototype for lead management using Figma, Framer,and Illustrator.Created engaging logo animations for various brands using After Effects, enhancing their visual identity.`,
    },
    {
      company: "Webbeyo Softwares",
      href: ".",
      badges: [],
      location: "Remote",
      title: "UI/Ux designer - Intern",
      logoUrl: "webeeyo.jpg",
      start: "July 2024",
      end: "September 2024",
      description:
        `Assisted in the design and development of user-centric digital experiences. Created wireframes, prototypes, and high-fidelity mockups for various digital products. Coordinated with the development team to ensure seamless design-to-development handoff`,
    },
    {
      company: "NEWZERA",
      href: ".",
      badges: [],
      location: "Remote",
      title: "CONTENT CREATOR",
      logoUrl: "/newzera.jpg",
      start: "March 2023",
      end: "May 2023",
      description:
       `Selected as a content creator with a primary focus on designing eye-catching thumbnails that
significantly increased viewer engagement and click-through rates.Utilized design tools such as Adobe Photoshop and Canva to create attractive designs within
project deadlines`,
    },
  ],
  // education: [
  //   {
  //     school: "Buildspace",
  //     href: "https://buildspace.so",
  //     degree: "s3, s4, sf1, s5",
  //     logoUrl: "/buildspace.jpg",
  //     start: "2023",
  //     end: "2024",
  //   },
  //   {
  //     school: "University of Waterloo",
  //     href: "https://uwaterloo.ca",
  //     degree: "Bachelor's Degree of Computer Science (BCS)",
  //     logoUrl: "/waterloo.png",
  //     start: "2016",
  //     end: "2021",
  //   },
  //   {
  //     school: "Wilfrid Laurier University",
  //     href: "https://wlu.ca",
  //     degree: "Bachelor's Degree of Business Administration (BBA)",
  //     logoUrl: "/laurier.png",
  //     start: "2016",
  //     end: "2021",
  //   },
  //   {
  //     school: "International Baccalaureate",
  //     href: "https://ibo.org",
  //     degree: "IB Diploma",
  //     logoUrl: "/ib.png",
  //     start: "2012",
  //     end: "2016",
  //   },
  // ],
  projects: [
    {
      title: "Cash flow Application",
      href: "https://www.behance.net/gallery/211971595/IOS-Banking-Application-UI-design",
      active: true,
      target: "_blank",
      dates: "April 2023 - September 2023",
      description:
     " This is a modern, secure banking app designed to simplify financial transactions. With BankConnect, you can easily send money to friends, family, or businesses with just a few taps",
      technologies: [
        "Figma",
        "Wireframing",
        "Adobe tools",
        "Prototyping",
        "canva",
        "Node",
        "User research",
        "User interface",
      ],
      links: [
        {
          type: "Behance",
          href: "https://www.behance.net/gallery/211971595/IOS-Banking-Application-UI-design",
          target: "_blank",
          icon: <Icons.Behance className="size-1" />,
        },
      ],
      image: "/CashFlow.png",
      video : "",
    },
    {
      title: "Website Redesign",
      href: "https://www.behance.net/gallery/216919847/Website-Redesign",
      dates: "April 2023 - September 2023",
      target: "_blank",
      active: true,
      description:
        "The website redesign project aimed to enhance the visual appeal, usability, and overall user experience of the existing platform.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Behance",
          href: "https://www.behance.net/gallery/216919847/Website-Redesign",
          icon: <Icons.Behance className="size-1" />,
        },
        {
          type: "Webiste",
          href: "https://www.webeeyo.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/webeeyo.jpg",
      video: "",
    },
    // {
    //   title: "llm.report",
    //   href: "https://llm.report",
    //   dates: "April 2023 - September 2023",
    //   active: false,
    //   description:
    //     "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Shadcn UI",
    //     "Magic UI",
    //     "Stripe",
    //     "Cloudflare Workers",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://llm.report",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/dillionverma/llm.report",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video: "https://cdn.llm.report/openai-demo.mp4",
    // },
    // {
    //   title: "Automatic Chat",
    //   href: "https://automatic.chat",
    //   dates: "April 2023 - March 2024",
    //   active: false,
    //   description:
    //     "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Shadcn UI",
    //     "Magic UI",
    //     "Stripe",
    //     "Cloudflare Workers",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://automatic.chat",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    // },
  ],
  
} as const;
