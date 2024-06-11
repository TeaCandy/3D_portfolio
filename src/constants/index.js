import { tea, saotg, museum, eurofins } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    docker,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript, 
    unity,
    aseprite,
    graphql,
    vegaspro
} from "../assets/icons";

export const skills = [
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: unity,
        name: "Unity2D",
        type: "Gamedev",
    },
    {
        imageUrl: docker,
        name: "Docker",
        type: "Database",
    },
    {
        imageUrl: aseprite,
        name: "Aseprite",
        type: "Gamedev",
    },
    {
        imageUrl: graphql,
        name: "GraphQL",
        type: "Database",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: vegaspro,
        name: "Sony Vegas Pro 14",
        type: "Video Editing",
    },
];

export const experiences = [
    {
        title: "Academic Coach",
        company_name: "Staying Ahead of the Game, LLC",
        icon: saotg,
        iconBg: "#f79c5b",
        date: "August 2023 - Present",
        points: [
            "Virtual and in-person academic coach and tutor for students in grades K-12th grade.",
            "Built strong rapport with students and their families by understanding their individual needs and goals.",
            "Specialized in helping students with their executive functioning (impression management, time management, organization, and study skills)",
        ],
    },
    {
        title: "Laboratory Analyst",
        company_name: "Eurofins Built Environment Testing",
        icon: eurofins,
        iconBg: "#a1b7c9",
        date: "Jan 2023 - August 2023",
        points: [
            "Responsible for routine analysis of samples by analytical methods strictly following all company SOPs.",
            "Prepared and analyzed samples by performing QA/QC analyses including re-preps, re-counts, and blanks.",
            "Acquired detailed knowledge and professional handling of analytical instrumentation within specified parameters.",
            "Proficient in laboratory practices and procedures.",
        ],
    },
    {
        title: "Gallery Educator",
        company_name: "Children's Museum of Houston",
        icon: museum,
        iconBg: "#0D70B7",
        date: "Nov 2022 - Feb 2023",
        points: [
            "Lead and facilitated programming and demonstrations.",
            "Enhanced visitors learning by describing, modeling, and promoting engagement with exhibits.",
            "Effectively interacted with children, adults, and host organization staff.",
            "Creatively operated outside the box to teach topics to a variety of audiences.",
        ],
    },
    {
        title: "Tea Sales Associate & Barista",
        company_name: "DavidsTea",
        icon: tea,
        iconBg: "#00ada9",
        date: "Nov 2018 - March 2020",
        points: [
            "Provided expertise and guidance on over 100 different teas to ensure a positive customer sales and drink crafting experience.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: tea,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];